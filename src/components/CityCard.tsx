import { Flex, Text, Image } from '@chakra-ui/react';

interface CityCardProps {
    cityUrl: string;
    cityName: string;
    country: string;
    flagUrl: string;
}

export function CityCard({
    cityName,
    cityUrl,
    country,
    flagUrl,
}: CityCardProps): JSX.Element {
    return (
        <Flex
            border="1px"
            borderRadius="md"
            as="div"
            flexDir="column"
            borderColor="orange"
        >
            <Image
                height={200}
                src={cityUrl}
                alt={cityName}
                borderTopRadius="md"
            />
            <Flex bg="white" align="center" px="4" borderBottomRadius="md">
                <Flex
                    w="100%"
                    flexDir="column"
                    justifyContent="space-around"
                    p="4"
                >
                    <Text fontSize="20" fontWeight="semibold" color="gray.600">
                        {cityName}
                    </Text>
                    <Text mt="4" fontSize="16" color="gray.500">
                        {country}
                    </Text>
                </Flex>
                <Flex>
                    <Image h={8} w={8} borderRadius="full" src={flagUrl} />
                </Flex>
            </Flex>
        </Flex>
    );
}
