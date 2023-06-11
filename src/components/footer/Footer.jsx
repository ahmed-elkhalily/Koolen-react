// react
import React, { useEffect, useState } from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import ToTop from './ToTop';

// data stubs
// import theme from '../../data/theme';
import getFooterData from '../../api/footer';
import { toastError } from '../toast/toastComponent';
import BlockLoader from '../blocks/BlockLoader';

export default function Footer() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(() => {
        getFooterData((success) => {
            if (success) {
                setIsLoading(false);
                setData(success);
            } else {
                toastError(success);
            }
        }, (fail) => {
            setIsLoading(false);
            toastError(fail);
        });
    }, []);

    // console.log('footerData: ', data);

    const informationLinks = [
        { title: 'About Us', url: '/site/about-us' },
        { title: 'Contact Us', url: '/site/contact-us' },
        { title: 'Terms And Conditions', url: '/site/terms' },
        { title: 'FAQs', url: '/site/faq' },
    ];

    const accountLinks = [
        { title: 'Dashboard', url: '/account/dashboard' },
        { title: 'Edit Profile', url: '/account/profile' },
        { title: 'Order History', url: '/account/orders' },
        { title: 'Addresses', url: '/account/addresses' },
    ];

    if (isLoading) return <BlockLoader />;
    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <FooterContacts data={data} />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <FooterLinks title="Information" data={data} items={informationLinks} />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <FooterLinks title="My Account" data={data} items={accountLinks} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <FooterNewsletter data={data} />
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright">
                        {data?.copyright_text}
                    </div>
                    <div className="site-footer__payments">
                        <img src="images/payments.png" alt="" />
                    </div>
                </div>
            </div>
            <ToTop />
        </div>
    );
}
