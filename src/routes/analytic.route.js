import { Router } from "express";
import { getAnalyticData, getFilterAnalyticData } from '../controllers/analytic.controller.js'

const router = Router()

router.route('/').get(getAnalyticData)
router.route('/getFilterData').get(getFilterAnalyticData)


export default router