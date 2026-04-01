import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white font-medium text-gray-700">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gray-50/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 text-center space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest mb-4">Careers at Vegavruddhi</div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight uppercase tracking-tight max-w-5xl mx-auto italic italic-reverse">
                Join the <span className="text-primary italic">Vegavruddhi</span> Growth Movement
            </h1>
            <p className="text-2xl text-gray-500 font-bold max-w-3xl mx-auto border-y border-gray-200 py-6 uppercase tracking-widest">
                If you believe execution is power, <span className="text-black">you belong here.</span>
            </p>
            <div className="pt-6">
                <a href="#openings" className="flex flex-col items-center gap-2 group">
                    <span className="text-sm font-black uppercase tracking-widest text-primary group-hover:scale-110 transition-transform">Explore Opportunities</span>
                    <svg className="w-6 h-6 text-primary animate-bounce mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7-7-7" /></svg>
                </a>
            </div>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium transition-all group">
                At Vegavruddhi, growth isn’t just for our clients — it’s for our people. We’re always on the lookout for passionate individuals who thrive on challenges, love the energy of sales, and find joy in creating measurable impact.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden" id="openings">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight text-center mb-16">Current Openings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                    { title: "Field Sales Executives", sub: "EDC & Fintech Onboarding", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                    { title: "Team Leaders", sub: "Field Sales Operations", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                    { title: "Tele-callers", sub: "Voice & Non-voice roles", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                    { title: "MIS Executives", sub: "Data & Area Coordinators", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                    { title: "HR & Training Managers", sub: "People & Process Development", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }
                ].map((job, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={job.icon} /></svg>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight">{job.title}</h4>
                            <p className="text-sm font-bold text-gray-400 group-hover:text-primary transition-colors leading-relaxed px-4">{job.sub}</p>
                        </div>
                        <button className="text-xs font-black uppercase tracking-widest text-[#004d2c] border-b-2 border-primary/20 hover:border-primary transition-all py-1">View Details</button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2 space-y-8 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-tight">Why<br /><span className="text-primary italic capitalize font-bold tracking-tighter">Work With Us?</span></h2>
                  <div className="grid grid-cols-1 gap-6">
                      {[
                        "Transparent pay + incentives",
                        "Structured career growth",
                        "Skill-development programs",
                        "Work with top fintech & retail brands",
                        "Inclusive, supportive culture"
                      ].map((perk, i) => (
                          <div key={i} className="flex items-center gap-6 group hover:translate-x-4 transition-all duration-500">
                              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                              </div>
                              <p className="text-xl text-gray-700 font-bold tracking-tight">{perk}</p>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="md:w-1/2 relative">
                  <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] opacity-60" />
                  <div className="rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
                      <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" width={800} height={600} alt="Team energy" className="w-full h-auto grayscale-50 grayscale hover:grayscale-0 transition-all duration-1000" />
                  </div>
              </div>
          </div>
      </section>

      {/* Employee Voices */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight text-center mb-16">Employee Voices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm relative group hover:shadow-2xl transition-all duration-500">
                    <div className="absolute -top-6 -left-6 text-primary opacity-20 group-hover:opacity-40 transition-opacity">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                    </div>
                    <p className="text-xl text-gray-600 font-bold italic leading-relaxed relative z-10">
                        "From trainee to team leader in a year — Vegavruddhi gave me real growth, not just promises."
                    </p>
                    <div className="pt-8 border-t border-gray-50 mt-8">
                        <h5 className="text-lg font-black text-gray-900">— Field Executive</h5>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Jaipur Branch</p>
                    </div>
                </div>
                <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm relative group hover:shadow-2xl transition-all duration-500">
                    <div className="absolute -top-6 -right-6 text-accent opacity-20 group-hover:opacity-40 transition-opacity">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                    </div>
                    <p className="text-xl text-gray-600 font-bold italic leading-relaxed relative z-10">
                    “Every day feels like I’m contributing to something bigger than my job.”
                    </p>
                    <div className="pt-8 border-t border-gray-50 mt-8">
                        <h5 className="text-lg font-black text-gray-900">— Operations Coordinator</h5>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Lucknow Branch</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-32 bg-white relative overflow-hidden" id="apply">
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 bg-[#0a2318] rounded-[4rem] overflow-hidden shadow-2xl">
                <div className="p-16 flex flex-col justify-center space-y-8 text-white relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                    <h2 className="text-5xl font-black uppercase tracking-tight leading-tight">Apply Now</h2>
                    <p className="text-xl text-gray-400 font-medium">Ready to start your journey? Fill out the details and our HR team will reach out to you.</p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-primary">
                            <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center font-black">1</div>
                            <span className="font-bold text-gray-200">Fill your profile</span>
                        </div>
                        <div className="flex items-center gap-4 text-primary">
                            <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center font-black">2</div>
                            <span className="font-bold text-gray-200">Upload your resume</span>
                        </div>
                        <div className="flex items-center gap-4 text-primary">
                            <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center font-black">3</div>
                            <span className="font-bold text-gray-200">Get interviewed</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-16">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                            <input type="text" placeholder="Enter your name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Email</label>
                                <input type="email" placeholder="Enter your email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                                <input type="text" placeholder="Enter your phone" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Current Location</label>
                            <input type="text" placeholder="City / State" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Applying For</label>
                            <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold appearance-none cursor-pointer">
                                <option>Select Role</option>
                                <option>Field Sales Executive</option>
                                <option>Team Leader</option>
                                <option>Tele-caller</option>
                                <option>MIS Executive / Coordinator</option>
                                <option>HR & Training Manager</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Upload Resume</label>
                            <div className="relative group">
                                <input type="file" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-primary outline-none transition-all font-bold file:hidden cursor-pointer" />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none text-gray-400 group-hover:text-primary transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-[#004d2c] hover:bg-black text-white py-5 rounded-2xl font-black text-xl shadow-xl transition-all uppercase tracking-widest mt-4">
                            Submit Application →
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>

      <StickyActions />
      <Footer />
    </div>
  );
}
