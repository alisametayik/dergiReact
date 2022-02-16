class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi;
        this._kat = kat;
        this._pencereSayisi = pencereSayisi;
    }
    yemekYe(){
        console.log(this._kat + "Yemek yiyildi")
    }
}


let ev = new Ev(3,4,5)

ev.yemekYe();

class Kisi{
    private _isim:string

    get isim():string{
        return "Sayın : " + this._isim;
    }
    
    set isim(ad:string){
        this._isim = ad
    }

    kaydet(){
        console.log("Kisi kaydedildi");
    }

}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satış yapıldı");
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maas Odendi");
    }
}
let musteri = new Musteri();
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();

