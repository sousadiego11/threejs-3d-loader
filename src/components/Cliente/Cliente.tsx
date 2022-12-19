import React, { useEffect, useState } from 'react'
import {
  useLocation
} from "react-router-dom";
import { FileUtil } from '../../utils/FileUtil';
import { makeObjectLoader } from '../../factories';
import { ActionsContainer, Spin } from '../styled';
import { rotate } from '../../utils/functions';
import { RotateButton } from '../RotateButton/RotateButton';

export function Cliente() {
    const { pathname } = useLocation();
    const [loading, setLoading] = useState<boolean>(true)
    
    const load = () => {
        setLoading(true)

        FileUtil
            .getRemoteFiles(pathname.replace('/', ''))
            .then((files) => {
                makeObjectLoader({}, files, pathname)
                .load()
            })
            .catch((e) => {
                console.error(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        load()
    }, [])

    return (
        loading ? <Spin /> : (
            <ActionsContainer>
                <RotateButton />
            </ActionsContainer>
        )
    )
}