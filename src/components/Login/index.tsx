'use client';

import { useState } from 'react';
import Cookies from 'js-cookie';
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './Login.module.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const loginData = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch('https://someting-anzudes.pythonanywhere.com/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        setError('');

        Cookies.set('authToken', data.token, { expires: 7 }); // La cookie expira en 7 días

        window.location.href = '/'; // Cambia esto a la ruta deseada
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }

    setLoading(false);
  };
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        component="form"
        onSubmit={handleLogin}
      >
        <TextInput
          label="Email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Text color="red" mt="md">
            {error}
          </Text>
        )}
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" type="submit" loading={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
      </Paper>
    </Container>
  );
}
