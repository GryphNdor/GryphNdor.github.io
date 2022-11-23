import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <h3 className="nav-title">
          <a href="/">Home</a>
        </h3>
        <ul className="nav-list">
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/notes">Notes</a>
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
