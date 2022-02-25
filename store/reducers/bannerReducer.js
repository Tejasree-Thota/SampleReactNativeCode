import { BANNER_DISPLAY } from '../actions/bannerAction';


const initialState = {
    data: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case BANNER_DISPLAY:
            return {
                data: action.data
            };
    }
    return state;
};
