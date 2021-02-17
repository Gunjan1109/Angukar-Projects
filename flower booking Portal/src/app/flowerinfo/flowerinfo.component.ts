import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-flowerinfo',
  templateUrl: './flowerinfo.component.html',
  styleUrls: ['./flowerinfo.component.css']
})
export class FlowerinfoComponent{

  flowers;
  constructor(private router:Router) {
    this.flowers = [{pid:1, name:"Alstroemerias",price:500 ,occasion:"Birthday",remain_fresh:"10 days",pic:"https://www.1800flowers.com/blog/wp-content/uploads/2019/07/104735alt_view1-274x300.jpg", 
    description:"Alstroemerias are more often called either Peruvian Lilies or Lilies of the Incas and are native to South America. Peruvian Lilies come in a variety of warm colors like pink and orange and are symbolic of friendship, wealth and devotion. These flowers bloom in late spring/early summer when exposed to direct sunlight and watered weekly (water more often when you notice soil looking dry, water less when the soil looks soggy)"},
  {
    pid:2, name:"Calla Lilies",price:300,occasion:"Party",remain_fresh:"30 days" ,pic:"https://www.1800flowers.com/blog/wp-content/uploads/2019/07/F87A5042-440x294.jpg", 
    description:"Carnations come in 3 different types: large flowered carnations, spray carnations, and dwarf flowered carnations. Large flowered carnations can grow to over 20 inches high with one large bloom per stem. These are also referred to as the florist’s carnation. Spray and dwarf carnations have smaller blooms but have multiple blooms per stem."
  },
  {
  pid:3, name:"Daisies",price:250,occasion:"Anniversery",remain_fresh:"3 days" ,pic:"https://www.1800flowers.com/blog/wp-content/uploads/2019/07/160080m-274x300.jpg", 
  description:"Daisies are found on every continent other than Antarctica and belong to one of the largest known plant families. Daisies symbolized innocence, a connotation that comes from the Victorian era. Based on what color the daisy is, the flower can take on another meaning. Daisy flowers prefer full sun and average soil conditions."
  },
  {
  pid:4, name:"Gardenias",price:800,occasion:"Party",remain_fresh:"7 days" ,pic:"https://www.1800flowers.com/blog/wp-content/uploads/2019/06/Gardenia-Plant-274x300.jpg",
  description:"Gardenia’s are most famous for their scented and waxy white flowers that can bring a garden to life. Depending on your geographical location (and personal preference) you get to decide whether your gardenia will live indoors or outdoors. To ensure that your gardenias bloom throughout their growing season, keep the soil well drained and at a pH of 4.5 to 5.5 regardless of whether they are planted in a pot or outside in the garden. "
  },
{
  pid:5,name:"Tulip",price:600,occasion:"Birthday",remain_fresh:"8 days", pic:"https://www.flyingflowers.co.uk/ff_images/tulips.jpg",
  description:"Closely related to the lily and with a long history of cultivation at Latitude 40° North - an area spanning Ukraine and Turkey along with the Caspian Sea and even all the way to China - tulips have been seen as a symbol of wealth and abundance through the ages."
},
{
  pid:6,name:"Orchid",price:100,occasion:"Party",remain_fresh:"12 days", pic:"https://www.flyingflowers.co.uk/ff_images/orchids.jpg",
  description:"What we commonly call an orchid is actually known as a phalaenopsis, which is the cultivated flower of choice from the family of plants known as Orchidaceae. There are over 28,000 species of orchid family plants, but the phalaenopsis covers about 60 of those and is mainly native to Southern Asia and Queensland."
},
{
  pid:7, name:"Carnation",price:650,occasion:"Anniversery",remain_fresh:"30 days", pic:"https://www.flyingflowers.co.uk/ff_images/carnation.jpg",
  description:"Just like we mentioned above, the humble dianthus is one of the UK's favourite flowering plants, and it's mainly native to Europe and Asia which explains our long-standing fascination with this hardy plant."
},
{
  pid:8, name:"Freesia",price:800,occasion:"Party", remain_fresh:"45 days", pic:"https://www.flyingflowers.co.uk/ff_images/freesia.jpg",
  description:"What we call freesias are actually cultivated hybrids of a number of flowers in the Freesia family, and that’s why we refer to them as their scientific name. Unlike many of the other entries in this list, these beautiful trumpet-like blooms aren’t named after something in Latin or Greek, but take their name from botanist and doctor Friedrich Freese."
}]
   }

// }
  onSelect(flower){
    console.log("onselect");
    
    this.router.navigate(['/cart',flower.pid]);
    
  }
}