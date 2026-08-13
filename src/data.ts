import {
  Wifi,
  MapPin,
  MessageCircle,
  Home,
  Waves,
  UtensilsCrossed,
  ClipboardList,
  Palmtree,
  Utensils,
  Star,
  type LucideIcon,
} from 'lucide-react';

export type MenuKey =
  | 'wifi'
  | 'localizacao'
  | 'contato'
  | 'hospedagem'
  | 'piscina'
  | 'gourmet'
  | 'regras'
  | 'regiao'
  | 'restaurantes'
  | 'avaliacao';

export interface MenuItem {
  key: MenuKey;
  label: string;
  icon: LucideIcon;
  color?: string;
}

/** 9 items for the 3×3 grid */
export const gridMenuItems: MenuItem[] = [
  { key: 'wifi',         label: 'Wi-Fi',        icon: Wifi },
  { key: 'localizacao',  label: 'Localização',  icon: MapPin },
  { key: 'contato',      label: 'WhatsApp',     icon: MessageCircle, color: '#25D366' },
  { key: 'hospedagem',   label: 'Flat',         icon: Home },
  { key: 'piscina',      label: 'Piscina',      icon: Waves },
  { key: 'gourmet',      label: 'Área Gourmet', icon: UtensilsCrossed },
  { key: 'regras',       label: 'Regras',       icon: ClipboardList },
  { key: 'regiao',       label: 'Região',       icon: Palmtree },
  { key: 'restaurantes', label: 'Restaurantes', icon: Utensils },
];

/** Wide evaluation button below the grid */
export const evalMenuItem: MenuItem = {
  key: 'avaliacao',
  label: 'Avalie sua estadia',
  icon: Star,
  color: '#C8A96A',
};

export interface SectionMeta {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor?: string;
}

export const sectionMeta: Record<MenuKey, SectionMeta> = {
  wifi: {
    title: 'Wi-Fi',
    subtitle: 'Rede: PALUMAR  •  Senha: Felicidade',
    icon: Wifi,
  },
  localizacao: {
    title: 'Localização',
    subtitle: 'Veja no mapa como chegar até o Palumar Flats',
    icon: MapPin,
  },
  contato: {
    title: 'WhatsApp',
    subtitle: 'Fale diretamente conosco',
    icon: MessageCircle,
    iconColor: '#25D366',
  },
  hospedagem: {
    title: 'Informações do Flat',
    subtitle: 'Detalhes da sua hospedagem',
    icon: Home,
  },
  piscina: {
    title: 'Piscina',
    subtitle: 'Horários e regras de uso',
    icon: Waves,
  },
  gourmet: {
    title: 'Área Gourmet',
    subtitle: 'Como utilizar nosso espaço',
    icon: UtensilsCrossed,
  },
  regras: {
    title: 'Regras da Casa',
    subtitle: 'Leia para uma convivência harmoniosa',
    icon: ClipboardList,
  },
  regiao: {
    title: 'Conheça a Região',
    subtitle: 'Pontos turísticos e distâncias',
    icon: Palmtree,
  },
  restaurantes: {
    title: 'Restaurantes',
    subtitle: 'Sugestões imperdíveis',
    icon: Utensils,
  },
  avaliacao: {
    title: 'Avalie sua hospedagem',
    subtitle: 'Sua opinião é muito importante',
    icon: Star,
    iconColor: '#C8A96A',
  },
};

export const accordionOrder: MenuKey[] = [
  'wifi',
  'localizacao',
  'contato',
  'hospedagem',
  'piscina',
  'gourmet',
  'regras',
  'regiao',
  'restaurantes',
  'avaliacao',
];

export const placeCards = [
  { name: 'Praia dos Carneiros', distance: '500 metros', query: 'Praia dos Carneiros, Tamandaré, PE' },
  { name: 'Vila Padre Arlindo', distance: '100 metros', query: 'Vila Padre Arlindo, Tamandaré, PE' },
  { name: 'Praia de Campas', distance: '600 metros', query: 'Praia de Campas, Tamandaré, PE' },
  { name: 'Igrejinha São Benedito', distance: '4 km', query: 'Igrejinha São Benedito, Tamandaré, PE' },
];

export const restaurantCards = [
  { name: 'Frente de Quintal', query: 'Frente de Quintal, Tamandaré, PE' },
  { name: 'Tapera do Sabor', query: 'Tapera do Sabor, Tamandaré, PE' },
  { name: 'Quiosque Estação do Sol', query: 'Quiosque Estação do Sol, Tamandaré, PE' },
];

export const mapsLink = 'https://www.google.com/maps/search/?api=1&query=';
export const whatsappNumber = '5511982091077';
export const whatsappLink = `https://wa.me/${whatsappNumber}`;
export const googleReviewLink = 'https://www.google.com/maps/search/?api=1&query=PALUMAR+Flats+Tamandaré';
export const airbnbReviewLink = 'https://www.airbnb.com.br';
