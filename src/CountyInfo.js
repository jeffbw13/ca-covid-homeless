import React from "react";
import Parser from "html-react-parser";
import CountyInfoLine from "./CountyInfoLine";

const CountyInfo = ({ chart, countyInfo }) => {
  if (countyInfo === null) {
    return <p>no county</p>;
  }
  var key = 0;
  return (
    <>
      <div className="countyInfo">
        <h4>{countyInfo.county}</h4>
        <div className="countyTableWrap">
          <table>
            {Parser(chart.thead)}
            <tbody>
              {countyInfo.records.map((record) => {
                key++;
                return (
                  <CountyInfoLine name={chart.name} rec={record} key={key} />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CountyInfo;

/*
<CountyInfoLine key={key} rec={record} tline={chart.tline} />

*/
