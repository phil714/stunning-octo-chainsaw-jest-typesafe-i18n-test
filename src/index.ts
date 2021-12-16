import { i18nObject } from "./i18n/i18n-util";


export function add(x: number, y: number): number {
    const translatedString = i18nObject("en").HI({ name: 'test' });
    console.log(translatedString)

    return x + y;
}