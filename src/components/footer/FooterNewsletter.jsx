// react
import React from 'react';

// application
import SocialLinks from '../shared/SocialLinks';
// import { subscribe } from '../../api/footer';
// import { toastError, toastSuccess } from '../toast/toastComponent';

export default function FooterNewsletter({ data }) {
    // const [email, setEmail] = useState('');

    // function addEmail(e) {
    //     e.preventDefault();
    //     subscribe(email, (success) => {
    //         if (success.success) {
    //             toastSuccess(success);
    //         } else {
    //             toastError(success);
    //         }
    //     }, (fail) => { toastError(fail); });
    // }

    console.log('data: ', data);

    return (
        <div className="site-footer__widget footer-newsletter">
            <h5 className="footer-newsletter__title">Contact Us</h5>
            {/* <form className="footer-newsletter__form">
                <label className="sr-only" htmlFor="footer-newsletter-address">Email Address</label>
                <input
                    type="text"
                    className="footer-newsletter__form-input form-control"
                    id="footer-newsletter-address"
                    placeholder="Email Address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={addEmail} className="footer-newsletter__form-button btn btn-primary">Subscribe</button>
            </form> */}

            <div className="footer-newsletter__text footer-newsletter__text--social">
                Follow us on social networks
            </div>
            <SocialLinks data={data} className="footer-newsletter__social-links" shape="circle" />
        </div>
    );
}
