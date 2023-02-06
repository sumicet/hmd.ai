import { Box, Center, CenterProps, VStack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/system';
import { Header } from './Header';

export function Layout({ children, ...rest }: CenterProps) {
    const bgColor = useColorModeValue('primary.light', 'primary.dark');

    return (
        <Center {...rest} width='100%' height='100%' bgColor={bgColor}>
            <VStack width='100%' height='100%'>
                <Header />
                <Box maxWidth='container' padding='space20' width='100%' height='100%'>
                    {children}
                </Box>
            </VStack>
        </Center>
    );
}
