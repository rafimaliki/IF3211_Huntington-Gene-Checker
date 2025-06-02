import { createFileRoute } from '@tanstack/react-router'
import TeamCard from '@/components/team/team-card'
import { Info } from 'lucide-react'

export const Route = createFileRoute('/_secondary/team/')({
  component: RouteComponent,
})

function RouteComponent() {
  const teamMembers = [
    {
      id: '13522137',
      name: 'Ahmad Rafi Maliki',
      role: 'Pengembang',
      bio: 'Mahasiswa Teknik Informatika Institut Teknologi Bandung',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQHYp2DQ1GGtvg/profile-displayphoto-shrink_400_400/B4EZXvBOLzHgAg-/0/1743471830420?e=1752710400&v=beta&t=w_AVgS5fLIWk_cYvnpn0cAFWqWdalzFYbWcXPVExDIo',
      githubURL: 'https://github.com/rafimaliki',
      linkedinURL: 'https://www.linkedin.com/in/ahmad-rafi-maliki/',
    },
    {
      id: '13522144',
      name: 'Nicholas Reymond Sihite',
      role: 'Pengembang',
      bio: 'Mahasiswa Teknik Informatika Institut Teknologi Bandung',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQGOsCbttmlJ7g/profile-displayphoto-shrink_400_400/B56ZcSDpHEHEAs-/0/1748354637702?e=1753920000&v=beta&t=2uf7vu0uVqm-o_Hr1KQRN9s6x7d7KRVBN9ziRngx3d0',
      githubURL: 'https://github.com/nicholasrs05',
      linkedinURL: 'https://www.linkedin.com/in/nicholasrs05/',
    },
    {
      id: '13522150',
      name: 'Albert Ghazaly',
      role: 'Pengembang',
      bio: 'Mahasiswa Teknik Informatika Institut Teknologi Bandung',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQHoIRFOzF8agA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724378765530?e=1752710400&v=beta&t=TdQ3Z3HWh5QRCHka2biJKfst3b5a1VvNvl7Uf31tLCU',
      githubURL: 'https://github.com/AlbertGhazaly/AlbertGhazaly',
      linkedinURL: 'https://www.linkedin.com/in/albertghazaly/',
    },
  ]
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-blue-900">Tim Kami</h1>
      <p className="text-xl text-slate-600 mb-8">
        Kami adalah mahasiswa Teknik Informatika Institut Teknologi Bandung
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>

      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center">
          <Info className="text-blue-900 mb-4 mr-4" size={20} />
          <h2 className="text-xl font-bold mb-3 text-blue-900">
            Tentang Proyek Kami
          </h2>
        </div>
        <p className="text-slate-700">
          Alat Pemeriksa Urutan DNA untuk Penyakit Huntington ini dikembangkan
          sebagai proyek oleh tim kami di Institut Teknologi Bandung. Tujuan
          kami adalah membuat alat edukasi yang membantu pengguna memahami
          hubungan antara pengulangan CAG dalam DNA dan risiko penyakit
          Huntington.
        </p>
      </div>
    </div>
  )
}
