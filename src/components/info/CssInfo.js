import React from 'react';
import PropTypes from 'prop-types';
import { Link } from  'react-router-dom';

function CssInfo({link, id, title, desc1, default1, apply, version, use, definition}){
    return (
        <li>
            <Link to ={{ pathname: "refer-detail", state: {link, id, title, desc1, default1, apply, version, use, definition} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc1}</span>
            </Link>
        </li>
    )
}
CssInfo.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    desc1: PropTypes.string.isRequired, 
    default1: PropTypes.string.isRequired, 
    apply: PropTypes.string.isRequired, 
    version: PropTypes.string.isRequired, 
    definition: PropTypes.array.isRequired,
}
export default CssInfo;