import styles from "./HeaderTitle.module.css";

const HeaderTitle = ({ primaryTitle, secondaryTitle,bgcolor ,fcolor}) => {
  return (
    <div className={styles.container} style={{backgroundColor:`${bgcolor}`, color:`${fcolor}`}}>
      <h1>{primaryTitle}</h1>
      <div>{secondaryTitle}</div>
    </div>
  );
};

export default HeaderTitle;
