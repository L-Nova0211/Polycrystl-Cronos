import { BASE_BSC_SCAN_URL } from 'config'

export default (txn: string) => {
  return `${BASE_BSC_SCAN_URL}/tx/${txn}`
}
