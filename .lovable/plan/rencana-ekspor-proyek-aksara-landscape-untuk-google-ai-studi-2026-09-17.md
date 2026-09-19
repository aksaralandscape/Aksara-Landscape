# Rencana: Ekspor Proyek Aksara Landscape untuk Google AI Studio

## Tujuan

Menyiapkan paket lengkap berisi kode, gambar, dan instruksi agar website Aksara Landscape dapat dibuka/dipahami di Google AI Studio. Hasil akhir adalah folder/ZIP yang berisi semua sumber daya proyek.

## Batasan yang perlu dipahami

Google AI Studio adalah platform eksperimen AI (Gemini), bukan hosting website atau IDE React. AI Studio tidak bisa menjalankan website TanStack Start / React / Vite secara langsung dan tidak bisa menampilkan preview website yang sama persis dengan Lovable.

Yang bisa dilakukan di AI Studio:

- Mengunggah seluruh source code agar AI bisa membaca, menganalisis, atau mengusulkan perubahan.
- Mengunggah gambar-gambar aset agar AI melihat visual yang dipakai.
- Meminta AI Studio menjelaskan struktur kode atau membuatkan kode baru berdasarkan proyek ini.

Yang tidak bisa dilakukan:

- Menjalankan website secara live/preview di AI Studio.
- Menghasilkan URL publish otomatis dari AI Studio.

## Langkah kerja

1. **Siapkan paket source code**
   - Buat salinan bersih dari proyek (src/, public/, package.json, vite.config.ts, tsconfig.json, components.json, README.md, .prettierrc, eslint.config.js, bunfig.toml).
   - Hapus node_modules, .git, .lovable/, dan file build agar ukuran ringan.

2. **Sertakan semua aset gambar**
   - Pastikan foto di src/assets/ (aksara-hero.jpg, aksara-about.jpg, project-*.jpg) dan favicon.ico ikut dalam paket.

3. **Buat file panduan khusus AI Studio**
   - Tulis `AI_STUDIO_GUIDE.md` yang menjelaskan:
     - Teknologi yang dipakai (TanStack Start, React 19, Tailwind v4, Vite).
     - Daftar file penting dan fungsinya.
     - Cara membaca kode agar AI Studio memahami konteks.
     - Catatan bahwa gambar-gambar ada di `src/assets/`.

4. **Buat ringkasan visual (opsional tapi disarankan)**
   - Sertakan screenshot halaman utama dari preview Lovable agar AI Studio memiliki referensi tampilan akhir.

5. **Kemas menjadi ZIP**
   - Hasil akhir: satu file ZIP yang siap diunduh dan diunggah ke Google AI Studio.

## Deliverable

- File `Aksara-Landscape-Export.zip` yang tersedia di Files (lokasi `/mnt/documents/`).
- File `AI_STUDIO_GUIDE.md` di dalam ZIP.

## Catatan penting untuk pengguna

Setelah paket diunggah ke Google AI Studio, Anda bisa bertanya ke Gemini seperti:

- "Jelaskan struktur website ini."
- "Tunjukkan bagian kode untuk section hero."
- "Bagaimana cara mengubah warna tema?"
- "Buatkan versi kode HTML/CSS sederhana dari halaman ini."

Namun, untuk melihat website berjalan persis seperti di Lovable, Anda tetap perlu menjalankannya di Lovable atau lingkungan lokal dengan Node.js + Vite.
