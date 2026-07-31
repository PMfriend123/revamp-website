/* Select Elements to Change */

let imageToggler = document.getElementById('imageToggler');
let instruction = document.getElementById('instruction');

/* Create Event Handlers for mousedown and mouseup */

const mousedownHandler = (changingImage) => {
  changingImage.src = './assets/pikachuJump2.png';
};

const mouseupHandler = (changingImage) => {
  changingImage.src = './assets/pikachuJump1.png';
};

/* Callback Function to Toggle First Image and Add New Event Listeners */

const changeImage = (e) => {
  e.preventDefault();

  const changingImage = document.getElementById('changingImage');

  if (
    changingImage.src ===
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbogi7OsAp9Y3X-gk4srzeeWHJgzMrk9y1ojg59anRg&s'
  ) {
    changingImage.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4xKRwFg4TWxK9txovfTYv8VmHV5GB0Y7rCkGO-_I3g&s=10';

    instruction.style.visibility = 'visible';

    changingImage.onmousedown = () => {
      mousedownHandler(changingImage);
    };

    changingImage.onmouseup = () => {
      mouseupHandler(changingImage);
    };

    instruction.onmousedown = () => {
      mousedownHandler(changingImage);
    };

    instruction.onmouseup = () => {
      mouseupHandler(changingImage);
    };
  } else {
    changingImage.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4xKRwFg4TWxK9txovfTYv8VmHV5GB0Y7rCkGO-_I3g&s=10';

    changingImage.onmousedown = null;
    changingImage.onmouseup = null;
    instruction.onmousedown = null;
    instruction.onmouseup = null;

    instruction.style.visibility = 'hidden';
  }
};

/* Bind the initial click handler */
imageToggler.onclick = changeImage;
