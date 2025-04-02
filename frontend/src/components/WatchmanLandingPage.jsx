import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #f0f0f0;
  position: relative; /* Allows for absolute positioning of the logout button */
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
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: #2c2c2c;
  color: #f0f0f0;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  background-color: #3498db;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
  &:active {
    background-color: #1f65a6;
    transform: scale(1);
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const NavigationButton = styled(Button)`
  background-color: #2ecc71;
  margin: 0;
  width: 48%;
  &:hover {
    background-color: #27ae60;
  }
  &:active {
    background-color: #1e8e41;
  }
`;

const Error = styled.div`
  color: #e74c3c;
  text-align: center;
  margin-top: 20px;
`;

const LogoutButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
  &:active {
    background-color: #a8322d;
  }
`;

const WatchmanLandingPage = () => {
  const [visitorRequest, setVisitorRequest] = useState({
    roomNumber: '',
    visitorName: '',
    purpose: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleVisitorRequestChange = (e) => {
    const { name, value } = e.target;
    setVisitorRequest(prevRequest => ({
      ...prevRequest,
      [name]: value
    }));
  };

  const handleCreateVisitorRequest = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:8080/api/visitor-request', visitorRequest, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Visitor request created successfully');
      setVisitorRequest({ roomNumber: '', visitorName: '', purpose: '' });
    } catch (error) {
      console.error('Error creating visitor request:', error.response ? error.response.data : error.message);
      setError('Failed to create visitor request.');
    }
  };

  const goToDeliveryPartnerEntry = () => {
    navigate('/delivery-partner-entry'); 
  };

  const goToVisitorLogs = () => {
    navigate('/visitor-logs'); 
  };

  const handleLogout = () => {
    localStorage.removeItem('roomNumber'); 
    window.location.href = '/watchman-login';
  };

  return (
    <Container>
      <LogoutButton onClick={handleLogout}>
        Logout
      </LogoutButton>
      <Title>Watchman Landing Page</Title>

      <div>
        <h2>Create Visitor Request</h2>
        <Form onSubmit={handleCreateVisitorRequest}>
          <Input
            type="text"
            name="roomNumber"
            value={visitorRequest.roomNumber}
            onChange={handleVisitorRequestChange}
            placeholder="Room Number"
            required
          />
          <Input
            type="text"
            name="visitorName"
            value={visitorRequest.visitorName}
            onChange={handleVisitorRequestChange}
            placeholder="Visitor Name"
            required
          />
          <Input
            type="text"
            name="purpose"
            value={visitorRequest.purpose}
            onChange={handleVisitorRequestChange}
            placeholder="Purpose of Visit"
            required
          />
          <Button type="submit">Submit Request</Button>
        </Form>
        {error && <Error>{error}</Error>}

        <NavigationContainer>
          <NavigationButton onClick={goToDeliveryPartnerEntry}>
            Go to Delivery Partner Entry
          </NavigationButton>
          <NavigationButton onClick={goToVisitorLogs}>
            View Visitor Logs
          </NavigationButton>
        </NavigationContainer>
      </div>
    </Container>
  );
};

export default WatchmanLandingPage;
