import { fetchCryptoPrices } from '../services/cryptoService.js';

async function getCryptoPrices(req, res) {
  try {
    const prices = await fetchCryptoPrices();
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch crypto prices' });
  }
}

export { getCryptoPrices };
