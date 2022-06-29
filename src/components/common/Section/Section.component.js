import PropTypes from 'prop-types';
import s from './Section.module.scss'

const Section = ({ children, className }) => {
    return (
        <section
            className={`${s.section} ${className ?? ''}`}
        >
            {children}
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Section;