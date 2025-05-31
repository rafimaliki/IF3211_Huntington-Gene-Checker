import type React from 'react'

import { useState } from 'react'
import { Upload, FileText } from 'lucide-react'

interface FileUploaderProps {
  onFileRead: (content: string) => void
  onError: (message: string) => void
}

export default function FileUploader({
  onFileRead,
  onError,
}: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const readFile = () => {
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      onFileRead(content)
    }
    reader.onerror = () => {
      onError('Failed to read the file. Please try again.')
    }
    reader.readAsText(file)
  }

  return (
    <div>
      {!file ? (
        <div
          className="border-2 border-dashed border-slate-300 rounded-lg p-10 text-center cursor-pointer hover:border-blue-600 transition-colors"
          onClick={() => document.getElementById('dna-file')?.click()}
        >
          <Upload size={32} className="mx-auto mb-4 text-slate-400" />
          <p className="text-slate-600 mb-4">
            Drag and drop your DNA sequence file here, or click to browse
          </p>
          <input
            type="file"
            id="dna-file"
            accept=".txt,.fasta,.fa,.seq"
            className="hidden"
            onChange={handleFileChange}
          />
          <button className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-950 transition-colors">
            Select File
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center p-4 border border-slate-300 rounded-lg">
            <FileText size={24} className="text-slate-500 mr-4" />
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{file.name}</div>
              <div className="text-xs text-slate-500">
                {(file.size / 1024).toFixed(2)} KB
              </div>
            </div>
            <button
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 hover:bg-blue-50 transition-colors"
              onClick={() => setFile(null)}
            >
              Change
            </button>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-950 transition-colors w-full"
            onClick={readFile}
          >
            Read DNA Sequence
          </button>
        </div>
      )}
    </div>
  )
}
