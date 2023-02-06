import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

export const Divider: ComponentStyleConfig = {
    baseStyle: props => {
        let orientationProps = {};
        if (props.orientation === 'vertical') {
            orientationProps = {
                borderLeftWidth: 0,
                width: '1px',
            };
        } else {
            orientationProps = {
                borderBottomWidth: 0,
                height: '1px',
            };
        }

        return {
            ...orientationProps,
            bg: mode('divider.light', 'divider.dark')(props),
        };
    },
};
