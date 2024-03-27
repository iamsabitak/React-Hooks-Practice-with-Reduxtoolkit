import React, { useState } from 'react';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation check
    if (name.trim() === '') {
      setError('Name field cannot be empty');
      return;
    }

    // Email validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      return;
    }

    // Password validation check
    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
      );
      return;
    }

    // Confirm password validation check
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setSending(true);

    try {
      // Send user data to backend
      // Replace this with your actual backend endpoint
      await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      setSent(true);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error signing up:', error);
    }

    setSending(false);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={sending}>
          {sending ? 'Signing Up...' : 'Sign Up'}
        </button>
        {sent && <p>Sign up successful!</p>}
      </form>
    </div>
  );
}

export default SignUpForm;
