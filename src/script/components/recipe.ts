export class Recipe {
    title: string = "";
    ingredients: string = "";
    directions: string = "";

    /**
     * Gets all the recipes stored in localStorage
     * @returns
     */
    static getAllRecipes(): Recipe[] {
        let recipes: Recipe[] = [];

        for (let i = 0; i < localStorage.length; i++) {

            let item: string = (localStorage.key(i) as string);
            if (item.startsWith("recipe.") && item.endsWith("_title")) {
                let title: string = localStorage.getItem(item) as string

                if (Recipe.loadFromStorage(title)) {
                    recipes.push((Recipe.loadFromStorage(title) as Recipe));
                }
            }
        }

        return recipes;
    }

    /**
     * Checks the localStorage for a recipe with the title given
     * @param title the title of the recipe to look for
     * @returns true if the recipe exists in storage
     */
    static checkStorage(title: string): boolean {
        if (localStorage.getItem("recipe." + title + "_title") &&
            localStorage.getItem("recipe." + title + "_ingredients") &&
            localStorage.getItem("recipe." + title + "_directions"))
        {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Returns a Recipe from the localStorage with the title given
     * @param title the title of the recipe to search for
     * @returns A Recipe if it is found, null if it is not found.
     */
    static loadFromStorage(title: string): Recipe | null {
        let loadedRecipe: Recipe = new Recipe();

        if (this.checkStorage(title)) {
            loadedRecipe.title = (localStorage.getItem("recipe." + title + "_title") as string);
            loadedRecipe.ingredients = (localStorage.getItem("recipe." + title + "_ingredients") as string);
            loadedRecipe.directions = (localStorage.getItem("recipe." + title + "_directions")as string);
        }

        return loadedRecipe;
    }

    /**
     * Returns a Recipe from the localStorage with the title given
     * @param title the title of the recipe to search for
     * @returns A Recipe if it is found, null if it is not found.
     */
    static removeFromStorage(title: string) {
        let loadedRecipe: Recipe = new Recipe();

        localStorage.removeItem("recipe." + title + "_title");
        localStorage.removeItem("recipe." + title + "_ingredients");
        localStorage.removeItem("recipe." + title + "_direction");

        return loadedRecipe;
    }

    /**
     * Saves the receiver to localStorage
     */
    saveToStorage() {
        localStorage.setItem("recipe." + this.title + "_title", this.title);
        localStorage.setItem("recipe." + this.title + "_ingredients", this.ingredients);
        localStorage.setItem("recipe." + this.title + "_directions", this.directions);
    }

}