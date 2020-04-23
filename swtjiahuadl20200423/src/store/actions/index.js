export default {
    actionCommit({commit},middleBtn){
        console.log(middleBtn);
        commit("mutationsState",middleBtn);
    },
    addTypeMsgHandle({commit},colorbgaddTypeMsgHandle){
        commit("addTypeMsgMutationsHandle",colorbgaddTypeMsgHandle);
        console.log(colorbgaddTypeMsgHandle[0],"添加信息",colorbgaddTypeMsgHandle[1]);
    },
}