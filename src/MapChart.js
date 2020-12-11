import React, { useState, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import CountyInfo from "./CountyInfo";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/CA-06-california-counties.json";

const MapChart = ({ setTooltipContent }) => {
  const [countyInfo, setCountyInfo] = useState(null);

  const handleClickCounty = (county) => {
    const url = `https://data.ca.gov/api/3/action/datastore_search_sql?sql=SELECT * from "235466b6-0eb9-4ff7-a4b4-8138f474ce83" WHERE "county" LIKE '${county}%'`;

    console.log(county);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.result.records.sort((a, b) => {
          //console.log(a.date, b.date);
          if (b.date > a.date) return 1;
          if (a.date > b.date) return 1;
          return 0;
        });
        const info = {
          county: county,
          records: sortedData,
        };
        setCountyInfo(info);
      });
  };

  return (
    <>
      {console.log(countyInfo)}
      <h2>COVID-19 Homeless Impact</h2>
      <p>Click county for stats</p>
      <div className="map">
        <ComposableMap
          data-tip=""
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [122, -30, 0],
            scale: 1200,
          }}
          width={400}
          height={500}
          style={{
            width: "auto",
            height: "50%",
          }}
        >
          {/*  <!-- ZoomableGroup -->  */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#D6D6DA"
                  stroke="#FFF"
                  strokeWidth=".5px"
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => handleClickCounty(geo.properties.NAME)}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {/*<!-- /ZoomableGroup --> */}
        </ComposableMap>
      </div>

      <CountyInfo countyInfo={countyInfo} />
    </>
  );
};

export default memo(MapChart);
