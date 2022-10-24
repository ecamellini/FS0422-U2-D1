// 1st: let's model the list of scores.

// Score: number
// Name: string
// We want our elements to have both a name and a score...
// Many entities, with multiple properties.

let scores = [ // In the real world this list here will come from somewhere else.
  // From a server, that has all the scores saved in a DataBase.
  { name: "Eric", score: 100 },
  { name: "Tim", score: 90},
  { name: "Paul", score: 80},
  { name: "Jim", score: 60},
  { name: "Mario", score: 20},
  { name: "Paolo", score: 99},
  { name: "Barack", score: 66},
  { name: "George", score: 75},
  { name: "Joe", score: 33},
  { name: "Jake", score: 45},
  { name: "Victor", score: 10},
]


// This is a function, so the name shall be a VERB
function visualizeScores() {
  // 1) For each element inside the array of scores...
  for (let scoreObject of scores) {
    // 2) create the tags that we need (li, span, span, etc.)
    // and: customize the tags adding some classes, some text, ewtc.
    let li = document.createElement("li")
    li.classList.add("scoreboard-line")

    let nameSpan = document.createElement("span")
    nameSpan.classList.add("item-name")
    nameSpan.innerText = scoreObject.name

    let scoreSpan = document.createElement("span")
    scoreSpan.classList.add("item-score")
    scoreSpan.innerText = scoreObject.score

    li.appendChild(nameSpan)
    li.appendChild(scoreSpan)

    if (  scoreObject.score >= 60  ) {
      li.classList.add('good-score')
    } else {
      li.classList.add('bad-score')
    }

    // 3) appending them to the ol, to their parent
    let ol = document.getElementById('scoreboard-list')
    ol.appendChild(li)
  }
}


window.onload = function () {
  // Functions like this one are called ANONYMOUS functions
  visualizeScores()
}

// Same thing - syntactic sugar
// Arrow functions are just another way to declare anonymous functions
// window.onload = () => {
//   visualizeScores()
// }
