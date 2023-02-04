import product from "../data/product";

function getItems() {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(product);
    }, 600);
  });
}


export function getItemsCategory(categoryID) {
return new Promise((resolve, reject) =>  {
  let itemsFound = product.filter((item) => {
    return item.category === categoryID;
  });

  if (itemsFound.length > 0) resolve(itemsFound);
  else reject("No hay productos para esta categoria.");
  });
}
 

export function getSingleItem(itemID) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemFound = product.find(
         (itemInArray) => itemInArray.id === parseInt(itemID)
         );
    if (itemFound) resolve(itemFound);
    else reject("Item no encontrado");
    }, 600);
  });
}


export default getItems;