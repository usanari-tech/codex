# Next.js Weather Service

This simple Next.js project now includes a weather page that retrieves the current weather for a location.
Weather data is fetched from [wttr.in](https://wttr.in/) via a serverless API route.

## Development

Run the development server:

```bash
npm run dev
```

Then navigate to `http://localhost:3000/weather` to try the weather service.

The page sends requests to `/api/weather?location=YOUR_LOCATION` which acts as a
proxy to the external service.
