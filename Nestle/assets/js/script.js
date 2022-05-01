function getById(id) {
  return document.getElementById(id);
}

function getByQuery(query) {
  return document.querySelector(query);
}

$(document).ready(function () {
  $(".enter_btn").click(function () {
    hideSection();
    $(".Choose_Avatar_section").removeClass("hidden");
  });

  $(".nxt-btn").click(function () {
    hideSection();
    $(".promise_section").removeClass("hidden");
  });

  $(".promise_card").click(function () {
    $(".promise_section").removeClass("hidden");
    $(".disclaimer").removeClass("hidden");
  });

  $(".Go_btn").click(function () {
    hideSection();
    $(".promise_section").removeClass("hidden");
    $(".congratulations_section").removeClass("hidden");
  });

  $(".ok_btn").click(function () {
    hideSection();
    $(".promise_completed_list").removeClass("hidden");
  });

  // Promise completed list
  $(".promise_card_completed").click(function () {
    hideSection();
    $(".participant_name").removeClass("hidden");
  });

  $(".promise_completed_card").click(function () {
    hideSection();
    $(".participant_name").removeClass("hidden");
  });
  //////////
  $(".promise_btn").click(function () {
    hideSection();
    $(".certificate_section").removeClass("hidden");
  });

  $(".claim_btn").click(function () {
    hideSection();
    $(".certificate_download_section").removeClass("hidden");
  });

  $(".download_btn").click(function () {
    hideSection();
    $(".download_completed").removeClass("hidden");
  });
});

function hideSection() {
  //function to hide all section
  $(
    ".Enter_MobileNo,.Choose_Avatar_section,.promise_section,.disclaimer,.congratulations_section,.promise_completed_list,.participant_name,.certificate_section,.certificate_download_section,.download_completed,.webAR_section"
  ).addClass("hidden");
}

const maleButton = getByQuery(".male_avatar");
const maleButtonClasslist = maleButton.classList;

const femaleButton = getByQuery(".female_avatar");
const femaleButtonClasslist = femaleButton.classList;

const nextButton = getByQuery(".nxt-btn");

function female_btn_change() {
  if (femaleButtonClasslist.contains("button-clicked")) {
    return femaleButtonClasslist.remove("button-clicked");
  }
  maleButtonClasslist.remove("button-clicked");
  femaleButtonClasslist.add("button-clicked");
  nextButton.removeAttribute("disabled");
  // console.log("maleButton", maleButton);
}

function male_btn_change() {
  if (maleButtonClasslist.contains("button-clicked")) {
    return maleButtonClasslist.remove("button-clicked");
  }
  femaleButtonClasslist.remove("button-clicked");
  maleButtonClasslist.add("button-clicked");
  nextButton.removeAttribute("disabled");
}

function display_name() {
  drawCanvas("myCanvas", "canvas_img", getById("certificate_name").value);
  drawCanvas(
    "myCanvas_download",
    "canvas_img_download",
    getById("certificate_name").value
  );
}

const nameInput = getById("certificate_name");
const nxtButton = getById("promise_btn");
nameInput.addEventListener("keyup", InputOnChange);

nxtButton.disabled = true;
function InputOnChange(e) {
  const value = e.target.value;
  if (value.length > 3) {
    nxtButton.disabled = false;
  } else {
    nxtButton.disabled = true;
  }
}

function drawCanvas(canvasId, imgId, name) {
  var myCanvas = getById(canvasId);

  if (myCanvas && myCanvas.getContext("2d")) {
    var context = myCanvas.getContext("2d");
    var myImg = getById(imgId);
    context.drawImage(myImg, 10, 0, 440, 260, 0, 0, 500, 300);
    context.font = "15px Nunito";
    context.fillText(name, 110, 110);
  }
}
