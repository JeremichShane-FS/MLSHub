import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const API = Object.create(null);

API.getArticles = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/v1/articles`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

API.getStandings = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/v1/standings`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

API.getFixtures = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/v1/fixtures`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

API.getCombinedFixtures = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/v1/combined-fixtures`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default API;
