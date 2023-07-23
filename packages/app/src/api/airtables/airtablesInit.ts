import { configure, base } from "airtable";

const API_KEY = "key6rcQZOorFmGrfD";
const APP_ID = "appYXVwx6zw8wmTW3";

configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: API_KEY,
});

export const airtable = base(APP_ID);
