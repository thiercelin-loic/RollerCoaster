import React from "react"
import reduce from "./reduce"

const Reduce = ({
    enlargement,
    setEnlargement
}) => <p className="tool" onClick={() =>
    reduce(enlargement, setEnlargement)
}>
-
</p>

export default Reduce