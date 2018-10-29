/* tslint:disable */
import * as wasm from './utils_bg';
import { appendStringToBody } from '../domUtils';

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_appendStringToBody_f346c389210bc84e(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    appendStringToBody(varg0);
}
/**
* @returns {void}
*/
export function run() {
    return wasm.run();
}

