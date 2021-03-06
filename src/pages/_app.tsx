import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvaider } from '../context/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

//if (process.env.NODE_ENV === 'production') {
  makeServer();
//}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvaider>
          <Component {...pageProps} />
        </SidebarDrawerProvaider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )

}

export default MyApp
