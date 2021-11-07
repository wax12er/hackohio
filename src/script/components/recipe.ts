export class Recipe {
    title: string = "";
    ingredients: string = "";
    directions: string = "";

    /**
     * Checks the localStorage for a recipe with the title given
     * @param title the title of the recipe to look for
     * @returns true if the recipe exists in storage
     */
    static checkStorage(title: string): boolean {
        if (localStorage.getItem(title + "_title") &&
            localStorage.getItem(title + "_ingredients") &&
            localStorage.getItem(title + "_directions"))
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
            loadedRecipe.title = (localStorage.getItem(title + "_title")) as string;
            loadedRecipe.ingredients = (localStorage.getItem(title + "_ingredients")) as string;
            loadedRecipe.directions = (localStorage.getItem(title + "_directions")) as string;
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

        localStorage.removeItem(title + "_title");
        localStorage.removeItem(title + "_ingredients");
        localStorage.removeItem(title + "_direction");

        return loadedRecipe;
    }

    /**
     * Saves the receiver to localStorage
     */
    saveToStorage() {
        localStorage.setItem(this.title + "_title", this.title);
        localStorage.setItem(this.title + "_ingredients", this.ingredients);
        localStorage.setItem(this.title + "_directions", this.directions);
    }

}