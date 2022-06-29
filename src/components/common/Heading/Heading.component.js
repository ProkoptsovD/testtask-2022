import PropTypes from 'prop-types';
import s from './Heading.module.scss';

const headingTypes = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
}

const Heading = ({ type, children, className }) => {
    switch(type) {
        case headingTypes.h1:
            return (
                <h1
                    className={`${s.heading} ${className ?? ''}`}
                >
                    {children}
                </h1>
            )
        case headingTypes.h2:
            return (
                <h2
                    className={`${s.heading} ${className ?? ''}`}
                >
                    {children}
                </h2>
            )
        case headingTypes.h3:
            return <h3>{children}</h3>
        case headingTypes.h4:
            return (
                <h4
                    className={`${s.heading} ${className ?? ''}`}
                >
                    {children}
                </h4>
            )
        case headingTypes.h5:
            return (
                <h5
                    className={`${s.heading} ${className ?? ''}`}
                >
                    {children}
                </h5>
            )
        case headingTypes.h6:
            return (
                <h6
                    className={`${s.heading} ${className ?? ''}`}
                >
                    {children}
                </h6>
            )
        default:
            throw new Error('There is no such heading tag')
    }
}

Heading.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Heading;