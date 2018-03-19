import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYSTATE] (state, flag) {
    state.playing = flag
  },
  [types.SET_FULLSCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST] (state, list) {
    state.playList = list
  },
  [types.SET_CURRENTINDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_PLAYMODE] (state, mode) {
    state.mode = mode
  }
}

export default mutations
