import { useState, useEffect, useContext } from "react";

import Popup from "./components/Popup/Popup";
import NewCard from "./components/NewCard/NewCard";
import EditProfile from "./components/EditProfile/EditProfile";
import EditAvatar from "./components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({ onOpenPopup, onClosePopup, popup }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch(console.error);
  }, []);

  // ❤️ LIKE
  function handleCardLike(card) {
    const isLiked =
      Array.isArray(card.likes) &&
      card.likes.some((user) => user._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c)),
        );
      })
      .catch(console.error);
  }

  // 🗑️ DELETE
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(console.error);
  }

  // 📦 POPUPS
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  return (
    <main className="content">
      <section className="profile page__section">
        <div
          className="profile__avatar-container"
          onClick={() => onOpenPopup(editAvatarPopup)}
        >
          <img
            className="profile__image"
            src={currentUser?.avatar}
            alt="Avatar"
          />
        </div>

        <div className="profile__info">
          <h1>{currentUser?.name}</h1>

          <button
            className="profile__edit-button"
            onClick={() => onOpenPopup(editProfilePopup)}
          />

          <p>{currentUser?.about}</p>
        </div>

        <button
          className="profile__add-button"
          onClick={() => onOpenPopup(newCardPopup)}
        />
      </section>

      <section className="cards page__section">
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={onOpenPopup}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
