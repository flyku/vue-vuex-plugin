import * as TYPES from './types';

const actions = {
    ADD1000(vuex) {
        // axios.get("/customer/user_info").then(res => {
        //     commit(TYPES.SET_COUMT, res.data);
        // });
        vuex.commit(TYPES.SET_COUMT_ADD, 1000);
    },
    REdUCE1000(vuex) {
        // axios.get("/customer/user_info").then(res => {
        //     commit(TYPES.SET_COUMT, res.data);
        // });
        vuex.commit(TYPES.SET_COUMT_REDUCE, 1000);
    }
}
export default actions