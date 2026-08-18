import { startSidebar } from './start'
import { clientsSidebar } from './clients'
import { protocolsSidebar } from './protocols'
import { networkSidebar } from './network'
import { subscriptionSidebar } from './subscription'
import { troubleshootingSidebar } from './troubleshooting'
import { scenariosSidebar } from './scenarios'
import { guidesSidebar } from './guides'
import { glossarySidebar } from './glossary'
import { aboutSidebar } from './about'
import { recommendSidebar } from './recommend'
import { navigationSidebar } from './navigation'
import { reviewsSidebar } from './reviews'

export const sidebar = {
  '/recommend/': recommendSidebar,
  '/navigation/': navigationSidebar,
  '/reviews/': reviewsSidebar,
  '/start/': startSidebar,
  '/clients/clash/': clientsSidebar['/clients/clash/'],
  '/clients/clash-verge/': clientsSidebar['/clients/clash-verge/'],
  '/clients/shadowrocket/': clientsSidebar['/clients/shadowrocket/'],
  '/clients/v2rayn/': clientsSidebar['/clients/v2rayn/'],
  '/clients/': clientsSidebar['/clients/'],
  '/protocols/': protocolsSidebar,
  '/network/': networkSidebar,
  '/subscription/': subscriptionSidebar,
  '/troubleshooting/': troubleshootingSidebar,
  '/scenarios/': scenariosSidebar,
  '/guides/': guidesSidebar,
  '/glossary/': glossarySidebar,
  '/about/': aboutSidebar,
  '/editorial-policy/': aboutSidebar,
  '/sources/': aboutSidebar,
  '/disclaimer/': aboutSidebar,
  '/privacy/': aboutSidebar,
  '/terms/': aboutSidebar
}
