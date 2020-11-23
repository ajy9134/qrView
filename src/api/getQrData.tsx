import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetQrData() {
  const [qrData, setqrData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGetQrData = async () => {
      try {
        setError(null);
        setqrData(null);
        setLoading(true);
        const response = await axios.get(
          'https://seropost.com/Result/po_id'
        );
        setqrData(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchGetQrData();
  }, []);

  if (loading) return(
    <div>
        <h1>로딩중...</h1>
    </div>);
  if (error) return (
    <div>
        <h1>보낸 이의 데이터가 존재하지 않거나 에러가 발생했습니다.</h1> 
        <h2>카카오톡 친구 "Seropost"로 문의주시면 신속히 해결하겠습니다.</h2>
    </div>);

  if (!qrData) return null;
  return (
    <div>
            <h1>"보낸사람"{qrData[0]}</h1>
            <h1>"음성 메세지"{qrData[1]}</h1>
    </div>
  );
}

export default GetQrData;