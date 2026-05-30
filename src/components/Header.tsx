import React, { useState } from "react";
import { motion } from "motion/react";
import { Bell, Sparkles, Menu, X, CheckCircle2 } from "lucide-react";

interface HeaderProps {
  onCreatePRD: () => void;
  activeNavTab: string;
  setActiveNavTab: (tab: string) => void;
}

export default function Header({ onCreatePRD, activeNavTab, setActiveNavTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true);

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "templates", label: "Templates" },
    { id: "archives", label: "Archives" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Sisi Kiri: Logo Minimalis */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveNavTab("dashboard")}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-primary/80 to-[#10B981] p-[1.5px] flex items-center justify-center transition-all duration-300 group-hover:rotate-6">
              <div className="w-full h-full rounded-[10px] bg-brand-panel flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-brand-primary" />
              </div>
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight">
              PRD<span className="text-brand-primary">Genius</span>
            </span>
          </div>

          {/* Sisi Tengah: Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeNavTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNavTab(item.id)}
                  className="relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 outline-none cursor-pointer"
                  style={{ color: isActive ? "#FFFFFF" : "#9CA3AF" }}
                >
                  <span className="hover:text-white transition-colors duration-200">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Sisi Kanan: Lonceng Notifikasi & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setHasUnreadNotification(false)}
              className="relative p-2 rounded-lg text-brand-muted hover:text-white transition-colors cursor-pointer"
              aria-label="Notification Bell"
            >
              <Bell className="w-5 h-5" />
              {hasUnreadNotification && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-success ring-2 ring-brand-bg animate-pulse" />
              )}
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCreatePRD}
              className="px-4 py-2 bg-brand-primary text-brand-bg text-sm font-semibold rounded-lg shadow-sm hover:opacity-95 transition-all duration-200 cursor-pointer glow-btn"
            >
              Create PRD
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setHasUnreadNotification(false)}
              className="relative p-1.5 rounded-lg text-brand-muted hover:text-white"
            >
              <Bell className="w-5 h-5" />
              {hasUnreadNotification && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-success ring-1 ring-brand-bg animate-pulse" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-brand-muted hover:text-white focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-b border-brand-border bg-brand-panel/95 backdrop-blur-lg px-4 pt-2 pb-4 space-y-1"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveNavTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer ${
                activeNavTab === item.id 
                  ? "bg-brand-primary/10 text-brand-primary font-semibold" 
                  : "text-brand-muted hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onCreatePRD();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 bg-brand-primary text-brand-bg font-semibold rounded-lg"
            >
              Create PRD
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
