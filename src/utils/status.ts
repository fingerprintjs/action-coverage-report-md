const RED_STATUS = '🔴|'
const YELLOW_STATUS = '🟡|'
const GREEN_STATUS = '🟢|'

export function getStatus(linesCovered: number): string {
  if (linesCovered < 50) {
    return RED_STATUS
  } else if (linesCovered > 80) {
    return GREEN_STATUS
  } else {
    return YELLOW_STATUS
  }
}

export const statusHeader = 'St|'
