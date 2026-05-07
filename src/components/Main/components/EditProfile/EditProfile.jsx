import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser?.name || "");
    setDescription(currentUser?.about || "");
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      {/* ❌ ELIMINAMOS EL H2 DE AQUÍ */}

      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          type="text"
          name="userName"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error"></span>
      </label>

      <label className="popup__label">
        <input
          className="popup__input popup__input_type_description"
          type="text"
          name="userDescription"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className="popup__error"></span>
      </label>

      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
