import base64 from "react-native-base64";
import axios from "axios";

import serverResponse from '../../server.json';

export const BANNER_DISPLAY = 'BANNER_DISPLAY';

export const fetchBannerData = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'http://3.226.254.97:8080/tiger/apipublic/security/mobile/init/EN',
                // url: 'https://qa-dtaconnect.eohhs.mass.gov/tiger/apipublic/security/mobile/init/EN',
                headers: {
                    "Audit": JSON.stringify({ "source": "dtaconnect-mobile", "ipAddress": "", "deviceID": "", "phoneNumber": "", "emailID": "" }),
                    'Content-Type': 'application/json'
                }
            });
            const resData = base64.decode(response.data.bannerResponses[0].desc);
            // console.log(resData);
            // dispatch({ type: BANNER_DISPLAY, data: resData });
            dispatch({ type: BANNER_DISPLAY, data: base64.decode(serverResponse.bannerResponses[0].desc) });
            // const bannerData = getState().bannerData;

        } catch (err) {
            throw err;
        }
    };
};