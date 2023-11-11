const root = document.getElementById('root');
const question = document.getElementById('question');
const inpt = document.getElementById('inpt');
const btn = document.getElementById('btn');

let count = 0;

const tr = document.createElement('p');
root.append(tr);

btn.onclick = () => {
    try {
        if (inpt.value == 4) {
            tr.textContent = 'Вы правы';
            tr.style.color = 'green';
        } else {
            tr.textContent = 'Вы ошиблись';
            tr.style.color = 'red';
            count += 1;
            throw new Error('Error 2+2');
        }
    } catch (err) {
        console.log(err);
        console.log(`Вы ошиблись ${count} раз`)
    }
}