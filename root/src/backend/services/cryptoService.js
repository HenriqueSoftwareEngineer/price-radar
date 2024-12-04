import axios from 'axios';
const { CRYPTO_API_URL } = require('../config.js');

async function fetchCryptoPrices() {
  try {
    const response = await axios.get(CRYPTO_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
}

export { fetchCryptoPrices };
