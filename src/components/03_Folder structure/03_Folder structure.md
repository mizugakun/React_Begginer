# 3. Folder Structure

[Link](https://www.youtube.com/watch?v=9VIiLJL0H4Y)
## package.json
Contains the dependencies and script required to the peoject.

## package-lock.json
Ensure the consistenet of installation of your dependencies.

## mode_module folder
This is the folder where all of the dependencies are installed in.

## public folder
* `manifest.json`: concern with progressive web app.
* `index.html`: this will be the only html file in the application. The view might dynamically chage in the browser, bit it is this HTML file that gets served up. You should not chage anything in this file. The react will render UI in the root elelment (DOM node) which is configued in `./src/index.js`.
```htmlmixed=
...
<body>
    <div id="root"></div>
</body>
...
```

## src folder
* `index.js`: in `index.js`, we specify the root component which is a web component and a DOM component that will be controlled by React. In the following script, React will render the content of the `App.js` in the elelment with an ID `root` in `./public/index.htm`
```javascript=
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') <--
);
```
* `App.js`: this script is responsible for the HTML displayed in teh browser. That is to say, `App.js` is a component that represents a view that we see in the browser.
* `App.css`: style for App component.
* `App.test.js`: simple test case for App component.
* `serviceWorker.js` concern with progressive web app.

## Step for rendering html and component
1. `index.html` will be served in the browser. The `root`DOM node will be included.
2. The controll enter `index.js`. `ReactDOM.render()` will render the component of `App.js` in the `root` DOM node.
3. `App.js` contains the HTML that we want to display in the browser.