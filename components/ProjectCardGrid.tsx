"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Modal } from "@/components/ui/Modal";
import type { ProjectCard } from "@/data/projects";

export function ProjectCardGrid({ cards, closeLabel }: { cards: ProjectCard[]; closeLabel: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = cards.find((c) => c.id === activeId) ?? null;

  return (
    <>
      <div className="grid grid-cols-1 gap-px border border-border-dark bg-border-dark sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.id} delay={i * 80} as="div">
            <button
              type="button"
              onClick={() => setActiveId(card.id)}
              className="group flex h-full w-full flex-col bg-surface p-6 text-left transition-colors hover:bg-surface-alt"
            >
              <span className="mb-4 inline-block font-mono text-[0.65rem] uppercase tracking-widest2 text-accent">
                {card.tag}
              </span>
              <h3 className="mb-3 text-lg font-semibold text-on-dark">{card.title}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-on-dark-muted">{card.description}</p>
              <div className="flex items-center justify-between border-t border-border-dark pt-3 font-mono text-xs text-on-dark-muted">
                <span>{card.meta}</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActiveId(null)}
        tag={active?.tag ?? ""}
        title={active?.title ?? ""}
        closeLabel={closeLabel}
      >
        {active && (
          <>
            <div className="mb-6 flex flex-col gap-px border border-border bg-border">
              {active.detail.kv.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 bg-paper px-4 py-2.5 text-sm">
                  <span className="font-mono text-xs uppercase tracking-widest2 text-muted">{k}</span>
                  <span className="text-right text-ink">{v}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted">
              {active.detail.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a
              href={active.detail.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-sm font-medium text-on-dark transition-colors hover:bg-accent-strong"
            >
              {active.detail.linkLabel}
              <span aria-hidden="true">→</span>
            </a>
          </>
        )}
      </Modal>
    </>
  );
}
