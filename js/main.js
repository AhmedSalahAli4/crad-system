var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCategory = document.getElementById("productCategory")
var productDescription = document.getElementById("productDescription")
var searchinput = document.getElementById("searchinput")
var productslist = []
if (localStorage.getItem("productslist") != null) {
    productslist = JSON.parse(localStorage.getItem("productslist"))
    display()
}
function addProduct() {
    var product = {
        name: productName.value,
        Price: productPrice.value,
        categ: productCategory.value,
        desc: productDescription.value,
    }
    productslist.push(product)
    localStorage.setItem("productslist", JSON.stringify(productslist))
    console.log(productslist);
    display()
}


function display() {
    var temp = ""
    for (var i = 0; i < productslist.length; i++) {
        temp += `<tr>
        <td>`+ i + `</td>
        <td>`+ productslist[i].name + `</td>
        <td>`+ productslist[i].Price + `</td>
        <td>`+ productslist[i].categ + `</td>
        <td>`+ productslist[i].desc + `</td>
        <td>
            <button class="btn btn-warning">Update</button>
        </td>
        <td>
            <button class="btn btn-danger" onclick=deletproduct(`+ i + `) >Delete</button>
        </td>
    </tr>`

    }
    document.getElementById("tableBody").innerHTML = temp
}
function deletproduct(index) {
    console.log(index);
    productslist.splice(index, 1)
    display()
    localStorage.setItem("productslist", JSON.stringify(productslist))


}

function search() {
    var searchvalue = searchinput.value.toLowerCase()
    var temp = ""
    for (var i = 0; i < productslist.length; i++) {
        if (
            productslist[i].categ.toLowerCase().includes(searchvalue) == true
            ||
            productslist[i].name.toLowerCase().includes(searchvalue) == true
        ) {
            temp += `<tr>
            <td>`+ i + `</td>
            <td>`+ productslist[i].name.toLowerCase().replace(searchvalue,"<span class='text-danger fw-bolder'>"+searchvalue+"</span>") + `</td>
            <td>`+ productslist[i].Price + `</td>
            <td>`+ productslist[i].categ.toLowerCase().replace(searchvalue,"<span class='text-danger fw-bolder'>"+searchvalue+"</span>") + `</td>
            <td>`+ productslist[i].desc + `</td>
            <td>
                <button class="btn btn-warning">Update</button>
            </td>
            <td>
                <button class="btn btn-danger" onclick=deletproduct(`+ i + `) >Delete</button>
            </td>
        </tr>`
        }

    }
    document.getElementById("tableBody").innerHTML = temp

}