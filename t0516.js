const product=[];
let productCnt=0;

function add_product(productname, price)
{
  product[productCnt]={
    productname,
    price
  };
  productCnt+=1;

  drawList();
}

function drawList()
{
  let sum=0;
  const productlist = document.getElementById("product_list");
  productlist.innerHTML = "";

  for (let p in product) 
  {
    //console.log(p);
    const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.innerHTML = `${product[p].productname} <br> 
      가격 : ${product[p].price} `;
      productlist.appendChild(listItem);

      sum=sum+product[p].price;
  }

  const total_price = document.getElementById("total_price");
   total_price.innerText = `총금액: ₩ ${sum}원`;
}