
window.onload = function () {
    // 从 localStorage 中获取名字
    var name = localStorage.getItem("userName");
    document.getElementById("response").innerText = "Welcome to Let's Flip, " + name + "!";
    console.log(name);

    // 获取所有牌
    const boxes = document.querySelectorAll('.container .box1, .container .box2, .container .box3, .container .box4, .container .box5, .container .box6, .container .box7, .container .box8, .container .box9, .container .box10, .container .box11, .container .box12');

    let flippedCards = []; // 存储当前翻开的牌
    let matchedCards = []; // 存储已匹配的牌

    // 为每张牌添加点击事件
    boxes.forEach(box => {
        box.addEventListener('click', flipCard);
    });

    // 翻牌函数
    function flipCard() {
        // 如果已经翻了两张牌，或者当前牌已经匹配，则返回
        if (flippedCards.length === 2 || this.classList.contains('flipped')) return;

        // 翻牌
        this.classList.add('flipped');
        this.style.backgroundImage = `url(${this.getAttribute('data-image')})`; // 显示牌的图片
        flippedCards.push(this);

        // 如果翻了两张牌，检查是否匹配
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500); // 延迟 500ms 检查
        }
    }

    // 检查两张牌是否匹配
    function checkMatch() {
        const [card1, card2] = flippedCards;

        // 如果图片相同
        if (card1.getAttribute('data-image') === card2.getAttribute('data-image')) {
            matchedCards.push(card1, card2); // 添加到已匹配列表
            if (matchedCards.length === boxes.length) {
                // 如果所有牌都匹配，显示成功消息
                showSuccessMessage();
            }
        } else {
            // 如果不匹配，翻回牌
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.style.backgroundImage = ''; // 恢复背面颜色
            card2.style.backgroundImage = '';
        }

        // 清空已翻开的牌
        flippedCards = [];
    }

    // 显示成功消息
    function showSuccessMessage() {
        alert('CONGRATULATIONS!!!');
    }
}
