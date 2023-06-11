// react
import React from 'react';

// data stubs

export default function FooterContacts({ data }) {
    return (
        <div className="site-footer__widget footer-contacts">
            <h5 className="footer-contacts__title">Contact Us</h5>
            <ul className="footer-contacts__contacts">
                <li>
                    <i className="footer-contacts__icon fas fa-globe-americas" />
                    {data?.contact_info.contact_address}
                </li>
                <li>
                    <i className="footer-contacts__icon far fa-envelope" />
                    {data?.contact_info.contact_email}
                </li>
                <li>
                    <i className="footer-contacts__icon fas fa-mobile-alt" />
                    {`${data?.contact_numbers.contact_phone} - ${data?.contact_numbers.customers_service_number}`}
                </li>
                {/* <li> */}
                {/* <i className="footer-contacts__icon far fa-clock" /> */}
                {/* Mon-Sat 10:00pm - 7:00pm */}
                {/* </li> */}
            </ul>
        </div>
    );
}
