import PropTypes from 'prop-types';
import s from './Container.module.scss';
// import { useBreakpoint } from '../../../hooks/useBreakPoint';

const Container = ({ children, className }) => {
    // const { isMobile, isTablet, isDesktop } = useBreakpoint();

	return (
        <div
            className={`${s.container} ${className ?? ''}`}
        >
            {children}
        </div>
    )
};

Container.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
};

export default Container;
