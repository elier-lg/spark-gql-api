import { handlerPath } from '../src/libs/handlerResolver' 
import { expect, test} from '@jest/globals'

test('get dir from handlerPath', () => {
  const dir = handlerPath(__dirname)
  expect(dir).toBe('tests')
})
