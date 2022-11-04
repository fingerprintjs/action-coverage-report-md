import {describe, it, expect} from '@jest/globals'
import {formatUncoveredLines, getReportParts, processRow} from '../src/report'
import {
  fullTextReportMock,
  fullTextReportMockWithExtraEmptyLines,
  textReportBodyMock,
  textReportHeaderMock
} from './mocks'

describe('Test `getReportParts` function', () => {
  it('check on trimmed data', () => {
    const {coverageInfoHeader, coverageInfoRows} =
      getReportParts(fullTextReportMock)
    expect(coverageInfoHeader).toEqual(textReportHeaderMock.split('\n'))
    expect(coverageInfoRows).toEqual(textReportBodyMock.split('\n'))
  })

  it('check on data with extra empty lines', () => {
    const {coverageInfoHeader, coverageInfoRows} = getReportParts(
      fullTextReportMockWithExtraEmptyLines
    )
    expect(coverageInfoHeader).toEqual(textReportHeaderMock.split('\n'))
    expect(coverageInfoRows).toEqual(textReportBodyMock.split('\n'))
  })
})

describe('Test `formatUncoveredLines` function', () => {
  it('empty string', () => {
    expect(formatUncoveredLines('', 'https://base.url/sha/')).toEqual('')
  })
  it('one line', () => {
    expect(formatUncoveredLines('9', 'https://base.url/sha/')).toEqual(
      '[9](https://base.url/sha/#L9)'
    )
  })
  it('one line block', () => {
    expect(formatUncoveredLines('9-12', 'https://base.url/sha/')).toEqual(
      '[9-12](https://base.url/sha/#L9-L12)'
    )
  })
  it('mixed content', () => {
    expect(formatUncoveredLines('9,14-16', 'https://base.url/sha/')).toEqual(
      '[9](https://base.url/sha/#L9),[14-16](https://base.url/sha/#L14-L16)'
    )
  })
  it('mixed content with spaces', () => {
    expect(
      formatUncoveredLines(' 9 , 14-16 ', 'https://base.url/sha/')
    ).toEqual(
      '[9](https://base.url/sha/#L9),[14-16](https://base.url/sha/#L14-L16)'
    )
  })
})

describe('Test `processRow` function', () => {
  it('row with folder', () => {
    const {basePath, updatedRow} = processRow(
      ' src/components        |   90.54 |       75 |   86.66 |   92.64 |',
      '',
      'https://base.url/sha'
    )
    expect(basePath).toEqual('src/components')
    expect(updatedRow).toEqual(
      '&nbsp;src/components|   90.54 |       75 |   86.66 |   92.64 |'
    )
  })
  it('row with file, empty basePath, 100% coverage', () => {
    const {basePath, updatedRow} = processRow(
      '  env.ts               |     100 |      100 |     100 |     100 |  ',
      '',
      'https://base.url/sha'
    )
    expect(basePath).toEqual('')
    expect(updatedRow).toEqual(
      '&nbsp;&nbsp;[env.ts](https://base.url/sha/env.ts)|     100 |      100 |     100 |     100 |'
    )
  })

  it('row with file, has basePath, 100% coverage', () => {
    const {basePath, updatedRow} = processRow(
      '  use-previous.ts      |     100 |      100 |     100 |     100 | ',
      'src/utils',
      'https://base.url/sha'
    )
    expect(basePath).toEqual('src/utils')
    expect(updatedRow).toEqual(
      '&nbsp;&nbsp;[use-previous.ts](https://base.url/sha/src/utils/use-previous.ts)|     100 |      100 |     100 |     100 |'
    )
  })

  it('row with uncovered lines', () => {
    const {basePath, updatedRow} = processRow(
      ' report.ts |    77.5 |      100 |   71.42 |    77.5 | 8-24     ',
      'src/utils',
      'https://base.url/sha'
    )
    expect(basePath).toEqual('src/utils')
    expect(updatedRow).toEqual(
      '&nbsp;[report.ts](https://base.url/sha/src/utils/report.ts)|    77.5 |      100 |   71.42 |    77.5 |[8-24](https://base.url/sha/src/utils/report.ts#L8-L24)'
    )
  })
})
