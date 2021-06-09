# 2. Hello World

[Link](https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2)

## Tools
* **[Node.JS](https://nodejs.org/en/)**
* **[Visual Studio Code](https://code.visualstudio.com)**


## Create a React app
1. Create a folder named React
2. Open the floder with VSCode
3. In the VSCode, open the terminal and enter the command:
    `npx create-react-app <projectname>`
    This will download the a start-up project into the directory. `<projectname>` can be replaced by any name you like.
4. Go to the directory of the new project start the application:
    `cd <projectname>`
    `npm start`
    
## Edit the App.js
You can chage the content in the function `App`.
```javascript=
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>Hello World</p>
      </header>
    </div>
  );
}
```

## Differnet way to create a React App
* npx: mpn package runner which get installed when you install Node.js. That's how we are able to install an react app without having to install it.
`npx create-react-app <pojectname>`
* npm: Install the react package globally and use this package to generate a react app.
`npm install create-ract-app -g`
`create-react-app <projectname`