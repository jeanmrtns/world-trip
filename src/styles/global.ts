import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        body: 'Popins',
        heading: 'Popins',
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.700',
            },
        },
    },
});
