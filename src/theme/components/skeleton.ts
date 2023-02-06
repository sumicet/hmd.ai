import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

const baseStyle = defineStyle(props => {
    const start = mode('#dbdbdb', '#757575')(props);
    const end = mode('#c9c9c9', '#595959')(props);

    return {
        [$startColor.variable]: start,
        [$endColor.variable]: end,
        opacity: 0.7,
        borderRadius: '5px',
        borderColor: start,
        background: end,
    };
});

export const Skeleton = defineStyleConfig({
    baseStyle,
});
