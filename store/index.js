export const state = () => ({
  user: null,
  displayName: "",
  email: "",
  userExists: null,
  userId: "",
});

export const mutations = {
  updateDisplayName (state, name) {
    state.displayName = name;
  },
  updateEmail(state, email) {
    state.email = email;
  },
  updateUserExists(state, userExists) {
    state.userExists = userExists;
  },
  updateUserId(state, userId) {
    state.userId = userId;
  }
}