import { getSupabaseAdmin } from '@/app/lib/supabase'

function verifyAdmin(request: Request): boolean {
  const token = request.headers.get('x-admin-token')
  return token === process.env.ADMIN_PASSWORD
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyAdmin(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = getSupabaseAdmin()
  if (!admin) {
    return Response.json({ error: 'Supabase not configured' }, { status: 503 })
  }

  const { id } = await params
  const body = await request.json()

  // Only allow updating status and admin_comment
  const allowedFields: Record<string, unknown> = {}
  if ('status' in body) allowedFields.status = body.status
  if ('admin_comment' in body) allowedFields.admin_comment = body.admin_comment

  if (Object.keys(allowedFields).length === 0) {
    return Response.json({ error: 'No valid fields to update' }, { status: 400 })
  }

  const { data, error } = await admin
    .from('leads')
    .update(allowedFields)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Lead update error:', error)
    return Response.json({ error: 'Failed to update lead' }, { status: 500 })
  }

  return Response.json({ success: true, lead: data })
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyAdmin(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = getSupabaseAdmin()
  if (!admin) {
    return Response.json({ error: 'Supabase not configured' }, { status: 503 })
  }

  const { id } = await params

  const { error } = await admin.from('leads').delete().eq('id', id)

  if (error) {
    console.error('Lead delete error:', error)
    return Response.json({ error: 'Failed to delete lead' }, { status: 500 })
  }

  return Response.json({ success: true })
}
