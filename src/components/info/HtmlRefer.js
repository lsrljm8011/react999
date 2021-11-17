import React from 'react';
import PropTypes from 'prop-types';
import { Link } from  'react-router-dom';

function HtmlRefer({link, id, title, desc1, desc2, element, use, tag, version, view, definition}){
    return (
        <li>
            <Link to ={{ pathname: "refer-detail", state: {link, id, title, desc2, element, use, tag, version, view, definition} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{element}</span>
            </Link>
        </li>
    )
}
HtmlRefer.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    desc1: PropTypes.string.isRequired, 
    desc2: PropTypes.string.isRequired, 
    use: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    version: PropTypes.string.isRequired, 
    view: PropTypes.string.isRequired, 
    element: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,
}
export default HtmlRefer;