import PropTypes from 'prop-types';
import s from './Input.module.scss';

const Input = ({ className, ...restProps }) => {
    return (
        <input
            {...restProps}
            className={`${s.input} ${className ?? ''}`}
        />
    )
}

Input.propTypes = {
    className: PropTypes.string,
    restProps: PropTypes.object,
}

export default Input;