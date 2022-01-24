import { Flex, Text } from '@chakra-ui/react';

interface CountryBannerProps {
    url: string;
}

export function CountryBanner({ url }: CountryBannerProps): JSX.Element {
    return (
        <Flex
            w="100vw"
            bgImg={url}
            align="center"
            justify="space-around"
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            h={400}
            p={['4', '0']}
        >
            <Flex align="start">
                <Text fontSize="4xl" color="gray.50">
                    Europa
                </Text>
            </Flex>
        </Flex>
    );
}
