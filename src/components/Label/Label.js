import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Label.module.css';

export const Label = ({className, htmlFor, children, ...attrs}) => {

    const classes = classNames(
        styles[className],
        styles['Label']
    )

    return (
        <label htmlFor={htmlFor} className={classes} {...attrs}>{children}</label>
    )
};

Label.propTypes = {
    className: PropTypes.string,
    htmlFor: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

Label.defaultProps = {
    className: '',
    htmlFor: null,
    children: ''
};
