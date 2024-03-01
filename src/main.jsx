import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// *** 1. Remove the Starter import *** //
import Starter from './Starter/Starter.jsx';

// *** 2. Uncomment the App import *** //
// import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	// * 3. Remove the Starter component *
	<Starter />

	// *** 4. Uncomment the App component+ *** //
	// <React.StrictMode>
	//   <ChakraProvider>
	//   <App />
	//   </ChakraProvider>
	// </React.StrictMode>
);
