import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function Banner(): JSX.Element {
    const breakpoint = useBreakpointValue({
        base: 'mobile',
        md: 'desktop',
    });

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
            p={['4', '0']}
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
            {breakpoint !== 'mobile' && (
                <Flex alignSelf="flex-end" mb="-4">
                    <Image
                        w="100%"
                        src="/airplane.svg"
                        alt="Airplane"
                        h={250}
                    />
                </Flex>
            )}
        </Flex>
    );
}
