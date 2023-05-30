// react
import React, { useState } from 'react';
import { connect } from 'react-redux';

// third-party
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';

// apis
import { loginUser, signUpUser } from '../../api/auth';
// store
import { LOGIN } from '../../store/auth/auth.types';
import { toastError, toastSuccess } from '../toast/toastComponent';

function AccountPageLogin(props) {
    // props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regName, setRegName] = useState('');
    const [regphone, setRegPhone] = useState('');
    const [regPass, setRegPass] = useState('');
    const [regMatchingPass, setRegMatchingPass] = useState('');
    const { dispatch } = props;

    const breadcrumb = [
        { title: 'Home', url: '/' },
        { title: 'My Account', url: '' },
    ];

    function resetData() {
        setRegEmail('');
        setRegName('');
        setRegPhone('');
        setRegPass('');
        setRegMatchingPass('');
    }

    function submitLogin(e) {
        e.preventDefault();
        loginUser({ email, password }, (success) => {
            if (success.success) {
                const { access_token: token, user } = success;
                dispatch({ type: LOGIN, payload: { token, user } });
            } else {
                toastError(success);
            }
        }, (fail) => {
            toastError(fail);
        });
    }

    function register(e) {
        e.preventDefault();
        signUpUser({
            name: regName, email: regEmail, password: regPass, phone: regphone,
        }, (success) => {
            if (success.success) toastSuccess(success);
            resetData();
        },
        (fail) => {
            toastError(fail);
        });
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Login — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header="My Account" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="card flex-grow-1 mb-md-0">
                                <div className="card-body">
                                    <h3 className="card-title">Login</h3>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="login-email">Email address</label>
                                            <input
                                                id="login-email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="login-password">Password</label>
                                            <input
                                                id="login-password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <small className="form-text text-muted">
                                                <Link to="/">Forgotten Password</Link>
                                            </small>
                                        </div>
                                        <button type="submit" onClick={submitLogin} className="btn btn-primary mt-2 mt-md-3 mt-lg-4">
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex mt-4 mt-md-0">
                            <div className="card flex-grow-1 mb-0">
                                <div className="card-body">
                                    <h3 className="card-title">Register</h3>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter Name"
                                                value={regName}
                                                onChange={(e) => setRegName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                id="phone"
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                placeholder="Enter Phone"
                                                value={regphone}
                                                onChange={(e) => setRegPhone(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-email">Email address</label>
                                            <input
                                                id="register-email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter email"
                                                value={regEmail}
                                                onChange={(e) => setRegEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-password">Password</label>
                                            <input
                                                id="register-password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={regPass}
                                                onChange={(e) => setRegPass(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="register-confirm">Repeat Password</label>
                                            <input
                                                id="register-confirm"
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={regMatchingPass}
                                                onChange={(e) => setRegMatchingPass(e.target.value)}
                                            />
                                        </div>
                                        <button onClick={register} type="submit" className="btn btn-primary mt-2 mt-md-3 mt-lg-4">
                                            Register
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    console.log('state: ', state);
    return {
        auth: state,
    };
}
export default connect(mapStateToProps)(AccountPageLogin);
