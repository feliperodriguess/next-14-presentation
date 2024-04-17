import type { AppProps } from "next/app";

import "@/lib/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="global-styles">
      <Component {...pageProps} />
    </main>
  );
}
