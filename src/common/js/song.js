export default class Song {
  constructor ({id, mid, singer, songname, albumname, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.songname = songname
    this.albumname = albumname
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong (musicdata) {
  return new Song({
    id: musicdata.songid,
    mid: musicdata.songmid,
    singer: filterSinger(musicdata.singer),
    songname: musicdata.songname,
    albumname: musicdata.albumname,
    duration: musicdata.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicdata.albummid}.jpg`,
    url: `http://dl.stream.qqmusic.qq.com/C400${musicdata.songmid}.m4a`
  })
}

function filterSinger (singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((item) => {
    ret.push(item.name)
  })
  return ret.join('/')
}
