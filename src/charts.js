const charts = {
  cases: {
    name: "cases",
    title: "Cases by County",
    url: `https://data.ca.gov/api/3/action/datastore_search_sql?sql=SELECT * from "926fd08f-cc91-4828-af38-bd45de97f8c3"`,
    thead: `<thead><tr><th>Date</th><th>New<br />Cases</th><th>New<br />Deaths</th><th>Total<br />Cases</th><th>Total<br />Deaths</th>
    </tr></thead>`,
  },
  hospitalizations: {
    name: "hospitalizations",
    title: "Hospitalizations",
    url: `https://data.ca.gov/api/3/action/datastore_search_sql?sql=SELECT * from "42d33765-20fd-44b8-a978-b083b7542225"`,
    thead: `<thead><tr><th>Date</th><th>Confirmed<br />Patients</th><th>Suspected<br />Patients</th><th>Total<br />Patients</th><th>All<br />Beds</th><th>ICU<br />Confirmed<br />Patients</th><th>ICU<br />Suspected<br />Patients</th><th>ICU<br />Avail<br />Beds</th></tr></thead>`,
  },
  homeless: {
    name: "homeless",
    title: "Homeless Impact",
    url: `https://data.ca.gov/api/3/action/datastore_search_sql?sql=SELECT * from "235466b6-0eb9-4ff7-a4b4-8138f474ce83"`,
    thead: `<thead><tr><th>Date</th><th>Rooms</th><th>Rooms<br />Occupied</th><th>Trailers<br />Requested</th><th>Trailers<br />Delivered</th><th>Donated<br />Trailers<br />Delivered</th>
    </tr></thead>`,
  },
  surgeFac: {
    name: "surgeFac",
    title: "Medical Surge Facilities",
    url: `https://data.ca.gov/api/3/action/datastore_search_sql?sql=SELECT * from "ef6675e7-cd3a-4762-ba75-2ef78d6dc334"`,
    thead: `<thead><tr><th>Date</th><th>Type of<br />Facility</th><th>Status</th><th>Beds Ready<br />for Patients</th><th>Patients<br />in Beds</th><th>Beds in<br />Warm Status</th>
    </tr></thead>`,
  },
};

export default charts;
