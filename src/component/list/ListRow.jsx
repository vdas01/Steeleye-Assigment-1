import styles from "./ListRow.module.css";


const ListCell = ({ children ,setSelectedOrderDetails,setSelectedOrderTimeStamps,row,calc}) => {
  return <tr className={styles.cell} onClick={(e)=>{
    setSelectedOrderDetails({
              "buySellIndicator": row.executionDetails.buySellIndicator,
              "orderStatus":row.executionDetails.orderStatus,
              "orderType":row.executionDetails.orderType
            })
            
            setSelectedOrderTimeStamps(calc(row["&id"]))
  }}>{children}</tr>;
};

export default ListCell;
