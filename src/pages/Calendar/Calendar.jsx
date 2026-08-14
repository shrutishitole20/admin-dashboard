import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1));

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Calendar</h1>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            ← Previous
          </button>
          <h2 className="text-2xl font-bold text-gray-900">{monthName}</h2>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            Next →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-bold text-gray-600 py-2">
              {day}
            </div>
          ))}

          {days.map((day, idx) => (
            <div
              key={idx}
              className={`aspect-square flex items-center justify-center rounded-lg ${
                day
                  ? 'bg-gray-50 hover:bg-blue-50 cursor-pointer text-gray-900 font-medium'
                  : 'text-gray-300'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Calendar;
