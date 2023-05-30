// react
import React from 'react';

// third-party
import { Link } from 'react-router-dom';

// application
import { connect } from 'react-redux';
import Indicator from './Indicator';
import { Person20Svg } from '../../svg';
// store
import { LOGOUT } from '../../store/auth/auth.types';

function IndicatorAccount(props) {
    const { dispatch } = props;
    function logoutUser() {
        dispatch({ type: LOGOUT });
    }

    const dropdown = (
        <div className="account-menu">
            <Link to="/account/dashboard" className="account-menu__user">
                <div className="account-menu__user-avatar">
                    <img src="images/avatars/profile-avatar.png" alt="avatar" />
                </div>
                <div className="account-menu__user-info">
                    <div className="account-menu__user-name">Helena Garcia</div>
                    <div className="account-menu__user-email">stroyka@example.com</div>
                </div>
            </Link>
            <div className="account-menu__divider" />
            <ul className="account-menu__links">
                <li><Link to="/account/profile">Edit Profile</Link></li>
                <li><Link to="/account/orders">Order History</Link></li>
                <li><Link to="/account/addresses">Addresses</Link></li>
                <li><Link to="/account/password">Password</Link></li>
            </ul>
            <div className="account-menu__divider" />
            <ul className="account-menu__links">
                <li>
                    <li>
                        <Link to="/account/login" onClick={logoutUser} onKeyDown={logoutUser}>
                            Logout
                        </Link>
                    </li>
                </li>
            </ul>
        </div>
    );

    return (
        <Indicator url="/account" dropdown={dropdown} icon={<Person20Svg />} />
    );
}

export default connect(() => ({}))(IndicatorAccount);
