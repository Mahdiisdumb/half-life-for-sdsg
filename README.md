# Half-Life for SDSG

A browser port of *Half-Life* using a WebAssembly/JavaScript build of the Xash engine.

This project loads the Half-Life engine and game assets in your web browser so you can play GoldSource Half-Life without a native install. It’s a fork of the Pixelsuft/hl emulator/port adapted for SDSG purposes.

## What This Is

This is a **web playable port** of Half-Life (GoldSource) using:
- WebAssembly (wasm) & JavaScript
- Emscripten-compiled engine files
- BrowserFS for virtual filesystem support

Assets (game files) need to be provided separately — this project doesn’t ship proprietary game data.
