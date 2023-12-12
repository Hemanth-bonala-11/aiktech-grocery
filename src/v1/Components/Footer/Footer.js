import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Footer.scss";
import fbIcon from "../../Assets/Images/navbar/facebook.svg";
import instaIcon from "../../Assets/Images/navbar/instagram.svg";
import linkedinIcon from "../../Assets/Images/navbar/linkedin.svg";
import { SOCIALMEDIA_LINKS } from "../../Assets/Constant";
import { fetchTenant } from "../../Api/tenantAPi";
const mapStateToProps = ({ categories, auth }) => ({
  categories,
  auth,
});

const Footer = () => {
  //   const { auth } = useSelector(mapStateToProps);
  //   const { showLoginPopup = false, isLoggedIn, userDetails = {} } = auth;
  const [ title, setTitle ] = useState("")
  const [ customDomain, setCustomDomain ] = useState("")
  const current_year = new Date().getFullYear();
  const {
    categories: { list: categoryList = [] },
    auth,
  } = useSelector(mapStateToProps);
  const { isLoggedIn } = auth;

  useEffect(async ()=>{
    const response = await fetchTenant();
    console.log(response.data,"tenant details");
    setTitle(response.data.title);
    setCustomDomain(response.data.custom_domain)
  },[])

  const formattedCategories = categoryList;
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content-wrapper">
          <div className="footer-content footer-aboutus">
            <p className="footer-head">About Us</p>
            <p>
             {title} has been delighting customers for years.
              Find the widest collection and get free delivery on every order.
              Order through {customDomain}
            </p>
          </div>

          <div className="footer-content footer-contact footer-links">
            <div>
              <ul>
                <li>
                  <p className="footer-head">Useful Link</p>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#Aboutus"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#TermsConditions"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#PhurtiDeliveryServices"
                  >
                    {title} Delivery Services
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#PaymentMethods"
                  >
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#ReturnPolicy"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#PrivacyPolicy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#ContactUs"
                  >
                    Contact Information
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-content footer-contact">
            <div>
              <ul>
                <li>
                  <p className="footer-head">Contact</p>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={SOCIALMEDIA_LINKS['FACEBOOK']}
                  >
                    <img className="social" src={fbIcon} alt="" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={SOCIALMEDIA_LINKS['INSTAGRAM']}
                  >
                    <img className="social" src={instaIcon} alt="" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={SOCIALMEDIA_LINKS['LINKEDIN']}
                  >
                    <img className="social" src={linkedinIcon} alt="" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:ziyuzabi@gmail.com">
                    E-mail us at <br /> ziyuzabi@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isLoggedIn && (
          <div className="footer-content footer-categories">
            <p className="footer-head">Categories</p>
            <div>
              <ul>
                {formattedCategories && formattedCategories.length > 0 ? (
                  <>
                    {formattedCategories.map((category, index) => {
                      if (index <= formattedCategories.length / 2) {
                        return (
                          <Link
                            className="cursor category-link"
                            to={`/categories/${category.name}`}
                            key={category.name}
                          >
                            <li>{category.name}</li>
                          </Link>
                        );
                      }
                    })}
                  </>
                ) : null}
              </ul>
              <ul>
                {formattedCategories && formattedCategories.length > 0 ? (
                  <>
                    {formattedCategories.map((category, index) => {
                      if (index > formattedCategories.length / 2) {
                        return (
                          <Link
                            className="cursor category-link"
                            to={`/categories/${category.name}`}
                            key={category.name}
                          >
                            <li>{category.name}</li>
                          </Link>
                        );
                      }
                    })}
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        )}
      </div>
      <hr />
      <p>© {title} { current_year }</p>
    </div>
  );
};

export default Footer;
