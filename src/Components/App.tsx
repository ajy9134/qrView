import React,{ useEffect, useState } from 'react';
import AppRouter from './Router';
import GetQrData from '../api/getQrData';

function App() {
  const [init, setInit] = useState(false);
  const [isResult, setisResult] = useState(false);
  useEffect(() => {
     /* 데이터 존재 여부 파악 (response_data) => {
      if (response_data) {
        setisResult(true);
      } else {
        setisResult(false);
      }*/
      setInit(true);
    }, []);
  //}, []);
  return (
    <>
    {init ? <AppRouter isResult={isResult}/> : "Initializing..."}
    <div>
      <GetQrData/>
    </div>
    <footer>&copy; {new Date().getFullYear()} SEROPOST</footer>
    </>
  );
}

export default App;
