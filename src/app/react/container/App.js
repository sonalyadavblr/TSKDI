import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from '../components/Header';
import AppContent from './AppContent';
import Footer from '../components/Footer';

export default class App extends React.Component
{
  render()
  {
    return (
		<React.Fragment>
			<Router>
				<Header />
				<AppContent />
			</Router>
				<Footer />
		</React.Fragment>
    );
  }
}