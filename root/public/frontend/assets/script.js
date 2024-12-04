import { loadPrices } from './cryptoLoader.js';
import{fetchCryptoPrices} from './server.js'

loadPrices();
setInterval(loadPrices, 300000); // Atualiza a cada 5 minutos