import { describe, expect, it } from '@jest/globals'
import { getReportParts } from '../src/utils/getReportParts'
import {
  fullTextReportMock,
  fullTextReportMockWithExtraEmptyLines,
  textReportBodyMock,
  textReportHeaderMock
} from './mocks'

describe('Test `getReportParts` function', () => {
  it('check on trimmed data', () => {
    const { coverageInfoHeader, coverageInfoRows } =
      getReportParts(fullTextReportMock)
    expect(coverageInfoHeader).toEqual(textReportHeaderMock.split('\n'))
    expect(coverageInfoRows).toEqual(textReportBodyMock.split('\n'))
  })

  it('check on data with extra empty lines', () => {
    const { coverageInfoHeader, coverageInfoRows } = getReportParts(
      fullTextReportMockWithExtraEmptyLines
    )
    expect(coverageInfoHeader).toEqual(textReportHeaderMock.split('\n'))
    expect(coverageInfoRows).toEqual(textReportBodyMock.split('\n'))
  })
})
