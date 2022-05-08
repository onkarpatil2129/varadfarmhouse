import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import BookingSection from '../BookingSection';
import BigCalendar from '../BigCalendar';
function Bookings() {

  return (
    <>
      <BigCalendar />
      <BookingSection />
      <Footer />
    </>
  );
}

export default Bookings;