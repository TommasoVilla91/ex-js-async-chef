///// SNACK 1
async function fetchJson(url) {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
};

async function getChefBirthday(id) {
    const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
    const chef = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`);

    return {...recipe, chef};
}

(async() => {
    const recipe = await getChefBirthday(2);
    console.log(recipe.chef.birthDate);    
})();
