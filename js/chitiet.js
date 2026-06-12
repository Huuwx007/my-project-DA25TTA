function CreateItemInfo(obj)
{
    const list = document.getElementById("chitiet");
    list.innerHTML += `
         <table>
            <tr>
                <td><img src="" alt=""></td>
                <td>
                    <p id="name">Tên sản phẩm:</p>
                    <p id="price">Giá:</p>
                    <p id="description">Mô tả:</p>
                    <a href="" class="btn btn-primary">Mua ngay</a>
                    <a href="" class="btn btn-primary">Thêm vào giỏ hàng</a> 
                </td>
            </tr>

        </table>
    `
}
const UrlParams = new URLSearchParams(window.location.search);

const productId = UrlParams.get("masp");

let found = productlistt.find(item=>item.id == productId);
if(found)
{
    document.getElementById("name").innerHTML = found.name;
    document.getElementById("price").innerHTML = found.price;
    document.getElementById("description").innerHTML = found.description;
    document.getElementById("image").src = found.image;
    document.getElementById("image").alt = found.name;
}