<!-- @format -->

# FiveM Nui | React + Shadcn-UI

A modern template for building FiveM NUI applications using React, Vite, Tailwind CSS, and Shadcn UI.

## Features

-   **React 19**: Build dynamic and interactive user interfaces.
-   **React Compiler**: Efficiently compiles React components for optimal performance.
-   **Vite**: Fast and optimized development environment.
-   **Tailwind CSS V4**: Utility-first CSS framework for rapid styling.
-   **Shadcn UI**: Pre-designed and customizable UI components.
-   **TypeScript**: Strongly typed JavaScript for better code quality.
-   **Radix UI**: Accessible and composable UI primitives.
-   **PNPM**: Fast and efficient package manager.
-   **LightningCss**: High-performance CSS compiler for production builds.

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 14 or higher)
-   [pnpm](https://pnpm.io/) (preferred package manager)

### Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd FiveMNuiReactShadCN
    ```

2. Install dependencies:

    ```sh
    pnpm install
    ```

3. Start the development server:

    ```sh
    pnpm dev
    ```

4. Open your browser and navigate to `http://localhost:5173` to see the application in action.

### Building for Production

To build the application for production, run:

```sh
pnpm build
```

This will create an optimized build in the `nui` directory.

### Running in FiveM

To run the application in FiveM, you need to set up a resource. Follow these steps:

1. Create a new folder in your FiveM resources directory (e.g., `resources/[your_resource_name]`).
2. Copy the contents of the `nui` folder into your new resource folder.
3. Create a `__resource.lua` or `fxmanifest.lua` file in your resource folder with the following content:

```lua
fx_version 'cerulean'
game 'gta5'

ui_page 'nui/index.html'

files {
	'nui/index.html',
	'nui/*.*',
	'nui/**/*.*',
}

client_script 'client.lua'
server_script 'server.lua'
```

4. Start the resource in your `server.cfg` file:

```sh
start [your_resource_name]
```
