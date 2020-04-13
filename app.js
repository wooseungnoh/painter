const canvas = document.querySelector('.jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.color');
const strokeRange = document.querySelector('#jsRange');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#000000';
ctx.lineWidth = 2.5;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

let painter = false;

const stopPainting = () => {
  painter = false;
};
const startPainting = () => {
  painter = true;
};

const onMouseMove = (e) => {
  const { offsetY: y, offsetX: x } = e;
  if (!painter) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

const init = () => {
  if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
  }

  colors.forEach((element) => {
    element.addEventListener('click', (e) => {
      ctx.strokeStyle = e.target.style.backgroundColor;
    });
  });

  strokeRange.addEventListener('mouseup', (e) => {
    ctx.lineWidth = e.target.value;
  });
};

init();
