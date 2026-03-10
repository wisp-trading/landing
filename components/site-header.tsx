"use client"

import { useState } from "react"
import { AlphaBanner } from "./alpha-banner"
import { Navbar } from "./navbar"

export function SiteHeader() {
  const [bannerVisible, setBannerVisible] = useState(true)

  return (
    <>
      <AlphaBanner onDismiss={() => setBannerVisible(false)} />
      <Navbar bannerVisible={bannerVisible} />
    </>
  )
}
