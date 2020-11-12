import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     const {loading,sortedrooms,rooms} = value;
//                     if(loading) {
//                         return <Loading />
//                     }
//                     return (
//                         <>
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedrooms} />
//                         </>
//                     )
//                 }
//             }
//         </RoomConsumer>
//      );
// }

// export default RoomsContainer;
