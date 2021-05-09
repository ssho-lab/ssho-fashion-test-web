import '../styles/App.css'
import '../styles/index.css'
import React from "react";

function MyApp({ Component, pageProps }) {
    return <div className='App'><Component {...pageProps} /></div>
}

export default MyApp
