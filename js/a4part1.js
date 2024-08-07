// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let inserty = ["the soup kitchen", "Disneyland", "the White House"];

let insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertx); 
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);
    newStory = newStory.replaceAll(":insertx:", xItem).replaceAll(":inserty:", yItem).replaceAll(":insertz:", zItem);

  if(customName.value.trim() !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    let celsius = (94-32) * 5 / 9;
    let stones = 300 / 14;
    const weight = Math.round(stones);
    const temperature =  Math.round(celsius);
    newStory = newStory.replaceAll("94 fahrenheit", temperature + " centigrade").replaceAll("300 pounds", weight + " stones");

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}