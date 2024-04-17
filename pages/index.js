import { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavigationBar from "@/components/mobiles/NavigationBar";
import Head from "next/head";
import UAParser from 'ua-parser-js';
import HeaderMobile from '@/components/mobiles/HeaderMobile';
import Alert from '@/components/Alert';

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Vérifier si window est défini (côté client)
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener('resize', handleResize);
      // Nettoyage du listener d'événement lors du démontage du composant
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const parser = new UAParser();
      const userAgent = window.navigator.userAgent;
      parser.setUA(userAgent);
      const result = parser.getResult();

      const device = result.device.type;
      setDeviceType(device);
    }
  }, [deviceType]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Alert title={"Important"} message={"Ce site est en construction"} />
      {deviceType === "mobile" ? <HeaderMobile /> : <Header screenWidth={windowSize.width} />}
      
      <main className='container mx-auto'>
        <p>Largeur de la fenêtre en temps réel : {windowSize.width}px</p>
        <p>Hauteur de la fenêtre en temps réel : {windowSize.height}px</p>
        <p>Type d'appareil : {deviceType}</p>
        {/* Votre contenu local */}
        Local
      </main>
      <Footer />
      {deviceType === 'mobile' && <NavigationBar />}
    </>
  );
}
