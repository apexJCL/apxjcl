export const BlogMutations = {
  UPDATE_ENTRIES: 'updateEntries',
  UPDATE_ENTRY: 'updateEntry',
  UPDATE_FETCHING: 'updateFetching'
}

export default {
  namespaced: true,
  state: {
    entries: [],
    entry: {
      id: 0,
      title: '',
      subtitle: '',
      content: ''
    },
    fetching: true
  },
  mutations: {
    [BlogMutations.UPDATE_ENTRIES]: function (state, value) {
      state.entries = value
    },
    [BlogMutations.UPDATE_ENTRY]: function (state, value) {
      state.entry = value
    },
    [BlogMutations.UPDATE_FETCHING]: function (state, value) {
      state.fetching = value
    }
  }
}
