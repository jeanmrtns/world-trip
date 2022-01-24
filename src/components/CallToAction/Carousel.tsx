/* eslint-disable import/no-unresolved */
import { Flex, Text } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

import styles from './styles.module.css';

const continents = [
    {
        img: 'https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80',
        name: 'Europa',
        href: '/europe',
        description: 'O continente mais antigo.',
    },
    {
        img: 'https://images.unsplash.com/photo-1604618407942-46fba682d34a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'América do Norte',
        href: '/north-america',
        description: 'Onde a tecnologia reina.',
    },
    {
        img: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80',
        name: 'Ásia',
        href: '/asia',
        description: 'As vistas mais atraentes.',
    },
    {
        img: 'https://images.unsplash.com/photo-1453063574201-48d2ffe2e4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'América do Sul',
        href: '/south-america',
        description: 'Prais exuberantes.',
    },
];

export function Carousel(): JSX.Element {
    return (
        <Flex className={styles.container} mt={12} mb={12}>
            <ReactResponsiveCarousel showThumbs={false}>
                {continents.map(continent => (
                    <Flex
                        height={400}
                        backgroundImage={continent.img}
                        bgRepeat="no-repeat"
                        flexDir="column"
                        align="center"
                        justify="center"
                        w="100%"
                        key={continent.name}
                    >
                        <Text
                            as="a"
                            href={continent.href}
                            w="100%"
                            fontWeight="bold"
                            color="gray.50"
                            fontSize="xxx-large"
                        >
                            {continent.name}
                        </Text>
                        <Text color="gray.200" fontWeight="bold" mt="4">
                            {continent.description}
                        </Text>
                    </Flex>
                ))}
            </ReactResponsiveCarousel>
        </Flex>
    );
}
