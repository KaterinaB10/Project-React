import React from 'react';
import sampleImage from './DevWay.png';

export function LoginPage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    position: 'relative',
  };

  const infoBoxStyle = {
    backgroundColor: '#262626',
    color: '#fefefe',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '0',
    width: '50%',
    height: '659px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const imageContainerStyle = {
    width: '50%',
    textAlign: 'center',
    height: '700px',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <div style={infoBoxStyle} className="info-box">
        <h1>Login</h1>
        <h2>Choose login options below:</h2>
        <button>Sign in with Google</button>
        <div>
          <p>Email</p>
          <input type="email" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" />
        </div>
      </div>
      <div style={imageContainerStyle}>
        <img src={sampleImage} alt="Sample" style={imageStyle} />
      </div>
    </div>
  );
}