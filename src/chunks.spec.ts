import {chunks} from './chunks';

describe(`${chunks.name}`, () => {
    it('should not get stuck on empty arrays', () => {
        expect(chunks([], 0)).toEqual([]);
    });

    it('should always return an empty array for zero sized chunks', () => {
        [
            [],
            [1],
            [1, 2, 3],
            [1, 2, 3, 4]
        ].forEach(arr => expect(chunks(arr, 0)).toEqual([]));
    });

    it('should use a default value as filler', () => {
        expect(chunks([1, 2, 3, 4], 3, undefined)).toEqual([[1, 2, 3], [4, undefined, undefined]]);
    });

    it('should trim the last chunk', () => {
        expect(chunks([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    });

    it('should slice up array into chunks', () => {
        [
            {
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [[1], [2], [3], [4], [5], [6], [7], [8], [9]],
                c: 1
            },
            {
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [[1, 2], [3, 4], [5, 6], [7, 8], [9]],
                c: 2
            },
            {
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
                c: 3
            },
            {
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [[1, 2, 3, 4], [5, 6, 7, 8], [9]],
                c: 4
            }
        ].forEach(({a, b, c}) => expect(chunks(a, c)).toEqual(b));
    });

    it('should slice up array into chunks with a filler', () => {
        [
            {
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [[1], [2], [3], [4], [5], [6], [7], [8], [9]],
                c: 1
            },
            {
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [[1, 2], [3, 4], [5, 6], [7, 8], [9, undefined]],
                c: 2
            },
            {
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
                c: 3
            },
            {
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [[1, 2, 3, 4], [5, 6, 7, 8], [9, undefined, undefined, undefined]],
                c: 4
            }
        ].forEach(({a, b, c}) => expect(chunks(a, c, undefined)).toEqual(b));
    });
});
