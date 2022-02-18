import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

function Header() {

  const [{basket}, dispatch] = useStateValue();

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className='header'>
      <Link to={"/"}>
        <img
          className='header__logo' 
          src='https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png' 
          alt='amazon logo'
        />
      </Link>

      <div className='header__search'>
        <input
        className='header__searchInput'
        type='text' />
        <SearchIcon
        className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={'/login'} >
        <div className='header__option'>
          <span className='header__optionLineOne'>
            Hello {user? name  : 'Guest'}
          </span>
          <span className='header__optionLineTwo'>
            {user? 'Sign Out' : 'Sign In'}
          </span>
        </div>
        </Link>
        
        <Link to={'/orders'} >
        <div className='header__option'>
          <span className='header__optionLineOne'>
            Returns
          </span>
          <span className='header__optionLineTwo'>
            & Orders
          </span>
        </div>
        </Link>

        <div className='header__option'>
          <span className='header__optionLineOne'>
            Your
          </span>
          <span className='header__optionLineTwo'>
            Prime
          </span>
        </div>

        <Link to={"/checkout"}>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header