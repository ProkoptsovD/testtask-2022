import PropTypes from 'prop-types';
import s from './UserInfo.module.scss'

const defaultProps = {
    name: '',
    position: '',
    location: '',
    contacts: '',
}

const UserInfo = ({ name, position, phone, email} = defaultProps) => {
    return (
        <>
            <p className={s.name}>
                {name}
            </p>
            <p>
                {position}
            </p>
            <p>
                {email}
            </p>
            <p>
                {phone}
            </p>
        </>
    )
}

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default UserInfo;