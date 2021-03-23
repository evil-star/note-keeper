import React from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => {
    return (
        <Link to="/" style={{ margin: 24, display: "flex" }}>
            <Image src={logo} preview={false} />
        </Link>
    );
};

export default Logo;
