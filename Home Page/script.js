const timeline_area = document.getElementById("page4-timeline");
const prevButton = document.getElementById("timeline-prev")
const nextButton = document.getElementById("timeline-next")

let counter = Math.floor((270*12 + 90)/(parseInt(window.innerWidth)));
let window_width = window.innerWidth;

let timeline_counter = 0;
const goPrevTimeline = () => {
    if(timeline_counter === 0) return;
    timeline_counter--;
    timeline_area.style.translate = `-${(timeline_counter)*window_width}px`;
    
    if(timeline_counter === 0) {
        prevButton.style.display = "none";
        nextButton.style.display = "block";
    }else {
        prevButton.style.display = "block";
        nextButton.style.display = "block";
    }
}

const goNextTimeline = () => {
    if(timeline_counter === counter) return;
    timeline_counter++;
    timeline_area.style.translate = `-${timeline_counter*window_width}px`;
    // console.log(parseInt(window.innerWidth));
    if(timeline_counter === counter) {
        nextButton.style.display = "none";
        prevButton.style.display = "block";
    }else {
        nextButton.style.display = "block";
        prevButton.style.display = "block";
    }
}


const changeCounter = () => {
    // console.log(window.innerWidth)
    counter = Math.floor((270*12 + 90)/(parseInt(window.innerWidth)));
    window_width = window.innerWidth;
}
window.addEventListener('resize', changeCounter);

// item - 270px
// total - device width
// count - 12