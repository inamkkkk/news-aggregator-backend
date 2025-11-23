const axios = require('axios');
const cheerio = require('cheerio');
const cron = require('node-cron');

const newsSources = [
  {
    name: 'Example News',
    url: 'https://example.com',
    selector: '.news-item',
    titleSelector: '.news-title',
    linkSelector: 'a',
    linkAttribute: 'href'
  }
];

let cachedNews = [];

async function scrapeNewsFromSource(source) {
  try {
    const response = await axios.get(source.url);
    const html = response.data;
    const $ = cheerio.load(html);
    const newsItems = $(source.selector);

    const news = newsItems.map((i, el) => {
      const element = $(el);
      const title = element.find(source.titleSelector).text().trim();
      const link = element.find(source.linkSelector).attr(source.linkAttribute);

      return {
        title,
        link,
        source: source.name
      };
    }).get();

    return news;
  } catch (error) {
    console.error(`Error scraping ${source.name}:`, error);
    return [];
  }
}

async function scrapeNews() {
  let allNews = [];

  for (const source of newsSources) {
    const news = await scrapeNewsFromSource(source);
    allNews = allNews.concat(news);
  }

  cachedNews = allNews;
  return allNews;
}

// Schedule the scraping (e.g., every hour)
cron.schedule('0 * * * *', async () => {
  console.log('Scraping news...');
  await scrapeNews();
  console.log('News scraping complete.');
});

//Initial scrape on startup
scrapeNews().then(() => console.log('Initial news scraping complete.'));

module.exports = {
  scrapeNews: () => Promise.resolve(cachedNews)
};