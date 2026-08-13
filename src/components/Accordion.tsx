import { useEffect, useRef, type ReactNode } from 'react';
import { ChevronDown, type LucideIcon } from 'lucide-react';

interface AccordionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function Accordion({
  id,
  title,
  subtitle,
  icon: Icon,
  iconColor = '#1565C0',
  isOpen,
  onToggle,
  children,
}: AccordionProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    el.style.maxHeight = isOpen ? el.scrollHeight + 'px' : '0px';
  }, [isOpen]);

  return (
    <section
      id={id}
      className="scroll-mt-4 overflow-hidden rounded-2xl bg-white shadow-soft transition-shadow duration-300"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-3.5 px-4 py-3.5 text-left"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
      >
        <span className="shrink-0" style={{ color: iconColor }}>
          <Icon className="h-6 w-6" strokeWidth={1.65} />
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.9rem] font-semibold leading-snug" style={{ color: '#1565C0' }}>
            {title}
          </p>
          <p className="truncate text-xs leading-snug" style={{ color: '#5EA6F0' }}>
            {subtitle}
          </p>
        </div>

        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300"
          style={{
            background: isOpen ? '#1565C0' : 'transparent',
            border: isOpen ? 'none' : '1px solid #BAD9FA',
          }}
        >
          <ChevronDown
            className="h-4 w-4 transition-transform duration-300"
            strokeWidth={2.5}
            style={{
              color: isOpen ? '#fff' : '#3A91E8',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </span>
      </button>

      <div
        ref={panelRef}
        id={`${id}-panel`}
        className="overflow-hidden"
        style={{
          maxHeight: '0px',
          transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="mx-4 mb-4 border-t border-sand-200 pt-4">
          <div className="space-y-4">{children}</div>
        </div>
      </div>
    </section>
  );
}
