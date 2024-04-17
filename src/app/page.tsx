import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl">Pages:</h1>
      <Link className="mb-2 mt-12 text-xl underline" href="/old">
        Old
      </Link>
      <Link className="text-xl underline" href="/new">
        New
      </Link>
    </main>
  );
}
