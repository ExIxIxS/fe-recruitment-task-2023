# Dynamic layout - FE recruitment-task-2023

## Requirements: [recruitment-task-2023](https://github.com/piotrkuchta/recruitment-task-2023)

## Goal
React application that will render **any** interactive card layout based on provided json definition that consists of known elements types(described below). By default, the element takes all available space. This space can be managed with dedicated elements(splitters). Every element has its own unique `elementKey`.

### Resources:
- All elements types can be found in `model.ts` file.
- in `example.json` there is a definition of example card that uses all features that needs to be implemented.

#### Implemented explicit task requirements:
 - [x] react application that will render any interactive card layout based on provided json definition;
 - [x] by default, the element takes all available space;
 - [x] every element has its own unique elementKey;
 - [x] 5 elements type to implement: TextTile, ImageTile, ButtonTile, HorizontalSplitter, VerticalSplitter;
 - [x] TextTile - text - main text of the tile - text volume should not affect tile size; (remark: scrollbar hidden)
 - [x] ButtonTile - hosts a button that performs an cross elements action on click;
 - [x] Splitters - splits available space evenly across all child elements;
 - [x] used TypeScript (model can be found in model.ts file);
 - [x] used functional React components

#### Used tools and implemented features:
+ [json-server](https://www.npmjs.com/package/json-server?activeTab=readme) for mocking API;
+ [redux](https://redux.js.org) for 2 store state branches, for handling API requests and cross elements dependencies (actions);

__________________

## How to use:
1. npm ci;
2. npm run server;
3. npm run start;
4. browser --> localhost: 3000
