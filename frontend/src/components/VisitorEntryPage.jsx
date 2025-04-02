import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #f0f0f0;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #f0f0f0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background-color: #2c3e50;
  color: #ecf0f1;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

const Message = styled.p`
  text-align: center;
  color: #2ecc71;
  font-weight: bold;
`;

const VisitorEntryPage = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/visitor-entries/record', null, {
        params: {
          roomNumber,
          vehicleNumber,
          entryTime,
          entryDate
        }
      });

      if (response.status === 200) {
        setMessage('Visitor entry logged successfully');
      }
    } catch (error) {
      console.error('Error logging visitor entry:', error);
      setMessage('Failed to log visitor entry');
    }
  };

  return (
    <Container>
      <Title>Log Visitor Entry</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Vehicle Number (optional)"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        />
        <Input
          type="time"
          placeholder="Entry Time"
          value={entryTime}
          onChange={(e) => setEntryTime(e.target.value)}
          required
        />
        <Input
          type="date"
          placeholder="Entry Date"
          value={entryDate}
          onChange={(e) => setEntryDate(e.target.value)}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
      {message && <Message>{message}</Message>}
    </Container>
  );
};

export default VisitorEntryPage;
