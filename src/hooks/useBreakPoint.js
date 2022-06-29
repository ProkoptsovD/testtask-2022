import { useMediaQuery } from 'react-responsive'
import { breakPoints } from '../../../constants/breakPoints';

export const useBreakpoint = () => {
    const isMobile = useMediaQuery(breakPoints.mobile);
    const isTablet = useMediaQuery(breakPoints.tablet);
    const isDesktop = useMediaQuery(breakPoints.desktop);

    return {
        isMobile,
        isTablet,
        isDesktop
    }
}