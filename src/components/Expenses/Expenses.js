import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const selectedYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredList = props.items.filter((expense) => {
    return expense.date.getFullYear() == selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onYearSelected={selectedYearHandler}
        />
        <ExpensesList items={filteredList} />
      </Card>
    </div>
  );
};
export default Expenses;
