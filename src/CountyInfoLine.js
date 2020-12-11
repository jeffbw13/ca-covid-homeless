import React from 'react';

const CountyInfoLine = ({rec}) => {
  return (
    <tr>
      <td>{rec.date.substring(0,10)}</td>
      <td>{rec.rooms || 'none'}</td>
      <td>{rec.rooms_occupied || 'none'}</td>
      <td>{rec.trailers_requested || 'none'}</td>
      <td>{rec.trailers_delivered || 'none'}</td>
      <td>{rec.donated_trailers_delivered || 'none'}</td>
    </tr>
  )
};

export default CountyInfoLine;