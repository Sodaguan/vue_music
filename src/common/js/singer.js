export default class Singer {
  constructor (item) {
    this.id = item.Fsinger_id
    this.mid = item.Fsinger_mid
    this.name = item.Fsinger_name
    this.avatar = `http://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
  }
}
