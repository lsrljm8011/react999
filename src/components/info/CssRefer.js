import React from 'react';
import PropTypes from 'prop-types';
import { Link } from  'react-router-dom';

function CssRefer({id, title, desc1, default1, use, apply, version, definition}){
    return (
        <li>
            <Link to ={{ pathname: "refer-detail", state: {id, title, default1, desc1, apply, use, version, definition} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc1">{desc1}</span>
            </Link>
        </li>
    )
}
CssRefer.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    default1: PropTypes.string.isRequired, 
    desc1: PropTypes.string.isRequired, 
    apply: PropTypes.string.isRequired, 
    use: PropTypes.string.isRequired, 
    version: PropTypes.string.isRequired, 
    definition: PropTypes.array.isRequired,
}
export default CssRefer;