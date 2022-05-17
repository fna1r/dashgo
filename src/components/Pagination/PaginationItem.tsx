import { Button } from "@chakra-ui/react";


interface PaginationItemProps {
    number: number;
    isCorrent?: boolean; // verificar se é a pagina atual
    
}

export function PaginationItem({ isCorrent = false, number }: PaginationItemProps) {
    if (isCorrent) {
        return (
            <Button
                size='sm'
                fontSize='xs'
                w='4'
                colorScheme='pink'
                disabled
                _disabled={{ // pra quando tiver disabelitado
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size='sm'
            fontSize='xs'
            w='4'
            bgColor='gray.700'
            _hover={{ // quando passar o mouse
                bg: 'gray.500'
            }}
        >
            {number}
        </Button>
    )

}