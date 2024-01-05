import { Country } from "./country"
import { Region } from "./region.type"

export interface CachStore{
  byCapital:TermCountrie,
  byCountrie:TermCountrie,
  byRegion:RegionCountry
}
export interface TermCountrie{
  term:string,
  Country:Country[]
}
export interface RegionCountry{
  region:Region,
  Country:Country[]
}
