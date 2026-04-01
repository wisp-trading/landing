export async function GET() {
  const baseUrl = "https://usewisp.dev"
  const currentDate = new Date().toUTCString()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Wisp - Trading Bot Framework</title>
    <link>${baseUrl}</link>
    <description>Open-source trading bot framework for algorithmic and agentic trading</description>
    <language>en</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>

    <item>
      <title>Wisp Trading Bot Framework Launch</title>
      <link>${baseUrl}</link>
      <description>Open-source trading bot framework built in Go. Connect to Polymarket, Hyperliquid, Paradex, Binance, and more. Write strategies yourself or let an AI agent trade autonomously.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}</guid>
    </item>

    <item>
      <title>Agentic Trading with LLMs</title>
      <link>${baseUrl}#agentic</link>
      <description>Wisp provides first-class support for LLM-driven trading strategies. Let AI agents analyze markets and execute trades autonomously.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}#agentic</guid>
    </item>

    <item>
      <title>Multi-Exchange Support</title>
      <link>${baseUrl}#platforms</link>
      <description>Connect to Polymarket, Hyperliquid, Paradex, Binance and more exchanges with a unified API.</description>
      <pubDate>${currentDate}</pubDate>
      <guid>${baseUrl}#platforms</guid>
    </item>
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
