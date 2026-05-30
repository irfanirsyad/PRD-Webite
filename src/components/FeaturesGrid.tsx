import React from "react";
import { motion } from "motion/react";
import { 
  GitFork, MessageSquare, Download, Users, FileDown, 
  Sparkles, CheckCircle2, Cpu, Globe, MessageSquareDiff
} from "lucide-react";

export default function FeaturesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-border/40 mt-8 scroll-mt-24">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold text-brand-primary tracking-widest uppercase bg-brand-primary/10 border border-brand-primary/30 px-3 py-1 rounded-full">
          FITUR SAAS PRESTISIUS
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-4">
          Fitur Utama untuk Efisiensi Anda
        </h2>
        <p className="text-brand-muted text-base md:text-lg mt-3">
          Didesain khusus untuk alur kerja Manajer Produk modern yang mengedepankan kecepatan dan kualitas.
        </p>
      </div>

      {/* Grid Layout (4 Bento Grid Cards) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        
        {/* Kartu 1: Struktur Standar */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: "rgba(56, 189, 248, 0.5)" }}
          className="bg-brand-panel border border-brand-border rounded-xl p-6 relative overflow-hidden transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
        >
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
              <GitFork className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Struktur Standar</h3>
              <p className="text-brand-muted text-sm mt-2 leading-relaxed">
                Struktur draf requirements Anda dengan template industri kelas dunia yang diakui secara global (User Stories, Acceptance Criteria, Goals) guna menjamin tidak ada detail teknis yang terlewatkan.
              </p>
            </div>
          </div>
          
          {/* Bottom tag capsule indicators */}
          <div className="flex gap-2.5 mt-6 pt-4 border-t border-brand-border/30">
            {["Agile", "Waterfall", "Lean"].map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium font-mono text-brand-muted bg-brand-bg/50 border border-brand-border/50 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Subtle background abstract graphic decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none group-hover:bg-brand-primary/10 transition-all" />
        </motion.div>

        {/* Kartu 2: Panduan Interaktif */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: "rgba(56, 189, 248, 0.5)" }}
          className="bg-brand-panel border border-brand-border rounded-xl p-6 relative overflow-hidden transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
        >
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Panduan Interaktif</h3>
              <p className="text-brand-muted text-sm mt-2 leading-relaxed">
                Bantuan asisten cerdas yang memberikan saran fungsional secara real-time pada setiap paragraf asesi untuk melengkapi skenario tepi dokumen (edge-case) Anda.
              </p>
            </div>
          </div>

          {/* Floating glassmorphism tooltip floating element on bottom right */}
          <div className="mt-8 self-end w-full max-w-xs relative z-10">
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="p-3 bg-white/5 border border-white/10 backdrop-blur-lg rounded-lg text-left shadow-lg"
            >
              <div className="flex items-center gap-1.5 text-brand-primary text-[10px] uppercase font-bold tracking-wider mb-1">
                <Sparkles className="w-3 h-3 animate-pulse" />
                PRDGenius Tip
              </div>
              <p className="text-[11px] text-[#FFFFFF]/90 leading-tight italic">
                💡 "Tuliskan Acceptance Criteria untuk edge-case login ketika token keamanan sesi kedaluwarsa secara tiba-tiba."
              </p>
            </motion.div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />
        </motion.div>

        {/* Kartu 3: Ekspor Profesional */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: "rgba(56, 189, 248, 0.5)" }}
          className="bg-brand-panel border border-brand-border rounded-xl p-6 relative overflow-hidden transition-all duration-300 group flex flex-col justify-between min-h-[300px]"
        >
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Ekspor Profesional</h3>
              <p className="text-brand-muted text-sm mt-2 leading-relaxed">
                Kirim dokumentasi PRD Anda secara instan ke tim engineering lain dalam format berkualitas standar tinggi yang terstruktur rapi tanpa penyesuaian manual.
              </p>
            </div>
          </div>

          {/* Group of 3 document format cards */}
          <div className="flex items-center gap-4 mt-8 pt-4 border-t border-brand-border/30">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-bg/60 border border-brand-border rounded-lg text-xs hover:text-brand-primary transition-colors cursor-pointer group/label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              <span className="font-semibold text-white font-mono">PDF</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-bg/60 border border-brand-border rounded-lg text-xs hover:text-brand-primary transition-colors cursor-pointer group/label">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span className="font-semibold text-white font-mono">Notion</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-bg/60 border border-brand-border rounded-lg text-xs hover:text-brand-primary transition-colors cursor-pointer group/label">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="font-semibold text-white font-mono">Markdown</span>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />
        </motion.div>

        {/* Kartu 4: Kolaborasi Tanpa Batas */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -6, borderColor: "rgba(56, 189, 248, 0.5)" }}
          className="bg-brand-panel border border-brand-border rounded-xl p-6 relative overflow-hidden transition-all duration-300 group flex flex-col justify-between min-h-[300px] md:col-span-1"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start justify-between h-full">
            <div className="space-y-4 flex-1">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors duration-300">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Kolaborasi Tanpa Batas</h3>
                <p className="text-brand-muted text-sm mt-2 leading-relaxed">
                  Undang tim engineering, desain, dan stakeholders eksekutif untuk berdiskusi, merevisi, dan memberikan persetujuan PRD terpusat pada satu layar kerja tunggal.
                </p>
              </div>

              {/* Avatar Stack of users on bottom left */}
              <div className="flex items-center -space-x-2.5 pt-4">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop" 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full border-2 border-brand-panel object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop" 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full border-2 border-brand-panel object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop" 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full border-2 border-brand-panel object-cover" 
                />
                <span className="w-8 h-8 rounded-full border-2 border-brand-panel bg-brand-primary text-brand-bg text-[10px] font-extrabold flex items-center justify-center font-mono">
                  +12
                </span>
              </div>
            </div>

            {/* Monochrome / dark siluet tim/orang illustration on the right side */}
            <div className="w-full sm:w-40 h-44 bg-[#090D16] border border-brand-border/60 rounded-lg p-2.5 flex flex-col justify-between shrink-0 hover:border-brand-primary/30 transition-all self-center overflow-hidden relative">
              <span className="text-[10px] text-brand-muted font-mono tracking-wider block border-b border-brand-border/40 pb-1.5 uppercase font-bold">TIM LIVE</span>
              
              {/* Stacked mock interaction messages */}
              <div className="space-y-2 mt-2 select-none overflow-hidden flex-1 flex flex-col justify-end">
                <div className="p-1 px-2.5 rounded bg-brand-primary/10 border border-brand-primary/20 text-[9px] text-[#FFFFFF] leading-tight flex flex-col gap-0.5">
                  <span className="font-extrabold text-[#7DD3FC]">Bayu (Tech Lead)</span>
                  <span>"Acceptance criteria sudah lengkap."</span>
                </div>
                <div className="p-1 px-2.5 rounded bg-brand-success/10 border border-brand-success/20 text-[9px] text-[#FFFFFF] leading-tight flex flex-col gap-0.5">
                  <span className="font-extrabold text-brand-success">Riana (Designer)</span>
                  <span>"Desain figma telah disisipkan."</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />
        </motion.div>

      </motion.div>
    </section>
  );
}
