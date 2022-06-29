import Input from "../Input";
import s from './Radio.module.scss';

const Radio = ({className, onClick, ...props}) => {
    return (
        <>
            <Input
                {...props}
                type="radio"
                className={`${s.radio} ${className ?? ''}`}
                onClick={onClick}
            />
        </>
    )
}

export default Radio;