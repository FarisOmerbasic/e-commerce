import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import CartIcon from "../../components/card-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss"
import { SignOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>

                <div className="nav-link-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>

                    {currentUser ? (
                        <span className="nav-link" onClick={SignOutUser}>SIGN OUT </span>
                    ) : (<Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                    )}
                    <CartIcon />


                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;