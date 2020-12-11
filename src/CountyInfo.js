import React from 'react';
import CountyInfoLine from './CountyInfoLine';

const CountyInfo = ({ countyInfo }) => {
    if (countyInfo === null) {
      return ( <p>no county</p>)
    }
    var key=0;
    return (
      <>
      <div className="countyInfo">
      <h4>{countyInfo.county}</h4>
      <div className="countyTableWrap">
      <table>
      <thead><tr><th>Date</th><th>Rooms</th><th>Rooms<br />Occupied</th><th>Trailers<br />Requested</th><th>Trailers<br />Delivered</th><th>Donated<br />Trailers<br />Delivered</th>
      </tr></thead>
      <tbody>
      {
        countyInfo.records.map(record=>{
        key++;
        return <CountyInfoLine key={key} rec={record} />
      })}
      </tbody>
      </table>
      </div>
      </div>
      </>
    )
};

export default CountyInfo;