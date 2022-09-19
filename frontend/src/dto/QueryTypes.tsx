export class Recipe {
    id?: number;
    title: string;
    thumbnail: string;
    description: string;
    ingredients: Ingredients[];
    process: string[];
    ownerId?: number;
    srcLink: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(
        title: string,
        thumbnail: string,
        description: string,
        ingredients: Ingredients[],
        process: string[],
        srcLink: string
    ) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
        this.ingredients = ingredients;
        this.process = process;
        this.srcLink = srcLink;
    }
}

export type Ingredients = {
    name: string;
    amount: number;
    unit: string;
}

export type QueryTypes = Recipe

