
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar'
import React, { useState } from 'react';
function CalendarItem(props) {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  }
  return (

    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          <Calendar
            onChange={onDateChange}
            value={date}
            showNeighboringMonth={false}
            locale={"en-US"}
          />
        </Link>
      </li>
    </>
  );
}

export default CalendarItem;