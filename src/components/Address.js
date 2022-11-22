import "./address.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Address({ id }) {
  return (
    <section className="section-address" id={id}>
      <h2>Contacts</h2>
      <div className="address-data">
        <div className="contacts">
          <FontAwesomeIcon className="icon-contacts" icon={faPhone} />
          <div className="contacts-data">
            <a href="tel:+380984376036">
              <b>+380984376036</b>
            </a>
          </div>
        </div>
        <div className="contacts">
          <FontAwesomeIcon className="icon-contacts" icon={faEnvelope} />
          <div className="contacts-data">
            <a href="mailto:bogushevaolena@gmail.com">
              <b>bogusheff@gmail.com</b>
            </a>
          </div>
        </div>
        <div className="contacts">
          <FontAwesomeIcon className="icon-contacts" icon={faTwitter} />
          <div className="contacts-data">
            <b>Twitter</b>
            <a
              href="https://twitter.com/wordpress"
              className="contacts-data-description"
            >
              twitter.com/wordpress
            </a>
          </div>
        </div>
        <div className="contacts">
          <FontAwesomeIcon className="icon-contacts" icon={faFacebook} />
          <div className="contacts-data">
            <b>Facebook</b>
            <a
              href="https://www.facebook.com/olena.bogusheva"
              className="contacts-data-description"
            >
              facebook.com/olena.bogusheva
            </a>
          </div>
        </div>
        <div className="contacts">
          <FontAwesomeIcon className="icon-contacts" icon={faLinkedin} />
          <div className="contacts-data">
            <b>LinkedIn</b>
            <a
              href="https://www.linkedin.com/in/olena-bogusheva"
              className="contacts-data-description"
            >
              linkedin.com/in/olena-bogusheva
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Address;
