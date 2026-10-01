// 1
$(function () {

// Изменение заголовка и абзаца
    $("#task1-btn").on("click", function () {
        $("#task1-title").text("Новый заголовок");
        $("#task1-paragraph").text("Новый текст абзаца, изменённый через jQuery.");
    });

// Приветствие по имени
    $("#name-btn").on("click", function () {
        let name = $("#name-input").val().trim();
        if (name === "") {
            $("#greeting").text("Введите имя!");
        } else {
            $("#greeting").text("Здравствуйте, " + name + "!");
        }
    });

// Три блока с разными классами
    $(".block-red").css({
        "color": "red",
        "font-size": "20px",
        "background-color": "#ffe6e6"
    });
    $(".block-blue").css({
        "color": "blue",
        "font-size": "24px",
        "background-color": "#e6f0ff"
    });
    $(".block-green").css({
        "color": "green",
        "font-size": "28px",
        "background-color": "#e6ffe6"
    });

// Карточка студента
    $("#s-btn").on("click", function () {
        let name = $("#s-name").val();
        let age = $("#s-age").val();
        let group = $("#s-group").val();
        let score = $("#s-score").val();

        $("#card-name").text(name || "—");
        $("#card-age").text(age || "—");
        $("#card-group").text(group || "—");
        $("#card-score").text(score || "—");
    });

// Анкета студента со статусом
    $("#a-btn").on("click", function () {
        let name = $("#a-name").val();
        let age = $("#a-age").val();
        let score = parseFloat($("#a-score").val());

        let status = "";
        if (isNaN(score)) {
            status = "Введите средний балл";
        } else if (score >= 4.5) {
            status = "Отличник";
        } else if (score >= 3.5) {
            status = "Хорошист";
        } else if (score >= 2.5) {
            status = "Удовлетворительно";
        } else {
            status = "Неуспевает";
        }

        $("#anketa-name").text(name || "—");
        $("#anketa-age").text(age || "—");
        $("#anketa-score").text(isNaN(score) ? "—" : score);
        $("#anketa-status").text(status);
    });


// 2
// Показать/скрыть информацию (toggle)
    $("#toggle-info-btn").on("click", function () {
        $("#info-block").toggle();
    });

// Изменение оформления карточки (toggleClass)
    $("#style-btn").on("click", function () {
        $("#style-card").toggleClass("active");
    });

// Дополнительная информация (slideToggle)
    $("#more-btn").on("click", function () {
        $("#more-info").slideToggle(500);
    });

// Поиск студента (input)
    $("#search-input").on("input", function () {
        let value = $(this).val().trim();
        if (value === "") {
            $("#search-result").text("Введите имя");
        } else {
            $("#search-result").text("Вы ввели: " + value);
        }
    });

// Список студентов (submit + fadeOut + toggleClass + slideToggle)
    $("#student-form").on("submit", function (event) {
        event.preventDefault();

        let name = $("#f-name").val().trim();
        let age = $("#f-age").val().trim();
        let score = $("#f-score").val().trim();

        if (name === "" || age === "" || score === "") {
            alert("Заполните все поля!");
            return;
        }

        let $card = $("<div>").addClass("student-item");
        $card.html(
            "<p><strong>Имя:</strong> " + name + "</p>" +
            "<p><strong>Возраст:</strong> " + age + "</p>" +
            "<p><strong>Средний балл:</strong> " + score + "</p>"
        );

        let $deleteBtn = $("<button>").text("Удалить");
        $deleteBtn.on("click", function () {
            $card.fadeOut(400, function () {
                $card.remove();
            });
        });

        let $editBtn = $("<button>").text("Изменить");
        $editBtn.on("click", function () {
            $card.toggleClass("active");
        });

        $card.append($deleteBtn, $editBtn);
        $("#students-list").append($card);

        $("#student-form")[0].reset();
    });

// Показать/скрыть список (slideToggle)
    $("#toggle-list-btn").on("click", function () {
        $("#students-list").slideToggle(500);
    });

});