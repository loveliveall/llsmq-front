export const songlist = {
  'A0001': '君のこころは輝いてるかい？',
  'A0002': 'Step! ZERO to ONE',
  'A0003': 'Aqours☆HEROES',
  'A0004': '恋になりたいAQUARIUM',
  'A0005': '待ってて愛のうた',
  'A0006': '届かない星だとしても',
  'A0007': '元気全開DAY！DAY！DAY！',
  'A0008': '夜空はなんでも知ってるの？',
  'A0009': 'トリコリコPLEASE!!',
  'A0010': 'ときめき分類学',
  'A0011': 'Strawberry Trapper',
  'A0012': 'Guilty Night, Guilty Kiss!',
  'A0013': '青空Jumping Heart',
  'A0014': 'ハミングフレンド',
  'A0015': '決めたよHand in Hand',
  'A0016': 'ダイスキだったらダイジョウブ！',
  'A0017': 'ユメ語るよりユメ歌おう',
  'A0018': 'サンシャインぴっかぴか音頭',
  'A0019': '夢で夜空を照らしたい',
  'A0020': '未熟DREAMER',
  'A0021': '想いよひとつになれ',
  'A0022': 'MIRAI TICKET',
  'A0023': 'ジングルベルがとまらない',
  'A0024': '聖なる日の祈り',
  'A0025': 'Pops heartで踊るんだもん！',
  'A0026': '空も心も晴れるから',
  'A0027': 'Waku-Waku-Week!',
  'A0028': 'Daydream Warrior',
  'A0029': 'G線上のシンデレラ',
  'A0030': 'スリリング・ワンウェイ',
  'A0031': '太陽を追いかけろ！',
  'A0032': 'Guilty Eyes Fever',
  'A0033': 'P.S.の向こう側',
  'A0034': 'LONELY TUNING',
  'A0035': 'HAPPY PARTY TRAIN',
  'A0036': 'SKY JOURNEY',
  'A0037': '少女以上の恋がしたい',
  'A0038': '近未来ハッピーエンド',
  'A0039': '海岸通りで待ってるよ',
  'A0040': 'GALAXY HidE and SeeK',
  'A0041': 'INNOCENT BIRD',
  'A0042': 'コワレヤスキ',
  'A0043': 'Shadow gate to love',
  'A0044': 'Landing action Yeah!!',
  'A0045': '夏への扉 Never end ver.',
  'A0046': '真夏は誰のモノ？',
  'A0047': '地元愛♡満タン☆サマーライフ',
  'A0048': '夏の終わりの雨音が',
}

interface SongGroup {
  [id: string]: {
    name: string,
    songsId: (keyof typeof songlist)[],
  }
}

export const songGroup: SongGroup = {
  'G001': {
    name: 'Aqours 1st single',
    songsId: ['A0001', 'A0002', 'A0003'],
  },
  'G002': {
    name: 'Aqours 2nd single',
    songsId: ['A0004', 'A0005', 'A0006'],
  },
  'G003': {
    name: 'Unit 1st single',
    songsId: ['A0007', 'A0008', 'A0009', 'A0010', 'A0011', 'A0012'],
  },
  'G004': {
    name: 'Animation 1st season single',
    songsId: ['A0013', 'A0014', 'A0015', 'A0016', 'A0017', 'A0018', 'A0019', 'A0020', 'A0021', 'A0022'],
  },
  'G005': {
    name: 'LLSIF collabo single',
    songsId: ['A0023', 'A0024'],
  },
  'G006': {
    name: 'Animation 1st season BD special',
    songsId: ['A0025', 'A0026', 'A0027', 'A0028', 'A0029', 'A0030', 'A0031', 'A0032', 'A0033', 'A0034'],
  },
  'G007': {
    name: 'Aqours 3rd single',
    songsId: ['A0035', 'A0036', 'A0037'],
  },
  'G008': {
    name: 'Unit 2nd single',
    songsId: ['A0038', 'A0039', 'A0040', 'A0041', 'A0042', 'A0043'],
  },
  'G009': {
    name: 'Aqours Next Step! Project',
    songsId: ['A0044'],
  },
  'G010': {
    name: 'Duo-Trio Collection vol.1',
    songsId: ['A0045', 'A0046', 'A0047', 'A0048'],
  },
}
