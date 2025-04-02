import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const LogoutButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #e74c3c;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #ecf0f1;
  font-size: 28px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #ecf0f1;
  font-size: 16px;
  width: 100%;
  text-align: left;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  color: #2c3e50;
  margin-bottom: 12px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 220px;
  margin-top: 10px;
  transition: background-color 0.3s, transform 0.2s;
  display: inline-block;
  text-align: center;
  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
`;

const DownloadButton = styled(Button)`
  background-color: #2ecc71;
  margin-top: 20px;
  &:hover {
    background-color: #27ae60;
  }
`;

const QRCodeContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const QRCodeTitle = styled.h2`
  color: #ecf0f1;
  font-size: 20px;
  margin-bottom: 10px;
`;

const QRCodeWrapper = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: white;
  border: 2px solid #ecf0f1;
  border-radius: 8px;
`;

const PassContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #34495e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const PassTitle = styled.h2`
  color: #ecf0f1;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const PassContent = styled.pre`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  margin: 0;
`;

const GeneratePassPage = () => {
  const [flatNumber, setFlatNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [generatedPass, setGeneratedPass] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');

  const handleGeneratePass = (event) => {
    event.preventDefault();
    const pass = `Flat Number: ${flatNumber}\nDate: ${date}\nTime: ${time}\nVehicle Number: ${vehicleNumber}`;
    setGeneratedPass(pass);
    setQrCodeData(pass);
  };

  const handleDownloadQRCode = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'qrcode.png';
      link.click();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('roomNumber'); 
    window.location.href = '/visitor-login'; 
  };

  return (
    <PageContainer>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      <Title>Generate Gate Pass</Title>
      <Form onSubmit={handleGeneratePass}>
        <Label>Flat Number:</Label>
        <Input
          type="text"
          value={flatNumber}
          onChange={(e) => setFlatNumber(e.target.value)}
          required
        />
        <Label>Date:</Label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Label>Time:</Label>
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <Label>Vehicle Number:</Label>
        <Input
          type="text"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          required
        />
        <Button type="submit">Generate Pass</Button>
      </Form>
      {generatedPass && (
        <PassContainer>
          <PassTitle>Your Generated Gate Pass:</PassTitle>
          <PassContent>{generatedPass}</PassContent>
          {qrCodeData && (
            <QRCodeContainer>
              <QRCodeTitle>QR Code:</QRCodeTitle>
              <QRCodeWrapper>
                <QRCodeCanvas value={qrCodeData} size={256} />
              </QRCodeWrapper>
              <DownloadButton type="button" onClick={handleDownloadQRCode}>
                Download QR Code
              </DownloadButton>
            </QRCodeContainer>
          )}
        </PassContainer>
      )}
    </PageContainer>
  );
};

export default GeneratePassPage;
