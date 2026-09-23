"use client";

import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  tag: string;
  title: string;
  closeLabel: string;
  children: React.ReactNode;
}

export function Modal({ open, onClose, tag, title, closeLabel, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-h-[80vh] w-full max-w-xl overflow-y-auto border border-border-dark bg-paper">
        <div className="sticky top-0 border-b border-border bg-ink px-6 py-5 text-on-dark">
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="absolute right-4 top-4 text-xl leading-none text-on-dark-muted transition-colors hover:text-on-dark"
          >
            ×
          </button>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest2 text-accent">{tag}</p>
          <h2 className="pr-8 text-xl font-semibold leading-snug">{title}</h2>
        </div>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}
