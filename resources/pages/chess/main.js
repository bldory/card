var hangma = document.getElementById("hangma");

var btn = document.getElementById("le");

function settext(e) {
  hangma.value += e;
}

dialog = $("#dialog-form").dialog({
  autoOpen: false,
  height: 400,
  width: 350,
  modal: true,
  buttons: {
    확인: function () {
      dialog.dialog("close");
    },
  },
  close: function () {
    form[0].reset();
    allFields.removeClass("ui-state-error");
  },
});

var skill = document.getElementById("skill");

var check = document.getElementById("skillyn");
check.addEventListener("input", function () {
  dialog.dialog("open");
  skill.style.display = "inline-block";
});
