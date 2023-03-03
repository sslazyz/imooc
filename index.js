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

    function changeImg(index){
        const obj = swiperImgList[index];
        swiperA.style.backgroundImage = `url(${obj.path})`;
        swiperA.href = obj.url;
        banner.style.backgroundImage = `url(${obj.bg})`; 
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
    i = --i ===-1?3:i;
    changeImg(i);
    setTimeout(()=>{
        flag=true;
    }, 1000)
}

prevArrow.onclick = function(){
    i = ++i ===4?0:i;
    changeImg(i);
}

}

