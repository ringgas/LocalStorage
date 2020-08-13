// Declare default data product
let data = [
    {
      name: "Gaming Mouse",
      price: 1000000,
      id: 1,
    },
    {
      name: "Keyboard Mechanic",
      price: 2000000,
      id: 2,
    },
  
  ];
  
  // Menampung data Cart
  let cart = [];
  
  
  // Generate data for view default product in product page
  function generateData() {
    let result = '';
  
    for (let i = 0; i<data.length; i++) {
      result += `<div class="card">
      <table class="table table-hover shopping-cart-wrap">
      <thead class="text-muted">
      <tr>
        <th scope="col">Product</th>
  
        <th scope="col" width="120">Price</th>
        <th scope="col" width="200" class="text-right">Action</th>
      </tr>
      </thead>
      <tbody>


       <tr>
	     <td>
       <figure class="media">
       <figcaption class="media-body">
		<h5 id="productName"  class="title text-truncate">${data[i].name} </h5>
		
	
	        </figcaption>
      </figure> 
	</td>

    <td> 
    <div class="price-wrap"> 
        <var id="price" class="price">IDR ${data[i].price}</var> 
        
    </div> <!-- price-wrap .// -->
</td>
<td class="text-right"> 
<button type="submit" onclick="addCart(${data[i].id})" class="btn btn-outline-success btn-round">Add to cart</button>

</td>
</tr>
    
      </tbody>
</table>
</div> <!-- card.// -->

</div> 
<!--container end.//-->

</article>
<br>
      `;
    }
  
    document.getElementById('container').innerHTML = result;
  
    return result;
  }
  
  // addCart for push product data to Cart
  function addCart(id) {
    let result = data.find(element => element.id === id);
  
    cart.push(result); // Push ke array
  
    localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
  }