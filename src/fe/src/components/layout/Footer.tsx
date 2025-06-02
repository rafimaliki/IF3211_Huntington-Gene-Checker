export default function Footer() {
  return (
    <footer className="bg-slate-200 border-t border-slate-200 py-8 mt-auto w-full text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <p className="text-slate-600">
          &copy; {new Date().getFullYear()} Huntington Gene Checker. Semua hak
          dilindungi.
        </p>
        <p className="text-slate-600">
          Alat ini hanya untuk tujuan edukasi dan tidak boleh digunakan untuk
          diagnosis klinis.
        </p>
      </div>
    </footer>
  )
}
