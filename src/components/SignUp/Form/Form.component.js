import Button from "../../common/Button";
import FileLoader from "../FileLoader";
import FormInput from "../FormInput";
import RadioSelector from "../RadioSelector";
import s from './Form.module.scss';

const Form = () => {
    return (
        <form className={s.form}>
            <FormInput
                type="text"
                name="userName"
                content="Your name"
            />
            <FormInput
                type="email"
                name="email"
                content="Email"
            />
            <FormInput
                type="password"
                name="password"
                content="Phone"
                tip="+38 (XXX) XXX - XX - XX"
            />
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