// Функция для нахождения максимума
function max(a, b) {
    return a > b ? a : b;
}

// Основная логика приложения
document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    
    calculateBtn.addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = "Пожалуйста, введите оба числа!";
            return;
        }
        
        const maximum = max(num1, num2);
        resultDiv.textContent = `Максимальное число: ${maximum}`;
    });
});
// Добавляем после предыдущего кода

const step3 = document.getElementById('step3');
const prevBtn2 = document.getElementById('prevBtn2');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageGreeting = document.getElementById('ageGreeting');

// Переход от шага 2 к шагу 3
calculateBtn.addEventListener('click', function() {
    // ... предыдущий код расчета максимума ...
    step2.classList.remove('active');
    step3.classList.add('active');
    ageGreeting.textContent = `${admin}, теперь проверим ваш возраст:`;
});

// Логика проверки возраста
function verifyAge() {
    let age;
    do {
        age = prompt("Пожалуйста, введите ваш возраст:");
        
        if (age === null) {
            continue; // Если нажата Отмена, повторяем запрос
        }
        
        age = parseInt(age);
        if (isNaN(age) || age <= 0) {
            alert("Пожалуйста, введите корректный возраст!");
            continue;
        }
        
    } while (!confirm(`Вы уверены, что вам ${age} лет?`));
    
    resultDiv.textContent = `Спасибо! Ваш возраст: ${age} лет`;
    resultDiv.style.color = '#27ae60';
}

checkAgeBtn.addEventListener('click', verifyAge);

// Навигация назад
prevBtn2.addEventListener('click', function() {
    step3.classList.remove('active');
    step2.classList.add('active');
});