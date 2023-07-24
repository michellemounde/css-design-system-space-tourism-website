import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import App from './App.jsx'
import './index.css'

function Root() {
	return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
