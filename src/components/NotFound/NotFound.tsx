import React from 'react'
import { BaseRoute } from '../BaseRoute/BaseRoute'
import { ErrorContainer } from '../styled'

export function NotFound() {
    return (
        <BaseRoute>
            <ErrorContainer>
                <h1>Erro 404</h1>
                <p>Oooops... Página não encontrada!</p>
            </ErrorContainer>
        </BaseRoute>
    )
}