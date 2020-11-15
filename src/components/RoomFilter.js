import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter = ({rooms}) => {

    const context = useContext(RoomContext);
    console.log(context);
    
    const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = context;

    // Get unique types
    let types = getUnique(rooms, 'type');

    // Add 'all' in the Types array of rooms
    types = ['all', ...types];

    // Get unique guests
    let guests = getUnique(rooms, 'capacity');

    return ( 
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types.map((type,index) => {
                            return <option key={index} value={type}>{type}</option>
                        })}
                    </select>
                </div>
                {/* end select type */}
                {/* select guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {guests.map((guest,index) => {
                            return <option key={index} value={guest}>{guest}</option>
                        })}
                    </select>
                </div>
                {/* end select guests */}
                {/* Room Price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* end Room Price */}
                {/* Size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" className="size-input" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" className="size-input" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end extras */}
            </form>
        </section>
     );
}
 
export default RoomsFilter;