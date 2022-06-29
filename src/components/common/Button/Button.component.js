import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ( { className, children, type, disabled }) => {
    return (
        <button
            className={`${s.button} ${className}`}
            type={type ?? 'button'}
            disabled={disabled ?? false}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    type: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Button;