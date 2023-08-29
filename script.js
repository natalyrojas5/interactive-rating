
const contentHowDid = document.getElementById('content-how-did')
const contentThankYou = document.getElementById('content-thank-you')

const numberOptions = document.querySelectorAll('.option-number');
const numberSelected = document.getElementById('option-number-selected');

const btnSendAnswer = document.getElementById('btn-send');
const btnGoBack = document.getElementById('btn-go-back');

const classHidden = 'content-hidden';
const classActive = 'active';

const togglebtnActive = (num) => {
  numberOptions.forEach(n => {
    if (n.innerText === num) {
      n.classList.add(classActive)
    } else {
      n.classList.remove(classActive)
    }
  })
}

const removebtnActive = () => {
  numberOptions.forEach(n => n.classList.remove(classActive))
}

const funcNumberSelected = (number) => {
  const { target } = number;
  const num = target.innerText;
  numberSelected.textContent = num;
  togglebtnActive(num);
}


numberOptions.forEach(number => number.addEventListener('click', funcNumberSelected));

const toggleContentHidden = () => {
  if (!contentHowDid.classList.contains(classHidden)) {
    contentHowDid.classList.add(classHidden);
    contentThankYou.classList.remove(classHidden);
  } else {
    contentHowDid.classList.remove(classHidden);
    contentThankYou.classList.add(classHidden);
  }
}

btnSendAnswer.addEventListener('click', () => {
  if (numberSelected.textContent) {
    toggleContentHidden()
  }
})

btnGoBack.addEventListener('click', () => {
  numberSelected.textContent = '';
  toggleContentHidden();
  removebtnActive();
})