import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-40 pb-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Context Branding */}
          <div className="space-y-12 animate-fade-in-up">
            <div className="space-y-6">
              <div className="section-label">Member Access</div>
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.95] tracking-tighter">
                Welcome <br />
                <span className="text-primary italic">Back.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-md leading-relaxed font-medium">
                Access your dashboard to manage campaigns, tracking, and growth performance.
              </p>
            </div>

            {/* Premium Branding Stat */}
            <div className="glass-card p-8 rounded-3xl border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] max-w-sm">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <svg className="w-8 h-8 font-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Growth Intelligence</p>
                  <p className="text-2xl font-black text-gray-900">Secure Access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative group animate-fade-in-up delay-200">
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] opacity-50" />
            <div className="relative glass-card p-12 md:p-16 rounded-[3.5rem] border-2 border-gray-50 shadow-2xl">
              <div className="space-y-10">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Login</h2>
                  <p className="text-gray-400 font-medium tracking-tight">Enter your credentials to continue</p>
                </div>

                <form className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full px-8 py-5 rounded-2xl border border-gray-50 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                      <Link href="#" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Forgot?</Link>
                    </div>
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      className="w-full px-8 py-5 rounded-2xl border border-gray-50 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none transition-all font-bold placeholder:text-gray-300 shadow-sm"
                    />
                  </div>

                  <div className="space-y-6 pt-4">
                    <button className="w-full btn-primary !py-6 justify-center text-lg">
                      Sign In Now
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7" /></svg>
                    </button>
                    
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-400">
                        Don't have an account? <Link href="/partners" className="text-primary font-black hover:underline uppercase tracking-tight">Become a Partner</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
