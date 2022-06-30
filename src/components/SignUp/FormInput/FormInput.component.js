import Input from "../../common/Input";
import s from './FormInput.module.scss';

const FormInput = ({htmlFor, content, tip, ...props}) => {
    return (
        <div
            data-content={tip}
            className={`${s.wrapper} ${tip ? s.show_tip : ''}`}
        >
            <Input
                    className={s.input}
                    {...props}
            />
            <label
                className={s.label}
                htmlFor={htmlFor}
            >
                {content}
            </label>
        </div>
    )
}

export default FormInput;