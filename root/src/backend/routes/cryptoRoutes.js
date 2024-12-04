import { getCryptoPrices } from '../controllers/cryptoController.js';

const router = express.Router();

router.get('/', getCryptoPrices);

export default router;
