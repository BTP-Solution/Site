import { ImageResponse } from 'next/og';

export function GET() {
    return new ImageResponse(
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', background: '#060d1a', padding: '80px', color: 'white', borderBottom: '12px solid #ff7700' }}>
            <div style={{ display: 'flex', fontSize: 32, color: '#82ade8', marginBottom: 36 }}>SAP · CLOUD · AI</div>
            <div style={{ display: 'flex', fontSize: 88, fontWeight: 700 }}>BTP Solution</div>
            <div style={{ display: 'flex', fontSize: 32, marginTop: 32, color: '#cbd5e1' }}>Transforming Technology into Value.</div>
            <div style={{ display: 'flex', fontSize: 24, marginTop: 60, color: '#82ade8' }}>btpsolution.com</div>
        </div>, { width: 1200, height: 630, headers: { 'Cache-Control': 'public, max-age=86400' } },
    );
}
