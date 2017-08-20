import EntryAPI from '../../api/entry'

export const BlogMutations = {
  UPDATE_ENTRIES: 'updateEntries',
  UPDATE_ENTRY: 'updateEntry',
  UPDATE_FETCHING: 'updateFetching',
  UPDATE_PAGES: 'updatePages',
  UPDATE_ACTUAL_PAGE: 'updateActualPage',
  UPDATE_PAGE_SIZE: 'updatePageSize'
}

export default {
  namespaced: true,
  state: {
    entries: [],
    pages: 1, // TODO: server
    actualPage: 1,
    pageSize: 8, // TODO: server/client
    entry: {
      id: 0,
      title: '',
      subtitle: '',
      content: ''
    },
    fetching: false
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
    },
    [BlogMutations.UPDATE_PAGES]: function (state, value) {
      state.pages = value
    },
    [BlogMutations.UPDATE_ACTUAL_PAGE]: function (state, value) {
      state.actualPage = value
    },
    [BlogMutations.UPDATE_PAGE_SIZE]: function (state, value) {
      state.pageSize = value
    }
  },
  actions: {
    fetchEntries: function ({commit, state}) {
      commit(BlogMutations.UPDATE_FETCHING, true)
      EntryAPI.getEntries()
        .then(r => {
          commit(BlogMutations.UPDATE_ENTRIES, r.data.entries)
          commit(BlogMutations.UPDATE_ACTUAL_PAGE, r.data.page)
          commit(BlogMutations.UPDATE_FETCHING, false)
        })
        .catch(e => {
          commit(BlogMutations.UPDATE_FETCHING, false)
          console.log(e)
        })
    },
    fetchEntry: function ({commit, state}, {entryId}) {
      commit(BlogMutations.UPDATE_FETCHING, true)
      EntryAPI.getEntry(entryId)
        .then(r => {
          commit(BlogMutations.UPDATE_ENTRY, r.data)
          commit(BlogMutations.UPDATE_FETCHING, false)
        })
        .catch(e => {
          commit(BlogMutations.UPDATE_FETCHING, false)
          console.log(e)
        })
    }
  }
}
