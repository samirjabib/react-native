import { createAsyncThunk } from "@reduxjs/toolkit";


import { useSelector, useDispatch } from "react-redux"
import { PermissionStatus, check, request, PERMISSIONS } from 'react-native-permissions';
import { Platform } from 'react-native';



export const 