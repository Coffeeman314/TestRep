const buttonNodeList = document.querySelectorAll(".btn");
const btncont = document.querySelector(".buttonContainer");

const soundArr = ["boop", "deep_whoosh", "fly_by", "thump", "whoosh"];
const letterArray = ["A", "S", "D", "F", "G"];
const soundArray = soundArr.map((item, index) => {
  const sound = new Audio(`./sounds/sounds_${item}.mp3`);
  sound.setAttribute("id", `btn-${index + 1}`);
  sound.setAttribute("code", "Key" + letterArray[index]);
  return sound;
});
console.log(soundArray[0].attributes.code.value);

document.addEventListener("keydown", (event) => {
  console.log(event.code);

  soundArray.forEach(
    (item) => event.code === item.attributes.code.value && item.play()
  );
});

btncont.addEventListener("click", (event) => {
  console.log(event.target.id);
  soundArray.forEach((item) => event.target.id === item.id && item.play());
});
