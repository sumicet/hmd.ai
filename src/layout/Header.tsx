import { HStack, VStack, Divider, Text, Flex, Center } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/system';

export function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <VStack width='100%'>
            <Flex
                justifyContent='space-between'
                alignItems='center'
                height='header'
                width='100%'
                maxWidth='container'
                padding='space20'
            >
                <HStack spacing='space8'>
                    <Image src='./logo.png' boxSize={30} alt='hmd.ai' />
                    <Text variant='body'>hmd.ai</Text>
                </HStack>
                <Center
                    boxSize='space40'
                    role='button'
                    onClick={toggleColorMode}
                    borderRadius='radius5'
                    outline='none'
                >
                    {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                </Center>
            </Flex>
            <Divider width='100%' />
        </VStack>
    );
}
