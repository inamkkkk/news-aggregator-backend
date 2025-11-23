# News Aggregator Backend

A Node.js backend that scrapes multiple news sites and serves an aggregated news feed API.

## Features

*   Scrapes news from multiple sources.
*   Provides a single API endpoint for aggregated news.
*   Uses cron jobs for scheduled scraping.
*   Error handling and logging.

## Project Structure


server.js         - Entry point of the application.
routes/           - Defines API routes.
controllers/      - Handles request logic.
models/           - Defines data models (if using DB).
middlewares/      - Custom middlewares.
utils/            - Utility functions (scraping, etc.).


## Installation

1.  Clone the repository:
   
   git clone <repository_url>
   
2.  Install dependencies:
   
   npm install
   

## Configuration

*   Set environment variables (API keys, database connection strings, etc.) in a `.env` file.  See `.env.example` for the required variables.
*   Configure the news sources to scrape in `utils/scraper.js`.

## Running the Application


node server.js


## API Endpoints

*   `GET /api/news` - Returns the aggregated news feed.
