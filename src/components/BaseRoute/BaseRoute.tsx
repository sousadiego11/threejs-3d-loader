import React from 'react'
import { Footer } from '../styled'

export function BaseRoute({children}: { children: any }) {
    return (
        <>
            {children}
            <Footer>
                <a href="https://github.com/sousadiego11">
                    <p>Copyright @ Diego Sousa 2022</p>
                </a>
            </Footer>
        </>
    )
}