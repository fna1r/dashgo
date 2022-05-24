import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvaider } from '../context/SidebarDrawerContext'
import { makeServer } from '../services/mirage'


if ( process.env.NODE_ENV === 'development' ) {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvaider>
        <Component {...pageProps} />
      </SidebarDrawerProvaider>
    </ChakraProvider>

  )

}

export default MyApp
