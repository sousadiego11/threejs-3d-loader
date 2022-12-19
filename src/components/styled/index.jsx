import styled from 'styled-components'

export const Button = styled.button`
    margin: 6px 4px;
    border: 1px solid #2448aa;
    border-radius: 4px;

    padding: 4px;
    background: #2448aa;
    color: #fff;

    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background: #486ed8;
    }
`

export const Input = styled.input`
    margin: 6px 4px;
    border-radius: 4px;
    padding: 4px;
    border: none;
    text-align: center;

    &:focus {
        outline: none;
    }
`

export const Spin = styled.div`
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #3498db; /* Blue */
    border-radius: 50%;

    width: 60px;
    height: 60px;
    margin: 20% 0 0 50%;

    animation: spin 2s linear infinite;
    position: absolute;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

export const ActionsContainer = styled.div`
    margin: 16px 0 0 16px;
    padding: 8px;
    
    position: absolute;
    display: flex;
    flex-direction: column;
    
    border: 1px solid;
    border-radius: 6px;

    background: #000c3f;
`

export const FileInput = styled.input`
    color: #fff;
    margin: 6px 4px;

    &::file-selector-button {
        border: 1px solid #2448aa;
        border-radius: 4px;
        
        padding: 4px;
        background: #2448aa;
        color: #fff;
        
        transition: 0.2s;
        cursor: pointer;
    }

    &::file-selector-button:hover {
        &:hover {
            background: #486ed8;
        }
    }

    &:focus {
        outline: none;
    }
`

export const ErrorContainer = styled.div `
    text-align: center;
    color: rgb(70, 70, 70);
`