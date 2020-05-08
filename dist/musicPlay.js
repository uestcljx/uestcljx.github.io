const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.45,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    // lrcType: 3, //使用lrc文件提供歌词
    //网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: 'Hey Jude',
            artist: 'The Beatles',
            url: 'http://freetyst.nf.migu.cn/public/product5th/product27/2018/12/29/2018%E5%B9%B403%E6%9C%8821%E6%97%A517%E7%82%B924%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E6%AD%A3%E4%B8%9C54%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005669Z1L9.mp3?channelid=03&k=c6f0ee09ee7c595c&t=1584457800&msisdn=fd3f1397-de44-4b76-9128-4c4de072d9eb',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1128/1714/AL3024a28cea2d484b9715c5f823ec0428.jpg',
            lrc: '/./dist/music/lrc/hey.lrc',
            theme: '#46718b'
        },
        {
            name: 'Let it be',
            artist: 'The Beatles',
            url: 'http://freetyst.nf.migu.cn/public/product5th/product27/2018/12/29/2018%E5%B9%B403%E6%9C%8821%E6%97%A517%E7%82%B924%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E6%AD%A3%E4%B8%9C54%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005669Z1DR.mp3?channelid=03&k=d182b2ab68115487&t=1583592611&msisdn=39325cb7-72db-4499-94cb-6a01ae6a7df5',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1128/1714/AL3024a28cea2d484b9715c5f823ec0428.jpg',
            lrc: '/./dist/music/lrc/let.lrc',
        theme: '#46718b'
        },
        {
            name: 'Natural',
            artist: 'Imagine Dragons',
            url: 'http://freetyst.nf.migu.cn/public/product5th/product27/2018/12/21/%E9%A2%84%E7%95%99%E6%95%B0%E5%AD%97%E4%B8%93%E8%BE%91cpid%E4%B8%BA600566%E7%9A%84%E6%95%B0%E6%8D%AE/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005669Z17R.mp3?channelid=03&k=6690a06f4a92eb00&t=1583590331&msisdn=fe92116a-0f90-4dde-a269-d2467d08a37f',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1128/1714/AL805dc68530eb404ca29e4ceb79bacb69.jpg',
            lrc: '/./dist/music/lrc/natural.lrc',
        theme: '#46718b'
        },
        {
            name: 'Believer',
            artist: 'Imagine Dragons',
            url: 'http://freetyst.nf.migu.cn/public/productBe/productB01/2019/08/0818/2019%E5%B9%B401%E6%9C%8808%E6%97%A513%E7%82%B946%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E6%AD%A3%E4%B8%9C11%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005661TD12.mp3?channelid=03&k=11cdfc0c930c0f1a&t=1584458134&msisdn=cdcdd4b1-3a63-4034-90ac-7fdf21dbcb1f',
            cover: 'https://cdnmusic.migu.cn/picture/2019/0611/1852/AL010cca4c58f5437f829448598d720146.jpg',
            lrc: '/./dist/music/lrc/believer.lrc',
        theme: '#46718b'
        },
        {
            name: 'We will rock you',
            artist: 'Queen',
            url: 'http://freetyst.nf.migu.cn/public/product4th/product36/2019/09/0923/2018%E5%B9%B408%E6%9C%8823%E6%97%A515%E7%82%B956%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY957%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005970UHFT.mp3?channelid=03&k=7222e3d191a51453&t=1584458423&msisdn=f59b10c3-dc78-429b-9e76-e8a40dff4d78',
            cover: 'https://cdnmusic.migu.cn/picture/2020/0305/0900/ALf768d16c2229fdfa1130ae19e08fa032.jpg',
            lrc: '/./dist/music/lrc/rockyou.lrc',
        theme: '#46718b'
        },
        {
            name: '灰色轨迹',
            artist: 'Beyond',
            url: 'http://freetyst.nf.migu.cn/public/product8th/product38/2020/02/2419/2020%E5%B9%B402%E6%9C%8819%E6%97%A518%E7%82%B946%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E6%AD%A3%E4%B8%9C13%E9%A6%96094315/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/6005662LKVF.mp3?channelid=03&k=783c2c9a837c123c&t=1584458497&msisdn=cc568a67-e0e6-4cfa-89bb-5d150725c058',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1121/1649/ALdf0de11d4edc48f29e2ba894c2686211.jpg',
            lrc: '/./dist/music/lrc/hsgj.lrc',
        theme: '#46718b'
        },
        {
            name: '东风破',
            artist: '周杰伦',
            url: 'http://freetyst.nf.migu.cn/public/product8th/product38/2020/01/0718/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701925.mp3?channelid=03&k=ac15d28bec100a03&t=1585880953&msisdn=3a37cad7-478a-4f76-9bda-268923067e12',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1125/1028/ALe2de34dab7c04adc8cd48025339c46c5.jpg',
            lrc: '/./dist/music/lrc/dfp.lrc',
        theme: '#46718b'
        },
        {
            name: '兰亭序',
            artist: '周杰伦',
            url: 'http://freetyst.nf.migu.cn/public/product5th/product35/2019/10/2820/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054702006.mp3?channelid=03&k=2e9474d44c4cef35&t=1585881162&msisdn=a3d7333a-45be-44f1-b422-8a5b1ef757c9',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1031/0116/AL3f169c1d25854897bed1453a6aead54c.jpg',
            lrc: '/./dist/music/lrc/ltx.lrc',
        theme: '#46718b'
        },
        {
            name: '一路向北',
            artist: '周杰伦',
            url: 'http://freetyst.nf.migu.cn/public/product11/2018/06/21/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/MP3_320_16_Stero/%E4%B8%80%E8%B7%AF%E5%90%91%E5%8C%97-%E5%91%A8%E6%9D%B0%E4%BC%A6.mp3?channelid=03&k=cce31daecbeab974&t=1585881247&msisdn=afa6f585-c476-4e54-93c0-ab485b79ba50',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1125/1028/ALe2de34dab7c04adc8cd48025339c46c5.jpg',
            lrc: '/./dist/music/lrc/ylxb.lrc',
        theme: '#46718b'
        },
        {
            name: '止战之殇',
            artist: '周杰伦',
            url: 'http://freetyst.nf.migu.cn/public/product5th/product35/2019/11/0822/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701943.mp3?channelid=03&k=725fe658a5453698&t=1585881485&msisdn=ea240bdc-9eef-4a5c-8e3d-5e61eeec7714',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1108/2207/AL2fc0b9eec0a24d3c9c77ed9ee133ffc4.jpg',
            lrc: '/./dist/music/lrc/zzzs.lrc',
        theme: '#46718b'
        },
        {
            name: '七里香',
            artist: '周杰伦',
            url: 'http://freetyst.nf.migu.cn/public/product5th/product35/2019/10/1618/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701934.mp3?channelid=03&k=c9b5e28a90880f39&t=1585881536&msisdn=38bc114d-0034-47da-90fa-68008164558d',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1108/2207/AL2fc0b9eec0a24d3c9c77ed9ee133ffc4.jpg',
            lrc: '/./dist/music/lrc/qlx.lrc',
        theme: '#46718b'
        },
        {
            name: '以父之名',
            artist: '周杰伦',
            url: 'http://freetyst.nf.migu.cn/public/product5th/product34/2019/07/2320/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_320_16_Stero/60054701921.mp3?channelid=03&k=0cae0183abbfe827&t=1585881616&msisdn=cc4b7f93-e2f0-4a7e-ad0f-4e41d2ca1bc7',
            cover: 'https://cdnmusic.migu.cn/picture/2019/1125/1028/ALe2de34dab7c04adc8cd48025339c46c5.jpg',
            lrc: '/./dist/music/lrc/yfzm.lrc',
        theme: '#46718b'
        },
        {
            name: 'Only My Railgun',
            artist: '花たん',
            url: 'http://music.163.com/song/media/outer/url?id=27632615.mp3',
            cover: 'http://y.gtimg.cn/music/photo_new/T002M0000000NG1v4fcc1q.jpg',
            lrc: '/./dist/music/lrc/railgun.lrc',
        theme: '#46718b'
        },
    ]
});