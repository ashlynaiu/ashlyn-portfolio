import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/App.css';

const Root = () => {
  return (
      <div className="mainContainer">
        <Header />
          <App />
        <Footer />
      </div>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
