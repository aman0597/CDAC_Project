import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #f5f5f5;
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #f5f5f5;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  background-color: #333;
  color: #f5f5f5;
`;

const PasswordInput = styled(Input)`
  padding-right: 40px;
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  right: 10px;
  top: 65%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #f5f5f5;
  font-size: 18px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

const RegisterButton = styled(Button)`
  background-color: #2ecc71;
  margin-top: 10px;
  &:hover {
    background-color: #27ae60;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 14px;
  text-align: center;
`;

const WatchmanLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage('');

    if (!email || !password) {
      setMessage('Both fields are required');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/watchman/login', { email, password });
      navigate('/watchman_landing');
    } catch (error) {
      setMessage('Invalid email or password');
    }
  };

  return (
    <LoginContainer>
      <Title>Watchman Login</Title>
      <Form onSubmit={handleLogin}>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TogglePasswordButton type="button" onClick={() => setShowPassword(!showPassword)}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </TogglePasswordButton>
        </InputContainer>
        <Button type="submit">Login</Button>
        <RegisterButton type="button" onClick={() => navigate('/watchman-register')}>
          Register
        </RegisterButton>
        {message && <ErrorMessage>{message}</ErrorMessage>}
      </Form>
    </LoginContainer>
  );
};

export default WatchmanLoginPage;
