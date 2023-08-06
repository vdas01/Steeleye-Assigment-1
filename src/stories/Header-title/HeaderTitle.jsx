import styles from "./HeaderTitle.module.css";

const HeaderTitle = ({ primaryTitle, secondaryTitle,bgcolor ,fcolor,display}) => {
  return (
    <div className={styles.container} style={{backgroundColor:`${bgcolor}`, color:`${fcolor}`,display:`${display}`}}>
      <h1>{primaryTitle}</h1>
      <div>{secondaryTitle}</div>
    </div>
  );
};

export default HeaderTitle;
