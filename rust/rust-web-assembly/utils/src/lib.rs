extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "../domUtils")]
extern {
    fn appendStringToBody(s: &str);
}

#[wasm_bindgen]
pub extern fn run() {
    appendStringToBody("Love you QQ");
}