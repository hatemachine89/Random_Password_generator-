import React from "react";
import propTypes from 'prop-types';

function Checkbox(props) {


    Checkbox.propTypes = {
        id: propTypes.string,
        title: propTypes.string,
        onChange: propTypes.func,
        state: propTypes.bool
    }

    return ( <
        div >
        <
        label className = "checkbox_container"
        for = {
            props.id
        } > {
            props.title
        } <
        input type = "checkbox"
        class = "checkbox"
        onChange = {
            props.onChange
        }
        checked = {
            props.state
        }
        id = {
            props.id
        }
        /> <
        span class = "check_icon" > < /span> <
        /label> <
        /div>

    );



}

export default Checkbox;