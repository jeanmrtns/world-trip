import { Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { CallToAction } from '../components/CallToAction';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { TravelTypes } from '../components/TravelTypes';

export default function Home(): JSX.Element {
    return (
        <>
            <Header />
            <Banner />
            <Flex as="main" direction="column" maxW={1440} m="auto" p={2}>
                <TravelTypes />
                <Separator />
                <CallToAction />
            </Flex>
        </>
    );
}
