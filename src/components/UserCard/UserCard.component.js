import PropTypes from 'prop-types';
import Avatar from './Avatar/Avatar.component';
import s from './UserCard.module.scss';
import UserInfo from './UserInfo/UserInfo.component';

const UserCard = ({ className, user }) => {
    const { photo, ...restValues} = user;
    
    return (
        <article
            className={`${s.card} ${className ?? ''}`}
        >
            <Avatar
                url={photo}
                className={s.avatar}
            />
            <UserInfo {...restValues}/>
        </article>
    )
}

UserCard.propTypes = {
    className: PropTypes.string,
}

export default UserCard;