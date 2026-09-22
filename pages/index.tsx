import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-3" />
          <h1 className="text-xl font-bold">Safe Files Hub</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center mt-20">
        <h2 className="text-4xl font-bold mb-6">จัดการไฟล์ของคุณได้ง่าย ๆ</h2>
        <p className="text-gray-600 mb-10">
          อัปโหลดและดาวน์โหลดไฟล์ผ่าน Supabase Storage ได้ทันที
        </p>

        {/* Action Buttons */}
        <div className="flex gap-6">
          <Link href="/upload">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              📤 Upload Files
            </button>
          </Link>
          <Link href="/files">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
              📥 Download Files
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
