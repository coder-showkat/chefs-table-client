export const getLocalStorageData = () => {
    const localStorageData = localStorage.getItem("chefs-table");
    let parsedData = [];
    if (localStorageData) {
        parsedData = JSON.parse(localStorageData);
    }
    return parsedData;
};

export const addToDB = (chefId, recipeId) => {
    const localStorageData = getLocalStorageData();
    localStorageData.push({chefId, recipeId});
    localStorage.setItem("chefs-table", JSON.stringify(localStorageData));
};

export const removeFromDB = (chefId, recipeId) => {
    const localStorageData = getLocalStorageData();
    const filteredData = localStorageData.filter(data=>{
        if (data.chefId === chefId && data.recipeId === recipeId) return false;
        else return true;
    });
    localStorage.setItem("chefs-table", JSON.stringify(filteredData));
}