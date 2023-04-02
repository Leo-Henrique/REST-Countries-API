const API = "https://restcountries.com/v3.1";

export const GET_COUNTRIES = `${API}/all`;
export const GET_COUNTRY = (name) => `${API}/name/${name}`;
export const GET_COUNTRIES_BY_CODE = (codes) => `${API}/alpha?codes=${codes}`;
