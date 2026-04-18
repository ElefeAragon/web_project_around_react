import logo from "./images/logo.svg";
import avatar from "./images/avatar.jpg";

function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img
          src={logo}
          alt="Around the U.S logo"
          className="logo header__logo"
        />
      </header>

      <main className="content">
        <section className="profile page__section">
          <div className="profile__avatar-container">
            <img className="profile__image" src={avatar} alt="Avatar" />
            <div className="profile__overlay"></div>
          </div>

          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button className="profile__edit-button" type="button"></button>
            <p className="profile__description">Explorador</p>
          </div>

          <button className="profile__add-button" type="button"></button>
        </section>
      </main>
    </div>
  );
}

export default App;
