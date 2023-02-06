import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import { theme } from '@/theme';
import { Layout } from '@/layout';
import { VStack, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useColorModeValue } from '@chakra-ui/system';

const response = '';

function App() {
    const [value, setValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const color = useColorModeValue('primary.light', 'primary.dark');

    useEffect(() => {
        const listener = async (request: any, sender: any, sendResponse: any) => {
            if (request.type === 'ingredients') {
                setIsLoading(true);
                const ingredients = request.ingredients;

                try {
                    const response = await fetch(
                        `https://hid-ai-server.vercel.app//api/analyze?ingredients=${encodeURIComponent(
                            ingredients
                        )}`
                    );
                    const data = await response.json();
                    if (!data.text) throw new Error();
                    setValue(data.text);
                } catch (error: any) {
                    console.error(error);
                }

                setIsLoading(false);

                sendResponse({ success: true });
            }
        };
        chrome.runtime.onMessage.addListener(listener);
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Layout color={color}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <VStack spacing='space40'>
                        <Text variant='body'>{value}</Text>
                    </VStack>
                )}
            </Layout>
        </ChakraProvider>
    );
}

export default App;
