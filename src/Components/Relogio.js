import react from "react";

export default function Relogio() {
    return(
        <p>
            {new Date().toLocaleTimeString()}
        </p>
    )
}