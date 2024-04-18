var timer;
var audio = new Audio('TimeUp.mp3'); // Assuming 'alert.mp3' is the name of your audio file

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var deadlineInput = document.getElementById("deadlineInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();
    var deadline = deadlineInput.value;

    if (taskText !== "") {
        var taskItem = document.createElement("li");
        taskItem.innerHTML = '<span>' + taskText + '</span> - Deadline: ' + deadline + ' <button onclick="deleteTask(this)">Delete</button>' + ' <button onclick="markFinished(this)">Mark Finished</button>';
        taskList.appendChild(taskItem);
        taskInput.value = "";
        deadlineInput.value = "";
        taskInput.focus();
    }
}

function deleteTask(taskElement) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskElement.parentNode);
}

function markFinished(taskElement) {
    var taskTextElement = taskElement.parentNode.querySelector('span');
    taskTextElement.style.textDecoration = 'line-through';
    taskElement.parentNode.removeChild(taskElement);
}

var timer;
function startTimer() {
    var hours = parseInt(document.getElementById("hours").value) || 0;
    var minutes = parseInt(document.getElementById("minutes").value) || 0;
    var seconds = parseInt(document.getElementById("seconds").value) || 0;

    var duration = (hours * 3600) + (minutes * 60) + seconds;
    if (duration > 0) {
        clearInterval(timer);
        var display = document.getElementById("countdown");
        var start = Date.now();
        timer = setInterval(function() {
            var diff = duration - Math.floor((Date.now() - start) / 1000);
            if (diff <= 0) {
                clearInterval(timer);
                display.textContent = "Time's up!";
                return;
            }
            var hours = Math.floor(diff / 3600);
            var minutes = Math.floor((diff % 3600) / 60);
            var seconds = diff % 60;
            display.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        }, 1000);
    }
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function startTimer() {
    var hours = parseInt(document.getElementById("hours").value) || 0;
    var minutes = parseInt(document.getElementById("minutes").value) || 0;
    var seconds = parseInt(document.getElementById("seconds").value) || 0;

    var duration = (hours * 3600) + (minutes * 60) + seconds;
    if (duration > 0) {
        clearInterval(timer);
        var display = document.getElementById("countdown");
        var start = Date.now();
        timer = setInterval(function() {
            var diff = duration - Math.floor((Date.now() - start) / 1000);
            if (diff <= 0) {
                clearInterval(timer);
                display.textContent = "Time's up!";
                playAudio(); // Play audio when time's up
                return;
            }
            var hours = Math.floor(diff / 3600);
            var minutes = Math.floor((diff % 3600) / 60);
            var seconds = diff % 60;
            display.textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
        }, 1000);
    }
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function playAudio() {
    audio.play();
}
