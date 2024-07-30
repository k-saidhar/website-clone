$(document).ready(function () {
  console.log("Document is ready");

  $(document).on("click", "[data-menutoggle]", function (e) {
    e.preventDefault();
    console.log("Menu toggle clicked");
    let menu = $(this).data("menutoggle");
    $(`[data-menu=${menu}]`).toggleClass("active"); // Fixed this line
    $(this).toggleClass("active");
    $(".jsbackdrop").toggleClass("active");
  });

  $(document).on("click", ".jsbackdrop", function (e) {
    console.log("Backdrop clicked");
    $(this).removeClass("active");
    $("[data-menu]").removeClass("active");
    $("[data-menutoggle]").removeClass("active");
  });
});
