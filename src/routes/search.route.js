import {Router} from "express"
import {getCities , getCity, getCityByName} from "../controllers/search.controllers.js"
const router = Router()

router.route('/cities').get(getCities)
router.route('/city').get(getCity)
router.route('/cityName').get(getCityByName)



export default router;