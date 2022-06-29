import Radio from "../../common/Radio";
import s from './RadioSelector.module.scss'

const RadioSelector = ({ title, labels, name, ...restProps }) => {
    
    const renderRadio = (labels) => labels.map(label => (
            <li key={label} className={s.list_item}>
                <Radio
                    className={s.radio}
                    name={name ?? 'radio'}
                    id={label}
                    onClick={() => {}}
                    {...restProps}
                />
                <label
                    htmlFor={label}
                    className={s.label}
                    {...restProps}
                >
                    {label}
                </label>
            </li>
        ))

    return (
        <ul className={s.radio_list} onClick={(e) => console.log(e.target)}>
            {
                title && <p className={s.title}>
                            {title}
                        </p>
            }
            {renderRadio(labels)}
        </ul>
    )
}

export default RadioSelector;