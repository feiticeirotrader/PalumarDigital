import {
  ExternalLink,
  MapPin,
  Clock,
  type LucideIcon,
} from 'lucide-react';
import { Accordion } from './Accordion';
import { Button } from './Button';
import { CopyButton } from './CopyButton';
import {
  placeCards,
  restaurantCards,
  mapsLink,
  whatsappLink,
  googleReviewLink,
  airbnbReviewLink,
  sectionMeta,
  type MenuKey,
} from '../data';

const wifi = { network: 'Palumar', password: 'Felicidade' };

const hospedagemAmenities = [
  'Ar-condicionado',
  'Wi-Fi',
  'Smart TV',
  'Cozinha completa',
  'Air Fryer',
  'Piscina',
  'Área Gourmet',
];

const poolRules = [
  'Utilize o chuveirão.',
  'Crianças somente acompanhadas.',
  'Não utilizar utensílios de vidro.',
  'Não fumar.',
  'Não consumir alimentos dentro da piscina.',
  'Não levar animais.',
];

const houseRules = [
  'Ambiente familiar.',
  'Não realizar festas.',
  'Não utilizar som alto.',
  'Visitantes somente autorizados.',
  'Não fumar dentro do flat.',
  'Não é permitido animais.',
  'O hóspede responde por danos causados ao imóvel.',
];

const gourmetRules = [
  'Uso compartilhado.',
  'Não necessita reserva.',
  'Utilização até 22:00.',
  'Após o uso, deixar o local limpo.',
  'Respeitar os demais hóspedes.',
];

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-sand-200 pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-navy-400">{label}</span>
      <span className="text-right text-sm font-medium text-navy">{value}</span>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-navy-700">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          {item}
        </li>
      ))}
    </ul>
  );
}

interface SectionProps {
  id: MenuKey;
  isOpen: boolean;
  onToggle: () => void;
}

function useMeta(id: MenuKey) {
  const meta = sectionMeta[id];
  const Icon = meta.icon as LucideIcon;
  return { ...meta, Icon };
}

export function WifiSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('wifi');
  return (
    <Accordion id="wifi" title={title} subtitle={subtitle} icon={Icon} iconColor={iconColor} isOpen={isOpen} onToggle={onToggle}>
      <div className="space-y-3">
        <InfoRow label="Rede" value={wifi.network} />
        <InfoRow label="Senha" value={wifi.password} />
      </div>
      <CopyButton value={wifi.password} label="Copiar Senha" />
    </Accordion>
  );
}

export function LocalizacaoSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('localizacao');

  return (
    <Accordion
      id="localizacao"
      title={title}
      subtitle={subtitle}
      icon={Icon}
      iconColor={iconColor}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-3">
        <InfoRow label="Hospedagem" value="PALUMAR Flats" />
        <InfoRow label="Cidade" value="Tamandaré - PE" />
      </div>

      <a
        href="https://maps.app.goo.gl/1QKXGUtw7Kq7qhZz9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>
          <ExternalLink className="h-4 w-4" strokeWidth={2} />
          Traçar rota no Google Maps
        </Button>
      </a>
    </Accordion>
  );
}

export function ContatoSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('contato');
  return (
    <Accordion id="contato" title={title} subtitle={subtitle} icon={Icon} iconColor={iconColor} isOpen={isOpen} onToggle={onToggle}>
      <div className="space-y-3">
        <InfoRow label="PALUMAR Flats" value="WhatsApp" />
        <InfoRow label="Telefone" value="(11) 98209-1077" />
      </div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button>Conversar no WhatsApp</Button>
      </a>
    </Accordion>
  );
}

export function HospedagemSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('hospedagem');
  return (
    <Accordion id="hospedagem" title={title} subtitle={subtitle} icon={Icon} iconColor={iconColor} isOpen={isOpen} onToggle={onToggle}>
      <div className="space-y-3">
        <InfoRow label="Check-in" value="14:00" />
        <InfoRow label="Check-out até" value="12:00" />
        <InfoRow label="Capacidade" value="4 hóspedes" />
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-navy-400">Comodidades</p>
        <div className="flex flex-wrap gap-2">
          {hospedagemAmenities.map((a) => (
            <span key={a} className="rounded-full bg-sand-100 px-3.5 py-1.5 text-xs font-medium text-navy-700">
              {a}
            </span>
          ))}
        </div>
      </div>
    </Accordion>
  );
}

export function PiscinaSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('piscina');
  return (
    <Accordion id="piscina" title={title} subtitle={subtitle} icon={Icon} iconColor={iconColor} isOpen={isOpen} onToggle={onToggle}>
      <div className="rounded-2xl bg-sand-50 p-4">
        <div className="flex items-center gap-2 text-navy">
          <Clock className="h-4 w-4" strokeWidth={2} />
          <span className="text-sm font-medium">Funcionamento · 08:00 às 19:00</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">
          Após esse horário a piscina permanece fechada para tratamento da água.
        </p>
      </div>
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-navy-400">Regras</p>
        <List items={poolRules} />
      </div>
    </Accordion>
  );
}

export function GourmetSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('gourmet');
  return (
    <Accordion id="gourmet" title={title} subtitle={subtitle} icon={Icon} iconColor={iconColor} isOpen={isOpen} onToggle={onToggle}>
      <List items={gourmetRules} />
    </Accordion>
  );
}

export function RegrasSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('regras');
  return (
    <Accordion id="regras" title={title} subtitle={subtitle} icon={Icon} iconColor={iconColor} isOpen={isOpen} onToggle={onToggle}>
      <List items={houseRules} />
    </Accordion>
  );
}

export function RegiaoSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('regiao');
  return (
    <Accordion id="regiao" title={title} subtitle={subtitle} icon={Icon} iconColor={iconColor} isOpen={isOpen} onToggle={onToggle}>
      <div className="space-y-3">
        {placeCards.map((p) => (
          <div key={p.name} className="rounded-2xl border border-sand-200 bg-sand-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-navy">{p.name}</p>
                <p className="mt-0.5 text-xs text-navy-400">{p.distance}</p>
              </div>
            </div>
            <a href={mapsLink + encodeURIComponent(p.query)} target="_blank" rel="noopener noreferrer" className="mt-3 block">
              <Button variant="ghost">
                <MapPin className="h-4 w-4" strokeWidth={2} />
                Abrir no Maps
              </Button>
            </a>
          </div>
        ))}
      </div>
    </Accordion>
  );
}

export function RestaurantesSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('restaurantes');
  return (
    <Accordion id="restaurantes" title={title} subtitle={subtitle} icon={Icon} iconColor={iconColor} isOpen={isOpen} onToggle={onToggle}>
      <div className="space-y-3">
        {restaurantCards.map((r) => (
          <div key={r.name} className="rounded-2xl border border-sand-200 bg-sand-50 p-4">
            <p className="font-medium text-navy">{r.name}</p>
            <a href={mapsLink + encodeURIComponent(r.query)} target="_blank" rel="noopener noreferrer" className="mt-3 block">
              <Button variant="ghost">
                <ExternalLink className="h-4 w-4" strokeWidth={2} />
                Como chegar
              </Button>
            </a>
          </div>
        ))}
      </div>
    </Accordion>
  );
}

export function AvaliacaoSection({ isOpen, onToggle }: SectionProps) {
  const { title, subtitle, Icon, iconColor } = useMeta('avaliacao');
  return (
    <Accordion id="avaliacao" title={title} subtitle={subtitle} icon={Icon} iconColor={iconColor} isOpen={isOpen} onToggle={onToggle}>
      <p className="text-center text-base leading-relaxed text-navy-700">
        Sua opinião é muito importante para nós.
      </p>
      <div className="space-y-3 pt-1">
        <a href={googleReviewLink} target="_blank" rel="noopener noreferrer">
          <Button>
            <ExternalLink className="h-4 w-4" strokeWidth={2} />
            Avaliar no Google
          </Button>
        </a>
        <a href={airbnbReviewLink} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost">
            <ExternalLink className="h-4 w-4" strokeWidth={2} />
            Avaliar no Airbnb
          </Button>
        </a>
      </div>
    </Accordion>
  );
}
