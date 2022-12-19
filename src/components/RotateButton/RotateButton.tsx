import { rotate } from "../../utils/functions";
import { Button } from "../styled";
import React from 'react'

export function RotateButton() {
    return (
        <Button  
            className="rotate" 
            onClick={rotate} 
        >
            Rotação automática
        </Button>
    )
}