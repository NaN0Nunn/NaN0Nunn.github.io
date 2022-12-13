search = document.getElementById("search");
like = document.getElementById("like");
coin = document.getElementById("coin");
favorites = document.getElementById("favorites");
buttonto3lian = document.getElementById("buttonto3lian");
longtime = 0;
unreach = 1;
window.onload = function () {
    showcard = "";
    axios.get("index.json",)
        .then(function (resp) {
            console.log(resp);
            console.log(resp.data.first);
            json = resp.data;
            outputhtml(resp.data.first);
            var sE = document.createElement("script");
            sE.src = "https://unpkg.com/@tabler/core@1.0.0-beta10/dist/js/tabler.min.js";
            document.getElementById("cardcontent").appendChild(sE);
            document.getElementById("cardcontent").innerHTML = showcard;
        })
}

search.oninput = () => {
    var inputcom = document.getElementById("search").value;
    var homeworktitle = document.getElementById("homeworktitle");
    var a = [];
    var k = 0;
    for (var j = 0; j < json.first.length; j++) {
        if (json.first[j].title.indexOf(inputcom) != -1) {
            a[k++] = json.first[j];
        }
        else {
            homeworktitle.innerHTML = "您现在正在搜索：" + inputcom;
            document.getElementById("cardcontent").innerHTML = "                <div class=\"empty\">" +
                "                    <div class=\"empty-icon\">" +
                "                        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-mood-sad\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">" +
                "                            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>" +
                "                            <circle cx=\"12\" cy=\"12\" r=\"9\"></circle>" +
                "                            <line x1=\"9\" y1=\"10\" x2=\"9.01\" y2=\"10\"></line>" +
                "                            <line x1=\"15\" y1=\"10\" x2=\"15.01\" y2=\"10\"></line>" +
                "                            <path d=\"M9.5 15.25a3.5 3.5 0 0 1 5 0\"></path>" +
                "                        </svg>" +
                "                    </div>" +
                "                    <p class=\"empty-title\">没有查找到此结果</p>" +
                "                    <p class=\"empty-subtitle text-muted\">" +
                "                        尝试调整搜索或过滤条件以查找所需内容." +
                "                    </p>" +
                "                </div>";
        }
    }
    if (inputcom == '') {
        homeworktitle.innerHTML = "您现在正在搜索：" + inputcom;
    }
    console.log(a);
    if (a.length) {
        showcard = '';
        outputhtml(a);
        homeworktitle.innerHTML = "您现在正在搜索：" + inputcom;
        document.getElementById("cardcontent").innerHTML = showcard;
    }
}
outputhtml = (a) => {
    for (let i = 0; i < a.length; i++) {
        showcard += json.htmlpart1;
        showcard += a[i].count;
        showcard += json.htmlpart2;
        showcard += a[i].thecount;
        showcard += json.htmlpart3;
        showcard += a[i].count;
        showcard += json.htmlpart4;
        showcard += a[i].count;
        showcard += json.htmlpart5;
        showcard += a[i].title;
        showcard += json.htmlpart6;
        showcard += a[i].subtitle;
        showcard += json.htmlpart7;
        showcard += a[i].finishtime;
        showcard += json.htmlpart8;
    }
}
like.onclick = () => {
    if (!longtime) {
        like.classList.toggle('light');
    }
}
coin.onclick = () => {
    coin.classList.toggle('light');
}
favorites.onclick = () => {
    favorites.classList.toggle('light');
}
like.onmousedown = () => {
    starttime = new Date().getTime();
    nowtime = setInterval(() => {
        let timeover1 = new Date().getTime();
        if (timeover1 - starttime >= 300) {
            i = 2;
            buttonto3lian.innerHTML = "长按点赞三连" + (i + 1);
            longtime = 1;
            like.classList.toggle('shake');
            coin.classList.toggle('shake');
            favorites.classList.toggle('shake');
            clearInterval(nowtime);
        }
    }, 100);

    nowtime2 = setInterval(() => {
        let timeover2 = new Date().getTime();
        if (timeover2 - starttime >= 3000) {
            like.classList.toggle('light', true);
            coin.classList.toggle('light', true);
            favorites.classList.toggle('light', true);
            like.classList.toggle('shake');
            coin.classList.toggle('shake');
            favorites.classList.toggle('shake');
            clearInterval(nowtime2);
        }
        buttonto3lian.innerHTML = "长按点赞三连" + i;
        i--;
        if (i < 0) {
            buttonto3lian.innerHTML = "长按点赞三连"
        }
    }, 1000);
}

like.onmouseup = () => {
    like.classList.toggle('shake', false);
    coin.classList.toggle('shake', false);
    favorites.classList.toggle('shake', false);
    timeover = new Date().getTime();

    if (timeover - starttime >= 3000) {
        like.classList.toggle('light', true);
    }
    else {
        if (timeover - starttime >= 300) {
            console.log(timeover - starttime);
            longtime = 1;
        }
        else {
            console.log(timeover - starttime);
            longtime = 0;
        }
    }

    clearInterval(nowtime2);
    clearInterval(nowtime);
    buttonto3lian.innerHTML = "长按点赞三连"
}
buttonto3lian.onmousedown = () => {
    like.onmousedown();
}
buttonto3lian.onmouseup = () => {
    like.onmouseup();
}
