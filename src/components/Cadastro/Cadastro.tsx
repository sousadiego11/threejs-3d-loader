import React, { useState } from 'react';
import { upload } from '../../utils/functions';
import { RotateButton } from '../RotateButton/RotateButton';
import { ActionsContainer, Button, FileInput, Input } from '../styled';

export function Cadastro() {
    const [client, setCliente] = useState<string>('');
    const [files, setFiles] = useState<FileList>();

    return (
        <ActionsContainer>
            <FileInput 
                type="file" 
                className="upload" 
                multiple 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFiles(e.target.files as FileList)} 
            />
            {/* <Input 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCliente(e.target.value)} 
                type="text" 
                placeholder="Nome do cliente...." 
            /> */}
            
            <RotateButton />
            <Button 
                className="enviar" 
                onClick={() => upload(client, files)}
            >
                Salvar e carregar
            </Button>
        </ActionsContainer>
    )
}