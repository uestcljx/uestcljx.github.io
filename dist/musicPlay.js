const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: true,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.4,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
    //网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '生僻字',
            artist: '陈柯宇',
            url: 'http://music.163.com/song/media/outer/url?id=518781004.mp3',
            cover: 'http://p1.music.126.net/fzy5I3GvAjiDfwhIEbgXuw==/109951163062323125.jpg',
            lrc: '/./dist/music/lrc/518781004.lrc',
            theme: '#46718b'
        },
        {
            name: '光年之外',
            artist: '邓紫棋',
            url: 'http://music.163.com/song/media/outer/url?id=449818741.mp3',
            cover: 'http://p1.music.126.net/fkqFqMaEt0CzxYS-0NpCog==/18587244069235039.jpg',
            lrc: '/./dist/music/lrc/449818741.lrc',
        theme: '#46718b'
        }
    ]
});