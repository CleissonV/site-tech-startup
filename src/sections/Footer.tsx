import { FaBolt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-[#1a1f3a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center">
              <FaBolt className="text-white" size={10} />
            </div>
            <span className="font-display font-bold gradient-text text-lg">NexusAI</span>
          </div>
          <div className="flex gap-8 text-xs text-gray-600">
            {['Produto', 'Preços', 'Documentação', 'Blog', 'Termos', 'Privacidade'].map(l => (
              <a key={l} href="#" className="hover:text-gray-400 transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex gap-4">
            {([FaGithub, FaLinkedin, FaTwitter] as const).map((Icon, i) => (
              <a key={i} href="#" className="text-gray-700 hover:text-[#7c3aed] transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-[#1a1f3a] pt-6 text-center">
          <p className="text-gray-700 text-xs">© 2024 NexusAI Technologies Ltda. CNPJ 00.000.000/0001-00. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
