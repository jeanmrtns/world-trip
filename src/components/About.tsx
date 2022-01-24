import { Flex, Grid, Text } from '@chakra-ui/react';

export function About(): JSX.Element {
    return (
        <Grid
            templateColumns="repeat(2, 1fr)"
            justifyItems="center"
            alignItems="center"
            mt="20"
            as="section"
        >
            <Flex as="article">
                <Text fontSize="lg" textAlign="justify">
                    A Europa é, por convenção, um dos seis continentes do mundo.
                    Compreendendo a península ocidental da Eurásia, a Europa
                    geralmente divide-se da Ásia a leste pela divisória de águas
                    dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o
                    mar Negro a sudeste
                </Text>
            </Flex>
            <Grid templateColumns="repeat(3, 1fr)" gap="4">
                <Flex flexDir="column" align="center" justify="center">
                    <Text
                        color="orange.300"
                        fontWeight="semibold"
                        fontSize="48"
                    >
                        50
                    </Text>
                    <Text fontSize="24" color="gray.600" fontWeight="semibold">
                        países
                    </Text>
                </Flex>
                <Flex flexDir="column" align="center" justify="center">
                    <Text
                        color="orange.300"
                        fontWeight="semibold"
                        fontSize="48"
                    >
                        60
                    </Text>
                    <Text fontSize="24" color="gray.600" fontWeight="semibold">
                        línguas
                    </Text>
                </Flex>
                <Flex flexDir="column" align="center" justify="center">
                    <Text
                        color="orange.300"
                        fontWeight="semibold"
                        fontSize="48"
                    >
                        27
                    </Text>
                    <Text fontSize="24" color="gray.600" fontWeight="semibold">
                        cidades +100
                    </Text>
                </Flex>
            </Grid>
        </Grid>
    );
}
