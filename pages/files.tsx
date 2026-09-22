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
      <h1 className="text-3xl font-bold mb-6">📂 แจกไฟล์ทั้งหมด</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4 border-b">ชื่อไฟล์</th>
            <th className="py-2 px-4 border-b">ขนาด (bytes)</th>
            <th className="py-2 px-4 border-b">ดาวน์โหลด</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.name} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{file.name}</td>
              <td className="py-2 px-4 border-b">{file.metadata?.size ?? '-'}</td>
              <td className="py-2 px-4 border-b">
                <a
                  href={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/files/public/${file.name}`}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ดาวน์โหลด
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
