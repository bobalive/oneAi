import s from './Cards.module.css'
import {Card} from "./card/Card.jsx";

export const Cards = ({cards}) => {
  return(
      <div className={s.cards}>
          {cards.map(card =>(
              <Card key = {card.id} name={card.name} id={card.id}/>
          ))}
      </div>
  )
}