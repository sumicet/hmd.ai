import { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

// https://chakra-ui.com/docs/components/button/usage

export const Button: ComponentStyleConfig = {
    baseStyle: props => ({
        height: 'space40',
        borderRadius: 'radius5',
        _disabled: {
            opacity: 0.5,
            cursor: 'auto',
        },
        color: mode('primary.dark', 'primary.light')(props),
        textStyle: 'bodyBold',
        paddingX: 'space8',
        bgColor: mode('divider.light', 'divider.dark')(props),
    }),
};
