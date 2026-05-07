import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          type="url"
          name="avatar"
          id="avatar-link"
          className="popup__input"
          placeholder="Enlace de la imagen"
          required
          ref={avatarRef}
        />
        <span className="popup__error"></span>
      </label>
      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
