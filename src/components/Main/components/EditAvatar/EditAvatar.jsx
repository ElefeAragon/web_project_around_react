import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  // 🔥 usamos ref en lugar de useState
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
          ref={avatarRef} // 🔥 AQUÍ está la clave
          className="popup__input popup__input_type_avatar"
          type="url"
          name="avatar"
          placeholder="URL de la imagen"
          required
        />
        <span className="popup__error"></span>
      </label>

      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
