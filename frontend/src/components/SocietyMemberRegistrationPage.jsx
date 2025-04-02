import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegisterContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1a1a1a; /* Dark black */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #ecf0f1; /* Off-white */
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
  color: #ecf0f1; /* Off-white */
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
  border: 1px solid #444; /* Darker shade for input border */
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #2c3e50; /* Darker shade for input background */
  color: #ecf0f1; /* Off-white */
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
  color: #bdc3c7; /* Lighter grey for icon */
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  background-color: #3498db; /* Blue color for button */
  color: #ecf0f1; /* Off-white */
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  max-width: 200px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9; /* Darker blue on hover */
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c; /* Red color for error messages */
  font-size: 14px;
  margin-top: 5px;
`;

const SocietyMemberRegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [roomNumberError, setRoomNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const isPasswordValid = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasUpperCase && hasSpecialChar && hasNumber;
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^[789]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPhoneNumberError('');
    setRoomNumberError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setMessage('');

    if (!name) {
      setNameError('Name is required');
      return;
    }

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      return;
    }

    if (!phoneNumber) {
      setPhoneNumberError('Phone number is required');
      return;
    }

    if (!isPhoneNumberValid(phoneNumber)) {
      setPhoneNumberError('Phone number must be exactly 10 digits and start with 7, 8, or 9');
      return;
    }

    if (!roomNumber) {
      setRoomNumberError('Room number is required');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    if (!isPasswordValid(password)) {
      setPasswordError('Password must include at least one uppercase letter, one number, and one special character');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/society-members/register', {
        name,
        email,
        phoneNumber,
        roomNumber,
        password,
      });
      setMessage(response.data || 'Registration successful');
      navigate('/society-member-login');
    } catch (error) {
      setMessage('An error occurred. Please try again');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <RegisterContainer>
      <Title>Society Member Registration</Title>
      <Form onSubmit={handleRegister}>
        <InputContainer>
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label>Phone Number:</Label>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {phoneNumberError && <ErrorMessage>{phoneNumberError}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label>Room Number:</Label>
          <Input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            required
          />
          {roomNumberError && <ErrorMessage>{roomNumberError}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label>Password:</Label>
          <PasswordInput
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </TogglePasswordButton>
          {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label>Confirm Password:</Label>
          <PasswordInput
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <TogglePasswordButton type="button" onClick={toggleConfirmPasswordVisibility}>
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </TogglePasswordButton>
          {confirmPasswordError && <ErrorMessage>{confirmPasswordError}</ErrorMessage>}
        </InputContainer>
        <Button type="submit">Register</Button>
        {message && <p style={{ color: '#ecf0f1' }}>{message}</p>} 
      </Form>
    </RegisterContainer>
  );
};

export default SocietyMemberRegistrationPage;
