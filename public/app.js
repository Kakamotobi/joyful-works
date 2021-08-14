const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");

const page1Btn = document.querySelector("#page1__btn");
const page2Btn = document.querySelector("#page2__btn");
const page3Btn = document.querySelector("#page3__btn");

page1Btn.addEventListener("click", (evt) => {
	evt.preventDefault();
	page1.style.display = "none";
	page2.style.display = "block";
});

page2Btn.addEventListener("click", (evt) => {
	evt.preventDefault();
	page2.style.display = "none";
	page3.style.display = "block";
});

page3Btn.addEventListener("click", (evt) => {
	evt.preventDefault();
	page3.style.display = "none";
	page4.style.display = "block";
});
