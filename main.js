window.onload = function(){
    list_copy(vm.struct,sample)
}

function get_date(_timestamp){
    var _d = _timestamp?new Date(_timestamp * 1000):new Date();
    
    var Y = _d.getFullYear();
    var m = ("0" + (_d.getMonth() + 1)).slice(-2);
    var d = ("0" + _d.getDate()).slice(-2);
    var H = ("0" + _d.getHours()).slice(-2);
    var i = ("0" + _d.getMinutes()).slice(-2);
    var s = ("0" + _d.getSeconds()).slice(-2);
  
    // return `${Y}/${m}/${d} ${H}:${i}:${s}`;
    return `${H}:${i}`;
}

/* リスト y を リスト x　へ複製 */
function list_copy(x,y){
    for(var i=0;i<y.length;i++){
        x.push(y[i])
    }
}

var vm = new Vue({
    el: '#app',
    data: {    
        struct: []
    },
    methods: {
        createPrintDiv: function(index){
            r = ""
            var data = this.struct[index]
            switch(data.type){
                case 'sys':
                    r = '<div class="date">'+data.msg+'</div>'
                    break
                case 'msg':

                    if( data.id.target != null )
                        r+='<div class="balloon '+ data.id.target +'">'
                    if( data.id.icon != null )
                        r+='    <img class="icon" src="'+ data.id.icon +'" ></img>'
                    r+='    <div class="person">'
                    if( data.id.name != null )
                        r+='        <div class="name">'+ data.id.name +'</div>'
                    r+='        <div class="msg">' + data.msg +'</div>'
                    r+='    </div>'
                    if( data.read != 0 && data.read != null )
                        r+='    <div class="data">'+ '既読 '+ data.read +'</div>'
                    if( data.timestamp != null )
                        r+='    <div class="time">'+get_date(data.timestamp)+'</div>'
                    r+='</div>'
                    break

                case 'stp':

                    if( data.id.target != null )
                        r+='<div class="balloon '+ data.id.target +'">'
                    if( data.id.icon != null )
                        r+='    <img class="icon" src="'+ data.id.icon +'" ></img>'
                    r+='    <div class="person">'
                    if( data.id.name != null )
                        r+='        <div class="name">'+ data.id.name +'</div>'
                    r+='        <img class="stamp" src="' + data.msg +'">'
                    r+='    </div>'
                    if( data.read != 0 && data.read != null )
                        r+='    <div class="data">'+ '既読 '+ data.read +'</div>'
                    if( data.timestamp != null )
                        r+='    <div class="time">'+get_date(data.timestamp)+'</div>'
                    r+='</div>'
                    break
                }

            return r
        }
    }
  })

sample = [
    {
        "index": "0",
        "type": "sys",
        "msg": "2020年1月1日(水)",
        "read": null,
        "timestamp": null,
        "id": {
            "key": null,
            "target": null,
            "icon": null,
            "name": null
        }
    },
    {
        "index": "1",
        "type": "msg",
        "msg": "皆で新宿のカフェでバイトしたいね！",
        "read": "5",
        "timestamp": "1577842440",
        "id": {
            "key": "zq63nS6VCGZC",
            "target": "right",
            "icon": null,
            "name": null
        }
    },
    {
        "index": "2",
        "type": "msg",
        "msg": "新宿で、カフェの求人が見つかりましたよ～",
        "read": "0",
        "timestamp": "1577842440",
        "id": {
            "key": "8mP0jlAtpWkn",
            "target": "left",
            "icon": "icon/icon01.jpg",
            "name": "餅米"
        }
    },
    {
        "index": "3",
        "type": "msg",
        "msg": "\"■年内激短期OK★ホール・キッチン(年齢・経験不問)<br>時給1000円~1200円+交通費全額支給★昼・夜のみok!<br><a href=\"\"https://www.google.com\"\">https://www.google.com</a><br><br>ー もっと見る<br><a href=\"\"https://www.youtube.com/\"\">https://www.youtube.com/</a>\"",
        "read": "0",
        "timestamp": "1577842440",
        "id": {
            "key": "8mP0jlAtpWkn",
            "target": "left",
            "icon": "icon/icon01.jpg",
            "name": "餅米"
        }
    },
    {
        "index": "4",
        "type": "msg",
        "msg": "おおー！この求人いいね！",
        "read": "0",
        "timestamp": "1577842440",
        "id": {
            "key": "lX7sc7Gv3Poe",
            "target": "left",
            "icon": "icon/icon02.jpg",
            "name": "家鴨"
        }
    },
    {
        "index": "5",
        "type": "msg",
        "msg": "みんなで応募してみる？",
        "read": "0",
        "timestamp": "1577842440",
        "id": {
            "key": "KhciZsL9qpiz",
            "target": "left",
            "icon": "icon/icon03.jpg",
            "name": "河童"
        }
    },
    {
        "index": "6",
        "type": "msg",
        "msg": "そうしよう！",
        "read": "3",
        "timestamp": "1577842440",
        "id": {
            "key": "zq63nS6VCGZC",
            "target": "right",
            "icon": null,
            "name": null
        }
    },
    {
        "index": "7",
        "type": "stp",
        "msg": "https://4.bp.blogspot.com/-MbJydjTj1zQ/WDZTM7SKk8I/AAAAAAADwxw/3iM3ccZvBT4Z_Z908d7WGkRwUDSKxMQcQCLcB/s1600/AF003363_01.gif",
        "read": "2",
        "timestamp": "1577842440",
        "id": {
            "key": "zq63nS6VCGZC",
            "target": "right",
            "icon": null,
            "name": null
        }
    },
    {
        "index": "8",
        "type": "msg",
        "msg": "明日のランチどうする？",
        "read": "2",
        "timestamp": "1577842440",
        "id": {
            "key": "zq63nS6VCGZC",
            "target": "right",
            "icon": null,
            "name": null
        }
    },
    {
        "index": "9",
        "type": "msg",
        "msg": "餅米くん、明日の天気教えて！",
        "read": "0",
        "timestamp": "1577842440",
        "id": {
            "key": "KhciZsL9qpiz",
            "target": "left",
            "icon": "icon/icon03.jpg",
            "name": "河童"
        }
    },
    {
        "index": "10",
        "type": "msg",
        "msg": "東京の明日の天気は、最高15℃、最低4℃、降水量0mm、湿度90%で、快晴になるみたいです～",
        "read": "0",
        "timestamp": "1577842440",
        "id": {
            "key": "8mP0jlAtpWkn",
            "target": "left",
            "icon": "icon/icon01.jpg",
            "name": "餅米"
        }
    },
    {
        "index": "11",
        "type": "msg",
        "msg": "晴れてるなら駅前のオープンカフェ行く？？( *´艸｀)",
        "read": "0",
        "timestamp": "1577842440",
        "id": {
            "key": "lX7sc7Gv3Poe",
            "target": "left",
            "icon": "icon/icon02.jpg",
            "name": "家鴨"
        }
    },
    {
        "index": "12",
        "type": "msg",
        "msg": "いく！",
        "read": "2",
        "timestamp": "1577842440",
        "id": {
            "key": "zq63nS6VCGZC",
            "target": "right",
            "icon": null,
            "name": null
        }
    },
    {
        "index": "13",
        "type": "sys",
        "msg": "鴨頭さんがメッセージの送信を取り消しました。",
        "read": null,
        "timestamp": null,
        "id": {
            "key": null,
            "target": null,
            "icon": null,
            "name": null
        }
    },
    {
        "index": "14",
        "type": "msg",
        "msg": "決まり～",
        "read": "2",
        "timestamp": "1577842440",
        "id": {
            "key": "zq63nS6VCGZC",
            "target": "right",
            "icon": null,
            "name": null
        }
    },
    {
        "index": "15",
        "type": "stp",
        "msg": "https://3.bp.blogspot.com/-KUlowB5OH8E/WGYiwGGcH8I/AAAAAAABAtw/H2baQi3wIy82hxK43NQKbbU0Sk-e9NPIwCLcB/s800/animal_penguin_couple.png",
        "read": "0",
        "timestamp": "1577842440",
        "id": {
            "key": "lX7sc7Gv3Poe",
            "target": "left",
            "icon": "icon/icon02.jpg",
            "name": "家鴨"
        }
    },
    {
        "index": "16",
        "type": "msg",
        "msg": "りょ",
        "read": "0",
        "timestamp": "1577842440",
        "id": {
            "key": "KhciZsL9qpiz",
            "target": "left",
            "icon": "icon/icon03.jpg",
            "name": "河童"
        }
    },
    {
        "index": "17",
        "type": "sys",
        "msg": "2020年1月5日(日)",
        "read": null,
        "timestamp": null,
        "id": {
            "key": null,
            "target": null,
            "icon": null,
            "name": null
        }
    },
    {
        "index": "18",
        "type": "sys",
        "msg": "12:43<br>餅米さんが退会しました。",
        "read": null,
        "timestamp": null,
        "id": {
            "key": null,
            "target": null,
            "icon": null,
            "name": null
        }
    },
    {
        "index": "19",
        "type": "msg",
        "msg": "あらら",
        "read": "1",
        "timestamp": "1577842440",
        "id": {
            "key": "lX7sc7Gv3Poe",
            "target": "left",
            "icon": "icon/icon02.jpg",
            "name": "家鴨"
        }
    },
    {
        "index": "20",
        "type": "stp",
        "msg": "https://4.bp.blogspot.com/-sbvVifDQjto/Wc3QODgDOTI/AAAAAAABHEE/J7FB0div3d4kV5kdd7k2Im_Eza2gunoSgCLcBGAs/s800/bluebird_freeze.png",
        "read": "1",
        "timestamp": "1577842440",
        "id": {
            "key": "zq63nS6VCGZC",
            "target": "right",
            "icon": null,
            "name": null
        }
    }
]