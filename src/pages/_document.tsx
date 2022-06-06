import Document, { Html, Main, NextScript, Head } from "next/document";
import Script from 'next/script'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <Script src="../services/hotjar.js"></Script>import Script from 'next/script'
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
