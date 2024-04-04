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
        <Link href="/test/ark-other-props">Ark / Headless Components With Other Props</Link>
      </div>
    </div>
  );
}
