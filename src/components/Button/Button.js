import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.module.css';

export const Button = ({
                    children, className, disabled, active, ...attrs
                }) => {

    const disabling = disabled ? 'disabled' : 'active';

    const classes = classNames(
        styles['btn'],
        styles[className],
        styles[disabling]
    );

    const Tag = attrs.href ? 'a' : 'button';

    return (
        <div className={styles.ButtonWrapper}>
            <Tag
                className={classes}
                disabled={disabled}
                {...attrs}
            >
                {children}
            </Tag>
        </div>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Default button',
    className: '',
    disabled: false,
    active: false,
}
