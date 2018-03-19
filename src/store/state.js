import {playMode} from 'common/js/config.js'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  currentIndex: -1,
  mode: playMode.sequence
}

export default state
