export interface PlanItem {
  name: string
  cycle: string
  price: string
  traffic: string
  note?: string
}

export interface BenchmarkRow {
  region: string
  latency: string
  download: string
  dateNote: string
}

export interface TestGalleryItem {
  label: string
  src: string
  alt: string
  testedAt: string
  toolEnv: string
  kind: 'speedtest' | 'unlock' | 'mixed'
  caption: string
}

export interface UnlockSummary {
  supported: string[]
  nodeDependent: string[]
  failed?: string[]
  note?: string
}

export interface AirportItem {
  id: string
  rank: number
  isTop10?: boolean
  tier: 'top10' | 'main' | 'extended'
  name: string
  tagline: string
  affUrl?: string
  affLinkNote?: string
  couponCode?: string
  altCouponCode?: string
  discountText?: string
  rating: number
  startingPrice: number
  priceNote: string
  monthlyPay: boolean
  payAsYouGo: boolean
  networkType: 'IEPL' | 'IPLC' | 'BGP中转' | '混合专线' | '直连/待核实'
  protocols: string[]
  clientSupport: '自研+第三方' | '仅自研客户端' | '仅第三方订阅' | '待核实'
  scenarios: string[]
  features: string[]
  pros: string[]
  cons: string[]
  speedRating: 'S+' | 'S' | 'A+' | 'A' | '待测'
  recommendedBadge?: string
  reviewUrl: string
  badgeColor?: 'cyan' | 'amber' | 'green' | 'purple' | 'red'
  trafficStarting: string
  establishedYear: string
  paymentMethods: string[]
  speedtestImage?: string
  testedAt?: string
  testToolEnv?: string
  testGallery?: TestGalleryItem[]
  plans?: PlanItem[]
  benchmarks?: BenchmarkRow[]
  benchmarkDisclaimer?: string
  unlockSummary?: UnlockSummary
  dataStatus: 'measured' | 'vendor' | 'historical' | 'partial'
  vendorNote?: string
}
