export type Recipe = {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    ingredients: Ingredients[];
    process: string[];
    ownerId: number;
    srcLink: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Ingredients = {
    name: string;
    amount: number;
    unit: string;
}

export type QueryTypes = Recipe

