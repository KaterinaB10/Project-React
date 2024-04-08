import React from 'react';
import meImage from './Mich.jpg';
import coworkerImage from './Mich.jpg';

export function AboutUsPage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  };

  const aboutBoxStyle = {
    backgroundColor: 'var(--layout-background)',
    padding: '40px 20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '20px',
    width: '100vw',
    overflow: 'auto',
    color: '#fefefe',
  };

  const titleStyle = {
    margin: 0,
  };

  const contentStyle = {
    textAlign: 'center',
    margin: 'auto',
  };

  const personBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '120px',
    height: 'auto',
    borderRadius: '50%',
  };

  const finalBoxStyle = {
    ...aboutBoxStyle,
    padding: '40px',
    width: '80%',
  };

  const trondMortenBoxStyle = {
    ...personBoxStyle,
    color: '#262626',
  };

  const katerinaBoxStyle = {
    ...personBoxStyle,
    color: '#262626',
  };

  return (
    <div style={containerStyle}>
      <div style={aboutBoxStyle} className="about-box">
        <h2 style={{ ...titleStyle, color: '#fefefe' }}> About us</h2>
        <p style={contentStyle}> We at Dev'way want to deliver a safe space for beginner and veteran front-end developers alike. With us, education and tech should be a fun experience. </p>
      </div>
      <div style={trondMortenBoxStyle}>
        <img src={meImage} alt="Me" style={imageStyle} />
        <div style={{ flex: 1, textAlign: 'left', marginLeft: '20px' }}>
          <h1 style={contentStyle}>Trond-Morten Reknes</h1>
          <p style={contentStyle}>Dev'way CEO, Designer, Co-creator and programmer. </p>
        </div>
      </div>
      <div style={katerinaBoxStyle}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: '20px' }}>
          <h1 style={contentStyle}>Katerina Bredikhina</h1>
          <p style={contentStyle}> Dev'way Ceo, Lead designer, co-creator and lead programmer. </p>
        </div>
        <img src={coworkerImage} alt="Co-worker" style={imageStyle} />
      </div>
      <div style={finalBoxStyle} className="about-box">
        <h2 style={{ ...titleStyle, color: '#fefefe' }}>Final points</h2>
        <p style={{ ...contentStyle, marginTop: '10px', marginBottom: '10px' }}>Dev'way was developed in association with Kodehode, and developed by the two lovely people mentioned above.</p>
        <p style={{ ...contentStyle, marginBottom: '10px' }}>With a passion for the craft, interest ind the field and care. The two of us has gone together to create this beautiful page for your enjoyment. </p>
      </div>
    </div>
  );
}