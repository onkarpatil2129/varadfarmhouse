import React from 'react';
import '../App.css';
import './ServiceSection.css';
import { Divider, Header, Icon } from 'semantic-ui-react'
function ServiceSection() {
    return (
      <div className='services-container'>        
        <Divider horizontal>
          <Header as='h1' style= {{color: "teal "}}>
             <Icon name='glass martini icon' />
             Services
          </Header>
        </Divider>
        <p>Located less than a 3Km away from amba ghat, at Aranyagiri Farmhouse room are spacious  <br/> 
        and clean with attached balcony which open up to a garden view. Room comes with a large    <br/>
        double bed. Premises provide ample parking space, a garden and pool. One can truly relax <br/>
        and enjoy the long undisturbed walks and most of all breathe pure oxygen. <br/>
        Our main aim is to provide you with relaxing atmosphere with a homely feel!</p>    


        <Divider horizontal>
          <Header as='h1'style= {{color: "teal "}}>
             <Icon name='bath icon' />
             Amenities
          </Header>
        </Divider>
        <p>* Attached washrooms with hot water. <br/> 
        * Swimming Pool.<br/>
        * Air conditioner.<br/>
        * Barbeque Stand.<br/>
        * Ample parking place. <br/>
        * Open balcony to breathe in fresh air.<br/>
        * Garden to walk around and sync in with nature.</p>    

       <Divider horizontal>
          <Header as='h1' style= {{color: "teal "}}>
             <Icon name='money bill alternate outline icon' />
             Package Cost
          </Header>
        </Divider>
        <p style= {{color: "red"}}>Rs. 1599 Per Person<br/> </p>    

       <Divider horizontal>
          <Header as='h1' style= {{color: "teal "}}>
             <Icon name='file alternate outline icon' />
             Package Includes
          </Header>
        </Divider>
        <p>
        * Welcome Tea On Arrival<br/> 
        * 1 Night 2 Days Stay on Twin Sharing<br/>
        * 1 Lunch ( Veg / Non Veg ) , 1 Dinner ( Veg / Non Veg ), 1 Breakfast<br/>
        * Barbeque Stand<br/>
        * 1 Evening Bonfire <br/>
        </p>   


        <Divider horizontal>
          <Header as='h1' style= {{color: "teal "}}>
             <Icon name='food' />
             Food Menu
          </Header>
        </Divider>
        <p>
        Breakfast : Aallo Paratha , Curd Or Aaloo Poori , Poha , Egg Bhurji , Tea<br/> 
        Lunch : Dum Aloo , Dal , Mix Veg , Raita , Rice , Chapati , Pickle , Papad, Salad<br/>
        Dinner : Chicken Dish , Paneer Dish, Dal , Rice, Chapati , Sweet Dish , Pickle, Papad, Salad<br/>
        </p>  


        <h1>Come unwind with us away from home in a home.</h1>     
      </div>

    );
  }
  
  export default ServiceSection;