import PropTypes from 'prop-types';
import s from './Logo.module.scss';
import logo from '../../../assets/logo.svg';

const Logo = ({ className }) => {
    return (
        <img
            src={logo}
            alt='Company logo'
            className={`${s.logo} ${className}`}
        />
    )
}

Logo.propTypes = {
    className: PropTypes.string,
}

export default Logo;