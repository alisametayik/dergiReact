function selamVer(isim:string){
    return "merhaba " + isim
}

let mesaj = selamVer("Alperen")

console.log(mesaj)

let sayi:number
sayi =10
sayi =10.54
//sayi = "asdf"

let sehir:string
sehir="Ankara"
sehir="İstanbul"
//sehir = 10

let dogrumu:boolean
dogrumu =true
dogrumu =false

let sayilar:number[] = [1,2,3,4]
let sayilar2 :  Array<number> = [1,2,3,4]


let dizi:[number,string] = [2,"Ankara"]

enum Renk{Kirmizi=1,Siyah,Mavi}
let renk:Renk = Renk.Kirmizi

let deger : any = "Ankara"
deger =2
deger ={}

let deger2 : void = undefined

function selamVer2():void{
    console.log("Merhaba")
}

//undefined null

let yas:number;
yas =10















