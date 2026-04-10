// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取成员按钮和菜单元素
    const memberButton = document.getElementById('memberButton');
    const memberMenu = document.getElementById('memberMenu');
    
    // 点击按钮时切换菜单显示/隐藏
    if (memberButton && memberMenu) {
        memberButton.addEventListener('click', function() {
            memberMenu.classList.toggle('show');
        });
        
        // 点击页面其他地方关闭菜单
        document.addEventListener('click', function(event) {
            if (!memberButton.contains(event.target) && !memberMenu.contains(event.target)) {
                memberMenu.classList.remove('show');
            }
        });
    }
    
    // 为返回按钮添加点击事件
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.history.back();
        });
    }
});