import '../styles/App.css'
import '../styles/index.css'
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {

    return (
        <div className='App'>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MFV6PRNRRR"/>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MFV6PRNRRR');
          `
                    }}/>
                <title>패션 취향 테스트</title>
                <meta name="description" content="패션 취향 테스트" />
                <meta name="google-site-verification" content="h01bBBV28Pikx71X0hULd4CaARkSNnwvQ6kWeURa9PQ" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
