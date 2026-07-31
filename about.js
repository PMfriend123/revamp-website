/* Select Elements */

const submitBtn = document.getElementById('usernameBtn');
const input = document.getElementById('majorInput');
const currentYearSpan = document.getElementById('currentYear');
const yearDeltaSpan = document.getElementById('yearDelta');

/* Display Brooklyn Tech's Age */

const currentYear = new Date().getFullYear();

currentYearSpan.textContent = currentYear;
yearDeltaSpan.textContent = currentYear - 1922;

/* Handle Major Submission */

submitBtn.onclick = (e) => {
  e.preventDefault();

  const previousMessage = document.getElementById('message');

  if (previousMessage) {
    previousMessage.remove();
  }

  const message = document.createElement('p');
  message.id = 'message';

  const selectedMajor = input.value.trim();

  if (selectedMajor === '') {
    message.textContent = 'Enter a major that interests you!';
  } else {
    message.textContent =
      `${selectedMajor} could be an exciting path to explore at Brooklyn Tech!`;
  }

  document.getElementById('contact').append(message);
};
