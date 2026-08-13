import { useCallback, useState } from 'react';
import { MenuGrid } from './components/MenuGrid';
import { Footer } from './components/Footer';
import {
  WifiSection,
  LocalizacaoSection,
  ContatoSection,
  HospedagemSection,
  PiscinaSection,
  GourmetSection,
  RegrasSection,
  RegiaoSection,
  RestaurantesSection,
  AvaliacaoSection,
} from './components/Sections';
import { useReveal } from './hooks/useReveal';
import { accordionOrder, type MenuKey } from './data';

function App() {
  useReveal();
  const [openKey, setOpenKey] = useState<MenuKey | null>(null);

  const handleSelect = useCallback((key: MenuKey) => {
    setOpenKey(key);
    window.setTimeout(() => {
      const el = document.getElementById(key);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }, []);

  const toggle = useCallback(
    (key: MenuKey) => setOpenKey((prev) => (prev === key ? null : key)),
    [],
  );

  const isOpen = (key: MenuKey) => openKey === key;

  return (
    <div className="wallpaper-page relative min-h-screen w-full">
      <main className="relative mx-auto w-full max-w-[420px] px-5 pb-4">
        <div className="mb-5">
          <MenuGrid onSelect={handleSelect} />
        </div>

        <div className="space-y-2.5">
          {accordionOrder.map((key) => {
            const props = { id: key, isOpen: isOpen(key), onToggle: () => toggle(key) };
            switch (key) {
              case 'wifi':         return <WifiSection key={key} {...props} />;
              case 'localizacao':  return <LocalizacaoSection key={key} {...props} />;
              case 'contato':      return <ContatoSection key={key} {...props} />;
              case 'hospedagem':   return <HospedagemSection key={key} {...props} />;
              case 'piscina':      return <PiscinaSection key={key} {...props} />;
              case 'gourmet':      return <GourmetSection key={key} {...props} />;
              case 'regras':       return <RegrasSection key={key} {...props} />;
              case 'regiao':       return <RegiaoSection key={key} {...props} />;
              case 'restaurantes': return <RestaurantesSection key={key} {...props} />;
              case 'avaliacao':    return <AvaliacaoSection key={key} {...props} />;
              default:             return null;
            }
          })}
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
