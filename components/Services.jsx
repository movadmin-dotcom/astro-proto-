
export default function Services(){
  const plans = [
    {title:'Mini Insight Session', dur:'30 min', desc:'Identify 1–2 key life blocks.'},
    {title:'Full Breakthrough Reading', dur:'90 min', desc:'Full natal + transits + 3–6 month roadmap.'},
    {title:'Transformation Program', dur:'3 months', desc:'Monthly coaching + chart tracking.'}
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-serif mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.title} className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 my-2">{p.dur}</p>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
