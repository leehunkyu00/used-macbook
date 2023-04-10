import React from 'react';
import '../css/Listing.css';

function Listing(props) {
  return (
    <div>
      <h3>{props.bulletin.model} ({props.bulletin.year})</h3>
      <p>Price: {props.bulletin.price}</p>
      <p>Date: {props.bulletin.date}</p>
      <p>Condition: {props.bulletin.condition}</p>
      <p>Apple Care: {props.bulletin.appleCare ? 'Yes' : 'No'}</p>
      <button onClick={() => props.onDelete(props.bulletin.id)}>Delete</button>
    </div>
  );
}

export default Listing;
