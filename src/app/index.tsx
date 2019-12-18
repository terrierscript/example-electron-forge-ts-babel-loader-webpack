import * as React from "react"
import * as ReactDom from "react-dom"
console.log("app")

const App = () => {
  return <div>hello</div>
}

console.log("xxx")
ReactDom.render(<App />, document.querySelector("#root"))
