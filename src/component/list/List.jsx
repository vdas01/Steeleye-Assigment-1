import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import timeStamps from "../../assets/timeStamps.json";


const List = ({ rows,currency,searchText }) => {
  rows = rows.filter((row)=>(
         row["&id"].includes(searchText)
  ))


  const calc = (id) =>{
    let ans;
    timeStamps.results.map((result)=>{
      if(result['&id'].toString() === id.toString())
      ans = result?.timestamps?.orderSubmitted;
      return 0;
    })
    return ans;
  }

  
 
  return ( 
    timeStamps &&
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow key={Math.random()} >
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{calc(row["&id"])}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.EUR}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
