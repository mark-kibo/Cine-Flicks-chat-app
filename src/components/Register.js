import React, { useState } from 'react';
import { Button, TextInput, Label } from 'flowbite-react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';
import ErrorComponent from './Error';

const Register = () => {
  const { handleSignInClick, loading, setLoading, signin, error, setError } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const validateUsername = (value) => {
    // Username should not start with a number
    return /^[^0-9]/.test(value);
  };

  const validateEmail = (value) => {
    // Email should contain an '@'
    return value.includes('@');
  };

  const validatePassword = (value) => {
    // Password should have a Capital letter, small letter, numbers, and a special character.
    const capitalRegex = /[A-Z]/;
    const smallRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[@#$%^&+=]/;

    const isValid =
      capitalRegex.test(value) ||
      smallRegex.test(value) ||
      numberRegex.test(value) ||
      specialCharRegex.test(value) ||
      value.length >= 8;

    return isValid;
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    const isValid = validateUsername(value);
    setUsername(isValid ? value : '');
    validateForm();
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const isValid = validateEmail(value);
    setEmail(isValid ? value : '');
    validateForm();
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const isValid = validatePassword(e.target.value);
    setPassword(isValid ? value : '');
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(
      validateUsername(username) && validateEmail(email) && validatePassword(password)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      // Do not submit the form if there are validation errors
      setError({
        message:"fix validation errors and try submitting"
      })
      return;
    }else{
        
    setLoading(true);

    const res = await signin(username, email, password);
    console.log(res);

    setLoading(false);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        {error.message && <ErrorComponent message={error.message} />}

        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h3>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="username" value="Your username" />
          </div>
          <TextInput
            onChange={handleUsernameChange}
            id="username"
            placeholder="kibom"
            type="text"
            required
            color={validateUsername(username) ? 'success' : 'error'}
            helperText={validateUsername(username) ? (
              <span className="text-success">Username is valid.</span>
            ) : (
              <span className="text-error">Username should not start with a number.</span>
            )}
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            onChange={handleEmailChange}
            id="email"
            placeholder="johndoe@gmail.com"
            type="email"
            required
            color={validateEmail(email) ? 'success' : 'error'}
            helperText={validateEmail(email) ? (
              <span className="text-success">Email is valid.</span>
            ) : (
              <span className="text-error">Email should contain an '@'.</span>
            )}
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            onChange={handlePasswordChange}
            id="password"
            type="password"
            required
            color={validatePassword(password) ? 'success' : 'error'}
            helperText={validatePassword(password) ? (
              <span className="text-success">Password is valid.</span>
            ) : (
              <span className="text-error">
                Password should have at least 8 characters, including at least one capital letter, one small letter, one number, and one special character.
              </span>
            )}
          />
        </div>
        <div className="flex justify-between">
          <Link to="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
            Lost Password?
          </Link>
        </div>
        <div className="w-full">
          <Button className="w-full" type="submit" disabled={!isFormValid || loading}>
            {loading ? 'Loading...' : 'Sign up'}
          </Button>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
          Already have an account?&nbsp;
          <Link
            className="text-cyan-700 hover:underline dark:text-cyan-500"
            onClick={() => {
              handleSignInClick();
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
