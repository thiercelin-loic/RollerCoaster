import React from "react"
import Diagram from "./components/Diagram"
import demo from "./configurations/demo.json"
import "./index.css"

const Application = () => <div>
    <Diagram values={demo}/>
</div>

export default Application