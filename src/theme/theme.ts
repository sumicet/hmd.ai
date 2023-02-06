import { ThemeConfig } from '@chakra-ui/theme';
import { components } from './components';
import { foundations } from './foundations';

export const theme = {
    components,
    ...foundations,
    config: {
        useSystemColorMode: true,
        initialColorMode: 'dark',
        cssVarPrefix: 'hmd',
    } as ThemeConfig,
};
