import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logoInova from "../images/Logo-Inova.png";
const footerItems = ['Sobre', 'Temas', 'Palestrantes', 'Minicursos', 'Empresas Parceiras', 'Política de Privacidade'];
export default function Footer() {
  return (
    <footer className="bg-slate-900-2 border-t border-white/10">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Logo and Newsletter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logoInova}
                alt="INOVA IFPI"
                className="w-28 h-20"
              />
              {/* <span className="font-bold text-white">INOVA IFPI</span> */}
            </div>
            <p className="text-gray-300 text-sm">
              Transformando o futuro do agronegócio através da inovação e tecnologia.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Receba atualizações</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 bg-slate-900 px-3 py-2 rounded-lg text-sm text-white placeholder-color-text-tertiary border border-white/10 focus:border-green-500 outline-none transition-colors"
                />
                <button className="bg-yellow-500 hover:bg-yellow-500-hover text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:contato@inovaifpi.com" className="text-white hover:text-green-500 transition-colors">
                    contato@inovaifpi.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Telefone</p>
                  <a href="tel:+558633330000" className="text-white hover:text-green-500 transition-colors">
                    +55 (86) 3333-0000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Localização</p>
                  <p className="text-white">Instituto Federal do Piauí, Campus Floriano - Piauí</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Links Úteis</h4>
            <ul className="space-y-2">
                {
                  footerItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="hover:transition-colors duration-200 relative group"
                      style={{ color: 'var(--text-secondary)' }}
                    ><br />
                      {item}
                    </a>
                  ))
                }
            </ul>
          </div>

          {/* Column 4 - Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-green-500 hover:bg-color-green-neon hover:text-white transition-colors"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 INOVA IFPI. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Termos de Serviço
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
