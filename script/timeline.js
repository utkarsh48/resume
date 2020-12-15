let timelineData = [
{
heading:"DevMela 2020",
name:"DevMela 2020",
date:"November 2020",
location:"Online",
details: "This event was organized by Google Developer Group Jalandhar in association with DSC communities from all over Punjab. There I participated in a quiz-competition and won.",
},
{
heading:"Hacktoberfest 2020",
name:"Hacktoberfest 2020",
date:"October 2020",
location:"Online",
details: "This is a world-wide open source event, Held every year in October for whole month -such an octotastic month.",
},
{
heading:"Devfest India 2020",
name:"Devfest India 2020",
date:"October 2020",
location:"Online",
details: "This festival is held every year by Google Developer Group communities all over India, however this year it was organized online due to pandemic. There were quizzes after live sessions, I eventually cleared one of the quizzes and got some SCHWAGS.",
},					
{
heading:"Hack The Mountain 2020",
name:"Hack The Mountain 2020",
date:"October 2020",
location:"Online",
details: "This was an online hackathon organized by Sudanstech in association with many sponsors. The saying \"With great sponsors comes great perks\" was justified here. Despite the perks my team consisting Ashwani kumar and Manpreet Singh Kullar made it to top 40s from over more than 250+ submissions.",
},
{
heading:"Hacktoberfest 2019",
name:"Hacktoberfest 2019",
date:"October 2019",
location:"Online",
details: "This is a world-wide open source event, Held every year in the month of October. It was the first time i tried such an event and was amazed to discover how even small contributions with beginner level coding skills earned me a t-shirt.",
},
{
heading:"ACUITY 3.0",
name:"ACUITY 3.0",
date:"September 2019",
location:"GNDU RC jal",
details: "This was a mock placement drive organized in our college to give an idea of how the interviews are held. I was one of the winners.",
},
{
heading:"TECHNOBUZZ 2K19",
name:"TECHNOBUZZ 2K19",
date:"September 2019",
location:"GNDU RC jal",
details: "This was a poster making competition themed technology and machine organized in our college. I was among top 3s.",
},
{
heading:"Prix Mosaic-2016",
name:"Prix Mosaic-2016(Media Fest)",
date:"October 2016",
location:"Hans Raj Mahila Maha Vidyalaya (college)",
details: "This was a poster making competition themed olympic games organized in our college. I was representing my school and ended up among top 3s. However my name was pronounced and spelled wrong, I know even spelling bee veterans find it hard to spell my name. XD",
},
{
heading:"NCC",
name:"NCC",
date:"August 2015",
location:"Dayanand Model Sr. Sec. School",
details: "NCC 'A' Certificate is given to the cadet when they complete the first level of training. A Cadet earns this certificate after 1-2 year training and attending minimum 1 camp. It was a challenging experience for me, i got ill by the end but I sticked to it.",
}
];


class TimelineCell{
  constructor(obj){
    this.heading = obj.heading;
    this.date = obj.date;
    this.location = obj.location;
    this.details = obj.details;
    this.year = calcYear(this.date);
  }

  heading;
  date;
  location;
  details;
  year;

  render(){
    let timelineProgressContent = document.createElement("div");
    timelineProgressContent.classList.add("timeline-progress-content", "timeline-details");

    let timelineDetailsCard = document.createElement("section");
    timelineDetailsCard.classList.add("timeline-details-card");

    let hoverCard = document.createElement("figure");
    hoverCard.classList.add("sub-card");

    let hoverCardCap = document.createElement("figcaption");
    hoverCardCap.classList.add("sub-card-content");

    let subCardHeadName = document.createElement("span");
    subCardHeadName.classList.add("sub-card-head-name");
    subCardHeadName.innerText = this.heading;

    let subCardHeadExtras1 = document.createElement("span");
    subCardHeadExtras1.classList.add("sub-card-head-extras");
    subCardHeadExtras1.innerText = this.date;

    let subCardHeadExtras2 = document.createElement("span");
    subCardHeadExtras2.classList.add("sub-card-head-extras");
    subCardHeadExtras2.innerText = this.location;

    let subCardHeadDetails = document.createElement("span");
    subCardHeadDetails.classList.add("sub-card-head-details");
    subCardHeadDetails.innerText = this.details;

    hoverCardCap.appendChild(subCardHeadName);
    hoverCardCap.appendChild(subCardHeadExtras1);
    hoverCardCap.appendChild(subCardHeadExtras2);
    hoverCardCap.appendChild(subCardHeadDetails);

    hoverCard.appendChild(hoverCardCap);

    timelineDetailsCard.appendChild(hoverCard);
    timelineProgressContent.innerText = this.heading;
    timelineProgressContent.appendChild(timelineDetailsCard);
    timelineProgressContent.setAttribute("data-year", this.year);

    return timelineProgressContent;
  }
}

class TimelineProgressBar{
  constructor(date){
    if(date)
      this.year = calcYear(date);
  }
  year;
  render(){
    let main = document.createElement("div")
    main.classList.add("timeline-progress-bar")
    
    if(this.year)  
      main.setAttribute("data-year", this.year);
    else{
      main.style.minWidth = "1rem";
      main.style.width = "1.5rem";
      main.style.backgroundColor = "transparent";
    }
    return main;
  }
}


///timeline

//add random colors here
let colors = new Map();

//parent of timeline
const timelineSuperParent = document.querySelector("article.timeline");

//an element to append timeline
let timelineParent = document.createElement("section");
timelineParent.classList.add("sub-card", "timeline-progress");


//beginning transparent element
timelineParent.appendChild(new TimelineProgressBar().render());

//dynamically appending
for (let i = 0; i < timelineData.length; i++) {
  let element = timelineData[i];//current element
  let cell = new TimelineCell(element).render();//current cell
  let bar = new TimelineProgressBar(element.date).render();//corresponding bar
  let year = calcYear(element.date);//current elements year

  //if color exist don't override
  if(!colors.has(year)) colors.set(year, `hsl(${parseInt((Math.random()*1000)%360)}, ${parseInt((Math.random()*100)%100)}%, ${parseInt(60)}%)`);

  //setting colors
  cell.style.borderColor = colors.get(year);
  
  if(i!=0){
    bar.style.backgroundColor = colors.get(year);
    timelineParent.appendChild(bar);
  }

  timelineParent.appendChild(cell);
}

timelineSuperParent.appendChild(timelineParent);

//ending transparent element
timelineParent.appendChild(new TimelineProgressBar().render());


//helper functions
function calcYear(date) {
  return parseInt(date.charAt(date.length-2)+date.charAt(date.length-1));
}