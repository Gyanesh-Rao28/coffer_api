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
        const { endYear, topics, sectors, regions, pestles, sources, countries, cities } = req.query;
        const filters = {};

        if (endYear) {
            filters.end_year = Array.isArray(endYear) ? { $in: endYear } : endYear;
        }

        if (topics) {
            filters.topic = Array.isArray(topics) ? { $in: topics } : topics;
        }

        if (sectors) {
            filters.sector = Array.isArray(sectors) ? { $in: sectors } : sectors;
        }

        if (regions) {
            filters.region = Array.isArray(regions) ? { $in: regions } : regions;
        }

        if (pestles) {
            filters.pestle = Array.isArray(pestles) ? { $in: pestles } : pestles;
        }

        if (sources) {
            filters.source = Array.isArray(sources) ? { $in: sources } : sources;
        }

        if (countries) {
            filters.country = Array.isArray(countries) ? { $in: countries } : countries;
        }

        if (cities) {
            filters.city = Array.isArray(cities) ? { $in: cities } : cities;
        }

        const data = await Analytic.find(filters);
        res.json({ data });
    } catch (error) {
        console.error('FILTER ERROR', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export { getAnalyticData, getFilterAnalyticData }