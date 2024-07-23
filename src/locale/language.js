import { ref, computed } from 'vue'
import en from './en'
import de from './de'
import hu from './hu'

const availableLanguages = [
  {
    code: 'EN',
    name: 'English',
    file: en,
  },
  {
    code: 'DE',
    name: 'Deutsch',
    file: de,
  },
  {
    code: 'HU',
    name: 'Magyar',
    file: hu,
  },

]

// Current Language Code
const currentLanguageCode = ref('HU')

// Current Language File
const t = computed(
  () => availableLanguages.find((lang) => lang.code === currentLanguageCode.value).file
)


// const jsonArrToString = computed( () => t.value.about.map((val) =>  val))

const jsonArrToString = computed( () => {
  let out =  t.value.about.join("")
  return out
})


// Set Language cookie
const setLanguage = (code) => {
  currentLanguageCode.value = code
  localStorage.setItem('language', code)
}

// Remember Language
if (localStorage.getItem('language')) {
  setLanguage(localStorage.getItem('language'))
}

export { availableLanguages, currentLanguageCode, t, jsonArrToString, setLanguage }