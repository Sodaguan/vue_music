<template>
  <transition name="slide">
    <div class="singer-detail"></div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getSingerDetail } from 'api/singer'
  import { ERR_OK } from 'api/config'
  import { createSong } from 'common/js/song'

  import { getSongUrl } from 'api/song'

  export default {
    name: 'singer-detail',
    data () {
      return {
        songs: []
      }
    },
    computed: {
      // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性(重点！计算属性)
      ...mapGetters([
        'singer'
      ])
    },
    created () {
      // 映射完成后就可以当作组件的属性使用,并且全局都可通过vuex调用
      console.log(this.singer)
      this._getDetail()
      setTimeout(() => {
        this._getSongUrl()
      }, 2000)
    },
    methods: {
      _getDetail () {
        // 因为歌手信息是通过点击歌手，在vuex中获取的，
        if (!this.singer.mid) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.mid).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            console.log(this.songs)
          }
        })
      },
      _normalizeSongs (list) {
        let ret = []
        list.forEach((item) => {
          // 解构赋值，会将和对象相同键名的变量赋给相同的值（musicData = item.musicData）
          let {musicData} = item
          if (musicData.songmid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      },
      _getSongUrl () {
        console.log(this.songs)
        getSongUrl(this.songs[0].mid).then((res) => {
          console.log(res.encode)
          // if (res.code === ERR_OK) {
          // }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .singer-detail {
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: $color-background
    z-index: 100
  }

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
