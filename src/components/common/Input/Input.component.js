import s from './Input.module.scss';

const Input = ({ className, ...props }) => {
    return (
        <input
            {...props}
            className={`${s.input} ${className ?? ''}`}
        />
    )
}

export default Input;