import type { AirportItem } from './airports/types'
import { top10Airports } from './airports/top10'
import { mainListAirports } from './airports/mainList'
import { extendedListAirports } from './airports/extendedList'

export type {
  AirportItem,
  PlanItem,
  BenchmarkRow,
  TestGalleryItem,
  UnlockSummary
} from './airports/types'

export const airportsData: AirportItem[] = [
  ...top10Airports,
  ...mainListAirports,
  ...extendedListAirports
]
