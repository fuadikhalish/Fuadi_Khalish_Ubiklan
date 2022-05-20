// tab switcher
$("#ex1-tab-1").click(function () {
  $("#tabs-2").hide();
  $(this).tab("show");
});
$("#ex1-tab-2").click(function () {
  $(this).tab("show");
  $("#tabs-2").show();
});

// image thumb
$(".img-select").click(function () {
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
  $("#main-thumb").attr("src", $(this).attr("src"));
  // console.log($(this).attr('src'));
});

$(document).ready(() => {
  const src = $(".img-select").attr("src");
  // console.log(src);
  $("#main-thumb").attr("src", src);
});

//monthpicker
$(document).ready(() =>{
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  $('#getMonth').html(months[date.getMonth()])
  $('#getYear').html(date.getFullYear())
})

$('#date-min').on('click', () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];;
  let date = months.indexOf($('#getMonth').html());

  if (date == 0)
  {
    date = 12
    $('#getYear').html($('#getYear').html() - 1)
  }
  $('#getMonth').html(months[date- 1])
})

$('#date-plus').on('click', () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];;
  let date = months.indexOf($('#getMonth').html());

  if (date == 11)
  {
    date = -1
    $('#getYear').html(parseInt($('#getYear').html()) + 1)
  }
  $('#getMonth').html(months[date + 1])
})

//schedule
function addLog(type, message) {
  var $log = $("<tr />");
  $log.append($("<th />").text(type));
  $log.append($("<td />").text(message ? JSON.stringify(message) : ""));
}
$(function () {
  var isDraggable = true;
  var isResizable = true;
  var $sc = $("#schedule").timeSchedule({
    startTime: "00:00", // schedule start time(HH:ii)
    endTime: "21:00", // schedule end time(HH:ii)
    widthTime: 60 * 10, // cell timestamp example 10 minutes
    timeLineY: 60, // height(px)
    verticalScrollbar: 20, // scrollbar (px)
    timeLineBorder: 2, // border(top and bottom)
    bundleMoveWidth: 6, // width to move all schedules to the right of the clicked time line cell
    draggable: isDraggable,
    resizable: isResizable,
    resizableLeft: true,
    rows: {
      0: {
        title: '<div class="text-center"><small>Mon</small><br>1 </div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #012",
            data: {},
          },
        ],
      },
      1: {
        title: '<div class="text-center"><small>Tue</small><br>2 </div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #010",
            data: {},
          },
        ],
      },
      2: {
        title: '<div class="text-center"><small>Wed</small><br>3 </div>',
        schedule: [
        ],
      },
      3: {
        title: '<div class="text-center"><small>Thu</small><br>4 </div>',
        schedule: [
        ],
      },
      4: {
        title: '<div class="text-center"><small>Fri</small><br>5 </div>',
        schedule: [
        ],
      },
      5: {
        title: '<div class="text-center"><small>Sat</small><br>6 </div>',
        schedule: [
          {
            start: "07:00",
            end: "10:00",
            text: "Schedul #015",
            data: {},
          },
          {
            start: "10:00",
            end: "12:00",
            text: "Schedul #001",
            data: {},
          },
        ],
      },
      6: {
        title: '<div class="text-center"><small>Sun</small><br>7 </div>',
        schedule: [
          {
            start: "07:00",
            end: "10:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "10:00",
            end: "12:00",
            text: "Schedul #012",
            data: {},
          },
        ],
      },
      7: {
        title: '<div class="text-center"><small>Mon</small><br>8 </div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #012",
            data: {},
          },
        ],
      },
      8: {
        title: '<div class="text-center"><small>Tue</small><br>9 </div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #010",
            data: {},
          },
        ],
      },
      9: {
        title: '<div class="text-center"><small>Wed</small><br>10 </div>',
        schedule: [
        ],
      },
      10: {
        title: '<div class="text-center"><small>Thu</small><br>11 </div>',
        schedule: [
        ],
      },
      11: {
        title: '<div class="text-center"><small>Fri</small><br>12 </div>',
        schedule: [
        ],
      },
      12: {
        title: '<div class="text-center"><small>Sat</small><br>13 </div>',
        schedule: [
          {
            start: "07:00",
            end: "10:00",
            text: "Schedul #015",
            data: {},
          },
          {
            start: "10:00",
            end: "12:00",
            text: "Schedul #001",
            data: {},
          },
        ],
      },
      13: {
        title: '<div class="text-center"><small>Sun</small><br>14 </div>',
        schedule: [
          {
            start: "07:00",
            end: "10:00",
            text: "Schedul #015",
            data: {},
          },
          {
            start: "10:00",
            end: "12:00",
            text: "Schedul #001",
            data: {},
          },
        ],
      },
      14: {
        title: '<div class="text-center"><small>Mon</small><br>15 </div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #012",
            data: {},
          },
        ],
      },
      15: {
        title: '<div class="text-center"><small>Tue</small><br>16 </div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #012",
            data: {},
          },
        ],
      },
      16: {
        title: '<div class="text-center"><small>Wed</small><br>17 </div>',
        schedule: [
        ],
      },
      17: {
        title: '<div class="text-center"><small>Thu</small><br>18 </div>',
        schedule: [
        ],
      },
      18: {
        title: '<div class="text-center"><small>Fri</small><br>19 </div>',
        schedule: [
        ],
      },
      19: {
        title: '<div class="text-center"><small>Sat</small><br>20 </div>',
        schedule: [
          {
            start: "07:00",
            end: "10:00",
            text: "Schedul #015",
            data: {},
          },
          {
            start: "10:00",
            end: "12:00",
            text: "Schedul #001",
            data: {},
          },
        ],
      },
      20: {
        title: '<div class="text-center"><small>Sun</small><br>21 </div>',
        schedule: [
          {
            start: "07:00",
            end: "10:00",
            text: "Schedul #015",
            data: {},
          },
          {
            start: "10:00",
            end: "12:00",
            text: "Schedul #001",
            data: {},
          },
        ],
      },
      21: {
        title: '<div class="text-center"><small>Mon</small><br>22 </div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #012",
            data: {},
          },
        ],
      },
      22: {
        title: '<div class="text-center"><small>Tue</small><br>23</div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #012",
            data: {},
          },
        ],
      },
      23: {
        title: '<div class="text-center"><small>Wed</small><br>24 </div>',
        schedule: [
        ],
      },
      24: {
        title: '<div class="text-center"><small>Thu</small><br>25 </div>',
        schedule: [
        ],
      },
      25: {
        title: '<div class="text-center"><small>Sat</small><br>26 </div>',
        schedule: [
        ],
      },
      26: {
        title: '<div class="text-center"><small>Sun</small><br>27 </div>',
        schedule: [
          {
            start: "07:00",
            end: "10:00",
            text: "Schedul #015",
            data: {},
          },
          {
            start: "10:00",
            end: "12:00",
            text: "Schedul #001",
            data: {},
          },
        ],
      },
      27: {
        title: '<div class="text-center"><small>Mon</small><br>28 </div>',
        schedule: [
          {
            start: "07:00",
            end: "10:00",
            text: "Schedul #015",
            data: {},
          },
          {
            start: "10:00",
            end: "12:00",
            text: "Schedul #001",
            data: {},
          },
        ],
      },
      28: {
        title: '<div class="text-center"><small>Tue</small><br>29 </div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #012",
            data: {},
          },
        ],
      },
      29: {
        title: '<div class="text-center"><small>Wed</small><br>30 </div>',
        schedule: [
          {
            start: "05:00",
            end: "09:00",
            text: "Schedul #010",
            data: {},
          },
          {
            start: "09:00",
            end: "12:00",
            text: "Schedul #012",
            data: {},
          },
        ],
      },
    },
    onChange: function (node, data) {
      addLog("onChange", data);
    },
    onInitRow: function (node, data) {
      addLog("onInitRow", data);
    },
    onClick: function (node, data) {
      addLog("onClick", data);
    },
    onAppendRow: function (node, data) {
      addLog("onAppendRow", data);
    },
    onAppendSchedule: function (node, data) {
      addLog("onAppendSchedule", data);
      if (data.data.class) {
        node.addClass(data.data.class);
      }
      if (data.data.image) {
        var $img = $('<div class="photo"><img></div>');
        $img.find("img").attr("src", data.data.image);
        node.prepend($img);
        node.addClass("sc_bar_photo");
      }
    },
    onScheduleClick: function (node, time, timeline) {
      var start = time;
      var end = $(this).timeSchedule(
        "formatTime",
        $(this).timeSchedule("calcStringTime", time) + 3600
      );
      $(this).timeSchedule("addSchedule", timeline, {
        start: start,
        end: end,
        text: "Insert Schedule",
        data: {
          class: "sc_bar_insert",
        },
      });
      addLog("onScheduleClick", time + " " + timeline);
    },
  });
  $("#event_timelineData").on("click", function () {
    addLog("timelineData", $sc.timeSchedule("timelineData"));
  });
  $("#event_scheduleData").on("click", function () {
    addLog("scheduleData", $sc.timeSchedule("scheduleData"));
  });
  $("#event_resetData").on("click", function () {
    $sc.timeSchedule("resetData");
    addLog("resetData");
  });
  $("#event_resetRowData").on("click", function () {
    $sc.timeSchedule("resetRowData");
    addLog("resetRowData");
  });
  $("#event_setDraggable").on("click", function () {
    isDraggable = !isDraggable;
    $sc.timeSchedule("setDraggable", isDraggable);
    addLog("setDraggable", isDraggable ? "enable" : "disable");
  });
  $("#event_setResizable").on("click", function () {
    isResizable = !isResizable;
    $sc.timeSchedule("setResizable", isResizable);
    addLog("setResizable", isResizable ? "enable" : "disable");
  });
  $(".ajax-data").on("click", function () {
    $.ajax({ url: "./data/" + $(this).attr("data-target") }).done((data) => {
      addLog("Ajax GetData", data);
      $sc.timeSchedule("setRows", data);
    });
  });
  $("#clear-logs").on("click", function () {
    $("#logs .table").empty();
  });
});



