export default function Footer() {
  return (
    <footer className="bg-slate-200border-t border-slate-200 py-8 mt-auto w-full text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <p className="text-slate-600">
          &copy; {new Date().getFullYear()} Huntington Gene Checker. All rights
          reserved.
        </p>
        <p className="text-slate-600">
          This tool is for educational purposes only and should not be used for
          clinical diagnosis.
        </p>
      </div>
    </footer>
  )
}
