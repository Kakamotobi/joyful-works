const connectGoogleCalendar = document.querySelector(
	".main__content__pins__item__link.calendar"
);

const googleCalendar = document.querySelector(".google-calendar");
const table = document.querySelector(".table");

connectGoogleCalendar.addEventListener("click", (evt) => {
	evt.preventDefault();

	googleCalendar.style.display = "block";
	table.style.display = "block";
});
