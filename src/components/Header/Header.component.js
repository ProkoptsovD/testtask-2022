import PropTypes from 'prop-types';
import Button from '../common/Button/Button.component';
import Container from '../common/Container/Container.component';
import Logo from '../common/Logo/Logo.component';
import s from './Header.module.scss';

const Header = ({ className }) => {
	return (
        <header className={`${s.header} ${className ?? ''}`}>
            <Container className={s.container}>
                <Logo
                    className={s.logo}
                />
                <Button
                    className={s.btn}
                >
                    Users
                </Button>
                <Button>
                    Sign up
                </Button>
            </Container>
        </header>
    )
};

Header.propTypes = {
    className: PropTypes.string,
}

export default Header;
