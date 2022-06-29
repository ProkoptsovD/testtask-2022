import Button from "../../common/Button/Button.component";
import Input from "../../common/Input";
import Radio from "../../common/Radio/Radio.component";
import FileLoader from "../FileLoader";
import RadioSelector from "../RadioSelector";
import s from './Form.module.scss';

const Form = () => {
    return (
        <form className={s.form}>
            <label className={s.label}>
                <Input
                    type="text"
                    name="userName"
                    placeholder="Your name"
                />
            </label>
            <label className={s.label}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                />
            </label>
            <label className={s.label}>
                <Input
                    type="password"
                    name="password"
                    placeholder="Phone"
                />
            </label>
            <RadioSelector
                title='Select your position'
                labels={['js', 'react', 'redux', 'angular']}/>
            <FileLoader />
            <Button 
                type="submit"
                disabled={true}
            >
                Sign up
            </Button>
        </form>
    ) 
}

export default Form;