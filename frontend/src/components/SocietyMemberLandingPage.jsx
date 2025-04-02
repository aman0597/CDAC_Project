import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LandingContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #f0f0f0;
  position: relative;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #f0f0f0;
`;

const Content = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
  color: #dcdcdc;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0 10px;
  &:hover {
    background-color: #2980b9;
  }
`;

const RequestContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #2c2c2c;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  font-size: 18px;
  color: #dcdcdc;
`;

const LogoutButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
`;

const SocietyMemberLandingPage = () => {
  const [requests, setRequests] = useState([]);
  const [roomNumber, setRoomNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoomNumber = () => {
      const storedRoomNumber = localStorage.getItem('roomNumber');
      if (storedRoomNumber) {
        setRoomNumber(storedRoomNumber);
      } else {
        setError('Room number is not available.');
        setLoading(false);
      }
    };
  
    fetchRoomNumber();
  }, []);
  
  useEffect(() => {
    if (!roomNumber) {
      return;
    }
  
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/society-member/visitor-requests', {
          params: { roomNumber },
          withCredentials: true,
        });
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error.response ? error.response.data : error.message);
        setError(error.response ? error.response.data.message : 'An error occurred while fetching requests.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchRequests();
  }, [roomNumber]);
  
  const handleResponse = async (request, status) => {
    try {
      const updatedRequest = { ...request, status };
      await axios.post('http://localhost:8080/api/watchman/visitor-request', updatedRequest, {
        withCredentials: true,
      });
      setRequests(prevRequests => prevRequests.filter(r => r.id !== request.id));
    } catch (error) {
      console.error('Error responding to request:', error.response ? error.response.data : error.message);
      setError('Failed to respond to request.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('roomNumber');
    window.location.href = '/society-member-login'; 
  };

  return (
    <LandingContainer>
      <Title>Society Member Dashboard</Title>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      {error && <Content>{error}</Content>}
      {loading ? (
        <LoadingIndicator>Loading requests...</LoadingIndicator>
      ) : requests.length > 0 ? (
        requests.map((request) => (
          <RequestContainer key={request.id}>
            <p><strong>Visitor:</strong> {request.visitorName}</p>
            <p><strong>Purpose:</strong> {request.purpose}</p>
            <Button onClick={() => handleResponse(request, 'APPROVED')}>Approve</Button>
            <Button onClick={() => handleResponse(request, 'REJECTED')}>Reject</Button>
          </RequestContainer>
        ))
      ) : (
        !error && <Content>No pending requests.</Content>
      )}
    </LandingContainer>
  );
};

export default SocietyMemberLandingPage;
