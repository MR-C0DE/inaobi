import React, { createContext, useContext, useState, useEffect } from 'react';
import UAParser from 'ua-parser-js';

const DeviceTypeContext = createContext();

export const useTypeDevice = () => useContext(DeviceTypeContext);

export const DeviceTypeProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const parser = new UAParser();
    parser.setUA(window.navigator.userAgent);
    const result = parser.getResult();
    setDeviceType(result.device.type);
  }, []);

  return (
    <DeviceTypeContext.Provider value={deviceType}>
      {children}
    </DeviceTypeContext.Provider>
  );
};
