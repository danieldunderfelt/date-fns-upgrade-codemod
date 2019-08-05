const { format, closestToIndex, addSeconds } = require('date-fns')
import { convertTokens, legacyParse, legacyParseMap } from 'date-fns-upgrade'

const dateIs = '2019-07-01'

const formattedDate = format(
  legacyParse('2019-07-01'),
  convertTokens('MM-DD')
)
const closestIndex = closestIndexTo(
  legacyParse(new Date(2015, 8, 6)),
  legacyParseMap([
    new Date(2015, 0, 1),
    new Date(2016, 0, 1),
    new Date(2017, 0, 1)
  ])
)
const addSecondsPlease = addSeconds(legacyParse(dateIs), 999)
