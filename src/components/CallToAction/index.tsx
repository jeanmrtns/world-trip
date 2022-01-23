import { Flex, Text } from '@chakra-ui/react';
import { Carousel } from './Carousel';

export function CallToAction(): JSX.Element {
    return (
        <Flex>
            <Flex direction="column" w="100%" align="center" textAlign="center">
                <Text fontSize="xx-large" fontWeight="medium" color="gray.600">
                    Vamos nessa? <Text>Então escolha seu continente</Text>
                </Text>
                <Carousel />
            </Flex>
        </Flex>
    );
}
