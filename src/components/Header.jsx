import React from "react";
import "../styles/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StoreIcon className="header_logoImage" fontSize="large" />
          <h2 className="header_logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="nav_item">
        <span className="nav_itemlineone">Hello Guest</span>
        <span className="nav_itemlinetwo">Sign In</span>
      </div>
      <div className="nav_item">
        <span className="nav_itemlineone">Your</span>
        <span className="nav_itemlinetwo">Shop</span>
      </div>
      <Link to="/checkout" style={{ textDecoration: "none" }}>
        <div className="nav_item">
          <ShoppingBasketIcon
            fontSize="large"
            className="nav_itemLineTwo nav_basketCount"
          />
          <span className="nav_itemlineone">0</span>
        </div>



      </Link>

    </div>
  );
};

export default Header;
