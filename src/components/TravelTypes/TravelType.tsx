import { Flex, Text, useBreakpointValue, Image } from '@chakra-ui/react';

import dotSvg from '../../assets/dot.svg';

interface TravelTypeProps {
    src: {
        src: string;
    };
    alt: string;
    description: string;
}

export function TravelType({
    src,
    alt,
    description,
}: TravelTypeProps): JSX.Element {
    const breakpoint = useBreakpointValue({
        base: 'mobile',
        md: 'desktop',
    });

    if (breakpoint === 'mobile') {
        return (
            <Flex
                ml="12"
                alignItems="center"
                justifyContent="center"
                mr="12"
                mt="4"
            >
                <Image src={dotSvg.src} alt={alt} height={2} width={2} mr="2" />
                <Text fontWeight="semibold" color="gray.600" fontSize="12">
                    {description}
                </Text>
            </Flex>
        );
    }

    return (
        <Flex direction="column">
            <Image src={src.src} alt={alt} />
            <Text fontWeight="semibold" mt="6" color="gray.600">
                {description}
            </Text>
        </Flex>
    );
}
