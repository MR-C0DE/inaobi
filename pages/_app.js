import "@/styles/reset.css";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/services/ThemeContext";
import { ScreenSizeProvider } from "@/contexts/ScreenSizeContext";
import { DeviceTypeProvider } from "@/contexts/DeviceTypeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DeviceTypeProvider>
        <ScreenSizeProvider>
          <Component {...pageProps} />
        </ScreenSizeProvider>
      </DeviceTypeProvider>
    </ThemeProvider>
  );
}
