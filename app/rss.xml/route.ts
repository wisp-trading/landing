export async function GET() {
  const baseUrl = "https://usewisp.dev"
  const currentDate = new Date().toUTCString()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Wisp — Go Trading Bot Framework</title>
    <link>${baseUrl}</link>
    <description>Open-source trading bot framework built in Go. Backtesting, paper trading, and live trading on Hyperliquid, Binance, Polymarket, and Paradex.</description>
    <language>en-US</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
