import styles from "./Tariff.module.scss";

const Tariff = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>{props.info.name}</div>
      <div className={styles.card__price}>
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
