import React from 'react';
import NavbarComponent from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import '../styles/App.css'; // Custom styles
import Content from './Content';

const App = () => {
  const items = [
    { title: 'First Item', content: 'This is the content of the first item.' },
    { title: 'Second Item', content: 'This is the content of the second item.' },
    { title: 'Third Item', content: 'This is the content of the third item.' },
  ];
  return (
    <div className="app-container">
        <NavbarComponent />
        <HeroBanner />
        <Content />
      <Footer items={items} />
    </div>
  );
};

export default App;