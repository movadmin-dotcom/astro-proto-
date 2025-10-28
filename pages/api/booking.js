// pages/api/booking.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  try {
    const booking = req.body

    // Basic server-side validation (expand as needed)
    if (!booking?.name || !booking?.email) {
      return res.status(400).json({ ok: false, message: 'Name and email are required' })
    }

    // TODO: Replace this block with real persistence:
    // - Save to DynamoDB (recommended for production)
    // - Or send an email (SES) / write to Google Sheet / push to CRM
    // For now we log to CloudWatch (Amplify / Next SSR Lambdas will send this to CloudWatch)
    console.log('New booking request:', JSON.stringify(booking))

    // respond success
    return res.status(200).json({ ok: true, message: 'Booking received' })
  } catch (err) {
    console.error('Booking API error:', err)
    return res.status(500).json({ ok: false, message: 'Server error' })
  }
}
