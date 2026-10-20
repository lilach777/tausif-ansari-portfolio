"use client";

import { useRef } from "react";
import type { Evidence } from "@/content/site";

export default function EvidenceFigure({ evidence, project }: { evidence: Evidence; project: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const ex = evidence.excluded;

  return (
    <figure className="evidence">
      <button
        type="button"
        className="evidence__frame"
        onClick={() => dialog.current?.showModal()}
        aria-label={`Enlarge ${project} analytics screenshot`}
      >
        <img
          src={evidence.src}
          alt={evidence.alt}
          width={evidence.width}
          height={evidence.height}
          loading="lazy"
          decoding="async"
        />
        {ex && (
          <span
            className="evidence__excluded"
            style={{
              left: `${ex.left * 100}%`,
              width: `${(ex.right - ex.left) * 100}%`,
              top: `${ex.top * 100}%`,
              height: `${(ex.bottom - ex.top) * 100}%`,
            }}
          >
            <span>{ex.label}</span>
          </span>
        )}
        <span className="evidence__zoom" aria-hidden="true">
          Enlarge ↗
        </span>
      </button>
      <figcaption>{evidence.caption}</figcaption>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={`${project} analytics screenshot`}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      >
        <div className="lightbox__inner">
          <div className="lightbox__img">
            <img src={evidence.full} alt={evidence.alt} loading="lazy" decoding="async" />
            {ex && (
              <span
                className="evidence__excluded"
                style={{
                  left: `${ex.left * 100}%`,
                  width: `${(ex.right - ex.left) * 100}%`,
                  top: `${ex.top * 100}%`,
                  height: `${(ex.bottom - ex.top) * 100}%`,
                }}
              >
                <span>{ex.label}</span>
              </span>
            )}
          </div>
          <p>{evidence.caption}</p>
          <button type="button" className="btn btn--ghost btn--sm" onClick={() => dialog.current?.close()} autoFocus>
            Close
          </button>
        </div>
      </dialog>
    </figure>
  );
}
