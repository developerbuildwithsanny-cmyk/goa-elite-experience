import { getSupabaseAdmin } from '@/app/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, alt_phone, service, message, source } = body

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
