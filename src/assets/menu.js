import menu_1 from '../../src/assets/vegitables.png'
import menu_2 from '../../src/assets/fruits.png'
import menu_3 from '../../src/assets/dairy-products.png'
import menu_4 from '../../src/assets/baked goods.png'
import menu_5 from '../../src/assets/handmade.png'
import menu_6 from '../../src/assets/indoor plants.png'

import food_1 from '../../src/assets/papol.png'
import food_2 from '../../src/assets/Brinjal.png'
import food_3 from '../../src/assets/cake.png'
import food_4 from '../../src/assets/bigonia.png'
import food_5 from '../../src/assets/bag.png'
import food_6 from '../../src/assets/malupan.png'

export const menu_list=[
    {
        menu_name:"Vegetables",
        menu_image:menu_1
    },
    {
        menu_name:"Fruits",
        menu_image:menu_2
    },
    {
        menu_name:"Dairy Products",
        menu_image:menu_3
    },
    {
        menu_name:"Baked Goods",
        menu_image:menu_4
    },
    {
        menu_name:"Handmade Crafts",
        menu_image:menu_5
    },
    {
        menu_name:"Indoor Plants",
        menu_image:menu_6
    },
   
]

export const food_list=[
    {
       _id:"1" ,
       name:"Papol",
       image:food_1,
       price:120,
       description:"Papolllllllllllll",
       category:"Fruits",
       quantity:20
    },
    {
        _id:"2" ,
        name:"Brinjal",
        image:food_2,
        price:180,
        description:"Brinjalllllllllllll",
        category:"Vegetables",
        quantity:20
     },
     {
        _id:"3" ,
        name:"Cake",
        image:food_3,
        price:500,
        description:"Buter cake",
        category:"Baked Goods", 
        quantity:20
     },
     {
        _id:"4" ,
        name:"Bigoniya",
        image:food_4,
        price:1200,
        description:"Banananananananana",
        category:"Indoor Plants",
        quantity:10
     },
     {
        _id:"5" ,
        name:"bag",
        image:food_5,
        price:250,
        description:"redi Bag",
        category:"Handmade Craft",
        quantity:14
     },
     {
        _id:"6" ,
        name:"Malupan",
        image:food_6,
        price:80,
        description:"Banananananananana",
        category:"Baked Goods",
        quantity:20
     }
     
]