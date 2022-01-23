import { Flex, Image, Text } from '@chakra-ui/react';

export function Banner(): JSX.Element {
    return (
        <Flex
            w="100vw"
            bgImg="/background.svg"
            align="center"
            justify="space-around"
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            h={368}
        >
            <Flex direction="column">
                <Flex
                    direction="column"
                    color="gray.50"
                    fontWeight="bold"
                    fontSize={36}
                >
                    <Text>5 Continentes,</Text>
                    <Text>infinitas possibilidades.</Text>
                </Flex>
                <Text fontSize={20} color="gray.200" mt={4}>
                    Chegou a hora de tirar do papel a viagem que você sempre
                    sonhou.
                </Text>
            </Flex>
            <Flex alignSelf="flex-end" mb="-4">
                <Image w="100%" src="/airplane.svg" alt="Airplane" h={250} />
            </Flex>
        </Flex>
    );
}
