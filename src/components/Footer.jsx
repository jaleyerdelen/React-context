import React from "react";
import APIButton from "./components/APIButton";
import {ThemeContext} from "../context/ThemeContext";

function Footer (props) {
const themeContextAPI = React.useContext(ThemeContext);
const {bgColor, textColor, btnColor} = 
themeContextAPI.themeObj;
return (
<div className={[bgColor, textColor, "mb-5"]
.join (" ")}>
 <footer className="sticky">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted">© 2000-2021</small>
           
        </div>
        <div className="col-6 col-md">
          <h5>Bizi Tanı</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-info" href="#">
                Biz Kimiz
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
               Kurulum Hizmeti
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
                Kariyer
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
                Basın
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
               Taşıyıcı ol
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
               Tedarikçi ol
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Kategoriler</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-info" href="#">
               Kampanyalar
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
                Süper Fırsatlar
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
                Abajurlar
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
                Led Işıklı Dolaplar
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Yardım ve Destek</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-info" href="#">
                Destek Merkezi
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
                Sipariş Takibi
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
                Bizi arayın
              </a>
            </li>
            <li>
              <a className="link-info" href="#">
                Üye Girişi Yap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
);
}

export default Footer;