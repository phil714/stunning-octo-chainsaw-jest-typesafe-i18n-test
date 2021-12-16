import { add } from "../src";

describe('Jest tests where import fails', () => {
    it('Should crash because the function is importing typesafe util', () => {
        const x = 5;
        const y = 10;
        const result = add(x, y)
        expect(result).toBe(x + y)
    })
});