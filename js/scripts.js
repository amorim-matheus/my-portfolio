function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}

if (getWidth() < 1000) {
    document.getElementsByClassName("masthead-subheading")[0].style.width = "80%";
    document.getElementsByClassName("masthead-subheading")[0].style.paddingRight = "0";
    document.getElementsByClassName("masthead-subheading")[0].style.paddingLeft = "0";
}