import React from "react"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wisp",
    url: "https://usewisp.dev",
    logo: "https://usewisp.dev/wisp-logo.png",
    description: "Open-source trading bot framework built in Go",
    sameAs: [
      // Add your social media URLs here when available
      // 'https://github.com/yourorg/wisp',
      // 'https://twitter.com/usewisp',
    ],
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Wisp Trading Bot Framework",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, macOS, Windows",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Open-source trading bot framework built in Go. Connect to Polymarket, Hyperliquid, Paradex, Binance, and more. Write strategies yourself or let an AI agent trade autonomously.",
    programmingLanguage: "Go",
    keywords:
      "trading bot, algorithmic trading, agentic trading, crypto trading, Go framework, AI trading",
    softwareVersion: "1.0",
    url: "https://usewisp.dev",
    codeRepository: "https://github.com/wisp-trading/wisp",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wisp",
    url: "https://usewisp.dev",
    description: "Trading bot framework for algorithmic and agentic trading",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "Wisp",
      url: "https://usewisp.dev",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://usewisp.dev",
      },
    ],
  }

  // Article schema for better content understanding by AI
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Wisp — Trading Bot Framework | Algorithmic & Agentic",
    description:
      "Open-source trading bot framework in Go. Multi-exchange support, backtesting, paper trading, and a first-class agentic interface for LLM-driven strategies.",
    image: "https://usewisp.dev/wisp-logo.png",
    author: {
      "@type": "Organization",
      name: "Wisp",
    },
    publisher: {
      "@type": "Organization",
      name: "Wisp",
      logo: {
        "@type": "ImageObject",
        url: "https://usewisp.dev/wisp-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://usewisp.dev",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  )
}
