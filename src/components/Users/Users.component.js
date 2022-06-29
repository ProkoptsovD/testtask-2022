import Button from "../common/Button/Button.component";
import Container from "../common/Container/Container.component";
import Heading from "../common/Heading/Heading.component";
import Section from "../common/Section/Section.component";
import UserCard from "../UserCard";
import s from './Users.module.scss';

const Users = () => {
    
    const renderUserList = (data) => data.map(user => (
        <li className={s.list_item}>
            <UserCard />
        </li>
    ))

    return (
        <Section
            className={s.container}
        >
            <Container>
                <Heading
                    type='h2'
                    className={s.heading}
                >
                    Working with GET request
                </Heading>
                <ul className={s.user_list}>
                    {/* {renderUserList()} */}
                </ul>
                <Button
                    className={s.btn}
                >
                    Show more
                </Button>
            </Container>
        </Section>
    )
}

export default Users;