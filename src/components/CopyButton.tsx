import { useState, useCallback } from 'react';
import { Check, Copy } from 'lucide-react';

export function useCopy() {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch { /* ignore */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }, []);
  return { copied, copy };
}

export function CopyButton({ value, label = 'Copiar' }: { value: string; label?: string }) {
  const { copied, copy } = useCopy();
  return (
    <button
      onClick={() => copy(value)}
      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-3.5 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-navy-700 active:scale-[0.98]"
    >
      {copied ? (
        <><Check className="h-4 w-4" strokeWidth={2.5} />Copiado!</>
      ) : (
        <><Copy className="h-4 w-4" strokeWidth={2} />{label}</>
      )}
    </button>
  );
}
