export default {
    actionCommit({commit},middleBtn){
        console.log(middleBtn);
        commit("mutationsState",middleBtn);
    },
    addTypeMsgHandle({commit},colorbg){
        commit("addTypeMsgMutationsHandle",colorbg);
        console.log(colorbg,"添加信息");
    },
}