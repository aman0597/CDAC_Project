import React, { useState } from 'react';
import styled from 'styled-components';

const EntryContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #ecf0f1;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #34495e;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 16px;
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

const DeliveryPartnerEntryPage = () => {
    const [flatNumber, setFlatNumber] = useState('');
    const [entryTime, setEntryTime] = useState('');
    const [exitTime, setExitTime] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const entryData = {
            flatNumber,
            entryTime,
            exitTime,
            date
        };

        try {
            const response = await fetch('http://localhost:8080/api/delivery-partners', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entryData),
            });

            if (response.ok) {
                alert('Entry successfully added!');
                setFlatNumber('');
                setEntryTime('');
                setExitTime('');
                setDate('');
            } else {
                alert('Failed to add entry.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

    return (
        <EntryContainer>
            <Title>Delivery Partner Entry</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Flat Number"
                    value={flatNumber}
                    onChange={(e) => setFlatNumber(e.target.value)}
                    required
                />
                <Input
                    type="time"
                    placeholder="Entry Time"
                    value={entryTime}
                    onChange={(e) => setEntryTime(e.target.value)}
                    required
                />
                <Input
                    type="time"
                    placeholder="Exit Time"
                    value={exitTime}
                    onChange={(e) => setExitTime(e.target.value)}
                    required
                />
                <Input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <Button type="submit">Submit</Button>
            </Form>
        </EntryContainer>
    );
};

export default DeliveryPartnerEntryPage;
