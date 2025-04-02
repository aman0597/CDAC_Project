import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1e1e1e; /* Dark background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #f5f5f5; /* Off-white text */
  font-size: 24px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 8px;
  color: #f5f5f5; /* Off-white text */
  font-size: 14px;
  width: 100%;
  text-align: left;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${props => props.$hasError ? '#e74c3c' : '#333'};
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #333; /* Dark input background */
  color: #f5f5f5; /* Off-white text */
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
  color: #f5f5f5; /* Off-white text */
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: #3498db; /* Blue color */
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  max-width: 200px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

const RegisterButton = styled(Button)`
  background-color: #2ecc71; /* Green color */
  margin-top: 10px;
  &:hover {
    background-color: #27ae60;
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c; /* Red color for errors */
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;

const SocietyMemberLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const isPasswordValid = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUpperCase && hasSpecialChar;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setMessage('');

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    if (!isPasswordValid(password)) {
      setPasswordError('Password must include one uppercase letter and one special character');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/society-members/login', {
        email,
        password,
      });
      setMessage('Login successful');
      navigate('/society_member_landing');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid email or password');
      } else {
        setMessage('An error occurred. Please try again');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    navigate('/society-member-register');
  };

  return (
    <LoginContainer>
      <Title>Society Member Login</Title>
      <Form onSubmit={handleLogin}>
        <InputContainer>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            $hasError={!!emailError}
            required
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label>Password:</Label>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            $hasError={!!passwordError}
            required
          />
          <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </TogglePasswordButton>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </InputContainer>
        <Button type="submit">Login</Button>
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <RegisterButton type="button" onClick={handleRegisterClick}>Register</RegisterButton>
      </Form>
    </LoginContainer>
  );
};

export default SocietyMemberLoginPage;
