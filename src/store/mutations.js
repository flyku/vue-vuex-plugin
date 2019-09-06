import * as TYPES from './types';

const mutations = {
    [TYPES.SET_COUMT](state, v) {
        state.count = v;
    },
    [TYPES.SET_COUMT_ADD](state,v) {
        if(v){
            state.count += v
        }else{
            state.count ++
        }
    },
    [TYPES.SET_COUMT_REDUCE](state,v) {
        if(v){
            state.count -= v
        }else{
            state.count --
        }
       
    }
}
export default mutations