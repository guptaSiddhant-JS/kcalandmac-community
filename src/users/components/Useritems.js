
const Useritems = props => {
  return (
    <div>
      <li>
          <div>
              <img src={props.img} alt={props.name} />
              <h2>{props.name}</h2>
          </div> 
      </li>
    </div>
  );
}

export default Useritems;
