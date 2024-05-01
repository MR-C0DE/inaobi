import React from 'react';


import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavigationBar from '@/components/mobiles/NavigationBar';
import Head from 'next/head';
import HeaderMobile from '@/components/mobiles/HeaderMobile';

import { useScreenSize } from '@/contexts/ScreenSizeContext';
import { useTypeDevice } from '@/contexts/DeviceTypeContext';

export default function Publish() {
  const windowSize = useScreenSize();
  const deviceType = useTypeDevice();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {deviceType === 'mobile' ? <HeaderMobile /> : <Header screenWidth={windowSize.width} />}
      <main className={deviceType === 'mobile' ? "mob-container" : "container"}>
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
