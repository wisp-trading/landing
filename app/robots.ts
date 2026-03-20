import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Explicitly allow AI crawlers
        userAgent: [
          "GPTBot", // OpenAI
          "ChatGPT-User", // OpenAI ChatGPT
          "CCBot", // Common Crawl (used by many AI)
          "anthropic-ai", // Anthropic Claude
          "Claude-Web", // Anthropic Claude
          "Google-Extended", // Google Bard/Gemini
          "GoogleOther", // Google AI training
          "PerplexityBot", // Perplexity AI
          "Applebot-Extended", // Apple Intelligence
          "cohere-ai", // Cohere
          "Omgilibot", // Omgili
          "FacebookBot", // Meta AI
          "Diffbot", // Diffbot
          "Bytespider", // ByteDance (TikTok)
        ],
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://usewisp.dev/sitemap.xml",
  }
}
