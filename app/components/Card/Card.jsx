export default function Card({ inputs }) {
  return (
    <div className="">
      {inputs.map((input) => {
        return (
          <div>
            <h2>{input.title}</h2>
            <p> desc: {input.description}</p>
          </div>
        );
      })}
    </div>
  );
}
