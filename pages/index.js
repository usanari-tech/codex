import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello, Next.js Template!</h1>
      <p>This is a simple page for Next.js.</p>
      <p>
        <Link href="/weather">Go to Weather Service</Link>
      </p>
    </main>
  );
}
