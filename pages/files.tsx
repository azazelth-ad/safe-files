import { useEffect, useState } from 'react'
import supabase from '../lib/supabaseClient'

export default function Files() {
  const [files, setFiles] = useState<any[]>([])

  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase.storage
        .from('files')
        .list('public')

      if (error) console.error(error)
      else setFiles(data)
    }
    fetchFiles()
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">📥 Download Files</h1>
      <ul>
        {files.map((file) => (
          <li key={file.name} className="mb-2">
            <a
              href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/files/public/${file.name}`}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
