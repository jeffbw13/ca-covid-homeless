import React from "react";

const CasesLine = ({ rec, key }) => {
  return (
    <tr>
      <td>{rec.date.substring(0, 10)}</td>
      <td>{rec.newcountconfirmed || "none"}</td>
      <td>{rec.newcountdeaths || "none"}</td>
      <td>{~~rec.totalcountconfirmed || "none"}</td>
      <td>{~~rec.totalcountdeaths || "none"}</td>
    </tr>
  );
};

const HospitalizationsLine = ({ rec, key }) => {
  let total_patients = 0;
  if (rec.hospitalized_covid_confirmed_patients) {
    total_patients += rec.hospitalized_covid_confirmed_patients;
  }
  if (rec.hospitalized_covid_suspected_patients) {
    total_patients += rec.hospitalized_covid_suspected_patients;
  }
  return (
    <tr>
      <td>{rec.todays_date.substring(0, 10)}</td>
      <td>{parseInt(rec.hospitalized_covid_confirmed_patients) || "none"}</td>
      <td>{parseInt(rec.hospitalized_covid_suspected_patients) || "none"}</td>
      <td>{parseInt(total_patients)}</td>
      <td>{parseInt(rec.all_hospital_beds) || "none"}</td>
      <td>{parseInt(rec.icu_covid_confirmed_patients) || "none"}</td>
      <td>{parseInt(rec.icu_covid_suspected_patients) || "none"}</td>
      <td>{parseInt(rec.icu_available_beds) || "none"}</td>
    </tr>
  );
};

const HomelessLine = ({ rec, key }) => {
  return (
    <tr>
      <td>{rec.date.substring(0, 10)}</td>
      <td>{rec.rooms || "none"}</td>
      <td>{rec.rooms_occupied || "none"}</td>
      <td>{rec.trailers_requested || "none"}</td>
      <td>{rec.trailers_delivered || "none"}</td>
      <td>{rec.donated_trailers_delivered || "none"}</td>
    </tr>
  );
};

const SurgeFacLine = ({ rec, key }) => {
  return (
    <tr>
      <td>{rec.date.substring(0, 10)}</td>
      <td>{rec.type_of_facility}</td>
      <td>{rec.status}</td>
      <td>{rec.beds_ready_to_accept_patients || "none"}</td>
      <td>{rec.patients_in_beds || "none"}</td>
      <td>{rec.beds_in_warm_status || "none"}</td>
    </tr>
  );
};

const CountyInfoLine = ({ name, rec, key }) => {
  //  why can I not put the component name into a variable??  e.g.
  const LineName = "HomelessLine";
  if (name === "cases") {
    return <CasesLine rec={rec} key={key} />;
  }
  if (name === "hospitalizations") {
    return <HospitalizationsLine rec={rec} key={key} />;
  }
  if (name === "homeless") {
    return <HomelessLine rec={rec} key={key} />;
  }
  if (name === "surgeFac") {
    return <SurgeFacLine rec={rec} key={key} />;
  }
};

export default CountyInfoLine;
