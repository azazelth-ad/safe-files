import { useState } from 'react'
import supabase from '../lib/supabaseClient'

export default function Upload() {
  const [file, setFile] = useState<File | null>(null)

  const uploadFile = async () => {
    if (!file) return
    const { error } = await supabase.storage
      .from('files') // 👈 bucket name ต้องสร้างใน Supabase
      .upload(`public/${file.name}`, file)

    if (error) alert('Upload failed: ' + error.message)
    else alert('Upload success!')
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">📤 Upload File</h1>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      <button
        onClick={uploadFile}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Upload
      </button>
    </div>
  )
}
