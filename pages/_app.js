import "@/styles/reset.css";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/services/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
  );
  
}
