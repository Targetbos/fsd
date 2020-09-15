import "./_filter-date-dropdown.scss";
import "../__date-dropdown/js/air-datepicker";
$(".filter-date-dropdown__input").click(function () {
  $(".datepicker-here").datepicker({
    inline: true,
    autoClose: true,
    navTitles: {
      days: "MM yyyy"
    }
  })
})