import { ArrowUp } from 'lucide-react';

function ShellIcon() {
  return (
    <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 32 C12 23 3 19 3 10 C3 5 7.5 1 12 1 L18 0 L24 1 C28.5 1 33 5 33 10 C33 19 24 23 18 32Z"
        fill="#C8A96A" opacity="0.95"/>
      <path d="M18 0 L18 32" stroke="#A8854F" strokeWidth="0.9" opacity="0.6"/>
      <path d="M12 1 Q15 13 18 32"   stroke="#A8854F" strokeWidth="0.8" opacity="0.55"/>
      <path d="M24 1 Q21 13 18 32"   stroke="#A8854F" strokeWidth="0.8" opacity="0.55"/>
      <path d="M4 8  Q10 17 18 32"   stroke="#A8854F" strokeWidth="0.7" opacity="0.45"/>
      <path d="M32 8  Q26 17 18 32"  stroke="#A8854F" strokeWidth="0.7" opacity="0.45"/>
      <path d="M3 13 Q9 20 18 32"    stroke="#A8854F" strokeWidth="0.6" opacity="0.35"/>
      <path d="M33 13 Q27 20 18 32"  stroke="#A8854F" strokeWidth="0.6" opacity="0.35"/>
    </svg>
  );
}

export function Footer() {
  const handleTop = () => {
    const el = document.getElementById('top');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="reveal pb-12 pt-6 text-center">
      <div className="mb-3 flex justify-center">
        <ShellIcon />
      </div>

      <button
        onClick={handleTop}
        className="group inline-flex items-center gap-1.5 font-display text-sm font-semibold text-navy transition-colors duration-300 hover:text-navy-700"
      >
        Voltar ao topo
        <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" strokeWidth={2.5} />
      </button>

      <p className="mt-5 text-xs" style={{ color: '#1565C0' }}>
        © {new Date().getFullYear()} PALUMAR Flats · Todos os direitos reservados.
      </p>
    </footer>
  );
}
