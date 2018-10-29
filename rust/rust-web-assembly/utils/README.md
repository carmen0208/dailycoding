## Installation

```sh
brew install rustup
rustup-init
rustup default nightly
source $HOME/.cargo/env
rustup target add wasm32-unknown-unknown
cargo install wasm-pack
cargo instal wasm-gc
```

## Development

* Run server

```sh
npm install
wasm-pack build && npx webpack-dev-server
```