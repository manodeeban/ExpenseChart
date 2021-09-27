import React, { useState }from "react";
import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate.js";


function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem Evaluated by React");

 

  const ClickHandler = () => {
    setTitle("update");
    console.log(title);
  };

  const click = () => {
    alert("amount found!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>

        <button onClick={click}>
          <div className="expense-item__price">${props.amount}</div>
        </button>
        <button onClick={ClickHandler}>click me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
