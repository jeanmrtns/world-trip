import { Flex } from '@chakra-ui/react';
import { About } from '../components/About';
import { Cities } from '../components/Cities';
import { CountryBanner } from '../components/CountryBanner';
import { Header } from '../components/Header';

export default function Continent(): JSX.Element {
    return (
        <Flex bg="gray.50" flexDir="column">
            <Header />
            <CountryBanner url="https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
            <Flex as="main" direction="column" maxW={1440} m="auto" p={2}>
                <About />
                <Cities />
            </Flex>
        </Flex>
    );
}
