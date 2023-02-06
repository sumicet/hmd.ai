import { ComponentStyleConfig } from '@chakra-ui/theme';
import { cssVar, mode } from '@chakra-ui/theme-tools';

// https://chakra-ui.com/docs/components/spinner/usage

const $size = cssVar('spinner-size');

export const Spinner: ComponentStyleConfig = {
    baseStyle: props => ({
        width: [$size.reference],
        height: [$size.reference],
        [$size.variable]: '16px',
        color: mode('text.secondary.light', 'text.secondary.dark')(props),
    }),
};
