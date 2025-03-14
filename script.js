///// SNACK 1
async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
};

async function getChefBirthday(id) {
    const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    const chef = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`);

    return chef.birthDate;
}

try {
    getChefBirthday(1);  
} catch(error) {
    console.error(error);
};

getChefBirthday(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));




