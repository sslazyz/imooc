{// 定时器实现关键词切换

let input = document.querySelector(".search input");
const keyWords = ['Vue', 'React', '爬虫技术','Java','C++'];

 let i=0;
input.placeholder=keyWords[i];
setInterval(() => {
    i++;
    if(i==5){
        i=0;
    }
    input.placeholder=keyWords[i];
}, 2000);
}
//轮播
{
    //定义轮播图的数组
    const swiperImgList = [
        {
            path:'../images/swiper/swiper-1.jpg',
            url:'https://www.imocc.com/',
            bg:'../images/swiper/bj-1.jpg'
        },
        {
            path:'../images/swiper/swiper-2.jpg',
            url:'https://www.imocc.com/',
            bg:'../images/swiper/bj-2.jpg'
        },
        {
            path:'../images/swiper/swiper-3.jpg',
            url:'https://www.imocc.com/',
            bg:'../images/swiper/bj-3.jpg'
        },
        {
            path:'../images/swiper/swiper-4.jpg',
            url:'https://www.imocc.com/',
            bg:'../images/swiper/bj-4.jpg'
        },
    ];

    //找到swipper下的a标签
    const swiperA = document.querySelector('.swiper a');
    const banner = document.querySelector('#banner');
    let timer = null;
    let i = 0;

    const prevArrow = document.querySelector('.prev')
    const nextArrow = document.querySelector('.next')

    //获取所有的切换原点
    const ul = document.querySelector('.circle-list');
    const list = document.querySelectorAll('.circle-list li');

    //封装一个切换图片的函数
    function changeImg(index){
        const obj = swiperImgList[index];
        swiperA.style.backgroundImage = `url(${obj.path})`;
        swiperA.href = obj.url;
        banner.style.backgroundImage = `url(${obj.bg})`; 
        currentCircle(index);
    }

//初始化轮播 ，显示第一张图
changeImg(i);

//启动定时器
timer = setInterval(() => {
i = ++i ===4 ? 0 : i;
changeImg(i);
}, 3000);

let flag=true;

prevArrow.onclick = function(){
    if(flag==false){
        return;
    }
    i = --i === -1 ? 3 : i;
    changeImg(i);
    //一秒后，重新允许点击
    setTimeout(()=>{
        flag=true;
    }, 1000)
}

//选中的圆点，对其进行函数封装
function currentCircle(index) {
    for(let i = 0; i<list.length;i++){
        if(flag == false){
            return;
        }
        flag = false;
        changeImg(i);
        setTimeout(() =>{
            flag = true;
        },1000)
    }
}


//鼠标悬停到轮播大图清除定时器
swiperA.onmouseeenter = function(){
    clearInterval(timer);
}

//鼠标离开重启定时器
swiperA.onmouseleave = function(){
    timer = setInterval(()=>{
        i = ++i ==4 ? 0 : i;
        changeImg(i);

    },3000)
}

// prevArrow.onmouseeenter = function(){
//     clearInterval(timer);
// }

// nextArrow.onmouseeenter = function(){
//     clearInterval(timer);
// }

// ul.onmouseeenter = function(){
//     clearInterval(timer);
// }

// prevArrow.onclick = function(){
//     i = ++i ===4?0:i;
//     changeImg(i);
//     setTimeout(() =>{
//         flag = true;
//     },1000)
// }

}

//倒计时
{
    //获取结束时间的时间戳
    let endDate = new Date('2023-03-05 13:41:00');
    endDate = parseInt(endDate.getTime() / 1000);
    console.log(endDate);

    let timer = null;

    const hourDom = document.getElementById('hour')
    const minDom = document.getElementById('min')
    const secDom = document.getElementById('sec')

    function coundDown(){
        //获取此刻当前时间戳
        let nowDate = new Date();
        nowDate = parseInt(nowDate.getTime() / 1000);

        //计算剩余的总秒数
        let seconds = endDate - nowDate;
        if(seconds >= 0) {
            let hours = parseInt(seconds / 3600);
            hours = hours > 9 ? hours : '0' + hours;
            let mins= parseInt(seconds % 3600 / 60);
            mins = mins > 9 ? mins : '0' + mins;
            let secs = seconds % 3600 % 60;
            secs = secs > 9 ? secs : '0' + secs;
            console.log(hours, mins,secs);

            //把结果显示到页面
            hourDom.innerText = hours;
            minDom.innerText = mins;
            secDom.innerText = secs;

        }else{
            //清空计时器
            clearInterval(timer);
            document.querySelector('.countdowm p').innerText = '拼团已结束';
            hourDom.innerText = '00';
            minDom.innerText = '00';
            secDom.innerText = '00';
        }
    }
    coundDown();

    //启动定时器
    timer = setInterval(() => {
        coundDown();
    }, 1000);
}