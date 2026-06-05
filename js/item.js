
const productlistt=[
    {
    name:"Mi Band 9 Pro ",
    price:"3000000",
    description:"Sieu pham",
    image:"../assets/img/mipand.jpg",
    linkproduct:"https://www.thegioididong.com/dong-ho-thong-minh/mi-band-9-pro?utm_flashsale=1"
    },
    {
    name:"Chuột sạc Không dây Gaming Razer Viper V3 Pro",
    price:"300000",
    description:"Chuột không dây sử dụng dây",
    image:"../assets/img/chuotrazer.jpg",
    linkproduct:"https://www.thegioididong.com/chuot-may-tinh/chuot-sac-khong-day-gaming-razer-viper-v3-pro?utm_flashsale=1"
    },
    {
    name:"Samsung Galaxy S25 ",
    price:"11000000",
    description:"5G 8GB/256GB",
    image:"../assets/img/samsungglx.jpg",
    linkproduct:"https://www.thegioididong.com/dtdd/samsung-galaxy-s25-fe-5g-8gb-256gb?utm_flashsale=1"
    }
]

function CreateItem(obj)
{
    //tao containerItem
    const containerItem = document.createElement("div");
    containerItem.setAttribute("class","containerItem");

    //container Image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class","containerImage");
    //tao img
    const Image = document.createElement("img");
    Image.setAttribute("src",obj.image);
    Image.setAttribute("alt",obj.name);
    //them The Image vao containerImage
    containerImage.appendChild(Image);

    //info
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class","containerInfo");
    //tao moi 4 phan tu trong info
    const name = document.createElement("p");
    name.innerHTML = obj.name;
    const price = document.createElement("p");
    price.innerHTML = obj.price;
    const description = document.createElement("p");
    description.innerHTML = obj.description;
    const link = document.createElement("a");
    link.setAttribute("href",obj.linkproduct);
    link.innerHTML ="Xem chi tiết"


    //Them 4 phan tu vao containerinfo
    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(link);

    //them 2 container image va info vao container item
    containerItem.appendChild(containerImage);
    containerItem.appendChild(containerInfo);

    //Them containerItem vao div co id="productlist"
    document.getElementById("productlist").appendChild(containerItem);

    
}