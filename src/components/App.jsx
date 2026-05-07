import { useEffect, useState } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  //usuario
  const [currentUser, setCurrentUser] = useState({});
  //tarjetas
  const [cards, setCards] = useState([]);
  //popup
  const [popup, setPopup] = useState(null);
  //cargar usuario
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch(console.error);
  }, []);
  //cargar tarjetas
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch(console.error);
  }, []);
  //abrir popup
  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }
  //cerrar popup
  function handleClosePopup() {
    setPopup(null);
  }
  //editar perfil
  function handleUpdateUser(data) {
    api
      .editUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch(console.error);
  }
  //editar avatar
  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch(console.error);
  }
  //agregar tarjeta
  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch(console.error);
  }
  //like
  function handleCardLike(card) {
    const isLiked = card.isLiked;

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch(console.error);
  }
  //eliminar tarjeta
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
      }}
    >
      <div className="page__content">
        <Header />

        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
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