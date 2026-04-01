import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";

export const metadata = {
  title: "Managed Sales Process | Vegavruddhi",
  description: "Accelerate your market presence with Vegavruddhi’s end-to-end managed sales engine. We deploy trained field teams, set targets, and track every sale.",
};

export default function ManagedSalesProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Service Hero */}
      <section className="pt-48 pb-32 bg-[#004d2c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl space-y-10 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-black uppercase tracking-[0.4em] border border-white/20">
              Sales & Growth
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Managed <span className="text-white underline decoration-white/20 underline-offset-8 italic">Sales</span> <br /> Process
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed mx-auto font-normal italic">
              Accelerate your market presence with Vegavruddhi’s end-to-end managed sales engine. We deploy trained field teams, set targets, and track every sale — ensuring your brand grows consistently.
            </p>
            <div className="w-24 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] mx-auto" />
          </div>
          
          <div className="mt-20 relative w-full max-w-6xl aspect-[21/9] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
             <Image 
                src="/managed_sales_process.png" 
                alt="Managed Sales Process Hero Illustration" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1152px"
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#004d2c]/80 via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* Our Capabilities Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Growth Engine</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight uppercase tracking-tight">Our Capabilities</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
              <div className="pt-8">
                  <Link href="/#enquiry">
                      <button className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all border border-primary/20 flex items-center gap-2 mx-auto">
                          Select All for Enquiry
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                      </button>
                  </Link>
              </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
                {
                    title: "Field Sales & Merchant Acquisition",
                    desc: "End-to-end management of field sales operations including merchant onboarding and acquisition at scale.",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                    title: "Channel Partner Onboarding",
                    desc: "Onboarding and training channel partners to ensure consistent brand representation and service quality.",
                    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                },
                {
                    title: "Territory Planning",
                    desc: "Advanced territory planning and coverage mapping to maximize market reach and sales efficiency.",
                    icon: "M9 20l-5.447-2.724A2 2 0 013 15.487V6.513a2 2 0 011.553-1.943L9 2l5.447 2.724A2 2 0 0116 6.513v8.974a2 2 0 01-1.553 1.943L9 20z"
                },
                {
                    title: "Retail Audits & Merchandising",
                    desc: "Comprehensive retail audits, merchandising support, and visibility tracking at the point of sale.",
                    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                },
                {
                    title: "Performance Dashboards",
                    desc: "Detailed performance dashboards and MIS reports for real-time tracking of sales KPIs and field activities.",
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                }
            ].map((offering, i) => (
                <div key={i} className="group p-10 bg-gray-50 border border-gray-100 rounded-[2.5rem] hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-xl group-hover:bg-[#004d2c] group-hover:text-white transition-all duration-500 mb-8 border border-gray-50">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={offering.icon} /></svg>
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">{offering.title}</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">{offering.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#004d2c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <span className="text-white/60 font-bold tracking-widest text-sm uppercase italic">Advantage</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight">Benefits</h2>
                    </div>
                    <div className="space-y-8">
                        {[
                            { title: "Quick market penetration", desc: "Rapidly expand your footprint with our ready-to-deploy field force and infrastructure." },
                            { title: "Transparent tracking of sales KPIs", desc: "Complete visibility into every sale and activity through our advanced tracking systems." },
                            { title: "Scalable workforce models", desc: "Flexible staffing that grows with your business needs, reducing fixed overheads." },
                            { title: "Improved conversion ratios", desc: "Trained professionals focused on driving trials, demos, and closing sales effectively." }
                        ].map((benefit, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold uppercase tracking-tight">{benefit.title}</h4>
                                    <p className="text-gray-300 font-medium text-lg">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl space-y-8">
                        <div className="text-center space-y-2">
                            <h3 className="text-4xl font-black uppercase text-white">Drive Performance</h3>
                            <p className="text-gray-400 font-medium uppercase tracking-widest">Scalable Workforce</p>
                        </div>
                        <div className="space-y-4">
                            <Link href="/#enquiry">
                                <button className="w-full bg-white text-[#004d2c] hover:bg-black hover:text-white py-6 rounded-2xl font-black text-xl transition-all uppercase tracking-widest shadow-2xl group flex items-center justify-center gap-2">
                                    Enquire for All Services
                                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7" /></svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">Sector Experience</span>
                <h2 className="text-4xl font-black text-[#004d2c] uppercase tracking-tight">Industries Served</h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {["Fintech", "Retail", "Telecom", "FMCG"].map((industry, i) => (
                    <div key={i} className="px-12 py-6 bg-gray-50 border border-gray-100 rounded-2xl font-black text-gray-900 uppercase tracking-widest hover:bg-[#004d2c] hover:text-white transition-all duration-300 cursor-default">
                        {industry}
                    </div>
                ))}
            </div>
        </div>
      </section>

      <StickyActions />
      <Footer />
    </div>
  );
}
