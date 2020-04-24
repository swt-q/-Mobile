export default {
    //刷新获取数据，缓存
    actionCommit({commit}){
        // console.log(middleBtn);
        commit("mutationsState");
    },
    //添加
    addTypeMsgHandle({commit},colorbgaddTypeMsgHandle){
        commit("addTypeMsgMutationsHandle",colorbgaddTypeMsgHandle);
        console.log(colorbgaddTypeMsgHandle[0],"添加信息",colorbgaddTypeMsgHandle[1]);
    },
    //删除
    deleteHandle({commit},params){
        commit("deleteMutationsHandle",params);
    }
}