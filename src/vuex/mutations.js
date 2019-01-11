export default {
    saveToken(state, user) {
        state.UserId = user.UserId;
        state.Token = user.Token;
        state.UserName = user.RealName;
    },
}