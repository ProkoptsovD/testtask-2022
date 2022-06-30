import Button from "../common/Button";
import Container from "../common/Container"
import Heading from "../common/Heading";
import Section from "../common/Section";
import s from './Hero.module.scss';

const Hero = () => {
    return (
        <Section className={s.section}>
            <Container className={s.container}>
                <Heading
                    type='h1'
                    className={s.heading}
                >
                    Test assignment for front-end developer
                </Heading>
                <p className={s.text}>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </p>
                <Button>
                    Sign up
                </Button>
            </Container>
        </Section>
    )
}

export default Hero;