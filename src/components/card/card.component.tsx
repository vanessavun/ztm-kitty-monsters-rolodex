import './card.styles.css';
import { Kitty } from '../../App';

type CardProps = {
    monster: Kitty;
}

const Card = ({ monster }: CardProps) => {
    const { id, name, email } = monster;
    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`}
                src={`https://robohash.org/${id}/?set=set4&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;