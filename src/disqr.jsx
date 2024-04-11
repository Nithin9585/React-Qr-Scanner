import React, { useState, useCallback } from 'react'; 
import { Scanner } from '@yudiel/react-qr-scanner';
import "./disqr.css";

const Scan = () => {
  const [scanResult, setScanResult] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = useCallback((text, result) => {
    console.log(text, result);
    setScanResult(text || 'No text found');
    setIsScanning(false); 
  }, []); 

  const handleError = useCallback((error) => {
    console.log(error?.message);
    setIsScanning(false); 
  }, []);

  return (
    <>
      <div className="text">
        <p>Scan <span>QR</span></p>
      </div>

      <div className="display">
        {isScanning && (
          <Scanner
            onResult={handleScan}
            onError={handleError}
          />
        )}
        <button className='b' onClick={() => setIsScanning(!isScanning)}>
          {isScanning ? 'Stop Scanning' : 'Start Scanning'}
        </button>
        <div className="text">
          {scanResult}
        </div>
        
      </div>
      <div className="space"></div>
      <div className="footer"></div>
    </>
  );
};

export default Scan;

