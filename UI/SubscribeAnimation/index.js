const mail = document.querySelector(".svg2");
const eye1 = document.querySelector(".cr1");
const eye2 = document.querySelector(".cr2");
const path1 = document.querySelector(".path1");
const path2 = document.querySelector(".path2");
const path3 = document.querySelector(".path3");
const path4 = document.querySelector(".path4");
const path5 = document.querySelector(".path5");
const path6 = document.querySelector(".path6");
const path7 = document.querySelector(".path7");
const rec1 = document.querySelector(".rec1");
const rec2 = document.querySelector(".rec2");
const filter1 = document.querySelector(".filter1");
const button = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const info = document.querySelector(".pStyle");
const info2 = document.querySelector(".pStyle2");
const buttonFirst = document.querySelector(".btnStyle");
const buttonBack = document.querySelector(".btn3");
const buttonConfirm = document.querySelector(".btn4");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const face = document.querySelector(".faceof");
const faceMotion = document.querySelector(".fs");
let mouseX;
let mouseY;
var customCursor = new Image();
customCursor.src = "./curs.png";
customCursor.id = "customCursor";

document.addEventListener("mousemove", function (e) {
  customCursor.style.left = e.pageX - customCursor.width / 2 + "px";
  customCursor.style.top = e.pageY - customCursor.height / 2 + "px";
});

document.body.appendChild(customCursor);

document.body.appendChild(customCursor);
function handleMouseMove(event) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  mouseX = event.clientX - screenWidth / 2;
  mouseY = event.clientY - screenHeight / 2;
  animateAttribute(eye1, 328.5 + mouseX * 0.04, "cx");
  animateAttribute(eye1, 72.5 + mouseY * 0.02, "cy");
  animateAttribute(eye2, 184.5 + mouseX * 0.04, "cx");
  animateAttribute(eye2, 72.5 + mouseY * 0.02, "cy");
}
container.addEventListener("mouseenter", () => {
  container.addEventListener("mousemove", handleMouseMove);
});

container.addEventListener("mouseleave", () => {
  container.removeEventListener("mousemove", handleMouseMove);
  animateAttribute(eye1, "328.5", "cx");
  animateAttribute(eye1, "72.5", "cy");
  animateAttribute(eye2, "184.5", "cx");
  animateAttribute(eye2, "72.5", "cy");
});
window.onload = function () {
  mail.classList.add("mailAnimate");
  setTimeout(() => {
    face.classList.remove("faceof");
  }, 1);
  face.classList.add("face");
  setTimeout(() => {
    mail.classList.remove("mailAnimate");
  }, 400);
  rec2.classList.add("face");
  animateAttribute(eye1, "15.5", "r");
  animateAttribute(eye2, "15.5", "r");
};
let state = true;
let oldPath1 =
  "M261.181 229.875L390.668 134.29C408.822 120.889 434.5 133.85 434.5 156.415V347.585C434.5 370.15 408.822 383.111 390.668 369.71L261.181 274.125C246.291 263.133 246.291 240.867 261.181 229.875Z";
let oldPath2 =
  "M252.819 274.125L123.332 369.71C105.178 383.111 79.5 370.15 79.5 347.585L79.5 156.415C79.5 133.85 105.178 120.889 123.332 134.29L252.819 229.875C267.709 240.867 267.709 263.133 252.819 274.125Z";
let oldPath3 =
  "M276.152 189.071L424.732 333.266C442.456 350.467 430.279 380.5 405.58 380.5H108.42C83.7212 380.5 71.5437 350.467 89.268 333.266L237.848 189.071C248.517 178.717 265.483 178.717 276.152 189.071Z";
let oldPath4 =
  "M125.5 360C90.6999 354.8 79.5001 331.667 80.0001 321.5C75.0003 336.5 80.2901 356.255 88 368C95.2207 379 102 379 104.5 379C200.333 378.667 391.9 378.7 407.5 379.5C423.1 380.3 431.667 362.5 434 353.5C434.833 333.167 435.2 298.6 430 323C424.8 347.4 412.5 363.107 392 367.5C345.5 377.464 160.3 365.2 125.5 360Z";
let oldPath5 =
  "M192.68 38.495C193.942 37.2253 193.947 35.1543 192.53 34.06C190.053 32.1463 187.243 30.6901 184.232 29.7704C180.184 28.534 175.896 28.3043 171.74 29.1014C167.583 29.8984 163.684 31.698 160.381 34.3439C157.924 36.3122 155.852 38.7045 154.258 41.3989C153.347 42.9398 154.117 44.8622 155.759 45.5749V45.5749C157.401 46.2877 159.289 45.5143 160.264 44.0126C161.395 42.2691 162.801 40.7116 164.434 39.4036C166.914 37.4174 169.84 36.0665 172.96 35.4682C176.081 34.8699 179.3 35.0423 182.338 35.9704C184.339 36.5816 186.222 37.5084 187.917 38.7097C189.378 39.7445 191.418 39.7647 192.68 38.495V38.495Z";
let oldPath6 =
  "M287.636 129.683C289.204 128.105 289.21 125.531 287.449 124.171C284.37 121.793 280.878 119.983 277.136 118.84C272.106 117.303 266.777 117.018 261.611 118.008C256.446 118.999 251.6 121.235 247.495 124.524C244.441 126.97 241.866 129.943 239.885 133.292C238.753 135.207 239.71 137.596 241.751 138.481V138.481C243.792 139.367 246.138 138.406 247.349 136.54C248.755 134.373 250.503 132.437 252.532 130.812C255.613 128.343 259.251 126.665 263.128 125.921C267.006 125.177 271.006 125.392 274.782 126.545C277.269 127.305 279.609 128.457 281.717 129.95C283.532 131.236 286.067 131.261 287.636 129.683V129.683Z";
let oldPath7 =
  "M355.595 44.6213C357.285 44.0331 358.197 42.1735 357.403 40.569C356.015 37.7632 354.127 35.2229 351.823 33.0768C348.727 30.1919 344.973 28.1064 340.888 27.0015C336.802 25.8966 332.509 25.8058 328.38 26.7368C325.309 27.4293 322.398 28.6718 319.785 30.3953C318.291 31.381 318.141 33.4465 319.304 34.8068V34.8068C320.468 36.1671 322.504 36.2992 324.038 35.3762C325.819 34.3048 327.765 33.521 329.806 33.0608C332.906 32.3619 336.128 32.4301 339.195 33.2595C342.262 34.0889 345.08 35.6544 347.404 37.82C348.935 39.2462 350.221 40.9043 351.219 42.7273C352.079 44.2976 353.904 45.2096 355.595 44.6213V44.6213Z";

let newPath4 =
  "M125.5 360C90.7001 354.8 79.5003 331.667 80.0003 321.5C75.0005 336.5 80.2904 356.255 88.0002 368C95.221 379 102 379 104.5 379C200.334 378.667 391.9 378.7 407.5 379.5C423.1 380.3 431.667 362.5 434 353.5C434.834 333.167 435.2 298.6 430 323C424.8 347.4 412.5 363.107 392 367.5C345.5 377.464 160.3 365.2 125.5 360Z";
let newPath5 =
  "M199.814 41.6282C201.076 40.3586 201.08 38.2876 199.663 37.1932C197.186 35.2795 194.376 33.8233 191.365 32.9036C187.318 31.6672 183.029 31.4376 178.873 32.2346C174.716 33.0316 170.817 34.8312 167.514 37.4772C165.057 39.4454 162.985 41.8378 161.391 44.5322C160.48 46.073 161.25 47.9954 162.892 48.7082V48.7082C164.535 49.4209 166.422 48.6476 167.397 47.1458C168.528 45.4024 169.934 43.8448 171.567 42.5368C174.047 40.5506 176.974 39.1997 180.094 38.6014C183.214 38.0031 186.433 38.1755 189.471 39.1036C191.472 39.7148 193.355 40.6417 195.051 41.843C196.512 42.8777 198.552 42.8979 199.814 41.6282V41.6282Z";
let newPath6 =
  "M230.428 133.549C228.216 133.784 226.588 135.779 227.097 137.944C228.598 144.333 232.019 150.147 236.945 154.577C242.875 159.911 250.567 162.863 258.543 162.865C266.518 162.868 274.213 159.921 280.146 154.591C285.075 150.164 288.499 144.352 290.004 137.964C290.514 135.799 288.888 133.804 286.676 133.567V133.567C284.464 133.33 282.511 134.947 281.911 137.089C280.677 141.5 278.21 145.5 274.762 148.597C270.308 152.598 264.532 154.81 258.545 154.809C252.559 154.807 246.784 152.591 242.333 148.587C238.886 145.488 236.422 141.486 235.19 137.074C234.592 134.931 232.64 133.313 230.428 133.549V133.549Z";
let newPath7 =
  "M345.747 44.0521C347.214 43.0258 347.585 40.9882 346.384 39.6605C344.284 37.3386 341.776 35.4082 338.975 33.9703C335.21 32.0373 331.03 31.0525 326.799 31.1015C322.567 31.1506 318.411 32.2319 314.692 34.2517C311.925 35.7542 309.462 37.7421 307.417 40.112C306.247 41.4673 306.665 43.4957 308.155 44.4877V44.4877C309.646 45.4798 311.64 45.0527 312.865 43.747C314.287 42.2312 315.947 40.9471 317.785 39.9486C320.577 38.4325 323.697 37.6208 326.874 37.5839C330.05 37.5471 333.188 38.2863 336.014 39.7374C337.875 40.693 339.565 41.9383 341.021 43.4207C342.276 44.6977 344.28 45.0784 345.747 44.0521V44.0521Z";

let newPaths5 =
  "M157.725 52.9106C156.463 54.1802 156.459 56.2512 157.875 57.3456C160.353 59.2593 163.163 60.7155 166.174 61.6352C170.221 62.8716 174.509 63.1012 178.666 62.3042C182.822 61.5072 186.721 59.7076 190.024 57.0616C192.482 55.0934 194.554 52.701 196.147 50.0066C197.059 48.4658 196.289 46.5434 194.646 45.8306V45.8306C193.004 45.1179 191.116 45.8912 190.142 47.393C189.011 49.1364 187.604 50.6939 185.971 52.002C183.492 53.9882 180.565 55.3391 177.445 55.9374C174.325 56.5357 171.106 56.3633 168.068 55.4352C166.067 54.824 164.184 53.8971 162.488 52.6958C161.027 51.6611 158.987 51.6409 157.725 52.9106V52.9106Z";
let newPaths6 =
  "M290.678 169.557C292.89 169.322 294.518 167.327 294.009 165.162C292.508 158.773 289.087 152.959 284.161 148.529C278.231 143.195 270.539 140.243 262.563 140.241C254.588 140.238 246.893 143.185 240.96 148.515C236.031 152.943 232.607 158.754 231.102 165.142C230.592 167.307 232.218 169.302 234.43 169.539V169.539C236.642 169.776 238.595 168.159 239.195 166.017C240.429 161.606 242.896 157.606 246.344 154.509C250.798 150.508 256.574 148.296 262.561 148.297C268.548 148.299 274.322 150.515 278.773 154.519C282.22 157.618 284.684 161.62 285.916 166.032C286.514 168.175 288.466 169.793 290.678 169.557V169.557Z";
let newPaths7 =
  "M309.873 46.2776C308.361 47.2355 307.897 49.2538 309.035 50.6353C311.026 53.0512 313.443 55.0947 316.175 56.6597C319.847 58.7636 323.977 59.9392 328.207 60.0846C332.437 60.2299 336.638 59.3405 340.446 57.4937C343.278 56.1198 345.83 54.247 347.982 51.9736C349.213 50.6735 348.888 48.628 347.445 47.5686V47.5686C346.002 46.5091 343.99 46.8442 342.706 48.0922C341.216 49.5411 339.499 50.7477 337.617 51.6607C334.758 53.047 331.605 53.7146 328.43 53.6055C325.255 53.4965 322.154 52.6139 319.398 51.0346C317.582 49.9946 315.952 48.673 314.565 47.1253C313.37 45.7921 311.386 45.3197 309.873 46.2776V46.2776Z";

button.addEventListener("click", () => {
  changeShape();
  mail.classList.remove("svg2");
  setTimeout(() => {
    mail.classList.add("svg2Animate");
  }, 1);
  info.classList.add("animateContainer");
  info2.classList.add("animateContainer");
  button.classList.add("animateContainer");
  buttonBack.classList.add("animateContainer");
  buttonFirst.classList.add("animateContainer");
  buttonConfirm.classList.add("animateContainer");
});
button2.addEventListener("click", () => {
  changeShape2();
  info.classList.add("hide");
  info2.classList.remove("hide");
  button2.classList.add("hide");
  buttonBack.classList.remove("hide");
  button.classList.add("hide");
  buttonConfirm.classList.remove("hide");
});
buttonBack.addEventListener("click", () => {
  changeShape3();
  info.classList.remove("hide");
  info2.classList.add("hide");
  button2.classList.remove("hide");
  buttonBack.classList.add("hide");
  buttonConfirm.classList.add("hide");
  button.classList.remove("hide");
});
buttonConfirm.addEventListener("click", () => {
  container.classList.add("animateContainer");
  setTimeout(() => {
    container.classList.add("hide");
    container2.classList.remove("hide");
    container.classList.remove("animateContainer");
  }, 350);
});

function addAnimation(path) {
  path.addEventListener("transitionend", () => {
    path.classList.remove("animate");
  });
}
function animateAttribute(path, newPath, att) {
  path.setAttribute(att, newPath);
  path.classList.add("animate");
}
addAnimation(path4);
addAnimation(path5);
addAnimation(path6);
addAnimation(path7);
addAnimation(eye1);
addAnimation(eye2);

function changeShape() {
  animateAttribute(path4, newPath4, "d");
  animateAttribute(path5, newPath5, "d");
  animateAttribute(path6, newPath6, "d");
  animateAttribute(path7, newPath7, "d");
  animateAttribute(eye1, "20.5", "r");
  animateAttribute(eye2, "20.5", "r");
}
function changeShape2() {
  animateAttribute(path5, newPaths5, "d");
  animateAttribute(path6, newPaths6, "d");
  animateAttribute(path7, newPaths7, "d");
  animateAttribute(eye1, "10.5", "r");
  animateAttribute(eye2, "10.5", "r");
}
function changeShape3() {
  animateAttribute(path4, oldPath4, "d");
  animateAttribute(path5, oldPath5, "d");
  animateAttribute(path6, oldPath6, "d");
  animateAttribute(path7, oldPath7, "d");
  animateAttribute(eye1, "15.5", "r");
  animateAttribute(eye2, "15.5", "r");
}
