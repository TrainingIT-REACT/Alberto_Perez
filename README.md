Mi github
https://github.com/TrainingIT-REACT/Alberto_Perez/tree/master


Clonamos el repositorio documentacion
git clone https://github.com/TrainingIT-REACT/Curso_React.git

cd curso_react
yarn install
yarn start

#dependencias
yarn add react-router-dom
yarn add redux
yarn add react-redux
yarn add redux-thunk
yarn add react-h5-audio-player

#update
npm update
yarn install

#webpack
yarn add -D webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin css-loader
yarn add -D file-loader
npm install copy-webpack-plugin --save-dev
npm install style-loader css-loader --save-dev
yarn add -D workbox-webpack-plugin
yarn add -D webpack-dev-server
--polyfill compatibilidad navegadores + server dev
yarn add -D @babel/preset-env @babel/polyfill
--carga asincrona Lazy suspense
yarn add -D @babel/plugin-syntax-dynamic-import

Compilacion
npx webpack
npx webpack-dev-server --open --mode=development

#test
yarn add -D jest
yarn add -D enzyme enzyme-adapter-react-16 jest-enzyme
--enzyme zsmount 
yarn add -D jsdom jsdom-global
npm install --save-dev --save-exact jsdom jsdom-global
--test integracion
yarn add -D jest-puppeteer puppeteer
yarn add -D serve

