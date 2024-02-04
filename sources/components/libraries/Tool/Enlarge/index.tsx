import React from "react"
import enlarge from "./enlarge"

const Enlarge = ({
    enlargement,
    setEnlargement
}) => <p className="tool" onClick={() =>
    enlarge(enlargement, setEnlargement)
}>
+
</p>

export default Enlarge