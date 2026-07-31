import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getDonors = async () => {
  const res = await api.get("/donors");
  return res.data;
};

export const addDonor = async (donor) => {
  const res = await api.post("/donors", donor);
  return res.data;
};

export const getRequests = async () => {
  const res = await api.get("/requests");
  return res.data;
};

export const addRequest = async (request) => {
  const res = await api.post("/requests", request);
  return res.data;
};