import PropTypes from 'prop-types';
import s from './Avatar.module.scss';

const defaultUrl = 'https://via.placeholder.com/70';

const Avatar = ({ url, className }) => {
    return (
        <img
            src={url ?? defaultUrl}
            alt='User avatar'
            className={`${s.avatar} ${className ?? ''}`}
        />
    )
}

Avatar.propTypes = {
    url: PropTypes.string,
    className: PropTypes.string
}

export default Avatar;