import { PRDSection, AISuggestion } from "./types";

export const INITIAL_SECTIONS: PRDSection[] = [
  {
    id: "background",
    title: "Background & Objectives",
    emoji: "🎯",
    placeholder: "Tuliskan latar belakang produk di sini...",
    content: "Aplikasi mobile banking PRDGenius v2.0 memiliki penurunan retensi sebesar 12% dalam dua kuartal terakhir. Berdasarkan umpan balik riset pengguna, alur navigasi onboarding terlalu panjang dan membuat pengguna baru bingung.",
  },
  {
    id: "user-persona",
    title: "User Persona",
    emoji: "👥",
    placeholder: "Deskripsikan persona pengguna utama...",
    content: "Andi, 23, Mahasiswa Aktif. Menggunakan aplikasi dompet digital hampir setiap hari. Sensitif terhadap biaya admin gratis, peduli dengan interface cepat (kurang dari 3 detik) untuk memindahkan dana.",
  },
  {
    id: "scope",
    title: "Goals & Scope",
    emoji: "📊",
    placeholder: "Jabarkan tujuan utama rilis fitur...",
    content: "Tujuan: Menyederhanakan pengiriman dana Peer-to-Peer dari 5 langkah menjadi 2 klik saja. Mengurangi screen bounce rate pada halaman transfer hingga 35%. Rilis ini difokuskan hanya untuk perangkat Android dan iOS modern.",
  },
  {
    id: "acceptance-criteria",
    title: "Acceptance Criteria",
    emoji: "✅",
    placeholder: "Tuliskan kriteria penerimaan fungsional...",
    content: "1. Pengguna dapat memilih kontak favorit langsung dari layar beranda.\n2. Validasi nominal transfer harus real-time sebelum tombol kirim aktif.\n3. Kegagalan transfer akibat server error wajib memunculkan status penolakan yang ramah.",
  }
];

export const SUGGESTIONS: Record<string, AISuggestion[]> = {
  background: [
    {
      id: "bg-sug-1",
      title: "Tambahkan metrik kegagalan utama",
      description: "Sebutkan angka bounce rate pendaftaran awal saat ini (misal: 45%).",
      actionText: "Sisipkan Metrik",
      replacementText: "Aplikasi mobile banking PRDGenius v2.0 memiliki penurunan retensi sebesar 12% dalam dua kuartal terakhir dengan bounce rate pendaftaran mencapai 45%. Ini disebabkan alur navigasi terlalu panjang dan rumit."
    },
    {
      id: "bg-sug-2",
      title: "Asosiasi dengan kompetitor sasar",
      description: "Tambahkan benchmark singkat terhadap alur pendaftaran Neobank.",
      actionText: "Sisipkan Benchmark",
      replacementText: "Menyusul rilis cepat kompetitor Neobank yang menerapkan registrasi 1-layar, aplikasi mobile banking kita mengalami penurunan retensi sebesar 12%. Alur navigasi onboarding kita terlalu panjang."
    }
  ],
  "user-persona": [
    {
      id: "per-sug-1",
      title: "Tambahkan kriteria Pain Points",
      description: "Fokus pada kendala koneksi seluler lambat.",
      actionText: "Tambah Pain Points",
      replacementText: "Andi, 23, Mahasiswa Aktif. Pain Point: Mengalami kegagalan koneksi di kartu seluler prabayar standar saat mengirim dana lewat area kampus yang padat. Menyukai antarmuka super-hemat kuota."
    }
  ],
  scope: [
    {
      id: "scope-sug-1",
      title: "Definisikan Non-goals rilis",
      description: "Batasi cakupan pembayaran tagihan luar negeri.",
      actionText: "Batasi Cakupan",
      replacementText: "Tujuan: Menyederhanakan pengiriman dana P2P menjadi 2 klik. Non-goals: Rilis v2.0 tidak mencakup transfer internasional maupun konversi valuta asing global."
    }
  ],
  "acceptance-criteria": [
    {
      id: "ac-sug-1",
      title: "Kriteria Keamanan (Edge-case Login)",
      description: "Masukkan validasi biometrik sesudah nominal di atas 5 juta rupiah.",
      actionText: "Tambah Kriteria Keamanan",
      replacementText: "1. Kontrol kontak favorit dari layar beranda.\n2. Verifikasi nominal transfer real-time.\n3. Transaksi nominal di atas Rp5.000.000 wajib divalidasi sidik jari/Face-ID."
    }
  ]
};
