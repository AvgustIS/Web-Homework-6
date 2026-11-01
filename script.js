$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#update-headline-btn").click(function () {
    $("#student-name").text("Isaali Abdunabi (IT Student)");

    $(".headline").html("<em>Future Backend & Full-Stack Developer</em>");

    $("h1").css("color", "#2563eb");
    $(".intro-text").css({
      "font-weight": "bold",
      color: "#4b5563",
    });
  });

  $("#light-theme-btn").click(function () {
    $("body").css({
      "background-color": "#f4f4f4",
      color: "#222222",
    });
    $(".box").css({
      "background-color": "#ffffff",
      color: "#222222",
      "border-color": "#cccccc",
    });
    $(".slide-heading").css({
      "background-color": "#e2e2e2",
      color: "#222222",
    });
    $(".slide-panel").css({
      "background-color": "#fafafa",
      color: "#222222",
    });
  });

  $("#dark-theme-btn").click(function () {
    $("body").css({
      "background-color": "#18181b",
      color: "#f4f4f5",
    });
    $(".box").css({
      "background-color": "#27272a",
      color: "#f4f4f5",
      "border-color": "#3f3f46",
    });
    $(".slide-heading").css({
      "background-color": "#3f3f46",
      color: "#f4f4f5",
    });
    $(".slide-panel").css({
      "background-color": "#1f1f22",
      color: "#f4f4f5",
    });
  });

  $("#hide-btn").click(function () {
    $("#fun-facts, #status-message").hide();
  });

  $("#show-btn").click(function () {
    $("#fun-facts, #status-message").show();
  });

  $("#toggle-btn").click(function () {
    $("#fun-facts, #status-message").toggle();
  });

  $("#fade-in-btn").click(function () {
    $(".gallery-img").fadeIn(600);
  });

  $("#fade-out-btn").click(function () {
    $(".gallery-img").fadeOut(600);
  });

  $("#fade-toggle-btn").click(function () {
    $(".gallery-img").fadeToggle(600);
  });

  $(".slide-heading").click(function () {
    $(this).next(".slide-panel").slideToggle(400);
  });

  $("#slide-up-all").click(function () {
    $(".slide-panel").slideUp(400);
  });

  $("#slide-down-all").click(function () {
    $(".slide-panel").slideDown(400);
  });

  $("#add-skill-btn").click(function () {
    var newSkill = $("#skill-input").val().trim();
    if (newSkill !== "") {
      $("#skills-list").append("<li>" + newSkill + "</li>");
      $("#skill-input").val("");
    } else {
      alert("Please enter a skill first!");
    }
  });

  $("#prepend-skill-btn").click(function () {
    var newSkill = $("#skill-input").val().trim();
    if (newSkill !== "") {
      $("#skills-list").prepend("<li>" + newSkill + "</li>");
      $("#skill-input").val("");
    } else {
      alert("Please enter a skill first!");
    }
  });

  $("#remove-skill-btn").click(function () {
    $("#skills-list li:last-child").remove();
  });

  var isGithub = true;
  $("#change-link-btn").click(function () {
    if (isGithub) {
      $("#social-link").attr("href", "https://lms.astanait.edu.kz");
      $("#social-link").text("AITU Moodle Website");
      $(this).text("Change Link to GitHub");
      isGithub = false;
    } else {
      $("#social-link").attr("href", "https://github.com/AvgustIS");
      $("#social-link").text("My GitHub Profile");
      $(this).text("Change Link to Moodle AITU");
      isGithub = true;
    }
  });

  $("#name-input").on("input", function () {
    var currentName = $(this).val();
    $("#live-name").text(currentName !== "" ? currentName : "-");
  });

  $("#email-input").on("input", function () {
    var currentEmail = $(this).val();
    $("#live-email").text(currentEmail !== "" ? currentEmail : "-");
  });

  var animated = false;
  $("#animate-skills-btn").click(function () {
    if (!animated) {
      $("#bar-html").animate({ width: "85%" }, 800);
      $("#bar-js").animate({ width: "70%" }, 800);
      $("#bar-backend").animate({ width: "80%" }, 800);
      animated = true;
    } else {
      $("#bar-html").animate({ width: "0%" }, 800);
      $("#bar-js").animate({ width: "0%" }, 800);
      $("#bar-backend").animate({ width: "0%" }, 800);
      animated = false;
    }
  });
});
