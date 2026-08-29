import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

/* Only the latin + latin-ext subsets of the self-hosted variable fonts,
   injected explicitly so the bundle stays lean. */
import interLatinUrl from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
import interLatinExtUrl from '@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2?url';
import monoLatinUrl from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url';
import monoLatinExtUrl from '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-ext-wght-normal.woff2?url';

const fontFaces = `
@font-face{font-family:'Inter Variable';font-style:normal;font-weight:100 900;font-display:swap;src:url(${interLatinUrl}) format('woff2-variations');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Inter Variable';font-style:normal;font-weight:100 900;font-display:swap;src:url(${interLatinExtUrl}) format('woff2-variations');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'JetBrains Mono Variable';font-style:normal;font-weight:100 800;font-display:swap;src:url(${monoLatinUrl}) format('woff2-variations');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'JetBrains Mono Variable';font-style:normal;font-weight:100 800;font-display:swap;src:url(${monoLatinExtUrl}) format('woff2-variations');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
`;
const style = document.createElement('style');
style.textContent = fontFaces;
document.head.appendChild(style);

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);