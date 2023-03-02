import { PermissionStatus } from 'react-native-permissions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface PermissionsState{
    locationStatus: PermissionStatus //TIpamos nuestros permisos si necesitaramos mas podriamos tiparlos con la libreria
}

export const initialState: PermissionsState ={
    locationStatus:'unavailable'
}

interface PermissionsReduxPayload { //creamos el type para nuestro payload
    permissions: PermissionsState //TIpamos nuestros permisos si necesitaramos mas podriamos tiparlos con la libreria
    askLocationPermissions: () => void,
    checkLocationPermissions: () => void,

}

export const permissionsSlice = createSlice({
    name:'permissions',
    initialState,
    reducers:{
        askLocationPermission: (state, { payload } :PayloadAction<PermissionStatus>) => {
            state.locationStatus = payload
        },
        checkLocationPermission: (state, {payload}) => {

        }
    }
})

export const {checkLocationPermission, askLocationPermission } = permissionsSlice.actions