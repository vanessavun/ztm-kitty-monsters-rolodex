import './card-list.styles.css';
import Card from "../card/card.component";
import { Kitty } from '../../App';

type CardListProps = {
    monsters: Kitty[];
}

const CardList = ({ monsters }: CardListProps) => (
    <div className="card-list">
        {monsters.map(monster => {
            return (
                <Card monster={monster} />
            )
        })}
    </div>
);

export default CardList;