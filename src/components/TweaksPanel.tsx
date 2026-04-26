'use client';

import { useState } from 'react';

const SHADES = {
  forest:    { green: '#1b3a28', link: '#285741', hover: '#3a7a5c', tint: '#f3f6f3' },
  hunter:    { green: '#234d34', link: '#326c4a', hover: '#4a8a64', tint: '#f0f4f1' },
  evergreen: { green: '#0f2e20', link: '#1f4632', hover: '#326c4a', tint: '#f2f5f3' },
};

type Shade = keyof typeof SHADES;

function applyShade(shade: Shade) {
  const v = SHADES[shade];
  const r = document.documentElement.style;
  r.setProperty('--green', v.green);
  r.setProperty('--green-link', v.link);
  r.setProperty('--green-hover', v.hover);
  r.setProperty('--tint', v.tint);
  r.setProperty('--ink', v.green);
  r.setProperty('--ink2', v.link);
}

const LABELS: [Shade, string][] = [
  ['forest', 'Forest'],
  ['hunter', 'Hunter'],
  ['evergreen', 'Evergreen'],
];

export default function TweaksPanel() {
  const [selected, setSelected] = useState<Shade>('hunter');

  const pick = (shade: Shade) => {
    setSelected(shade);
    applyShade(shade);
  };

  return (
    <div className="tweaks-panel">
      <span className="tw-title">Tweaks</span>
      <div className="tw-row">
        <span className="tw-label">Green Shade</span>
        <div className="tw-opts">
          {LABELS.map(([key, label]) => (
            <button
              key={key}
              className={`tw-opt${selected === key ? ' selected' : ''}`}
              onClick={() => pick(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
