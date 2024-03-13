import { describe, expect, it } from '@jest/globals'
import { getBasePath } from '../src/utils/getBasePath'

describe('test `getBasePath` method', () => {
  it('empty path', () => {
    expect(
      getBasePath({ coverageBasePath: 'src', parsedBasePath: '' })
    ).toEqual('src')
  })

  it('same path', () => {
    expect(
      getBasePath({ coverageBasePath: 'src', parsedBasePath: 'src' })
    ).toEqual('src')
  })

  it('contains base path', () => {
    expect(
      getBasePath({ coverageBasePath: 'src', parsedBasePath: 'src/utils' })
    ).toEqual('src/utils')
  })

  it('not contains base path', () => {
    expect(
      getBasePath({ coverageBasePath: 'src', parsedBasePath: 'utils' })
    ).toEqual('src/utils')
  })
})
