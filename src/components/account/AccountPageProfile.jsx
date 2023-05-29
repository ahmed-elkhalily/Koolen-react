// react
import React, { useState, useEffect } from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';

// apis
import { getUserInfo, editUserInfo } from '../../api/auth';
// components
import { toastError } from '../toast/toastComponent';

export default function AccountPageProfile() {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        getUserInfo((success) => {
            console.log(success);
        }, (fail) => {
            if (fail?.data?.message) {
                toastError(fail.data.message);
            }
        });
    }, []);

    function onChange(e) {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    function submit(e) {
        e.preventDefault();
        console.log('event: ', user);
        const {
            fullName, email, phone,
        } = user;
        editUserInfo({
            name: fullName, email, phone,
        }, (success) => { console.log(success); }, (fail) => { console.log(fail, 'fail'); });
    }

    return (
        <div className="card">
            <Helmet>
                <title>{`Profile — ${theme.name}`}</title>
            </Helmet>

            <div className="card-header">
                <h5>Edit Profile</h5>
            </div>
            <div className="card-divider" />
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                id="fullName"
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                name="fullName"
                                value={user.fullName}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-email">Email Address</label>
                            <input
                                id="profile-email"
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                                value={user.email}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-phone">Phone Number</label>
                            <input
                                id="profile-phone"
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                value={user.phone}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group mt-5 mb-0">
                            <button onClick={submit} type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
