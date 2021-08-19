//获取元素
const container = document.querySelector('.container');
const imgs = document.querySelectorAll('img');

//存储初始值
let filters = [];
let translateXs = [];
let len = imgs.length;

for (let i = 0; i < len; i++) {
    filters.push(imgs[i].style.filter)
    translateXs.push(imgs[i].style.transform)
}



//绑定鼠标移入事件 
container.addEventListener('mouseenter', (e) => {
    //获取鼠标在移入时的偏移
    this.x = e.clientX;


    //移除过渡效果
    imgs.forEach(item => {
        item.style.transition = 'none';
    });
});

//绑定鼠标移动事件
container.addEventListener('mousemove', (e) => {
    //获取鼠标移动时的偏移
    this._x = e.clientX;
    //计算鼠标移动的向量
    let disX = this._x - this.x;

    //第一张图的初始值以及变化
    //filter  blur(4px)
    //transform: translate(0px, 0px)
    //变化
    //x       0    innerWidth    innerWidth    disX
    //filter  4     8       4       ???
    const blur_0 = Math.abs(4 + 4 * disX / innerWidth);
    imgs[0].style.filter = `blur(${blur_0}px)`;

    //第二张图的初始值以及变化
    //filter  blur(0px)
    //transform: translate(0px, 0px)
    //变化
    //x             0    innerWidth        disX
    //filter        0     10          ???
    //translate     0     10
    const blur_1 = Math.abs(10 * disX / innerWidth);
    const translateX_1 = 10 * disX / innerWidth;
    imgs[1].style.filter = `blur(${blur_1}px)`;
    imgs[1].style.transform = `translate(${translateX_1}px, 0px) rotate(0deg)`;

    //第三张图的初始值以及变化
    //filter  blur(1px)
    //transform: translate(-58px, 0px)
    //变化
    //x             0       innerWidth        disX
    //filter        1       -5          ???
    //translate     -58     10          ???
    const blur_2 = Math.abs(1 - 5 * disX / innerWidth);
    const translateX_2 = -58 + 10 * disX / innerWidth;
    imgs[2].style.filter = `blur(${blur_2}px)`;
    imgs[2].style.transform = `translate(${translateX_2}px, 0px) rotate(0deg)`;

    //第四张图的初始值以及变化
    //filter  blur(4px)
    //transform: translate(0px, 4.87742px)
    //变化
    //x             0       innerWidth        disX
    //filter        4       -10          ???
    //translate     0        42          ???
    const blur_3 = Math.abs(4 - 10 * disX / innerWidth);
    const translateX_3 = 42 * disX / innerWidth;
    imgs[3].style.filter = `blur(${blur_3}px)`;
    imgs[3].style.transform = `translate(${translateX_3}px, 4.87742px) rotate(0deg)`;

    //第五张图的初始值以及变化
    //filter  blur(5px)
    //transform: translate(0px, -2.09032px)
    //变化
    //x             0       innerWidth        disX
    //filter        5       -10          ???
    //translate     0        91          ???
    const blur_4 = Math.abs(5 - 10 * disX / innerWidth);
    const translateX_4 = 91 * disX / innerWidth;
    imgs[4].style.filter = `blur(${blur_4}px)`;
    imgs[4].style.transform = `translate(${translateX_4}px, -2.09032px) rotate(0deg)`;

    //第六张图的初始值以及变化
    //filter  blur(5px)
    //transform: translate(0px, 0px)
    //变化
    //x             0       innerWidth        disX
    //filter        6       -6          ???
    //translate     0        114        ???
    const blur_5 = Math.abs(6 - 6 * disX / innerWidth);
    const translateX_5 = 114 * disX / innerWidth;
    imgs[5].style.filter = `blur(${blur_5}px)`;
    imgs[5].style.transform = `translate(${translateX_5}px, 0px) rotate(0deg)`;
})

//绑定鼠标离开事件
container.addEventListener('mouseleave', () => {
    //增加过渡效果
    imgs.forEach(item => {
        item.style.transition = 'all 0.5s';
    });

    //样式清空
    clearStyle()

});

// 清空样式函数
let clearStyle = function () {
    for (let i = 0; i < len; i++) {
        imgs[i].style.filter = filters[i];
        imgs[i].style.transform = translateXs[i];
    }
}

//启动定时器 眨眼睛效果
setInterval(() => {
    setTimeout(() => {
        imgs[1].src = './images/2-zha.png';
    });

    setTimeout(() => {
        imgs[1].src = './images/2-bi.png';
    }, 100);

    setTimeout(() => {
        imgs[1].src = './images/2-zha.png';
    }, 200);

    setTimeout(() => {
        imgs[1].src = './images/2.png';
    }, 300);
}, 3000);