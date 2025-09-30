


const Boton = (props) => {
  return (
    <>
      <button>{props.texto}</button>

      <style jsx>{`
        button {
          background-color: ${props.bgColor};
          border: none;
          border-radius: 0.5rem;
          color: white;
          font-size: 1.2rem;
          margin: auto;
          padding: 10px 20px;
          width: ${props.width};
        }
        button:hover {
            transform: scale(${props.scale}) 
        }
      `}</style>
    </>
  );
};

export default Boton;
