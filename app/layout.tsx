import React from 'react';
import Header from './(components)/Header';
import '../styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body
        style={{
          margin: '0',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Header />
        <div style={{ backgroundColor: '#303030', flexGrow: '1', color: 'white' }}>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
