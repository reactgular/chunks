/**
 * Slices up the array into chunks.
 */
export function chunks<T>(arr: Array<T>, size: number): Array<Array<T>>;

/**
 * Slices up the array into chunks, and fills the last chunk with a default value.
 */
export function chunks<T, D>(arr: Array<T>, size: number, def: D): Array<Array<T | D>>;

/**
 * Slices up the array into chunks
 */
export function chunks<T, D>(arr: Array<T>, size: number, ...args: any[]): Array<Array<T | D>> {
    const padded = args.length === 1;
    const def: D = args[0];
    const t: Array<Array<T | D>> = [];

    if (size > 0) {
        const defs: Array<D> = Array(size).fill(def);
        for (let i = 0, j = arr.length; i < j; i += size) {
            const s: Array<T> = arr.slice(i, i + size);
            if (padded) {
                t.push([...s, ...defs].slice(0, size));
            } else {
                t.push(s);
            }
        }
    }

    return t;
}
