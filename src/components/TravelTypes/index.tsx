import { Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { TravelType } from './TravelType';

import cocktailSvg from '../../assets/cocktail.svg';
import surfSvg from '../../assets/surf.svg';
import buildingSvg from '../../assets/building.svg';
import museumSvg from '../../assets/museum.svg';
import earthSvg from '../../assets/earth.svg';

const types = [
    {
        src: cocktailSvg,
        alt: 'Cocktail',
        description: 'vida noturna',
    },
    {
        src: surfSvg,
        alt: 'Surf',
        description: 'praia',
    },
    {
        src: buildingSvg,
        alt: 'Building',
        description: 'moderno',
    },
    {
        src: museumSvg,
        alt: 'Museum',
        description: 'clássico',
    },
    {
        src: earthSvg,
        alt: 'Earth',
        description: 'e mais...',
    },
];

export function TravelTypes(): JSX.Element {
    const breakpoint = useBreakpointValue({
        base: 'mobile',
        md: 'desktop',
    });

    if (breakpoint === 'mobile') {
        return (
            <Flex
                flexWrap="wrap"
                as="section"
                alignItems="center"
                justifyContent="center"
                w="100%"
                mt="20"
            >
                {types.map(type => (
                    <TravelType
                        src={type.src}
                        alt={type.alt}
                        description={type.description}
                        key={type.alt}
                    />
                ))}
            </Flex>
        );
    }

    return (
        <Flex
            as="section"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            mt="20"
        >
            {types.map(type => (
                <TravelType
                    src={type.src}
                    alt={type.alt}
                    description={type.description}
                    key={type.alt}
                />
            ))}
        </Flex>
    );
}
