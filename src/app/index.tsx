import * as React from "react"
import * as ReactDom from "react-dom"
// console.log("app")

type Foo = {}
const App = () => {
  return <div>hello</div>
}

// console.log("xxx")
ReactDom.render(<App />, document.querySelector("#root"))

console.log(React)
