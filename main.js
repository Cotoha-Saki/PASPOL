function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var menuIcon = document.querySelector(".hamburger-menu");
    if (sidebar.style.width == "250px") {
        sidebar.style.width = "0";
        menuIcon.classList.remove("open"); // バツ印をハンバーガーに戻す
    } else {
        sidebar.style.width = "250px";
        menuIcon.classList.add("open"); // ハンバーガーをバツ印に変更
    }
}
