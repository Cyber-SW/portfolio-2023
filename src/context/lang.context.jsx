import { useState, createContext } from "react";
import PropTypes from "prop-types";
const LanguageContext = createContext();

function LanguageProviderWrapper(props) {
  const [language, setLanguage] = useState("EN");

  function toggleLanguage(e) {
    if (e.target.id === "DE" && language === "EN") {
      setLanguage("DE");
    } else if (e.target.id === "EN" && language === "DE") {
      setLanguage("EN");
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
}

LanguageProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageContext, LanguageProviderWrapper };
