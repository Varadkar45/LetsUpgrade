const words = [
    {
        correct: "computer",
        jumbled: "ertupmoc"
    },
    {
        correct: "mansi",
        jumbled: "ansim"
    },
    {
        correct: "bhakti",
        jumbled: "tikhab"
    },
    {
        correct: "speaker",
        jumbled: "reeakps"
    },
    {
        correct: "headphone",
        jumbled: "endphonea"
    },
]

let correctWordCount = 0
let scoreCt = 0

const wrongWord = document.querySelector('.wrong-word')
const inputValue = document.querySelector('#correct-word')
const submitBtn = document.querySelector('.btn')
const score = document.querySelector('.score')

window.addEventListener('DOMContentLoaded', function () {
    wrongWord.textContent = words[correctWordCount].jumbled
    score.textContent = `score: ${scoreCt}`
})

function showWord(scCt, ctWordCount) {
    wrongWord.textContent = words[ctWordCount].jumbled
    score.textContent = `score: ${scCt}`
}

submitBtn.addEventListener('click', function () {
    if (inputValue.value.toLowerCase() === words[correctWordCount].correct.toLowerCase()) {
        scoreCt++;
        console.log(`score count ${scoreCt}`);
    }
    if (correctWordCount == words.length-1) {
        alert(`You win Your Score:${scoreCt}`)
        location.reload();
    }
    else {
        correctWordCount++;
        inputValue.value = "";
        showWord(scoreCt, correctWordCount);
    }
})


