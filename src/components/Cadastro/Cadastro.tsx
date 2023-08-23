import React, { useEffect, useState } from 'react';
import { sceneHandler } from '../../singletons';
import { MtlStrategyLocal } from '../../strategy/MtlStrategyLocal';
import { upload } from '../../utils/functions';
import { RotateButton } from '../RotateButton/RotateButton';
import { ActionsContainer, Button, FileInput } from '../styled';

export function Cadastro() {
    const [client, setCliente] = useState<string>('');
    const [files, setFiles] = useState<FileList>();

    useEffect(() => {
        new MtlStrategyLocal(sceneHandler.scene)
        .load('E 45 Aircraft_obj.mtl','E 45 Aircraft_obj.obj' )
    }, [])

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