const API_URL = 'https://restcountries.com/v3/all'
 
let countries =fetch(API_URL).then((res)=>{
  return res.json()
}).then((data)=>{
  return data
}).catch((error)=>{
  console.log(error)
})


// a.How many languages are there in the countries API

async function totalLanguages(){
  let data = await countries
  let languages = []
  let totalLang = []
   data.map(country=>
    languages.push(country.languages))
    languages.map((lang)=>{
      for(const langs in lang){
        totalLang.push(langs)
      }
    })
    console.log(`There are ${totalLang.length} languages in countries API`)
  return `There are ${totalLang.length} languages in countries API`
}
totalLanguages()