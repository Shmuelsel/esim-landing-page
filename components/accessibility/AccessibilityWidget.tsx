'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  applySettings,
  defaultSettings,
  loadSettings,
  saveSettings,
  MAX_FONT_STEP,
  MIN_FONT_STEP,
  type A11ySettings,
} from './settings';

const AccessibilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
    <path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm9 5.5c0 .6-.4 1.1-1 1.2l-4.6.8v3.1l1.7 6.6a1.2 1.2 0 0 1-2.3.6L13.2 15h-2.4l-1.6 4.8a1.2 1.2 0 0 1-2.3-.6l1.7-6.6V9.5L4 8.7a1.2 1.2 0 0 1 .4-2.4l4.9.8h5.4l4.9-.8c.7-.1 1.3.4 1.4 1.1v.1Z" />
  </svg>
);

/** A labelled on/off switch inside the panel. */
const ToggleRow = ({
  label,
  pressed,
  onClick,
}: {
  label: string;
  pressed: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={pressed}
    className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-right text-sm font-medium transition-colors ${
      pressed
        ? 'border-blue-600 bg-blue-50 text-blue-800'
        : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
    }`}
  >
    <span>{label}</span>
    <span aria-hidden="true" className="text-xs font-bold">
      {pressed ? 'פעיל' : 'כבוי'}
    </span>
  </button>
);

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Saved preferences are read up front. On the server there is no localStorage,
  // so we start from defaults; the panel is closed on first render either way,
  // so the restored values can't cause a hydration mismatch.
  const [settings, setSettings] = useState<A11ySettings>(() =>
    typeof window === 'undefined' ? defaultSettings : loadSettings(),
  );
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Mirror state onto <html>, where the CSS in globals.css picks it up.
  useEffect(() => {
    applySettings(settings);
  }, [settings]);

  const update = (patch: Partial<A11ySettings>) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    saveSettings(next);
  };

  const reset = () => {
    setSettings(defaultSettings);
    saveSettings(defaultSettings);
  };

  // Escape closes the panel and returns focus to the trigger.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [isOpen]);

  // Move focus into the panel when it opens.
  useEffect(() => {
    if (isOpen) {
      panelRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    }
  }, [isOpen]);

  const canEnlarge = settings.fontStep < MAX_FONT_STEP;
  const canShrink = settings.fontStep > MIN_FONT_STEP;

  return (
    <div className="fixed bottom-4 left-4 z-60 print:hidden">
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="תפריט נגישות"
          className="absolute bottom-16 left-0 max-h-[70vh] w-[min(20rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">תפריט נגישות</h2>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                buttonRef.current?.focus();
              }}
              aria-label="סגירת תפריט הנגישות"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="mb-4">
            <p id="a11y-font-label" className="mb-2 text-sm font-medium text-gray-700">
              גודל הטקסט
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => update({ fontStep: settings.fontStep - 1 })}
                disabled={!canShrink}
                aria-label="הקטנת גודל הטקסט"
                className="flex h-10 flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white text-lg font-bold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                −
              </button>
              <span
                aria-live="polite"
                aria-labelledby="a11y-font-label"
                className="min-w-16 text-center text-sm font-bold text-gray-900"
              >
                {settings.fontStep === 0 ? 'רגיל' : `${settings.fontStep > 0 ? '+' : ''}${settings.fontStep}`}
              </span>
              <button
                type="button"
                onClick={() => update({ fontStep: settings.fontStep + 1 })}
                disabled={!canEnlarge}
                aria-label="הגדלת גודל הטקסט"
                className="flex h-10 flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white text-lg font-bold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <ToggleRow
              label="ניגודיות גבוהה"
              pressed={settings.contrast}
              onClick={() => update({ contrast: !settings.contrast })}
            />
            <ToggleRow
              label="הדגשת קישורים"
              pressed={settings.highlightLinks}
              onClick={() => update({ highlightLinks: !settings.highlightLinks })}
            />
            <ToggleRow
              label="גופן קריא"
              pressed={settings.readableFont}
              onClick={() => update({ readableFont: !settings.readableFont })}
            />
            <ToggleRow
              label="עצירת אנימציות"
              pressed={settings.reduceMotion}
              onClick={() => update({ reduceMotion: !settings.reduceMotion })}
            />
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-4 w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gray-800"
          >
            איפוס הגדרות הנגישות
          </button>

          <Link
            href="/accessibility"
            onClick={() => setIsOpen(false)}
            className="mt-3 block text-center text-sm font-semibold text-blue-600 hover:underline"
          >
            להצהרת הנגישות המלאה
          </Link>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="פתיחת תפריט נגישות"
        title="תפריט נגישות"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-colors hover:bg-blue-700 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
      >
        <AccessibilityIcon />
      </button>
    </div>
  );
};

export default AccessibilityWidget;
