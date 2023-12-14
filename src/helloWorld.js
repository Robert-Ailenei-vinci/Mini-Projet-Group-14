function greet (names) {
  const defaultValue = 'Hello, my friend.'
  let defaultValueArray = 'Hello, '
  let defaultAnd = 'and'
  const defaultValueUppercase = 'HELLO, '

  if (Array.isArray(names)) {
    const normalNames = []
    const upperNames = []

    // let hello = "Hello";
    // let and = "and";

    const chosenLanguage = getLanguage(names) // should get 'fr' / 'nl' / 'en'
    if (chosenLanguage) {
      const language = setLanguage(chosenLanguage) // return an array with [0] being Hello, etc and [1] being and, etc
      defaultValueArray = language[0]
      defaultAnd = language[1]
    }

    for (let i = 0; i < names.length; i++) {
      if (nameIsInUpperCase(names[i])) {
        upperNames.push(names[i])
      } else {
        normalNames.push(names[i])
      }
    }

    if (normalNames.length > 0) {
      if (normalNames.length === 1) {
        defaultValueArray += normalNames[0] + '!'
      } else {
        const AllButLast = normalNames.slice(0, -1)
        const last = normalNames.slice(-1)
        defaultValueArray +=
                    AllButLast.join(', ') + ' ' + defaultAnd + ' ' + last + '.'
      }
    }

    if (upperNames.length > 0) {
      defaultValueArray +=
                ' AND ' + defaultValueUppercase + upperNames.join(', ') + '!'
    }

    return defaultValueArray
  }

  if (!nameIsValid(names)) {
    return defaultValue
  }

  if (nameIsInUpperCase(names)) return `${defaultValueUppercase}${names}!`

  return `Hello, ${names}.`
}

function nameIsValid (name) {
  if (name === null || name === undefined || name === '') return false
  else return true
}

function nameIsInUpperCase (name) {
  if (name === name.toUpperCase()) return true
  return false
}

function getLanguage (names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === 'fr') {
      names.splice(i, 1)
      return 'fr'
    } else if (names[i] === 'en') {
      names.splice(i, 1)
      return 'en'
    } else if (names[i] === 'nl') {
      names.splice(i, 1)
      return 'nl'
    }
  }
  return null
}

function setLanguage (language) {
  if (language === 'fr') return ['Bonjour, ', 'et']
  else if (language === 'en') return ['Hello, ', 'and']
  else if (language === 'nl') return ['Dag, ', 'en']
}

module.exports = { greet }
