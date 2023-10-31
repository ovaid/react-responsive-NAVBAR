import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../Styles/Navbar.css";

const Navbar = () => {
  const [setHomeState, setHomeFunc] = useState(false);
  const [setAboutState, setAboutFunc] = useState(false);
  const [setContactState, setContactFunc] = useState(false);
  const { t, i18n } = useTranslation();
  const languages = ["English","Afrikaans", "Albanian", "Amharic", "Arabic", "Armenian", "Assamese", "Aymara", "Azerbaijani", "Bambara", "Basque", "Belarusian", "Bengali", "Bhojpuri", "Bosnian", "Bulgarian", "Catalan", "Cebuano", "Chichewa", "Chinese", "Corsican", "Croatian", "Czech", "Danish", "Dhivehi", "Dogri", "Dutch", "Esperanto", "Estonian", "Ewe", "Filipino", "Finnish", "French", "Frisian", "Galician", "Georgian", "German", "Greek", "Guarani", "Gujarati", "Haitian Creole", "Hausa", "Hawaiian", "Hebrew", "Hindi", "Hmong", "Hungarian", "Icelandic", "Igbo", "Ilocano", "Indonesian", "Irish", "Italian", "Japanese", "Javanese", "Kannada", "Kazakh", "Khmer", "Kinyarwanda", "Konkani", "Korean", "Krio", "Kurdish (Kurmanji)", "Kurdish (Sorani)", "Kyrgyz", "Lao", "Latin", "Latvian", "Lingala", "Lithuanian", "Luganda", "Luxembourgish", "Macedonian", "Maithili", "Malagasy", "Malay", "Malayalam", "Maltese", "Maori", "Marathi", "Meiteilon (Manipuri)", "Mizo", "Mongolian", "Myanmar (Burmese)", "Nepali", "Norwegian", "Odia (Oriya)", "Oromo", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Quechua", "Romanian", "Russian", "Samoan", "Sanskrit", "Scots Gaelic", "Sepedi", "Serbian", "Sesotho", "Shona", "Sindhi", "Sinhala", "Slovak", "Slovenian", "Somali", "Spanish", "Sundanese", "Swahili", "Swedish", "Tajik", "Tamil", "Tatar", "Telugu", "Thai", "Tigrinya", "Tsonga", "Turkish", "Turkmen", "Twi", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese", "Welsh", "Xhosa", "Yiddish", "Yoruba", "Zulu"];
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showLanguageList, setShowLanguageList] = useState(false);

  const moveMouseHome = () => {
    setHomeFunc(true);
    setAboutFunc(false);
    setContactFunc(false);
  };

  const moveMouseAbout = () => {
    setHomeFunc(false);
    setContactFunc(false);
    setAboutFunc(true);
  };

  const moveMouseContact = () => {
    setHomeFunc(false);
    setContactFunc(true);
    setAboutFunc(false);
  };

  const leaveMouse = () => {
    setHomeFunc(false);
    setAboutFunc(false);
    setContactFunc(false);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguageList(false);
  };

  return (
    <div className="container-fluid bg-primary" id="navSection">
      <div className="img">
        <a href="#">
          <img
            id="logoImage"
            data-v-4f9eb2f4=""
            src="https://cdn.airalo.com/assets/images/svg/Logo.svg?w=149&amp;h=44"
            width="150"
            height="auto"
            alt="Airalo logo"
            loading="eager"
            className="w-auto"
          />
        </a>
        <div className="vertical-line"></div>
        <a href="/" className="store">
          <img
            className="img1"
            src="https://thumbs.dreamstime.com/b/vector-shopping-bag-logo-icon-blue-letter-s-detailed-illustration-isolated-white-141489270.jpg"
            alt="notLoaded"
            width="50"
            height="auto"
            loading="eager"
            className="w-auto"
          />
        </a>
        <a href="#" className="namestore">
          Store
        </a>
      </div>

      <div className="Nav">
        <ul className="menu-bar">
          <li className="home" onMouseEnter={moveMouseHome} onMouseLeave={leaveMouse}>
            Partner with Us
            {setHomeState && (
              <ul className="sub-menu1" id="sub-menu1">
                <a href="#">
                  <li>Airalo Partner Hub</li>
                </a>{" "}
                <hr />
                <a href="#">
                  <li>Affiliate Partners</li>
                </a>
                <hr />
                <a href="#">
                  <li>Distribution Partners</li>
                </a>
                <hr />
                <a href="#">
                  <li>API Partners</li>
                </a>
                <hr />
                <a href="#">
                  <li>Airalo for Corporates</li>
                </a>
              </ul>
            )}
          </li>
          <div className="vertical-line" id="vertical"></div>
          <li className="about" onMouseEnter={moveMouseAbout} onMouseLeave={leaveMouse}>
            About Us
            {setAboutState && (
              <ul className="sub-menu2" id="sub-menu2">
                <a href="#">
                  <li>About Airalo</li>
                </a>
                <hr />
                <a href="#">
                  <li>Impact</li>
                </a>
                <hr />
                <a href="#">
                  <li>Newsroom</li>
                </a>
                <hr />
                <a href="#">
                  <li>Mediacenter</li>
                </a>
              </ul>
            )}
          </li>
          <div className="vertical-line" id="vertical"></div>
          <a href="#" className="signin">
            <li className="contact">
              <img
                className="login"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRofAXtp3QXsRmHBtNa24ki4fD8ndgbolynyaTxPCn5fFn7eo5yqtOfrB-l8G_b9s-74&usqp=CAU"
                width="16"
                height="auto"
              />
            </li>
            <a href="#">Log in/Sign up</a>
          </a>
          <div className="vertical-line" id="vertical"></div>
          <div className="languages">
            <li className="contact">
              <img
                className="globe"
                src="https://i.pinimg.com/474x/71/a9/05/71a9050b5e4c4da52290a635028e6d93.jpg"
                width="30"
                height="auto"
              />
            </li>
            <select className="dropdown"
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
