import './UserItem.css';
import { Link } from 'react-router-dom';
import Card from '../../shared/Uielements/Card/Card';
import Avatar from '../../shared/Uielements/Avatar/Avatar';
const Useritems = props => {
  return (
      <li className='user-item'>
          <Card className='user-item__content'>
          <Link to={`${props.id}/profile`}>
            <div className='user-item__image'>
                 <Avatar image={props.img} alt={props.name}/>
            </div>
            <div className='user-item__info'>
              <h2>{props.name}</h2>
            </div>
          </Link>
          </Card>
      </li>
  );
}

export default Useritems;
