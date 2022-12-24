import React, { useCallback, useEffect, useState } from 'react'
import {
  useLocation, useNavigate
} from "react-router-dom";
import { FileUtil } from '../../utils/FileUtil';
import { makeObjectLoader } from '../../factories';
import { ActionsContainer, Spin } from '../styled';
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
            </ActionsContainer>
        )
    )
}