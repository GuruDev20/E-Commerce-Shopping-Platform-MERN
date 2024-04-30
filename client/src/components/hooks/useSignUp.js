import { useState } from "react";
import axios from "axios";
import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password, mobile, role) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:4000/api/user/register', {
        username,
        email,
        password,
        mobile,
        role,
      });

      const json = response.data;

      if (!response.status === 200) {
        setIsLoading(false);
        setError(json.error || 'Something went wrong');
        console.error('Signup Error:', json.error || 'Something went wrong');
        return;
      }

      localStorage.setItem('user', JSON.stringify(json));
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError('An error occurred while processing your request');
      console.error('Signup Error:', error);
    }
  };

  return { signup, isLoading, error };
};
