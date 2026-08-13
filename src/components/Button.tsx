import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'gold';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
  children: ReactNode;
}

const base = 'inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-medium transition-all duration-300 active:scale-[0.98]';

const variants: Record<Variant, string> = {
  primary: 'bg-navy text-white shadow-soft hover:bg-navy-700',
  ghost:   'bg-white text-navy border border-navy-100 shadow-soft hover:bg-sand-50',
  gold:    'bg-gold text-white shadow-soft hover:bg-gold-600',
};

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
