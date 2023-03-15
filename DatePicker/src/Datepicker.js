import React, { useState, useRef, useEffect } from "react";
import "./CustomDatePicker.css";

const date = "";
const formatDate = (dateString) => {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const DatePicker = () => {
  const today = new Date();
  const pstToday = new Date(
    today.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );
  const minDate = pstToday.toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(formatDate(date || ""));
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (key.length === 1 || key === "Backspace" || key === "Delete") {
      event.preventDefault();
    }
  };

  return (
    <div>
      <label>Select Date</label>
      <input
        type="date"
        id="date-picker"
        value={selectedDate}
        onChange={handleDateChange}
        onKeyDown={handleKeyDown}
        min={minDate}
        placeholder="Date"
        className="no-typing"
        ref={inputRef}
        onClick={() => {
          inputRef.current.click();
          console.log("working");
        }}
      />
    </div>
  );
};

export default DatePicker;
