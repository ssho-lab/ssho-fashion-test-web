import '../styles/App.css'
import '../styles/index.css'
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <div className='App'>
            <Head>
                <title>패션 취향 테스트</title>
                <meta name="description" content="패션 취향 테스트" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
