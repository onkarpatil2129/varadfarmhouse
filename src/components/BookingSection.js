import React from 'react';
import '../App.css';
import './ServiceSection.css';
import { Divider, Header, Icon } from 'semantic-ui-react'

function BookingSection() {
  return (
    <div className='services-container'>
      <Divider horizontal>
        <Header as='h1' style={{ color: "teal " }}>
          <Icon name='handshake outline icon' />
          Rules
          </Header>
      </Divider>
      <p>Rules & Regulations<br />
        &emsp;&emsp;1. Kindly check and confirm available facilities/ services before booking<br />
        &emsp;&emsp;2. Name of the Guest & Name of the advance payee must be same.<br />
        &emsp;&emsp;3. Kindly email your advance payment proof to confirm your booking.<br />
        &emsp;&emsp;4. Kindly carry id proof for checking (MTDC Rule Requirement)<br />
        &emsp;&emsp;5. Check in Time 11 am & Check out : 10 am<br />
        &emsp;&emsp;6. Any damage to property would be charged.<br />
        &emsp;&emsp;8. Management won’t be responsible for important/ precious items, kindly take care of your precious item.<br />
        &emsp;&emsp;9. Any kind of misbehavior wouldn’t be tolerated, guest would be requested to vacant the room in such cases.<br /><br />
        &emsp;&emsp;10. Check-in Time   -  11:00 Am&emsp;&emsp;        Check-out Time -  10:00 Am
​       </p>



    </div>

  );
}

export default BookingSection;