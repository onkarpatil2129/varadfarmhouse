import './BigCalendar.css';
import './Cards.css';
import React, { Component } from 'react'
import 'react-nice-dates/build/style.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import DatePicker from "react-datepicker";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { Divider, Header, Icon } from 'semantic-ui-react'
import "react-datepicker/dist/react-datepicker.css";

const booked_dates = [
    new Date(2022, 4, 8),
    new Date(2022, 4, 9),

];

class BigCalendar extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
        initialValue: 5,
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    handleEndChange = date => {
        this.setState({
            endDate: date
        });
    };
    render() {
        return (
            <div>
                <div id="CalendarView">


                    <Divider horizontal>
                        <Header as='h1' style={{ color: "teal " }}>
                            <Icon name='building outline icon' />
                            Booking
                    </Header>
                    </Divider>


                    <div id="formView">
                        <h3 class="ui header">Select CheckIn & CheckOut Dates </h3>
                        <br />
                        <div class="ui big form" >
                            <div class="two fields">
                                <div class="field">
                                    <label>CheckIn</label>
                                    <DatePicker
                                        excludeDates={booked_dates}
                                        placeholderText="Select a day"
                                        selected={new Date()}
                                        dateFormat="dd-MM-yyyy"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        minDate={new Date()}
                                        scrollableMonthYearDropdown
                                    />
                                </div>
                                <div class="field">
                                    <label>CheckOut</label>
                                    <DatePicker
                                        excludeDates={booked_dates}
                                        placeholderText="Select a day"
                                        selected={new Date()}
                                        dateFormat="dd-MM-yyyy"
                                        selected={this.state.endDate}
                                        onChange={this.handleEndChange}
                                        minDate={new Date()}
                                        scrollableMonthYearDropdown
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="ui big form" >
                            <div class="two fields">
                                <div class="field">
                                    <label>No. of Persons (* Above 7 Years)</label>
                                    <input type="text" value={this.state.initialValue} onChange={this.alpha} name="initialValue" id="initialValue" placeholder="No. of persons" />
                                    <label style={{ color: "red" }}>Minimum 5 Persons</label>
                                </div>
                                <div class="field">
                                    <label>Total Package Price  (* 1600Rs/Person)</label>
                                    <input type="text" disabled value={this.state.initialValue * 1600} placeholder="Total Package Price" />
                                    <label style={{ color: "red" }}>Pay minimum 1000 Rs. in advance.</label>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div class="two fields">
                                <div class="field">
                                    <label>First name</label>
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div class="field">
                                    <label>Last name</label>
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="two fields">
                                <div class="field">
                                    <label>Gender</label>
                                    <select class="ui fluid dropdown">
                                        <option value="">Select Gender</option>
                                        <option value="GF">Female</option>
                                        <option value="GM">Male</option>
                                        <option value="GO">Other</option>
                                    </select>
                                </div>

                            </div>
                            <div class="two fields">
                                <div class="field">
                                    <label>Mobile</label>
                                    <input type="text" placeholder="Mobile" />
                                </div>
                                <div class="field">
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" />
                                </div>
                            </div>
                            <div class="two fields">
                                <div class="field">
                                    <label>Address</label>
                                    <input type="text" placeholder="Address" />
                                </div>
                                <div class="field">
                                    <label>Apt/#Suite</label>
                                    <input type="text" placeholder="Apt/#Suite" />
                                </div>
                            </div>
                            <div class="two fields">
                                <div class="field">
                                    <label>Zip Code</label>
                                    <input type="text" placeholder="Zip Code" />
                                </div>
                                <div class="field">
                                    <label>City</label>
                                    <input type="text" placeholder="City" />
                                </div>

                            </div>
                            <div class="two fields">
                                <div class="field">
                                    <label>State</label>
                                    <input type="text" placeholder="State" />
                                </div>
                                <div class="field">
                                    <label>Country</label>
                                    <input type="text" placeholder="Country" />
                                </div>

                            </div>

                        </div>
                        <br />
                        <button class="ui teal button">Pay & Book Now</button>
                        <br />
                        <br />
                    </div>
                </div >

            </div>
        );
    }
    alpha = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }
}

export default BigCalendar;