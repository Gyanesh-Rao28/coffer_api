import Analytic from '../models/analytic.model.js'

const getAnalyticData = async(req, res)=>{
    try {
        const data = await Analytic.find()
        return res.status(200).json(data);
    } catch (error) {
        throw new error(500, error);
    }
}

const getFilterAnalyticData = async (req, res) => {
    try {
        const { endYear, topics, sector, region, pestle, source, country, city } = req.query;
        const filters = {};

        if (endYear) filters.end_year = endYear;

        if (topics !== undefined && topics !== '') {
            filters.topic = Array.isArray(topics) ? { $in: topics } : topics;
        }

        if (sector) filters.sector = sector;
        if (region) filters.region = region;
        if (pestle) filters.pestle = pestle;
        if (source) filters.source = source;
        if (country) filters.country = country;
        if (city) filters.city = city;

        const data = await Analytic.find(filters);

        
        res.json({ data });
    } catch (error) {
        console.error('FILTER ERROR', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export { getAnalyticData, getFilterAnalyticData }