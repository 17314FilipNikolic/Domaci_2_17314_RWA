export class Loto{
    Brojevi:Array<number>;
    Container:HTMLElement;
    constructor(brojevi:Array<number>){
        this.Brojevi = brojevi;
    }
    showLotoCombination(){
        console.log(`${this.Brojevi}`);
    }
}