import mongoose from "mongoose";

const AnalyticSchema = new mongoose.Schema({
    end_year: { type: String, default: "" },
    intensity: { type: Number, required: true },
    sector: { type: String, required: true },
    topic: { type: String, required: true },
    insight: { type: String, required: true },
    url: { type: String, required: true },
    region: { type: String, required: true },
    start_year: { type: String, default: "" },
    impact: { type: String, default: "" },
    added: { type: Date, default: Date.now },
    published: { type: Date, required: true },
    country: { type: String, required: true },
    relevance: { type: Number, required: true },
    pestle: { type: String, required: true },
    source: { type: String, required: true },
    title: { type: String, required: true },
    likelihood: { type: Number, required: true }
});

// Create a model from the schema
const Analytic = mongoose.model('Analytic', AnalyticSchema);

export default Analytic;