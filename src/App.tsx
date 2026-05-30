import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, Sparkles, Check, CheckCircle, HelpCircle, 
  ChevronRight, Laptop, Play, Users, X, Send, Heart, Star
} from "lucide-react";
import Header from "./components/Header";
import InteractiveEditor from "./components/InteractiveEditor";
import FeaturesGrid from "./components/FeaturesGrid";

export default function App() {
  const [activeNavTab, setActiveNavTab] = useState<string>("dashboard");
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signupStep, setSignupStep] = useState<"form" | "loading" | "success">("form");
  const [demoStep, setDemoStep] = useState<"select" | "generating" | "complete">("select");
  const [selectedDemoTemplate, setSelectedDemoTemplate] = useState<string>("");

  const handleScrollToMonitor = () => {
    document.getElementById("interactive-editor-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signUpEmail.trim()) return;
    setSignupStep("loading");
    setTimeout(() => {
      setSignupStep("success");
    }, 1500);
  };

  const startDemoWizard = (templateName: string) => {
    setSelectedDemoTemplate(templateName);
    setDemoStep("generating");
    setTimeout(() => {
      setDemoStep("complete");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col font-sans transition-colors duration-300">
      
      {/* 2. KOMPONEN 1: NAVBAR / HEADER */}
      <Header 
        activeNavTab={activeNavTab} 
        setActiveNavTab={setActiveNavTab} 
        onCreatePRD={() => setIsSignupModalOpen(true)} 
      />

      <main className="flex-1">

        {/* 3. KOMPONEN 2: HERO SECTION */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 text-center overflow-hidden max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Subtle cosmic glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-12 left-12 w-72 h-72 bg-[#10B981]/5 rounded-full blur-[90px] pointer-events-none" />

          {/* Elemen Atas (Badge) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-panel/60 border border-brand-border rounded-full text-brand-primary text-xs tracking-wider uppercase font-semibold hover:border-brand-primary/40 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-primary" />
            <span>✨ Generative AI For PMs</span>
          </motion.div>

          {/* Judul Utama (Heading) */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-6 max-w-4xl leading-tight"
          >
            Sederhanakan Pembuatan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-[#0ea5e9] to-brand-success">
              PRD Profesional.
            </span>
          </motion.h1>

          {/* Sub-judul */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-brand-muted text-base md:text-lg max-w-2xl mt-4 leading-relaxed"
          >
            Fokus pada substansi produk, bukan format. Editor terpandu untuk PM yang ingin hasil berkualitas tinggi standar industri dalam hitungan menit.
          </motion.p>

          {/* Tombol Utama (CTA) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsSignupModalOpen(true)}
              className="px-6 py-3.5 bg-brand-primary text-brand-bg font-bold rounded-lg shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer glow-btn"
            >
              <span>Coba Gratis Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToMonitor}
              className="px-6 py-3.5 bg-transparent border border-brand-border text-white font-medium rounded-lg hover:border-brand-primary/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lihat Demo</span>
              <Play className="w-4 h-4 text-brand-primary" />
            </motion.button>
          </motion.div>

        </section>

        {/* SECTION DESKTOP MONITOR VISUALISASI */}
        <section 
          id="interactive-editor-section" 
          className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12 scroll-mt-20"
        >
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted block mb-1">
              DEMO WORKSPACE INTERAKTIF
            </span>
            <p className="text-xs text-brand-muted">
              Uji coba langsung editor AI kami dibawah ini dengan mengklik menu-menu draf atau merubah isinya.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            <InteractiveEditor />
          </motion.div>
        </section>

        {/* 4. KOMPONEN 3: SECTION FITUR UTAMA */}
        <FeaturesGrid />

        {/* 5. KOMPONEN 4: BOTTOM CTA & SPONSOR BAR */}
        <section className="py-24 border-t border-brand-border/40 bg-brand-panel/10 relative overflow-hidden select-none">
          {/* Subtle cosmic grid background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Siap Menulis PRD yang Lebih Baik?
            </h2>
            <p className="text-brand-muted text-base md:text-lg mt-3 max-w-xl leading-relaxed">
              Bergabunglah dengan ribuan Manajer Produk modern yang telah meninggalkan format manual yang membosankan dan beralih ke generasi otomatisasi cerdas PRDGenius.
            </p>

            {/* CTA Buttons bar */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <button
                onClick={() => setIsSignupModalOpen(true)}
                className="px-8 py-3.5 bg-brand-primary text-brand-bg font-bold rounded-lg shadow-lg hover:opacity-95 transition-all text-sm tracking-wide cursor-pointer glow-btn"
              >
                Daftar Gratis
              </button>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-3.5 bg-transparent border border-brand-border hover:border-white text-white font-semibold rounded-lg hover:bg-white/5 transition-all text-sm tracking-wide cursor-pointer"
              >
                Hubungi Tim Sales
              </button>
            </div>

            {/* Sponsor Logobar (Logoplace) */}
            <div className="mt-16 w-full">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted/40 block mb-6">
                DIPERCAYAI OLEH PROFESIONAL DI
              </span>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 text-sm font-extrabold text-[#3F4B66]/60 tracking-widest">
                <span className="hover:text-brand-primary transition-colors cursor-default">LOGOPLACE</span>
                <span className="hover:text-brand-primary transition-colors cursor-default">VENTUREHUB</span>
                <span className="hover:text-brand-primary transition-colors cursor-default">TECHFLOW</span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER AREA */}
      <footer className="bg-brand-bg border-t border-brand-border/40 py-8 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-brand-muted">
          
          {/* Left: Branding Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-brand-primary/20 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-brand-primary" />
            </div>
            <span>© 2026 PRDGenius. Built for Product Excellence. All rights reserved.</span>
          </div>

          {/* Right Links */}
          <div className="flex flex-wrap gap-6 text-brand-muted/80">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Contact Support</a>
          </div>

        </div>
      </footer>

      {/* SIGNUP POPUP MODAL (CTA Wizard Flow) */}
      <AnimatePresence>
        {isSignupModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsSignupModalOpen(false);
                setSignupStep("form");
                setSignUpEmail("");
              }}
              className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm" 
            />

            {/* Modal Body Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-brand-panel border border-brand-border rounded-xl p-6 w-full max-w-md relative z-10 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => {
                  setIsSignupModalOpen(false);
                  setSignupStep("form");
                  setSignUpEmail("");
                }}
                className="absolute top-4 right-4 p-1 text-brand-muted hover:text-white rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {signupStep === "form" && (
                  <motion.div 
                    key="signupForm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 pt-2"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-brand-primary/20 rounded-md text-brand-primary">
                        <Sparkles className="w-5 h-5 animate-pulse" />
                      </div>
                      <h3 className="text-xl font-extrabold text-white">Mulai PRD Cerdas</h3>
                    </div>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      Lupakan pusing merapikan pemformatan. Dapatkan akses instan gratis ke editor PRD asistif cerdas PRDGenius saat ini juga.
                    </p>

                    <form onSubmit={handleSignUpSubmit} className="space-y-3 pt-2">
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-brand-muted block mb-1">
                          Alamat Email Kerja
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-brand-bg border border-brand-border/80 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-primary select-text"
                          placeholder="pm@company.com"
                          value={signUpEmail}
                          onChange={(e) => setSignUpEmail(e.target.value)}
                        />
                      </div>
                      
                      {/* Premium pricing visual helper */}
                      <div className="bg-brand-bg/60 p-3 rounded-lg border border-brand-border text-[11px] text-brand-muted flex flex-col gap-1.5">
                        <div className="flex justify-between font-bold text-white">
                          <span>🎁 Paket Sandbox</span>
                          <span className="text-brand-success font-mono">IDR 0</span>
                        </div>
                        <span>Dapatkan 3 ekspor dokumen per bulan & akses penuh kolaborator tim. No credit card required.</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-brand-primary text-brand-bg font-bold rounded-lg text-xs hover:opacity-90 transition-all cursor-pointer shadow-md"
                      >
                        Daftar Sandbox Gratis
                      </button>
                    </form>
                  </motion.div>
                )}

                {signupStep === "loading" && (
                  <motion.div 
                    key="signupLoading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-64 flex flex-col items-center justify-center text-center gap-4 pt-4"
                  >
                    <div className="w-12 h-12 rounded-full border-4 border-brand-primary/20 border-t-brand-primary animate-spin" />
                    <div>
                      <h4 className="text-white font-bold">Mempersiapkan Workspace</h4>
                      <p className="text-xs text-brand-muted mt-1">Sistem sedang merakit database sandboxed Anda...</p>
                    </div>
                  </motion.div>
                )}

                {signupStep === "success" && (
                  <motion.div 
                    key="signupSuccess"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 pt-4 text-center flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-success/15 border border-brand-success/30 flex items-center justify-center text-brand-success mb-2">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Registrasi Berhasil!</h3>
                      <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                        Kami telah mengirimkan akses kredensial login sandbox langsung ke alamat email <strong className="text-white">{signUpEmail}</strong>. Selamat berkarya bersama tim!
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsSignupModalOpen(false);
                        setSignupStep("form");
                        setSignUpEmail("");
                      }}
                      className="mt-6 px-6 py-2 bg-brand-border/80 hover:bg-brand-border border border-brand-border text-white text-xs font-semibold rounded-lg transition-all"
                    >
                      Kembali Selesai
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SALES DEMO POPUP MODAL */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsDemoModalOpen(false);
                setDemoStep("select");
              }}
              className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm" 
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-brand-panel border border-brand-border rounded-xl p-6 w-full max-w-md relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => {
                  setIsDemoModalOpen(false);
                  setDemoStep("select");
                }}
                className="absolute top-4 right-4 p-1 text-brand-muted hover:text-white rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-brand-primary/20 rounded-md text-brand-primary">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Hubungi Tim Sales</h3>
                </div>
                
                {demoStep === "select" && (
                  <div className="space-y-3">
                    <p className="text-xs text-brand-muted leading-relaxed">
                      Pilih template industri yang paling mendekati model bisnis SaaS Anda untuk memulai presentasi demo interaktif secara privat.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {[
                        { name: "SaaS & Dashboard", count: "12 templates" },
                        { name: "Fintech & Banking", count: "8 templates" },
                        { name: "eCommerce Payment", count: "15 templates" },
                        { name: "Internal API Specs", count: "6 templates" }
                      ].map((tpl) => (
                        <button
                          key={tpl.name}
                          onClick={() => startDemoWizard(tpl.name)}
                          className="p-3 text-left bg-brand-bg border border-brand-border/80 hover:border-brand-primary/50 rounded-lg text-xs hover:bg-brand-panel/40 transition-all cursor-pointer"
                        >
                          <span className="font-bold text-white block truncate">{tpl.name}</span>
                          <span className="text-[10px] text-brand-muted block mt-1">{tpl.count}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {demoStep === "generating" && (
                  <div className="h-44 flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-10 h-10 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
                    <div>
                      <h4 className="text-white text-sm font-bold">Menyiapkan Visualisasi {selectedDemoTemplate}</h4>
                      <p className="text-[11px] text-brand-muted mt-1">Sistem sedang memuat skenario asesi demo...</p>
                    </div>
                  </div>
                )}

                {demoStep === "complete" && (
                  <div className="text-center space-y-4 py-4 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-brand-success/15 border border-brand-success/30 flex items-center justify-center text-brand-success">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{selectedDemoTemplate} Demo Ready!</h4>
                      <p className="text-xs text-brand-muted mt-2">
                        Demo workspace interaktif untuk simulasi <strong className="text-brand-primary">{selectedDemoTemplate}</strong> telah berhasil kami siapkan. Tim sales kami akan menghubungi Anda kembali untuk menyajikan visualisasi secara langsung. Terima kasih!
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsDemoModalOpen(false);
                        setDemoStep("select");
                      }}
                      className="px-6 py-2.5 bg-brand-primary text-brand-bg font-bold rounded-lg text-xs hover:opacity-90 transition-all"
                    >
                      Buka Demo
                    </button>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
