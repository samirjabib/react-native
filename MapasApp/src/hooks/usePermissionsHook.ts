import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { RootState, useAppDispatch } from '../store/store';
import { PermissionStatus, check, request, PERMISSIONS } from 'react-native-permissions';
import { Platform, AppState } from 'react-native';
import { askLocationPermission, checkLocationPermission } from "../store";


export const usePermissionsHook = () => {

    const { locationStatus } = useSelector((state:RootState) => state.permissions)

    const dispatch = useAppDispatch()
    
    let permissionsStatus: PermissionStatus

    const onCheckLocationPermissions = async() => { //Accedemos a los permisos de nuestra aplicacion
        if(Platform.OS === 'ios') {
           permissionsStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        }else{
            permissionsStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION) //Pedimos el permiso
            // permissionsStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION) //Chekamos el permiso
        }

        dispatch(askLocationPermission(permissionsStatus))
    }

    useEffect( () => {
        AppState.addEventListener('change', state => { //Rvisamos si el usuario sale de la aplicacion
            console.log({state})
            if( state !== 'active') return;

            onCheckLocationPermissions()
        })

    
    }, [])

    return{
        locationStatus,

        onCheckLocationPermissions
    }
}