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