
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

function CreateItemv2(obj)
{
    const list = document.getElementById("productlist");
    list.innerHTML += `
    <div class="col">
        <div class="card product-item h-100">
                <div class="product-img ratio ratio-1x1">
                    <img class="image card-img-top object-fit-cover" src="${obj.image}" alt="${obj.name}">
                </div>
                <div class="card-body product-info text-center">
                    <h4 class="card-title">${obj.name}</h4>
                    <h5 class="card-price">${obj.price}</h5>
                    <p class="card-text">${obj.description}</p>
                    <a href="${obj.linkproduct}?masp=${obj.id}" class="btn btn-primary">Xem thêm</a>
                </div>
        </div>

    </div>
        
    
    `
}

function CreateItemList(array){
    let i=0;   
        while(i<array.length)
        {
            CreateItemv2(array[i]);
            i++;
        }
}