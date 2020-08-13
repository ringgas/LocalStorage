// function cardview() {
//     let card1 = localStorage.getItem('card1'); // Mengambil data dari Local Storage
//     document.getElementById('card1').innerHTML = `<p> ${card1} </p>`;

//     let card2 = localStorage.getItem('card2'); // Mengambil data dari Local Storage
//     document.getElementById('card2').innerHTML = `<p> ${card2} </p>`;
//   }

  
//   function remove() {
//     // Menghapus data dari Local Storage
//     localStorage.removeItem("card1");
//     localStorage.removeItem("card2");
    
//     window.location.replace('./index.html');
//   }
function generateCart() {
  cart = JSON.parse(localStorage.getItem('productsInCart'));
  let result = '';
  for (let i = 0; i < cart.length; i++) {
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
		<h5 id="productName"  class="title text-truncate">${cart[i].name} </h5>
		
	
	        </figcaption>
      </figure> 
	</td>
        
  <td> 
  <div class="price-wrap"> 
      <var id="price" class="price">IDR ${cart[i].price}</var> 
      
  </div> <!-- price-wrap .// -->
</td>
<td class="text-right"> 
<button type="submit" onclick="removeCart(${cart[i].id})" class="btn btn-outline-success btn-round">Remove from cart</button>

</td>
</tr>
  
    </tbody>
</table>
</div> <!-- card.// -->

</div> 
<!--container end.//-->

</article>
<br>`
  }
  document.getElementById('Cart').innerHTML = result;
  return result;

}

function removeCart(id) {
  let cart = JSON.parse(localStorage.getItem("productsInCart"))
  cart.splice(cart.indexOf(0), id) // Delete dari local storage
  localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
  console.log(cart);
  location.reload();
}