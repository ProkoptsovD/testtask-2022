import PropTypes from 'prop-types';
import Input from "../Input";
import s from './Radio.module.scss';

const Radio = ({className, checkbox, onClick, ...props}) => {
    return (
        <>
            <Input
                {...props}
                type="radio"
                className={`${s.radio} ${className ?? ''}`}
                onClick={onClick}
            />
            <div className={`${s.checkbox} ${checkbox}`}/>
        </>
    )
}

Radio.propTypes = {
    className: PropTypes.string,
    checkbox: PropTypes.string,
    onClick: PropTypes.func,
}

export default Radio;