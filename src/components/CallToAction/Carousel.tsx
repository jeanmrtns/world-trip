/* eslint-disable import/no-unresolved */
import { Flex, Text } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

import styles from './styles.module.css';

export function Carousel(): JSX.Element {
    return (
        <Flex className={styles.container} mt={12} mb={12}>
            <ReactResponsiveCarousel showThumbs={false}>
                <Flex
                    height={400}
                    backgroundImage="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80"
                    bgRepeat="no-repeat"
                    flexDir="column"
                    align="center"
                    justify="center"
                    w="100%"
                >
                    <Text
                        w="100%"
                        fontWeight="bold"
                        color="gray.50"
                        fontSize="xxx-large"
                    >
                        Europa
                    </Text>
                    <Text color="gray.200" fontWeight="bold" mt="4">
                        O continente mais antigo.
                    </Text>
                </Flex>

                <Flex
                    height={400}
                    backgroundImage="https://images.unsplash.com/photo-1604618407942-46fba682d34a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    bgRepeat="no-repeat"
                    flexDir="column"
                    align="center"
                    justify="center"
                    w="100%"
                >
                    <Text
                        w="100%"
                        fontWeight="bold"
                        color="gray.50"
                        fontSize="xxx-large"
                    >
                        América
                    </Text>
                    <Text color="gray.200" fontWeight="bold" mt="4">
                        Onde a tecnologia reina.
                    </Text>
                </Flex>

                <Flex
                    height={400}
                    backgroundImage="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80"
                    bgRepeat="no-repeat"
                    flexDir="column"
                    align="center"
                    justify="center"
                    w="100%"
                >
                    <Text
                        w="100%"
                        fontWeight="bold"
                        color="gray.50"
                        fontSize="xxx-large"
                    >
                        Ásia
                    </Text>
                    <Text color="gray.200" fontWeight="bold" mt="4">
                        As vistas mais atraentes.
                    </Text>
                </Flex>
            </ReactResponsiveCarousel>
        </Flex>
    );
}
