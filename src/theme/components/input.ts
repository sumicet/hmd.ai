import { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

// https://chakra-ui.com/docs/components/input/usage

export const Input: ComponentStyleConfig = {
    baseStyle: props => ({
        field: {
            color: mode('primary.dark', 'primary.light')(props),
            textStyle: 'body',
            _hover: {},
            _placeholder: {
                color: mode('placeholder.light', 'placeholder.dark')(props),
                textStyle: 'small',
            },
            paddingY: 'space8',
            paddingX: 'space16',
            outline: '1px solid',
            outlineColor: mode('divider.light', 'divider.dark')(props),
            borderRadius: 'radius5',
            height: 'space40',
            bgColor: 'transparent',
        },
    }),
};
