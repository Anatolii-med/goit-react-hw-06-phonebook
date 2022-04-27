import React from 'react';
import { SectionWrap } from './section.styled';
import PropTypes from 'prop-types';

function Section({ title, children }) {
    return (
        <SectionWrap>
            <h2>{title}</h2>
            {children}
        </SectionWrap>
    );
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
};
