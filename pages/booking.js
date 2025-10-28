// pages/booking.js
import { useState } from 'react'
import axios from 'axios'

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: 'Full Breakthrough Reading',
    preferredDate: '',
    note: ''
  })
  const [status, setStatus] = useState({ loading: false, message: null, error: false })

  function update(field, value){
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus({ loading: true, message: null, error: false })
    try {
      const res = await axios.post('/api/booking', form)
      if (res?.data?.ok) {
        setStatus({ loading: false, message: 'Booking request received. We will contact you shortly.', error: false })
        setForm({ name:'', email:'', phone:'', sessionType:'Full Breakthrough Reading', preferredDate:'', note:'' })
      } else {
        setStatus({ loading: false, message: 'Unexpected response from server.', error: true })
      }
    } catch (err) {
      setStatus({ loading: false, message: err.response?.data?.message || err.message || 'Submission failed', error: true })
    }
  }

  return (
    <section className="py-16 max-w-3xl mx-auto px-6">
      <h1 className="text-2xl font-semibold mb-4">Request a Booking</h1>
      <p className="mb-6">Fill out the form and we will contact you to confirm the date/time.</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input value={form.name} onChange={e=>update('name', e.target.value)} placeholder="Full name" required className="p-3 border rounded" />
        <input value={form.email} onChange={e=>update('email', e.target.value)} type="email" placeholder="Email address" required className="p-3 border rounded" />
        <input value={form.phone} onChange={e=>update('phone', e.target.value)} placeholder="Phone (optional)" className="p-3 border rounded" />
        <select value={form.sessionType} onChange={e=>update('sessionType', e.target.value)} className="p-3 border rounded">
          <option>Mini Insight Session</option>
          <option>Full Breakthrough Reading</option>
          <option>Transformation Program</option>
        </select>
        <input value={form.preferredDate} onChange={e=>update('preferredDate', e.target.value)} type="date" className="p-3 border rounded" />
        <textarea value={form.note} onChange={e=>update('note', e.target.value)} placeholder="Tell us what's most important to cover" rows={4} className="p-3 border rounded"></textarea>

        <div className="flex items-center gap-4">
          <button type="submit" disabled={status.loading} className="px-6 py-3 bg-accent text-cosmic rounded font-semibold">
            {status.loading ? 'Sending…' : 'Request Booking'}
          </button>
          <button type="button" onClick={()=>{ setForm({ name:'', email:'', phone:'', sessionType:'Full Breakthrough Reading', preferredDate:'', note:'' }); setStatus({loading:false, message:null, error:false}) }} className="px-4 py-2 border rounded">Reset</button>
        </div>

        {status.message && (
          <div className={`mt-4 p-3 rounded ${status.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {status.message}
          </div>
        )}
      </form>
    </section>
  )
}
