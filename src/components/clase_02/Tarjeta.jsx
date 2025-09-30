import Boton from "./Boton";

const Tarjeta = (props) => { // props.destino
  return (
    <>
      <div className="card">
        <img
          src={props.destino.image}
          width="200"
          alt={props.destino.title}
        />
        <div className="description">
          <h3>{props.destino.title}</h3>
          <p>{props.destino.description}</p>
        </div>
        <Boton bgColor={props.destino.bgColor} texto="Comprar" width="50%" scale="1.2" />
      </div>

      <style jsx>{`
        .card {
            align-items: center;
            border-radius: 0.8rem;
            box-shadow: 0px 2px 10px -5px gray;
            display: flex;
            flex-direction: column;
            padding: 0 0 4% 0;
            width: 275px;
        }
        .description {
            text-align: center;
        }
        img {
            border-top-left-radius: 0.8rem;
            border-top-right-radius: 0.8rem;
            height: 70%;
            width: 100%;
        }
      `}</style>
    </>
  );
};

export default Tarjeta;
