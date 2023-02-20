import { axios } from '../lib/axio';

export const fetchRates = async (currencyOne) => {
  const { data } = await axios.get(
    `/latest?base=${currencyOne}&apikey=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};

export const fetchSymbols = async () => {
  const { data } = await axios.get(
    `/symbols?apikey=${process.env.REACT_APP_API_KEY}`
  );
  return data;
};
