import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="../../../public/img/vn.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>VND</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Man
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to={'/'}>
            NBH Store
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to={'/'}>
              Home Page
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={'/'}>
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={'/'}>
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={'/'}>
              Stores
            </Link>
          </div>
          <div className="icon">
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />
            <div className="cardIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
