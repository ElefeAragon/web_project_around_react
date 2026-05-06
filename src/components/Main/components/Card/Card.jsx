import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card(props) {
  const { card, handleOpenPopup, onCardLike, onCardDelete } = props;
  const { name, link, likes = [] } = card;

  const currentUser = useContext(CurrentUserContext);

  const isLiked =
    currentUser && likes.some((user) => user._id === currentUser._id);

  //Popup imagen
  const imagePopup = {
    title: null,
    children: <img src={link} alt={name} className="popup__image" />,
  };

  //Like
  function handleLikeClick() {
    onCardLike(card);
  }

  //Delete
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      {/* IMAGE */}
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imagePopup)}
      />

      {/* DELETE */}
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={handleDeleteClick}
      />

      {/* INFO */}
      <div className="card__description">
        <h2 className="card__title">{name}</h2>

        {/* LIKE */}
        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${
            isLiked ? "card__like-button_active" : ""
          }`}
          onClick={handleLikeClick}
        />
      </div>
    </li>
  );
}
