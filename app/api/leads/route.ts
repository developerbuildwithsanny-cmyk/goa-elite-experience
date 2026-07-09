import { getSupabaseAdmin } from '@/app/lib/supabase'

function verifyAdmin(request: Request): boolean {
  const token = request.headers.get('x-admin-token')
  return token === process.env.ADMIN_PASSWORD
}

export async function GET(request: Request) {
  if (!verifyAdmin(request)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = getSupabaseAdmin()
  if (!admin) {
    return Response.json({ error: 'Supabase not configured' }, { status: 503 })
  }

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const search = searchParams.get('search')

  let query = admin
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (status && status !== 'all') {
    query = query.eq('status', status)
  }

  if (search) {
    query = query.or(`name.ilike.%${search}%,phone.ilike.%${search}%`)
  }

  const { data, error } = await query

  if (error) {
    console.error('Leads fetch error:', error)
    return Response.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }

  return Response.json({ leads: data })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, alt_phone, service, message, source, travel_date, group_size } = body

    if (!name || !phone || !service) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const admin = getSupabaseAdmin()
    if (!admin) {
      // Supabase not configured — silently succeed (WhatsApp is the primary channel)
      return Response.json({ success: true, id: null, note: 'Supabase not configured' })
    }

    const { data, error } = await admin
      .from('leads')
      .insert([
        {
          name,
          phone,
          alt_phone: alt_phone || null,
          service,
          message: message || null,
          travel_date: travel_date || null,
          group_size: group_size || null,
          source: source || 'website_form',
          status: 'new',
        },
      ])
      .select('id')
      .single()

    if (error) throw error

    return Response.json({ success: true, id: data.id })
  } catch (error) {
    console.error('Lead insert error:', error)
    return Response.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}
