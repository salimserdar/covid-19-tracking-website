import axios from "axios";

const api = "https://corona.lmao.ninja/all";

export const fetchAPI = async () => {
  try {
    const { data } = await axios.get(api);

    const modifiedData = {
        cases: data.cases,
        deaths: data.deaths,
        recovered: data.recovered
    }

    return modifiedData;
  } catch (error) {
    console.log("fetchAPI error:", error);
  }
};
