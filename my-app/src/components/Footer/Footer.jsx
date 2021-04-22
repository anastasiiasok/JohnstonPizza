import React from "react";
import "./Footer.css";

const footerLinks = [
  {
    title: "Get to Know Us",
    list: ["About Us", "Connect with Us", "Johnston Cares", "Gift a Smile"],
  },
  {
    title: "Career",
    list: ["Work with us", "Advertise Products", "› See More"],
  },
  {
    title: "Johnston Payment",
    list: ["Payment policy", "Shop with Points", "Reload Your Balance"],
  },
  {
    title: "Let Us Help You",
    list: ["Johnston Pizza and COVID-19", "Return & Policies"],
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <strong>Disclaimer:</strong> Any Delivery Charge is not a tip paid to
        your driver. Please reward your driver for awesomeness. Drivers carry
        less than $20. You must ask for this limited time offer. Minimum
        purchase required for delivery. Delivery charge and tax may apply.
        Prices, participation, delivery area and charges may vary. Returned
        checks, along with the state's maximum allowable returned check fee, may
        be electronically presented to your bank. ©2021 Johnston's IP Holder
        LLC. and the game piece logo are registered trademarks of Johnston's IP
        Holder LLC. "Coca-Cola" and the Contour Bottle design are registered
        trademarks of The Coca-Cola Company.
      </div>
      <div className="footer__links">
        {footerLinks.map((link) => (
          <div className="footer__row">
            <h6>{link.title}</h6>
            <ul>
              {link.list.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <img width="100" src="./img/logo.png" alt="Pizza logo" />
      <span className="footer__copy">
        &copy; 2020 | Developed by{" "}
        <a href="https://github.com/anastasiiasok">Anastasiia Soktoeva</a>
        <br></br>
        <br></br>
      </span>
    </div>
  );
}
export default Footer;
