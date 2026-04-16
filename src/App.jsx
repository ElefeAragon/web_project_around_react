import "./App.css";

function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img
          alt="Logotipo Around The U.S."
          className="logo header__logo"
          src="/images/logo.svg"
        />
      </header>

      <main className="content">
        <section className="profile page__section">
          <div className="profile__avatar-container">
            <img
              className="profile__image"
              src="/images/avatar.jpg"
              alt="Avatar"
            />
            <div className="profile__overlay"></div>
          </div>

          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
            ></button>
            <p className="profile__description">Explorador</p>
          </div>

          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
          ></button>
        </section>

        <section className="cards page__section">
          <ul className="elements"></ul>
        </section>
      </main>

      <footer className="footer page__section">
        <p className="footer__copyright">© 2025 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
