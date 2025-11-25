import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Libre Caslon Display for titles
import '@fontsource/libre-caslon-display/400.css'  // Regular (only available weight)


// Import Inter for body text
import '@fontsource/inter/400.css'  // Regular
import '@fontsource/inter/500.css'  // Medium
import '@fontsource/inter/700.css'  // Bold

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
