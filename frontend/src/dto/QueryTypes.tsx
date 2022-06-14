type Recipe = {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    ingredients: string[];
    process: string;
    ownerId: number;
    createdAt: Date;
    updatedAt: Date;
}


export type QueryTypes = Recipe

