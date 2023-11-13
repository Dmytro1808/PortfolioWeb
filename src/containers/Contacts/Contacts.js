import "./Contacts.css";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>
                <Link
                  to="https://www.google.com/maps?q=Sligo,Ireland"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sligo, Ireland
                </Link>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp / Viber</h2>
              <Link to="tel:+380631717422" className="mailto">
                +380631717422
              </Link>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <Link to="mailto:darknegs8@gmail.com" className="mailto">
                darknegs8@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Contacts;
