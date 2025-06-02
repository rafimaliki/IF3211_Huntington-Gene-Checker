import { Github, Linkedin } from 'lucide-react'

interface TeamMemberProps {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedinURL: string
  githubURL: string
}

export default function TeamCard({
  id,
  name,
  role,
  bio,
  image,
  linkedinURL,
  githubURL,
}: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image || '/placeholder.svg'}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4 h-56">
        <h3 className="text-lg font-bold text-blue-900">{name}</h3>
        <p className="text-sm text-blue-600 mb-2">{role}</p>
        <p className="text-sm text-slate-600 mb-2">{bio}</p>
        <p className="text-xs text-slate-500 font-medium">ID: {id}</p>
      </div>
      <div className="border-t border-slate-200 p-4 flex justify-end gap-4">
        <a
          className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 hover:bg-blue-50 transition-colors"
          href={linkedinURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={16} />
        </a>
        <a
          className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 hover:bg-blue-50 transition-colors"
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
        </a>
      </div>
    </div>
  )
}
