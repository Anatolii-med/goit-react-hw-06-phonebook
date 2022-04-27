import React from 'react';
import { Elements } from './contactList.styled';
import PropTypes from 'prop-types';

function ContactList({ contList, deleteCont }) {
    return contList.map(({ id, name, number }) => {
        return (
            <Elements key={id}>
                {name}:{number}
                <button onClick={() => deleteCont(id)}>Delete</button>
            </Elements>
        );
    });
}

export default ContactList;

ContactList.propTypes = {
    key: PropTypes.string,
    onClick: PropTypes.func,
};
