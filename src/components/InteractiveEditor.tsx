import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, Users, Eye, ListChecks, HelpCircle, 
  Sparkles, CheckCircle2, ChevronRight, Send, RefreshCw, 
  Bold, Italic, Link, Image, List, Trash2, CheckCircle
} from "lucide-react";
import { INITIAL_SECTIONS, SUGGESTIONS } from "../data";
import { PRDSection, AISuggestion } from "../types";

export default function InteractiveEditor() {
  const [sections, setSections] = useState<PRDSection[]>(INITIAL_SECTIONS);
  const [activeSectionId, setActiveSectionId] = useState<string>("background");
  const [prompt, setPrompt] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");

  const currentSection = sections.find(s => s.id === activeSectionId) || sections[0];
  const suggestions = SUGGESTIONS[activeSectionId] || [];

  // Handle suggestion application
  const applySuggestion = (suggestion: AISuggestion) => {
    setSections(prev => prev.map(sec => {
      if (sec.id === activeSectionId) {
        return { ...sec, content: suggestion.replacementText };
      }
      return sec;
    }));
  };

  // Simulate prompt-based AI generation with typing effect
  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    let originalText = currentSection.content;
    let appendedText = "";

    if (activeSectionId === "background") {
      appendedText = "\n\n[Saran AI]: Strategi perbaikan meliputi penambahan modul login satu ketuk (1-tap OTP) untuk meningkatkan kenyamanan pengguna di area koneksi terbatas.";
    } else if (activeSectionId === "user-persona") {
      appendedText = "\n\n[Saran AI]: Prioritas pengembangan aplikasi didefinisikan ulang untuk mengutamakan waktu respons instan (<2 detik) saat memuat QR Code pembayaran.";
    } else if (activeSectionId === "scope") {
      appendedText = "\n\n[Saran AI]: Ditargetkan selesai rilis dalam 3 sprint lincah (agile) dengan pelibatan penuh tim penjamin mutu (QA) di awal fase pengembangan.";
    } else {
      appendedText = "\n\n[Saran AI]: Kriteria Tambahan: Sistem harus mengamankan otentikasi token per transaksi dengan enkripsi AES-256 standard industri keuangan.";
    }

    let i = 0;
    const interval = setInterval(() => {
      setSections(prev => prev.map(sec => {
        if (sec.id === activeSectionId) {
          return { ...sec, content: originalText + appendedText.substring(0, i) };
        }
        return sec;
      }));
      i += 3;
      if (i > appendedText.length) {
        clearInterval(interval);
        setIsGenerating(false);
        setPrompt("");
      }
    }, 20);
  };

  // Count progress
  const completedSectionsCount = sections.filter(s => s.content.length > 50).length;
  const progressPercent = Math.round((completedSectionsCount / sections.length) * 100);

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Outer Monitor Frame Wrap */}
      <div className="relative w-full rounded-2xl border border-brand-border bg-[#07090F] p-3 md:p-4 shadow-2xl glow-effect transition-all duration-500">
        
        {/* Top glossy bezel decor */}
        <div className="flex items-center justify-between pb-3 px-2 border-b border-brand-border/40">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
          </div>
          <div className="text-xs text-brand-muted/80 font-mono bg-[#0D1220] px-4 py-1 rounded-full border border-brand-border/30">
            prdgenius.app/workspace/smart-banking-prd
          </div>
          <div className="w-12 h-2 bg-brand-border rounded-full" />
        </div>

        {/* Screen Area (Split Screen) */}
        <div className="bg-[#090D16] min-h-[520px] rounded-xl flex flex-col md:flex-row overflow-hidden relative font-sans">
          
          {/* KOLOM 1: NAVIGATION PANEL (LEFT) */}
          <aside className="w-full md:w-60 bg-[#0F1524]/90 border-r border-brand-border p-4 flex flex-col gap-5 shrink-0 justify-between">
            <div className="space-y-4">
              {/* Top Banner */}
              <div>
                <div className="flex items-center gap-1.5 text-brand-primary text-xs uppercase font-mono tracking-widest font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
                  </span>
                  Progress PRD
                </div>
                
                {/* Custom Progress slide bar */}
                <div className="mt-2 w-full bg-brand-border/40 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-success rounded-full" 
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-brand-muted mt-1 font-mono">
                  <span>{completedSectionsCount} of {sections.length} Bagian</span>
                  <span>{progressPercent}%</span>
                </div>
              </div>

              {/* Navigation Checklist Buttons */}
              <nav className="space-y-1">
                {sections.map((sec) => {
                  const isActive = sec.id === activeSectionId;
                  const isDone = sec.content.length > 50;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSectionId(sec.id)}
                      className={`w-full text-left flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                        isActive 
                          ? "bg-brand-primary/20 text-white border-l-4 border-brand-primary pl-2 shadow-inner" 
                          : "text-brand-muted hover:bg-white/5 hover:text-[#FFFFFF]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-sm">{sec.emoji}</span>
                        <span className="truncate">{sec.title}</span>
                      </span>
                      {isDone && <CheckCircle className="w-3.5 h-3.5 text-brand-success shrink-0" />}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Section static decorative option */}
            <div className="space-y-2 pt-4 border-t border-brand-border/40">
              <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-brand-primary/40 text-brand-primary bg-brand-primary/5 hover:bg-brand-primary/10 text-xs font-bold transition-all cursor-pointer">
                <Sparkles className="w-3.5 h-3.5" />
                AI Optimizer
              </button>
            </div>
          </aside>

          {/* KOLOM 2: APP EDITOR WORKSPACE (CENTER) */}
          <section className="flex-1 bg-[#0B0F19] p-4 md:p-6 flex flex-col justify-between border-r border-brand-border/80">
            {/* Outline Top Status details */}
            <div className="flex justify-between items-center pb-4 border-b border-brand-border/40 mb-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-brand-success rounded-full animate-pulse" />
                <span className="text-brand-success font-semibold">Tersimpan otomatis</span>
              </div>
              <span className="text-brand-muted">V0.4 Draf Stabil</span>
            </div>

            {/* Editing Section Area */}
            <div className="flex-1 flex flex-col min-h-64">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{currentSection.emoji}</span>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{currentSection.title}</h3>
                <HelpCircle className="w-4 h-4 text-brand-muted/60 hover:text-brand-primary cursor-help" />
              </div>

              {/* Main editable text area container */}
              <div className="bg-brand-panel/30 border border-brand-border/60 rounded-xl p-3 flex-1 flex flex-col">
                <textarea
                  className="w-full h-full flex-1 bg-transparent text-white text-xs leading-relaxed focus:outline-none resize-none placeholder-brand-muted/50 font-sans p-1 focus:ring-0 select-text"
                  placeholder={currentSection.placeholder}
                  value={currentSection.content}
                  onChange={(e) => {
                    const nextVal = e.target.value;
                    setSections(prev => prev.map(sec => {
                      if (sec.id === activeSectionId) {
                        return { ...sec, content: nextVal };
                      }
                      return sec;
                    }));
                  }}
                />

                {/* Floating toolbar helper buttons inside workspace */}
                <div className="flex items-center justify-between pt-2 border-t border-brand-border/30 mt-2 text-brand-muted">
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:text-white rounded hover:bg-white/5 cursor-pointer" title="Teled bold"><Bold className="w-3.5 h-3.5" /></button>
                    <button className="p-1 hover:text-white rounded hover:bg-white/5 cursor-pointer" title="Cetak miring"><Italic className="w-3.5 h-3.5" /></button>
                    <button className="p-1 hover:text-white rounded hover:bg-white/5 cursor-pointer" title="Daftar poin"><List className="w-3.5 h-3.5" /></button>
                    <button className="p-1 hover:text-white rounded hover:bg-white/5 cursor-pointer" title="Tautkan link"><Link className="w-3.5 h-3.5" /></button>
                    <button className="p-1 hover:text-white rounded hover:bg-white/5 cursor-pointer" title="Sisipkan gambar"><Image className="w-3.5 h-3.5" /></button>
                  </div>
                  <span className="text-[10px] font-mono opacity-80">{currentSection.content.length} karakter</span>
                </div>
              </div>
            </div>

            {/* AI Generator bottom box prompt bar */}
            <form onSubmit={handleGenerate} className="mt-4 flex items-center gap-2 p-1.5 bg-brand-panel rounded-lg border border-brand-border/80 relative shadow-md">
              <Sparkles className="w-4 h-4 text-brand-primary ml-2 shrink-0 animate-pulse" />
              <input
                type="text"
                className="bg-transparent text-white placeholder-brand-muted/70 text-xs w-full focus:outline-none focus:ring-0 select-text"
                placeholder="Perintahkan AI (cth: 'Tambahkan non-goals rilis')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={isGenerating}
              />
              <button
                type="submit"
                disabled={!prompt.trim() || isGenerating}
                className={`py-1.5 px-3 rounded-md text-xs font-semibold flex items-center gap-1 transition-all duration-200 cursor-pointer ${
                  prompt.trim() && !isGenerating 
                    ? "bg-brand-primary text-brand-bg hover:opacity-90" 
                    : "bg-brand-border/40 text-brand-muted cursor-not-allowed"
                }`}
              >
                {isGenerating ? (
                  <RefreshCw className="w-3 h-3 animate-spin" />
                ) : (
                  <>
                    <span>Kirim</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
          </section>

          {/* KOLOM 3: AI SUGGESTIONS SIDEBAR (RIGHT) */}
          <aside className="w-full md:w-72 bg-[#0C111F]/90 p-4 shrink-0 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-brand-border/50">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase">Pelatih Dokumen AI</h4>
                <span className="bg-brand-primary/10 text-brand-primary border border-brand-primary/30 text-[9px] px-1.5 py-0.5 rounded font-mono font-bold">SMART</span>
              </div>

              {/* Suggestions Cards loop */}
              <div className="space-y-3 max-h-76 md:max-h-none overflow-y-auto pr-1">
                {suggestions.map((sug) => (
                  <motion.div
                    key={sug.id}
                    layout
                    whileHover={{ scale: 1.02 }}
                    className="p-3 rounded-lg bg-brand-panel border border-brand-border/60 hover:border-brand-primary/50 transition-all duration-200"
                  >
                    <div className="flex gap-2 items-start">
                      <Sparkles className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                      <div>
                        <h5 className="text-xs font-bold text-white mb-1 leading-tight">{sug.title}</h5>
                        <p className="text-[11px] text-brand-muted leading-relaxed mb-3">{sug.description}</p>
                        <button
                          onClick={() => applySuggestion(sug)}
                          className="w-full text-center py-1.5 bg-brand-primary/10 hover:bg-brand-primary hover:text-brand-bg text-brand-primary text-[10px] font-bold rounded border border-brand-primary/30 transition-all duration-200 cursor-pointer"
                        >
                          {sug.actionText}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {suggestions.length === 0 && (
                  <p className="text-xs text-brand-muted/70 italic text-center py-8">Tidak ada saran tertunda untuk bagian ini.</p>
                )}
              </div>
            </div>

            {/* Small instructional note */}
            <div className="mt-4 pt-4 border-t border-brand-border/40 text-[10px] text-brand-muted/70 leading-relaxed font-mono">
              💡 <span className="font-bold text-brand-primary">Tips:</span> Klik tombol pelatih atau perintahkan AI di formulir kiri untuk menyempurnakan draf Anda secara instan.
            </div>
          </aside>

        </div>
      </div>

      {/* Cyberpunk Monitor Stand & Shadow effects */}
      <div className="w-full flex flex-col items-center select-none">
        {/* Trapezoid stand metal joint */}
        <div className="w-16 h-4 bg-[#141B2E] border-x border-[#1E293B] relative" />
        {/* Wide heavy flat stand footer */}
        <div className="w-40 h-2 bg-gradient-to-r from-[#171B26] via-[#1F293D] to-[#171B26] rounded-t-full shadow-lg border-t border-brand-primary/10" />
        
        {/* Soft neon blue underglow shadows */}
        <div className="w-64 h-3 bg-brand-primary/30 blur-md rounded-full mt-1.5 transition-all duration-300 opacity-60" />
      </div>
    </div>
  );
}
