// #1 컴퓨터 1~9까지 서로 다른 임의의 수 3개 선택
function createRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
        const tempNum = Math.floor(Math.random() * 9 + 1);
        if (!numbers.includes(tempNum)) {
            numbers.push(tempNum);
        }
    }
    return numbers.join('');
}

const secreteNum = createRandomNumbers();
console.log(`${secreteNum}`); //확인용

// #2 게임 플레이어 숫자 입력 버튼 클릭 시 결과 출력
function checkGuess() {
    const userInput = document.querySelector('.requirement-put input').value;
    let ball = 0;
    let strike = 0;

    // 사용자가 입력한 값 검증(예비)
    if (userInput.length !== 3 || isNaN(userInput) || new Set(userInput).size !== 3) {
        alert('1부터 9까지의 숫자를 중복 없이 3개 입력해주세요.');
        return;
    }

    for (let i = 0; i < 3; i++) {
        if (secreteNum[i] === userInput[i]) {
            // 자리와 숫자가 모두 일치하는 경우(스트라이크)
            strike++;
        } else if (secreteNum.includes(userInput[i])) {
            // 숫자는 있지만 자리가 일치하지 않는 경우(볼)
            ball++;
        }
    }

    // 결과 화면에 표시
    const resultSection = document.querySelector('.result h3');
    if (strike === 3) {
        resultSection.textContent = '🎉 정답을 맞추셨습니다 🎉';
    } else if (strike > 0 || ball > 0) {
        resultSection.textContent = `${strike}스트라이크 ${ball}볼`;
    } else {
        resultSection.textContent = '낫싱';
    }
}

// 버튼에 클릭 이벤트 리스너 추가
document.querySelector('.requirement-put button').addEventListener('click', checkGuess);
