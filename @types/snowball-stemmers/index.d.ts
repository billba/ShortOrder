declare module "snowball-stemmers" {
    export class Stemmer {
        stem(term: string): string;
    }

    export function newStemmer(locale: string): Stemmer;
}
