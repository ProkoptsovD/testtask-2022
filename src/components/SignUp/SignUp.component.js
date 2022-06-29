import PropTypes from 'prop-types';
import Container from '../common/Container/Container.component';
import Heading from '../common/Heading/Heading.component';
import Section from '../common/Section/Section.component';
import Form from './Form/Form.component';
import s from './SignUp.module.scss';

const SignUp = () => {
    return (
        <Section
            className={s.section}
        >
            <Container>
                <Heading type='h2'
                    className={s.heading}
                >
                    Working with POST request
                </Heading>
                <Form />
            </Container>
        </Section>
    )
}

export default SignUp;