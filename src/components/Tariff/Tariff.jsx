import styles from "./Tariff.module.scss";

const Tariff = (props) => {
  let headerClass = styles.card__header;
  let priceClass = styles.card__price;
  if (props.info.color === "blue") {
    headerClass += ` ` + styles.card_blue__header;
    priceClass += ` ` + styles.card_blue__price;
  }
  if (props.info.color === "green") {
    headerClass += ` ` + styles.card_green__header;
    priceClass += ` ` + styles.card_green__price;
  }
  if (props.info.color === "red") {
    headerClass += ` ` + styles.card_red__header;
    priceClass += ` ` + styles.card_red__price;
  }
  if (props.info.color === "black") {
    headerClass += ` ` + styles.card_black__header;
    priceClass += ` ` + styles.card_black__price;
  }
  return (
    <div className={styles.card}>
      <div className={headerClass}>{props.info.name}</div>
      <div className={priceClass}>
        <p>руб</p>
        <p>
          <span>{props.info.price}</span> /мес
        </p>
      </div>
      <div className={styles.card__speed}>{props.info.speed}</div>
      <div className={styles.card__info}>{props.info.info}</div>
    </div>
  );
};

export default Tariff;
