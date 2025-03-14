///// SNACK 1
async function getChefBirthday(id) {
    
    // BONUS 1 (fatto guardando correzione)
    let recipe;
    try {
        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        recipe = await recipeResponse.json();
    } catch(error) {
        console.error(error);
        throw new Error(`Non riescoa a recuperare la ricetta ${id}!`);
    };

    if(recipe.message) {
        throw new Error(recipe.message);
    };

    let chef;
    try {
        const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
        chef = await chefResponse.json();
    } catch(error) {
        console.error(error);
        throw new Error(`Non riescoa a recuperare lo chef ${id}!`);
    }

    if(chef.message) {
        throw new Error(chef.message);
    };
     
    // BONUS 2
    const newDate = dayjs(chef.birthDate).format('DD/MM/YYYY');
    return newDate;
}

(async() => {
    try {
        const birthday = await getChefBirthday(1);
        console.log("Data di nascita dello chef:", birthday);
    } catch(error) {
        console.error("Errore:", error.message);
    };
})();