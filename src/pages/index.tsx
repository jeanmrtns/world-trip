import { Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

export default function Home(): JSX.Element {
    return (
        <>
            <Header />
            <Banner />
            <Flex dir="column" maxW={1440} m="auto" p={2}>
                <h1>Oi</h1>
            </Flex>
        </>
    );
}
