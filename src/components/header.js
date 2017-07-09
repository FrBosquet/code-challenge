import React from 'react';

const Header = ({title}) =>{
  // console.log(this.props.title);
  return (
    <header>
      <h1 className="header-title">
        {title}
      </h1>
    </header>
  );
}

export default Header;
