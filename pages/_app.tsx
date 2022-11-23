import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <h3 className="nav-title">
          <Link href="/">Home</Link>
        </h3>
        <ul className="nav-list">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <footer className="footer">
        <p className="footerText">Last Updated: 11/23/2022</p>
      </footer>
    </>
  );
}
