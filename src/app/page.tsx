import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl">Pages:</h1>
      <Link className="mt-12 text-xl underline" href="/todos-old">
        Todos (Old Approach)
      </Link>
      <Link className="my-2 text-xl underline" href="/todos-new">
        Todos (New Approach)
      </Link>
      <Link className="text-xl underline" href="/characters">
        Characters
      </Link>
    </main>
  );
}
