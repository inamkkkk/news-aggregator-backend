const scraper = require('../utils/scraper');

exports.getNews = async (req, res) => {
  try {
    const news = await scraper.scrapeNews();
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};