window.onload = function(){
    var btn = document.getElementById("btn")
    var timer ;
    var isTop = true;
        window.onscroll = function(){
            if (!isTop){
                clearInterval(timer);
            }
            isTop = false;
        }

        btn.onclick = function () {
            timer = setInterval(function(){
                var sTop = document.body.scrollTop || document.documentElement.scrollTop;
                var speed = sTop / 10;
                document.body.scrollTop = document.documentElement.scrollTop -= speed;
                isTop = true;
                if (sTop == 0){
                    clearInterval(timer);
                }
            },10);
        }
    }