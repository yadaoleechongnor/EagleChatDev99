import React, { useState } from 'react';

const DateSelector = () => {
  // State for selected values
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // Generating array of months and years for dropdowns
  const months = Array.from({ length: 12 }, (_, index) => {
    const monthNumber = index + 1;
    const monthName = new Date(0, monthNumber).toLocaleString('default', { month: 'long' });
    return { number: monthNumber, name: monthName };
  });
  const years = Array.from({ length: new Date().getFullYear() - 1969 }, (_, index) => 1970 + index);

  const handleDropdownChange = (value, setterFunction) => {
    setterFunction((prevValue) => (prevValue === value ? null : value));
  };

  return (
    <div className="flex space-x-4">
      {/* Dates Dropdown */}
      <div>
        <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
          ວັນທີ່
        </label>
        <select
          id="dates"
          name="dates"
          value={selectedDate || ''}
          onChange={(e) => handleDropdownChange(Number(e.target.value), setSelectedDate)}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="" hidden>ວັນທີ່</option>
          {Array.from({ length: 31 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Months Dropdown */}
      <div>
        <label htmlFor="months" className="block text-sm font-medium text-gray-700">
          ເດືອນ
        </label>
        <select
          id="months"
          name="months"
          value={selectedMonth || ''}
          onChange={(e) => handleDropdownChange(Number(e.target.value), setSelectedMonth)}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="" hidden>ເດືອນ</option>
          {months.map((month) => (
            <option key={month.number} value={month.number}>
              {month.name}
            </option>
          ))}
        </select>
      </div>

      {/* Years Dropdown */}
      <div>
        <label htmlFor="years" className="block text-sm font-medium text-gray-700">
          ປີເກີດ
        </label>
        <select
          id="years"
          name="years"
          value={selectedYear || ''}
          onChange={(e) => handleDropdownChange(Number(e.target.value), setSelectedYear)}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="" hidden>ປີ</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateSelector;
