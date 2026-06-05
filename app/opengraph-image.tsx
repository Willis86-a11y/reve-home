import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

// Branded social-preview card, generated as a PNG (no binary asset to maintain).
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ebe9e5',
          color: '#343839',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 4, textTransform: 'uppercase', color: '#5c584f' }}>
          {site.tagline}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 104, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ fontSize: 40, marginTop: 16, color: '#515151' }}>
            Rolige, tidløse hjem i skandinavisk ånd.
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 64, height: 3, backgroundColor: '#a5977c' }} />
          <div style={{ fontSize: 28, color: '#5c584f' }}>{site.url.replace('https://', '')}</div>
        </div>
      </div>
    ),
    size,
  );
}
