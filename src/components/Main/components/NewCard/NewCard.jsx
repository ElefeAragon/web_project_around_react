import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({
      name,
      link,
    });

    setName("");
    setLink("");
  }

  return (
    <form
      className="popup__form"
      id="new-card-form"
      name="card-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <label className="popup__field">
        <input
          type="text"
          name="name"
          id="card-name"
          className="popup__input popup__input_type_card-name"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <span className="popup__error card-name-error"></span>
      </label>

      <label className="popup__field">
        <input
          type="url"
          name="link"
          id="card-link"
          className="popup__input popup__input_type_url"
          placeholder="Enlace de la imagen"
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <span className="popup__error card-link-error"></span>
      </label>

      <button type="submit" className="popup__button">
        Crear
      </button>
    </form>
  );
}