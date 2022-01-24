import { Flex, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import goBackSvg from '../assets/left-arrow.svg';

export function Header(): JSX.Element {
    const router = useRouter();

    return (
        <Flex as="header" align="center" justify="space-around" py="8">
            <Flex
                maxW={1440}
                justify="center"
                align="center"
                w="100%"
                position="relative"
            >
                {router.asPath !== '/' && (
                    <Link position="absolute" href="/" left={0}>
                        <Image h={6} src={goBackSvg.src} alt="Voltar" />
                    </Link>
                )}
                <Flex>
                    <Link href="/" flexGrow="1">
                        <Image src="/logo.svg" alt="logo" />
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
}
