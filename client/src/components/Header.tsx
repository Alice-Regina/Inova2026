import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoinova from "../images/Logo-Inova.png";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Sobre', 'Temas', 'Palestrantes', 'Minicursos', 'Empresas Parceiras', 'Contato'];
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
        }`}
      style={isScrolled ? { backgroundColor: 'rgba(16, 40, 25, 0.8)' } : {}}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            src={logoinova}
            alt="INOVA IFPI"
            className="w-auto h-12 md:h-14 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:transition-colors duration-200 relative group text-sm xl:text-base font-medium whitespace-nowrap"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--green-neon)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: 'var(--green-neon)' }} />
            </a>
          ))}
        </nav>

        {/* CTA Button (Desktop e Tablets Grandes) */}
        <div className="hidden sm:block shrink-0">
          <button
            className="px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 text-xs md:text-sm lg:text-base font-bold rounded-lg transition-all duration-200 ease-out hover:brightness-110 active:scale-95 shadow-md"
            style={{
              backgroundColor: '#F5B700',
              color: '#081E13',
            }}
          >
            Inscreva-se
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
          <div className="container mx-auto px-4 py-6 space-y-4 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-green-400 font-medium text-lg transition-colors py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Botão no menu mobile visível apenas em telas bem pequenas */}
            <div className="pt-2 sm:hidden">
              <button
                className="w-full py-3 text-base font-bold rounded-lg transition-all duration-200 active:scale-98 shadow-md"
                style={{
                  backgroundColor: '#F5B700',
                  color: '#081E13',
                }}
              >
                Inscreva-se
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}