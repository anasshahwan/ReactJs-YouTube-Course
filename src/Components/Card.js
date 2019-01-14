import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    console.log('---------------- This is card Props ---------------')
    const { likes } = props;

    return <div>Likes Number {likes } and comment {props.commments}</div>;
}


export default Card;

Card.propTypes  = {
    numbers: PropTypes.array,
    likes : PropTypes.node

}
