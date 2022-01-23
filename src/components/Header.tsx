import { Flex, Image, Link } from '@chakra-ui/react';

export function Header(): JSX.Element {
    return (
        <Flex as="header" align="center" justify="center" py="8">
            <Link href="/">
                <Image src="/logo.svg" alt="logo" />
            </Link>
        </Flex>
    );
}
