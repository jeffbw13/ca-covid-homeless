//  to do: make it so county stays when selecting a different category
import React, { useState, memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import CountyInfo from "./CountyInfo";
import charts from "./charts";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/CA-06-california-counties.json";

const MapChart = ({ setTooltipContent }) => {
  const [chart, setChart] = useState(charts["cases"]);
  const [countyInfo, setCountyInfo] = useState(null);

  const handleClickCounty = (county) => {
    const url = `${chart.url} WHERE "county" LIKE '${county}%'`;
    console.log("url: ", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //  this sorts correctly in firefox, not in chrome or safari
        const sortedData = data.result.records.sort((a, b) => {
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
      <div class="button-row">
        <div
          class="button"
          onClick={() => {
            setCountyInfo(null);
            setChart(charts["cases"]);
          }}
        >
          Cases
        </div>
        <div
          class="button"
          onClick={() => {
            setCountyInfo(null);
            setChart(charts["hospitalizations"]);
          }}
        >
          Hospitalizations
        </div>
        <div
          class="button"
          onClick={() => {
            setCountyInfo(null);
            setChart(charts["homeless"]);
          }}
        >
          Homeless
        </div>
        <div
          class="button"
          onClick={() => {
            setCountyInfo(null);
            setChart(charts["surgeFac"]);
          }}
        >
          Medical Surge Facilities
        </div>
      </div>
      <h2>COVID-19 {chart.title}</h2>
      <p style={{ fontSize: ".7rem" }}>Click county for stats</p>
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
                      fill: "#776274",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#5a5353",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      <CountyInfo chart={chart} countyInfo={countyInfo} />
    </>
  );
};

export default memo(MapChart);

/*

*/
