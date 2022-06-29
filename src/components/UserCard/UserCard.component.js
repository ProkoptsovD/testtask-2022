import PropTypes from 'prop-types';
import Avatar from './Avatar/Avatar.component';
import s from './UserCard.module.scss';
import UserInfo from './UserInfo/UserInfo.component';

const UserCard = ({ className }) => {

    return (
        <article
            className={`${s.card} ${className ?? ''}`}
        >
            <Avatar
                className={s.avatar}
            />
            <UserInfo />
        </article>
    )
}

UserCard.propTypes = {
    className: PropTypes.string,
}

export default UserCard;