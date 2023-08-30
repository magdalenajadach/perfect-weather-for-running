import "./Card.scss";

export default function Card({ inputs }) {
  return (
    <div className="cards">
      {inputs.map((input) => {
        return (
          <div className="card">
            <h2>Name: {input.title}</h2>
            <p>Desc: {input.description}</p>
            <div className="card__image">
              <img alt="" src={input.image} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
