/*
    Platform.js

    Utility class to find out the running platform.
*/

import { Platform } from 'react-native';

export function isAndroid() {
    if (Platform.OS === 'ios') {
        return false;
    }
    return true;
}

export function isWeb() {
    if (Platform.OS === 'web') {
        return true;
    }
    return false;
}
