import Analytic from '../models/analytic.model.js'

const getAnalyticData = async(req, res)=>{
    const data = await Analytic.find()
    return res.status(200).json(data);
}

export {getAnalyticData}