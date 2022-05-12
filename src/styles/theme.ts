//  esse arquivo é pra substituir os temas padrão do chakra.
import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    colors: {
        gray: { // mudando as tonalidades.
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B8",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
            
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body:{
                bg: 'gray.900', // bg = background
                color: 'gray.50'
            }
        }
    }
})