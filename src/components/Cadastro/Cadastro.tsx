import React, { useState } from 'react';
import { upload } from '../../utils/functions';
import { RotateButton } from '../RotateButton/RotateButton';
import { ActionsContainer, Button, FileInput, Input } from '../styled';

export function Cadastro() {
    const [client, setCliente] = useState<string>('');
    const [chave, setChave] = useState<string>('');
    const [files, setFiles] = useState<FileList>();

    return (
        <ActionsContainer>
            <FileInput 
                type="file" 
                className="upload" 
                multiple 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFiles(e.target.files as FileList)} 
            />
            <Input 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCliente(e.target.value)} 
                type="text" 
                placeholder="Nome do cliente...." 
            />
            <Input 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChave(e.target.value)} 
                type="text" 
                placeholder="Chave única...." 
            />
            
            <RotateButton />
            <Button 
                className="enviar" 
                onClick={() => upload(client, files, chave)}
            >
                Salvar e carregar
            </Button>
        </ActionsContainer>
    )
}