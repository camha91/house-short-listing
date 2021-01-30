import React, { useState } from 'react';
import './App.scss';
import HousesList from './components/HousesList';

function App() {
  const [housesList, setHousesList] = useState(
    [
      {
        ds: '01-22-21',
        id: 1,
        bds: 3,
        ba: 2,
        sqft: 2717,
        yearBuilt: 2021,
        status: 'Active',
        price: 421990,
        address: 'Northlake Plan, Bluffview, Leander, TX 78641'
      },
      {
        ds: '01-22-21',
        id: 2,
        bds: 4,
        ba: 3,
        sqft: 2022,
        yearBuilt: 2021, status: 'Active Under Contract',
        price: 318990, address: 'Duff Plan, Saddlecreek: Claremont Collection, Georgetown, TX 78626'
      },
      {
        ds: '01-22-21',
        id: 3,
        bds: 4,
        ba: 2,
        sqft: 1938,
        yearBuilt: 2021,
        status: 'Pending',
        price: 379990,
        address: 'Connally Plan, Whisper Valley, Manor, TX 78653'
      },
      {
        ds: '01-22-21',
        id: 4,
        bds: 4,
        ba: 3,
        sqft: 2372,
        yearBuilt: 2021,
        status: 'Active Under Contract',
        price: 349990,
        address: 'Rosso Plan, Oaks at San Gabriel: Brookstone Collection, Georgetown, TX 78628'
      },
      {
        ds: '01-22-21',
        id: 5,
        bds: 4,
        ba: 3,
        sqft: 3138,
        yearBuilt: 2019,
        status: 'Active Under Contract',
        price: 415000,
        address: '2029 Hawkes Cv, Leander, TX 78641'
      },
      {
        ds: '01-22-21',
        id: 6,
        bds: 3,
        ba: 3,
        sqft: 2882,
        yearBuilt: 2019,
        status: 'Sold',
        price: 420000,
        address: '4224 Brean Down Rd, Pflugerville, TX 78660'
      },
      {
        ds: '01-22-21',
        id: 7,
        bds: 4,
        ba: 4,
        sqft: 2572,
        yearBuilt: 2018,
        status: 'Active Under Contract',
        price: 335000,
        address: '1077 Clove Hitch Dr, Georgetown, TX 78633'
      },
      {
        ds: '01-22-21',
        id: 8,
        bds: 4,
        ba: 3,
        sqft: 2547,
        yearBuilt: 2017,
        status: 'Active',
        price: 350000,
        address: '5944 Malta Cir, RoundRock, TX 78665'
      },
      {
        ds: '01-22-21',
        id: 9,
        bds: 4,
        ba: 3,
        sqft: 2490,
        yearBuilt: 2020,
        status: 'Active Under Contract',
        price: 314900,
        address: '16000 Maldon Pl, Austin, TX 78722'
      }
    ]
  );

  function handleOnHouseClick(house) {
    const newHouseList = housesList.filter((x) => x.id !== house.id);
    console.log(newHouseList);
    setHousesList(newHouseList);
  };

  return (
    <div className="app">
      <h1>House Short-Listing</h1>
      <HousesList
        houses={housesList}
        onHouseClick={handleOnHouseClick}
      />
    </div>
  );
}

export default App;
