/**
 * Accessibility preferences are stored as data-* attributes on <html> and styled
 * in globals.css, so a saved preference survives navigation and is applied to the
 * whole document — not just the React tree.
 */
export interface A11ySettings {
  /** High-contrast colour scheme */
  contrast: boolean;
  /** 0 = default; each step scales the root font size */
  fontStep: number;
  /** Underline + outline every link */
  highlightLinks: boolean;
  /** Force a plain, highly legible font stack */
  readableFont: boolean;
  /** Disable animations, transitions and smooth scrolling */
  reduceMotion: boolean;
}

export const MIN_FONT_STEP = -1;
export const MAX_FONT_STEP = 4;

export const defaultSettings: A11ySettings = {
  contrast: false,
  fontStep: 0,
  highlightLinks: false,
  readableFont: false,
  reduceMotion: false,
};

const STORAGE_KEY = 'clicksim:a11y';

const setFlag = (name: string, on: boolean) => {
  const root = document.documentElement;
  if (on) {
    root.setAttribute(name, 'on');
  } else {
    root.removeAttribute(name);
  }
};

export const applySettings = (settings: A11ySettings) => {
  const root = document.documentElement;

  setFlag('data-a11y-contrast', settings.contrast);
  setFlag('data-a11y-links', settings.highlightLinks);
  setFlag('data-a11y-readable', settings.readableFont);
  setFlag('data-a11y-motion', settings.reduceMotion);

  if (settings.fontStep === 0) {
    root.removeAttribute('data-a11y-font');
  } else {
    root.setAttribute('data-a11y-font', String(settings.fontStep));
  }
};

/** localStorage throws in private mode / blocked-cookie browsers — never let that break the page. */
export const loadSettings = (): A11ySettings => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSettings;
    return { ...defaultSettings, ...(JSON.parse(raw) as Partial<A11ySettings>) };
  } catch {
    return defaultSettings;
  }
};

export const saveSettings = (settings: A11ySettings) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Preference simply won't persist; the session still works.
  }
};
