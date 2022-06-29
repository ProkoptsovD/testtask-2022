import PropTypes from 'prop-types';
import s from './UserInfo.module.scss'

const defaultProps = {
    name: '',
    job: '',
    location: '',
    contacts: '',
}

const UserInfo = ({ name, job, location, contacts} = defaultProps) => {
    return (
        <>
            <p className={s.name}>
                {name}
            </p>
            <p>
                {job}
            </p>
            <p>
                {location}
            </p>
            <p>
                {contacts}
            </p>
        </>
    )
}

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    contacts: PropTypes.string.isRequired,
}

export default UserInfo;