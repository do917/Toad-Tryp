import React from 'react';
import axios from 'axios';
import { Message, Popup } from 'semantic-ui-react';
import formatTime from '../utils/formatTime.js';

const TripDetailsPopup = (props) => (
  <div>
    <Message positive>
    <Message.Header>From </Message.Header>
      <p>
        {props.trip.departure_address_line1} {props.trip.departure_address_line2} <br />
        {props.trip.departure_city}, {props.trip.departure_state } {props.trip.departure_zip } <br />
        @  {props.trip.departure_time} on  {props.trip.departure_date}
      </p>
      <Message.Header>To </Message.Header>
      <p>
        {props.trip.arrival_address_line1}<br />
      </p>
      <Message.Header>Driver Info</Message.Header>
      <p>
        {props.driverDetails.first_name} {props.driverDetails.last_name} <br />
        {props.driverDetails.phone_number} {props.driverDetails.email}
      </p>
      <Message.Header>Vehicle Info </Message.Header>
      <p>
      {props.driverDetails.year} {props.driverDetails.make} {props.driverDetails.model}<br />
        {props.driverDetails.license_plate}
      </p>
      <Message.Header>Delete Trip?</Message.Header>
      <p>
        <Popup
          trigger={<button className="ui orange button">Delete</button>}
          content={
            <div>
              <div>
                Are you sure?
              </div>
              <button className="ui green button">Cancel</button>
              <button className="ui red button" onClick={() => props.handleDeleteClick(props.id)}>Yes</button>
            </div>
            }
          on='click'
          position='bottom right'
        /> 
      </p>
    </Message>
  </div>
);

export default TripDetailsPopup;