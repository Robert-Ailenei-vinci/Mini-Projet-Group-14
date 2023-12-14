/* eslint-disable no-undef */
const { greet, setLanguage } = require('../src/helloWorld')

test('n°1: greet function to return "Hello, Jean-Kevin." if name is "Jean-Kevin"', () => {
  const name = 'Jean-Kevin'

  const result = greet(name)

  expect(result).toBe('Hello, Jean-Kevin.')
})
test('n°2.3: greet function to return "Hello, my friend." if name is an empty String', () => {
  const name = ''

  const result = greet(name)

  expect(result).toBe('Hello, my friend.')
})

test('n°3: greet function to return "HELLO, JERRY!" if the entierety of the name is in uppercase', () => {
  const name = 'JERRY'

  const result = greet(name)

  expect(result).toBe('HELLO, JERRY!')
})

test('n°4: greet function to return "Hello, Kratos and Thanathos." if there are 2 names given in an array', () => {
  const names = ['Kratos', 'Thanathos']

  const result = greet(names)

  expect(result).toBe('Hello, Kratos and Thanathos.')
})

test('n°5: greet function to return "Hello, Kratos, Thanathos and Hypnos" if there are 3 names given in an array', () => {
  const names = ['Kratos', 'Thanathos', 'Hypnos']
  const result = greet(names)
  expect(result).toBe('Hello, Kratos, Thanathos and Hypnos.')
})

test('n°5.1: greet function to return "Hello, Kratos, Thanathos, Hypnos, Jojo, Man and Duck" if there are 6 names given in an array', () => {
  const names = ['Kratos', 'Thanathos', 'Hypnos', 'Jojo', 'Man', 'Duck']
  const result = greet(names)
  expect(result).toBe('Hello, Kratos, Thanathos, Hypnos, Jojo, Man and Duck.')
})

test('n°6: greet function to return "Hello, Kratos and Thanathos. AND HELLO DUCK!" if there are 2 names in lowercase and 1 in uppercase given in an array', () => {
  const names = ['Kratos', 'Thanathos', 'DUCK']
  const result = greet(names)
  expect(result).toBe('Hello, Kratos and Thanathos. AND HELLO, DUCK!')
})

test('n°6.1: greet function to return "Hello, Kratos and Thanathos. AND HELLO, DUCK, LEN AND JOJO!" if there are 2 names in lowercase and 3 in uppercase given in an array', () => {
  const names = ['Kratos', 'Thanathos', 'DUCK', 'LEN', 'JOJO']
  const result = greet(names)
  expect(result).toBe(
    'Hello, Kratos and Thanathos. AND HELLO, DUCK, LEN, JOJO!'
  )
})

test('n°7: greet function in given language', () => {
  const names = ['Kratos', 'Thanathos', 'fr']
  const result = greet(names)
  expect(result).toBe('Bonjour, Kratos et Thanathos.')
})

test('n°8: Testing the function with a single name', () => {
  const name = 'John'
  const result = greet(name)
  expect(result).toBe('Hello, John.')
})

test('n°9: Testing the function with an array of names', () => {
  const names = ['John', 'Jane', 'Jim']
  const result = greet(names)
  expect(result).toBe('Hello, John, Jane and Jim.')
})

test('n°10: Testing the function with a null value', () => {
  const name = null
  const result = greet(name)
  expect(result).toBe('Hello, my friend.')
})

test('n°12: Testing the function with a undefined value', () => {
  const name = undefined
  const result = greet(name)
  expect(result).toBe('Hello, my friend.')
})

test('n°13: Testing the function with an empty string', () => {
  const name = ''
  const result = greet(name)
  expect(result).toBe('Hello, my friend.')
})

test('n°14: Testing the function with an array of names in uppercase', () => {
  const names = ['JOHN', 'fr', 'JIM']
  const result = greet(names)
  expect(result).toBe('Bonjour,  AND HELLO, JOHN, JIM!')
})

test('n°15: Testing for "fr" language code', () => {
  const language = 'fr'
  const expectedResult = ['Bonjour, ', 'et']
  const result = setLanguage(language)
  expect(result).toEqual(expectedResult)
})

test('n°16: Testing for "en" language code', () => {
  const language = 'en'
  const expectedResult = ['Hello, ', 'and']
  const result = setLanguage(language)
  expect(result).toEqual(expectedResult)
})

test('n°17: Testing for "nl" language code', () => {
  const language = 'nl'
  const expectedResult = ['Dag,e', 'en']
  const result = setLanguage(language)
  expect(result).toEqual(expectedResult)
})
