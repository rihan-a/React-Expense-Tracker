import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const selectedYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredList = props.items.filter((expense) => {
    return expense.date.getFullYear() == selectedYear;
  });

  let expensesContent = <p>No Expenses found.</p>;

  if (filteredList.length > 0) {
    expensesContent = filteredList.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onYearSelected={selectedYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
