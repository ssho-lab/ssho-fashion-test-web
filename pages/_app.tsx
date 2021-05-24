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
                <title>패션 성향 테스트</title>
                <meta name="description" content="스와이프로 나만의 패션 성향 알아보기" />
                <meta name="keywords" content="패션,성향,테스트,성향테스트,패션성향테스트,MBTI,스와이프" />

                <meta name="og:url" content="https://fashmbti.s-sho.kr/"/>
                <meta name="og:title" content="패션 성향 테스트"/>
                <meta name="og:description" content="스와이프로 나만의 패션 성향 알아보기" />

                <meta name="twitter:url" content="https://fashmbti.s-sho.kr/"/>
                <meta name="twitter:title" content="패션 성향 테스트"/>
                <meta name="twitter:description" content="스와이프로 나만의 패션 성향 알아보기" />


                <meta name="google-site-verification" content="h01bBBV28Pikx71X0hULd4CaARkSNnwvQ6kWeURa9PQ" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
