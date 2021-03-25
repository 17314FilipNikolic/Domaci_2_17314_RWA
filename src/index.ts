import {Loto} from "./modules/loto"
import {getRandomNumber} from "./random-number"

let Numbers:number[] = [];
getRandomNumber()
  .then((num) => {
    Numbers.push(num);
    return getRandomNumber();
  })
  .then((num) => {
    Numbers.push(num);
    return getRandomNumber();
  })
  .then((num) => {
    Numbers.push(num);
    return getRandomNumber();
  })
  .then((num) => {
    Numbers.push(num);
    return getRandomNumber();
  })
  .then((num) => {
    Numbers.push(num);
    return getRandomNumber();
  })
  .then((num) => {
    Numbers.push(num);
    return getRandomNumber();
  })
  .then((num) => {
    Numbers.push(num);
    let broj:Loto = new Loto(Numbers);
    broj.showLotoCombination();
  })
  .catch(reason => {
    console.error(reason);
  });

let promise:Promise<number>[] = [];
for(let i:number = 0; i++; i<7){
    promise.push(getRandomNumber());
}

Promise.all(
    promise
)
.then(array =>{
    const LotoBrojevi:number[] = array;
    const LotoB:Loto = new Loto(LotoBrojevi);
    LotoB.showLotoCombination();
});

Promise.all([
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber()
])
.then(array =>{
    const LotoBrojevi:number[] = array;
    const LotoB:Loto = new Loto(LotoBrojevi);
    LotoB.showLotoCombination();
});