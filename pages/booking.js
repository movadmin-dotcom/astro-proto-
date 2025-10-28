import { useState } from 'react'
import axios from 'axios'

export default function Booking(){
  const [loading, setLoading] = useState(false)

  async function handlePay(gateway='cashfree'){
    setLoading(true)
    try {
      const res = await axios.post(`/api/${gateway}/create-order`, {
        amount: 1999, // amount in paise if required by gateway
        currency: 'INR',
        product: 'Full Breakthrough Reading'
      })
      // Each gateway will return different fields (e.g., order id, redirect url)
      // For Cashfree: redirect user to payment link; for Razorpay: open checkout
      if (gateway === 'cashfree') {
        window.location.href = res.data.paymentLink // adjust to the API response
      } else if (gateway === 'razorpay') {
        const options = res.data // include key, order_id, amount
        const rzp = new window.Razorpay(options)
        rzp.open()
      }
    } catch (err) {
      alert('Payment error: ' + (err.response?.data?.message || err.message))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 max-w-3xl mx-auto px-6">
      <h1 className="text-2xl mb-4">Book a Session</h1>
      <p className="mb-6">Choose a payment method to proceed (test mode).</p>
      <div className="flex gap-4">
        <button onClick={() => handlePay('cashfree')} className="px-6 py-3 bg-indigo-600 text-white rounded">Pay with Cashfree</button>
        <button onClick={() => handlePay('razorpay')} className="px-6 py-3 bg-gray-800 text-white rounded">Pay with Razorpay</button>
      </div>
    </section>
  )
}

