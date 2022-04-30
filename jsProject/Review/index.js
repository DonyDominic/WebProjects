let reviews = [
  {
    pic: "/img/h1.jpg",
    personName: "Marie John",
    job: "UX Designer",
    review: "I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.",
  },

  {
    pic: "/img/h2.jpg",
    personName: "Tim Cook",
    job: "Web Dev",
    review: "For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.",
  },
  {
    pic: "/img/h3.jpg",
    personName: "James Paul",
    job: "Software Engineer",
    review: "One of the first courses I did online was your ASP .NET MVC 5 course and I was surprised when a few months later I started working in a software factory and everything I had learned in the course was used in real world applications",
  },
];

const pic = document.querySelector("#pic");
const personName = document.querySelector("#name");
const job = document.querySelector("#job");
const review = document.querySelector("#review");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});
next.addEventListener("click", () => {
  currentItem++;
  if (currentItem>reviews.length-1) {
      currentItem=0;
  }
  showPerson(currentItem);
});
prev.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

function showPerson(index) {
  const item = reviews[index];
  pic.src = item.pic;
  personName.textContent = item.personName;
  job.textContent = item.job;
  review.textContent = item.review;
}
