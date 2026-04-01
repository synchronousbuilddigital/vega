import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";

export const metadata = {
  title: "Digital Lead Fulfilment & Retail Audits | Vegavruddhi",
  description: "We bridge the digital-to-field gap. Our tech-enabled lead-management process ensures every online lead converts into a verified customer.",
};

export default function DigitalLeadFulfilmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Service Hero */}
      <section className="pt-48 pb-32 bg-[#004d2c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="max-w-4xl space-y-10 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-black uppercase tracking-[0.4em] border border-white/20">
              Operations & Audits
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Digital <span className="text-white underline decoration-white/20 underline-offset-8 italic">Lead</span> <br /> Fulfilment
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed mx-auto font-normal italic">
              We bridge the digital-to-field gap. Our tech-enabled lead-management process ensures every online lead converts into a verified customer.
            </p>
            <div className="w-24 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] mx-auto" />
          </div>
          
          <div className="mt-20 relative w-full max-w-6xl aspect-[21/9] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
             <Image 
                src="/digital_lead_fulfilment.png" 
                alt="Digital Lead Fulfilment Hero Illustration" 
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
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Operational Excellence</span>
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
                    title: "Digital Lead Allocation & Tracking",
                    desc: "Automated routing and real-time tracking of online leads to field agents to ensure immediate response.",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                    title: "Field Follow-up & Verification",
                    desc: "On-ground physical verification of leads to filter for high quality and genuine intent.",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                {
                    title: "Retail & Partner Audits",
                    desc: "Comprehensive audits of retail outlets and partnership networks for brand hygiene and compliance.",
                    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                },
                {
                    title: "Incentive Management",
                    desc: "Effective management and conversion reporting to drive field force motivation and productivity.",
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                    title: "Analytics-Driven Improvement",
                    desc: "Deep insights into lead leakage and conversion metrics using analytics-powered reporting.",
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                }
            ].map((cap, i) => (
                <div key={i} className="group p-10 bg-gray-50 border border-gray-100 rounded-[2.5rem] hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-xl group-hover:bg-[#004d2c] group-hover:text-white transition-all duration-500 mb-8 border border-gray-50">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cap.icon} /></svg>
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">{cap.title}</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">{cap.desc}</p>
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
                        <span className="text-white/60 font-bold tracking-widest text-sm uppercase italic">Impact</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight">Benefits</h2>
                    </div>
                    <div className="space-y-8">
                        {[
                            { title: "Improved Lead Conversion Rates", desc: "Decrease turnaround times and boost your conversion ratios with specialized field presence." },
                            { title: "Transparent Lead Journeys", desc: "Gain full visibility into every lead's progress from digital capture to final conversion." },
                            { title: "Measurable ROI on Marketing Spend", desc: "Track every marketing rupee spent vs true verified customer acquisitions." }
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
                            <h3 className="text-4xl font-black uppercase text-white">Optimise Funnel</h3>
                            <p className="text-gray-400 font-medium uppercase tracking-widest">Digital-to-Field Flow</p>
                        </div>
                        <div className="space-y-4 text-center">
                            <p className="text-white/60 italic mb-6">"Bridging the execution gap across EdTech, Fintech, FMCG & Retail sectors."</p>
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

      <StickyActions />
      <Footer />
    </div>
  );
}
