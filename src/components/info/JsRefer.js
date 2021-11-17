import React from 'react';
import PropTypes from 'prop-types';
import { Link } from  'react-router-dom';

function JsRefer({id, title, desc1, desc2, syntax, definition}){
    return (
        <li>
            <Link to ={{ pathname: "refer-detail", state: {id, title,desc1, desc2, syntax, definition} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc1">{desc1}</span>
                <span className="desc2">{desc2}</span>
                <span className="syntax">{syntax}</span>
                <span className="definition">{definition}</span>
            </Link>
        </li>
    )
}
JsRefer.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    desc1: PropTypes.string.isRequired, 
    desc2: PropTypes.string.isRequired, 
    syntax: PropTypes.string.isRequired, 
    definition: PropTypes.array.isRequired,
}
export default JsRefer;