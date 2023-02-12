import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  motos = [
    {
      name: "Honda CBR1000RR-R Fireblase SP",
      price: "1.050.000.000 VND",
      year: "2020",
      engineType: "999cc",
      valveTrain: "DOHC",
      image: "https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr1000rr-r-fireblade-sp/trims/trim-main/cbr1000rr-r-fireblade-sp/2022/2022-cbr1000rr-r-fireblade-sp-pearl_white-650x380.png"
    },
    {
      name: "Honda CBR1000RR",
      price: "950.000.000 VND",
      year: "2019",
      engineType: "999cc",
      valveTrain: "DOHC",
      image: "https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr1000rr/trims/trim-main/cbr1000rr/2023/2023-cbr1000rr-grand_prix_red-650x380.png"
    },
    {
      name: "Honda CBR600RR",
      price: "520.000.000 VND",
      year: "2022",
      engineType: "599cc",
      valveTrain: "DOHC",
      image: "https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr600rr/trims/trim-main/cbr600rr/2023/2023-cbr600rr-grand_prix_red-650x380.png"
    },
    {
      name: "Honda CB650R",
      price: "246.490.000 VND",
      year: "2019",
      engineType: "649cc",
      valveTrain: "DOHC",
      image: "https://powersports.honda.com/motorcycle/sport/-/media/products/family/cb650r/trims/trim-main/cb650r/2023/2023-cb650r-matte_gray_metallic-650x380.png"
    },
    {
      name: "Honda CB1000R",
      price: "510.000.000 VND",
      year: "2020",
      engineType: "998cc",
      valveTrain: "DOHC",
      image: "https://powersports.honda.com/motorcycle/sport/-/media/products/family/cb1000r/trims/trim-main/cb1000r-black-edition/2023/2023-cb1000r-black-edition-black-650x380.png"
    },
    {
      name: "BMW S1000RR",
      price: "1.050.000.000 VND",
      year: "2021",
      engineType: "999cc",
      valveTrain: "DOHC",
      image: "https://bmw-motorcycles.vn/wp-content/uploads/2019/12/s1000rr-gallery-1920x1080-01.png"
    },
    {
      name: "BMW M1000RR",
      price: "1.599.000.000 VND",
      year: "2023",
      engineType: "999cc",
      valveTrain: "DOHC",
      image: "https://bmw-motorcycles.vn/wp-content/uploads/2022/11/BMW-M-1000-RR_hd.jpg"
    },
    {
      name: "Yamaha R1",
      price: "640.000.000 VND",
      year: "2022",
      engineType: "998cc",
      valveTrain: "DOHC",
      image: "https://minhlongmoto.com/wp-content/uploads/2019/04/yamha-yzf-r1-1.jpg"
    },
    {
      name: "Aprilia RSV4 Factory 1100",
      price: "885.000.000 VND",
      year: "2023",
      engineType: "1100cc",
      valveTrain: "DOHC",
      image: "https://images.piaggio.com/aprilia/vehicles/ap6192100ebn00/ap6192100ebn01/ap6192100ebn01-01-s.png"
    },
    {
      name: "Kawasaki H2",
      price: "1.299.000.000 VND",
      year: "2021",
      engineType: "998cc",
      valveTrain: "DOHC",
      image: "https://content2.kawasaki.com/ContentStorage/KMV/Products/4914/3dc4ccba-aefc-43e1-aa52-d361b442b781.png?w=767"
    },
    {
      name: "Kawasaki ZX-10R",
      price: "729.000.000 VND",
      year: "2019",
      engineType: "998cc",
      valveTrain: "DOHC",
      image: "https://content2.kawasaki.com/ContentStorage/KMV/ProductTrimGroup/64/fef51126-bb33-42ca-b3d4-3c5af242cf06.png?w=750"
    },
    {
      name: "Kawasaki Z H2 SE",
      price: "770.000.000 VND",
      year: "2020",
      engineType: "998cc",
      valveTrain: "DOHC",
      image: "https://content2.kawasaki.com/ContentStorage/KMV/ProductTrimGroup/1007/ce1dba2a-bc41-4884-8273-035bfb4a4753.png?w=750"
    },
    {
      name: "Kawasaki Z900",
      price: "325.000.000 VND",
      year: "2021",
      engineType: "948cc",
      valveTrain: "DOHC",
      image: "https://content2.kawasaki.com/ContentStorage/KMV/Products/4910/2e0c9431-9197-4c27-996a-5557410ce5ab.png?w=767"
    },
    {
      name: "Kawasaki Ninja 650 KTR",
      price: "270.000.000 VND",
      year: "2022",
      engineType: "649cc",
      valveTrain: "DOHC",
      image: "https://content2.kawasaki.com/ContentStorage/KMV/Products/4522/6ddc4572-0e97-4abd-ad24-64bad7369c25.png?w=767"
    },
    {
      name: "Kawasaki Z650",
      price: "187.000.000 VND",
      year: "2023",
      engineType: "649cc",
      valveTrain: "DOHC",
      image: "https://content2.kawasaki.com/ContentStorage/KMV/Products/4874/304cee7e-2a21-4a46-92bb-e8785206869f.png?w=767"
    },
  ]
}
