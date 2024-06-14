import { Router } from "express";
import {getAnalyticData} from '../controllers/analytic.controller.js'

const router = Router()

router.route('/').get(getAnalyticData)


export default router