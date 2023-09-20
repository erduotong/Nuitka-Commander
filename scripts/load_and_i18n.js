// *********************
// 处理翻译及加载逻辑
// *********************

let current_language; //存储翻译的json

function start_loading() {
    document.querySelectorAll('.loading_page span').forEach(span => {
        span.style.animationPlayState = "running"; // 恢复动画
    });
    document.querySelector('.loading_page').style.display = "flex";

}

function stop_loading() {
    document.querySelectorAll('.loading_page span').forEach(span => {
        span.style.animationPlayState = "paused"; // 暂停动画
    });
    document.querySelector('.loading_page').style.display = "none";
}


// todo 刷新body来更新语言

//加载语言到字典中
function load_language() {
    fetch('./src/translation/supported_languages.json')
        .then(response => response.json())
        .then(data => {
            current_language = data;
        })
        .catch(error => {
            console.error('An error occurred in loading the language:', error);
            alert('An error occurred while loading the language! Please provide us with an issue. \nError:' + error);
        });
}

//翻译函数 输入key 从当前语言字典中获取key对应的当前语言字符串
function t(key) {

    return current_language[key];
}

