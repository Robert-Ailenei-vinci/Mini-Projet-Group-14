/* eslint-disable no-undef */
const { greet } = require('../src/helloWorld')

test('n°1: greet function to return "Hello, Jean-Kevin." if name is "Jean-Kevin"', () => {
  const name = 'Jean-Kevin'

  const result = greet(name)

  expect(result).toBe('Hello, Jean-Kevin.')
})

test('n°2.1: greet function to return "Hello, my friend." if name is null', () => {
  const name = null

  const result = greet(name)

  expect(result).toBe('Hello, my friend.')
})

test('n°2.2: greet function to return "Hello, my friend." if name is undefined', () => {
  const name = undefined

  const result = greet(name)

  expect(result).toBe('Hello, my friend.')
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
