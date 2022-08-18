import React from 'react';

function Header(props) {
    let name = props.name;
    let avatar = name.slice(0,1).toUpperCase();
    return(
        <div id="TopBar">
            <div className="avatar"><p>{avatar}</p></div>
            <div className="name">{name}</div>
            <div className="menu">
                <div className="dots"></div>
            </div> 
        </div>
    )
}

export default Header;