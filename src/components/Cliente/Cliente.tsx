import React, { useCallback, useEffect, useState } from 'react'
import {
  useLocation, useNavigate
} from "react-router-dom";
import { FileUtil } from '../../utils/FileUtil';
import { makeObjectLoader } from '../../factories';
import { ActionsContainer, Spin, TextArea } from '../styled';
import { RotateButton } from '../RotateButton/RotateButton';

export function Cliente() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true)
    console.log("🚀 ~ file: Cliente.tsx:14 ~ Cliente ~ loading", loading)
    
    const load = useCallback(async() => {
        setLoading(true)

        try {
            const files = await FileUtil.getRemoteFiles(pathname.replace('/', ''))
            makeObjectLoader({}, files, pathname).load()
        } catch (e) {
            navigate('/')
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        load()
    }, [load])

    return (
        loading ? <Spin /> : (
            <ActionsContainer>
                <RotateButton />
                <TextArea>Esta representação foi criada artificialmente para transmitir uma experiência de volume e arte 3D da embalagem, contudo não representa fielmente 100% das características da embalagem, como suas dobras ou amostra de cor.</TextArea>
            </ActionsContainer>
        )
    )
}