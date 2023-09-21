import { useState } from "react";
import styles from "./Tariff.module.scss";

const Tariff = (props) => {
  const { name, price, speed, info, color } = props.info;
  const [isSelected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected(!isSelected);
  };

  //условная стилизация
  let headerClass = styles.card__header;
  let priceClass = styles.card__price;
  switch (color) {
    case "blue":
      headerClass += ` ${styles.card_blue__header}`;
      priceClass += ` ${styles.card_blue__price}`;
      break;
    case "green":
      headerClass += ` ${styles.card_green__header}`;
      priceClass += ` ${styles.card_green__price}`;
      break;
    case "red":
      headerClass += ` ${styles.card_red__header}`;
      priceClass += ` ${styles.card_red__price}`;
      break;
    case "black":
      headerClass += ` ${styles.card_black__header}`;
      priceClass += ` ${styles.card_black__price}`;
      break;
    default:
      break;
  }
  if (isSelected) headerClass += ` ${styles.card_isSelected__header}`;

  return (
    <div className={styles.card} onClick={handleChange}>
      <div className={headerClass}>{name}</div>
      <div className={priceClass}>
        <p>руб</p>
        <p>
          <span>{price}</span> /мес
        </p>
      </div>
      <div className={styles.card__speed}>{speed}</div>
      <div className={styles.card__info}>{info}</div>
    </div>
  );
};

export default Tariff;
