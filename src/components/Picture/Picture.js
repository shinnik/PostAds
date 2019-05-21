import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Picture.module.css';

export const Picture = ({src, className, clickable}) => {

    const classes = classNames(
        styles['Picture'],
        styles[className]
    );

    const Tag = clickable ? 'a' : 'div';
    return (
        <>
            { src &&  <Tag className={styles.Tag} target="_blank" href={src}>
                <img className={classes} src={src} alt='image'/>
            </Tag> }
        </>
    )

}

Picture.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    clickable: PropTypes.bool
}

Picture.defaultProps = {
    className: '',
    clickable: false
}
