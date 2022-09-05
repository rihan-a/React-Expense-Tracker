import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, seTitle] = useState(props.title);

  const ClickHandler = function () {
    seTitle("Rihan is Here!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}> </ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
        <button onClick={ClickHandler}> Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
