import {Router} from "express"
import {addCity, updateCity, deleteCity} from  '../controllers/cities.controllers.js'
const router = Router()

router.route('/addCity').post(addCity)
router.route('/updateCity').patch(updateCity)
router.route('/deleteCity').delete(deleteCity)



export default router;