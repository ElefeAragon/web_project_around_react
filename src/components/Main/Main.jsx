import avatar from "../../images/avatar.jpg";

function Main() {
  return (
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

      <section className="cards page__section">
        <ul className="elements"></ul>
      </section>
    </main>
  );
}

export default Main;
