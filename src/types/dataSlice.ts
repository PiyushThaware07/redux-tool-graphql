export type Countries = {
    awsRegion: string;
    capital: string;
    code: string;
    currency: string;
    emoji: string;
    emojiU: string;
    name: string;
    native: string;
}


export type InitialStateType = {
    status: "idle" | "loading" | "failed" | "success";
    countries : Countries[] | null;
    cities : City[] | null,
    loading: boolean;
    error: null | string;
}


// types/dataSlice.ts
export type City = {
    id: string;
    name: string;
    country: string;
    population: number;
};