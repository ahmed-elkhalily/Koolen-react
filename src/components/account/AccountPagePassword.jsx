// react
import React, { useState } from 'react';

// third-party
import { Helmet } from 'react-helmet-async';

// data stubs
import theme from '../../data/theme';

// api

export default function AccountPagePassword() {
    const [password, setPassword] = useState({
        current: '',
        new: '',
        reenter: '',
    });

    function onChange(e) {
        setPassword((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <div className="card">
            <Helmet>
                <title>{`Change Password — ${theme.name}`}</title>
            </Helmet>

            <div className="card-header">
                <h5>Change Password</h5>
            </div>
            <div className="card-divider" />
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="password-current">Current Password</label>
                            <input
                                type="password"
                                name="current"
                                className="form-control"
                                id="password-current"
                                placeholder="Current Password"
                                value={password.current}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-new">New Password</label>
                            <input
                                type="password"
                                name="new"
                                className="form-control"
                                id="password-new"
                                placeholder="New Password"
                                value={password.new}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password-confirm">Reenter New Password</label>
                            <input
                                type="password"
                                name="reenter"
                                className="form-control"
                                id="password-confirm"
                                placeholder="Reenter New Password"
                                value={password.reenter}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group mt-5 mb-0">
                            <button type="button" className="btn btn-primary">Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
