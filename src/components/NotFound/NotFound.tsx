import React from 'react'
import { ErrorContainer } from '../styled'

export function NotFound() {
    return (
        <ErrorContainer>
            <h1>Erro 404</h1>
            <p>Oooops... Página não encontrada!</p>
        </ErrorContainer>
    )
}