import * as dateFnsOrNotFns from 'date-fns'

const dateIs = '2019-07-01'

const format = dateFnsOrNotFns.format('2019-07-01', 'MM-DD')
const closestIndex = dateFnsOrNotFns.closestIndexTo(new Date(2015, 8, 6), [
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1)
])
const addSeconds = dateFnsOrNotFns.addSeconds(dateIs, 999)
