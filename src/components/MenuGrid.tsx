import { gridMenuItems, evalMenuItem, type MenuKey } from '../data';

const EvalIcon = evalMenuItem.icon;

interface MenuGridProps {
  onSelect: (key: MenuKey) => void;
}

export function MenuGrid({ onSelect }: MenuGridProps) {
  return (
    <div>
      <div className="mb-5 text-center">
        <h1 className="font-display text-[1.65rem] font-bold leading-tight text-navy-900">
          Bem-vindo!
        </h1>
        <p className="mt-1 font-script text-base font-bold leading-tight text-navy-600">
          Momentos tranquilos, lembranças inesquecíveis.
        </p>
      </div>

      <div className="reveal">
        <div className="grid grid-cols-3 gap-2.5">
        {gridMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              onClick={() => onSelect(item.key)}
              className="group flex flex-col items-center gap-2 rounded-2xl bg-white px-2 py-4 shadow-card transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-soft focus:outline-none"
              aria-label={item.label}
            >
              <Icon
                className="h-9 w-9"
                style={{
                  color: item.color ?? '#1565C0',
                  transition: 'transform 180ms ease',
                }}
                strokeWidth={1.65}
              />
              <span
                className="text-center text-[0.72rem] font-semibold leading-tight"
                style={{ color: item.color ?? '#1565C0' }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
        </div>

        {/* Wide evaluation button */}
      <button
        onClick={() => onSelect(evalMenuItem.key)}
        className="group mt-2.5 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-soft focus:outline-none"
        aria-label={evalMenuItem.label}
      >
        <EvalIcon
          className="h-6 w-6"
          strokeWidth={1.65}
          style={{ color: '#C8A96A' }}
        />
        <span className="font-display text-sm font-semibold" style={{ color: '#C8A96A' }}>
          {evalMenuItem.label}
        </span>
        </button>
      </div>
    </div>
  );
}
