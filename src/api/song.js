import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getSongUrl (songmid) {
  const url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
  const data = Object.assign({}, commonParams, {
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    cid: 205361747,
    uin: 0,
    songmid: songmid,
    filename: `C400${songmid}.m4a`,
    guid: _getGuid()
  })
  return jsonp(url, data, options)
}

function _getGuid () {
  let t = (new Date()).getUTCMilliseconds()
  let _guid = Math.round(2147483647 * Math.random()) * t % 1e10
  return _guid
}
