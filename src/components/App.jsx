import { useEffect, useState } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

  // 🔄 cargar usuario
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch(console.error);
  }, []);

  // 🔓 abrir popup
  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  // ❌ cerrar popup
  function handleClosePopup() {
    setPopup(null);
  }

  // 🧠 editar perfil
  function handleUpdateUser(data) {
    api
      .editUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch(console.error);
  }

  // 🖼️ 🔥 EDITAR AVATAR (ESTO TE FALTABA)
  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data.avatar)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar, // 🔥 IMPORTANTE
      }}
    >
      <div className="page__content">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
