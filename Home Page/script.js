const timeline_area = document.getElementById("page4-timeline");
const prevButton = document.getElementById("timeline-prev")
const nextButton = document.getElementById("timeline-next")


let timeline_counter = 0;
const goPrevTimeline = () => {
    if(timeline_counter === 0) return;
    timeline_counter--;
    timeline_area.style.translate = `calc(${timeline_counter}*(220px - 100vw))`;

    if(timeline_counter === 0) {
        prevButton.style.display = "none";
        nextButton.style.display = "block";
    }else {
        prevButton.style.display = "block";
        nextButton.style.display = "block";
    }
}

const goNextTimeline = () => {
    if(timeline_counter === 2) return;
    timeline_counter++;
    timeline_area.style.translate = `calc(${timeline_counter}*(220px - 100vw))`;

    if(timeline_counter === 2) {
        nextButton.style.display = "none";
        prevButton.style.display = "block";
    }else {
        nextButton.style.display = "block";
        prevButton.style.display = "block";
    }
}