import Link from 'next/link';

export default function Index() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/test/ark">Ark / Headless Components</Link>
      </div>
    </div>
  );
}
