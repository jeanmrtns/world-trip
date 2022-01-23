import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface TravelTypeProps {
    src: string;
    alt: string;
    description: string;
}

export function TravelType({
    src,
    alt,
    description,
}: TravelTypeProps): JSX.Element {
    return (
        <Flex direction="column">
            <Image src={src} alt={alt} />
            <Text fontWeight="semibold" mt="6" color="gray.600">
                {description}
            </Text>
        </Flex>
    );
}
