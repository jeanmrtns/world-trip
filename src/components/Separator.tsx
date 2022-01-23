import { Flex } from '@chakra-ui/react';

export function Separator(): JSX.Element {
    return (
        <Flex
            as="span"
            width="24"
            height="0.5"
            bg="gray.900"
            m="auto"
            my="20"
        />
    );
}
