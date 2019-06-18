
const url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis&rows=1000&facet=genre&facet=espece&facet=stadedeveloppement&facet=varieteoucultivar&facet=dateplantation&facet=libellefrancais";

console.log(axios)

axios.get(url).then(res => { // async process
    console.log(res.data.records);
}).catch(err => {
    console.error(err);
});

console.log(Boolean(res));