import { initializeApp } from "firebase/app";
import {getFirestore, doc, collection, getDocs, query, where, addDoc, getDoc,} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);        

export async function getSingleItem(id) {
   let docRef = doc(DB, " product", id);

   let docSnapshot = await getDoc(docRef);

   let item = docSnapshot.data();
   item.id = docSnapshot.id;

   return item;
}        

export async function getItems(){
    let collectionRef = collection(DB, "product");
    let docsSnapshot = await getDocs(collectionRef);

    let docsArray = docsSnapshot.docs;


    let dataDocs = docsArray.map((doc) => {
        return { ...doc.data(), id: doc.id};
    });
    return dataDocs;

}

export async function getItemsCategory(categoryID) {
    let collectionRef = collection(DB, "product");

    let q = query(collectionRef, where("category", "==", categoryID));

    let docsSnapshot = await getDocs(q);
    let docsArray = docsSnapshot.docs;

    let dataDocs = docsArray.map((doc) => {
        return { ...doc.data(), id: doc.id };
    });

    return dataDocs;
}

export async function createBuyOrder(order){
    const colectionRef = collection(DB, "orders");
    let newOrder = await addDoc(colectionRef, order);

  

   return newOrder.id;
}

export async function createBuyOrder_WithStockControl(order) {
   const colectionRef = collection(DB, "orders");
   const colectionProductRef = collection(DB, "product");

   let batch = writeBatch(DB);

   let arrayIds = order.items.map( itemInCart => itemInCart.id);
   const q = query(colectionProductRef, where(documentId(), "in", arrayIds ));
   let snapshot = await getDocs(q);

   snapshot.docs.forEach( (doc) => {
     let stockDisponible = doc.data().stock;

     let ItemInCart = order.items.find(item => item.id === doc.id )
     let countItemInCart = ItemInCart.count;
    
     if (stockDisponible < countItemInCart)
     throw new Error( 
      `Stock no disponible para el producto ${doc.id}`
     );
    else
     batch.update( doc.ref, {stock: stockDisponible - countItemInCart  });
   });


await batch.commit();
let newOrder = await addDoc(colectionRef, order);
return newOrder.id;
}

export async function exportItemsToFirestore(){
    const product = [
        {
           id: 1,
           category: "reel",
           title:"reel rotativo ",
           imgurl:"https://http2.mlstatic.com/D_NQ_NP_983578-MLA45932537136_052021-O.webp",
           price:"26500",
           stock:44,
           description:"reel rotativo caster power",
        
        },
        {
           id: 2,
           category:"reel",
           title:"reel rotativo", 
           imgurl:"https://http2.mlstatic.com/D_NQ_NP_726778-MLA51630924254_092022-O.webp",
           price:"35000",
           stock: 23,
           description:"reel rotativo marine sport",
            
        },
        {
           id: 3,
           category:"reel",
           title:"reel rotativo",
           imgurl:"https://http2.mlstatic.com/D_NQ_NP_729840-MLA51739408469_092022-O.webp",
           price:"19000",
           stock: 12,
           description:"reel rotativo okuma",
                
        },
        {
           id: 4,
           category:"caña",
           title:"caña",
           imgurl:"https://http2.mlstatic.com/D_NQ_NP_666151-MLA51560958255_092022-O.webp",
           price:"22000",
           stock: 30,
           description:"Caña Caster Argus 1.80m Pesca Tiburon Roldanas Trolling 80lb",
                
        },
        {
           id: 5,
           category:"caña",
           title:"caña",
           imgurl:"https://http2.mlstatic.com/D_NQ_NP_799536-MLA51561016559_092022-O.webp",
           price:"7000",
           stock: 15,
           description:"Caña Pesca Caster Defender 1.80m Spinning Variada Rio 10-40",
                
        },
        {
           id: 6,
           category:"caña",
           title:"caña",
           imgurl:"https://http2.mlstatic.com/D_NQ_NP_854221-MLA44174442799_112020-O.webp",
           price:"24000",
           stock: 22,
           description:"Caña Okuma Cayasta 2 Tramos Baitcast Trolling Rotativo",
                
        },
        
        ];
        
    const colectionRef = collection(DB, "product");
    
    for (let item of product) {

       let newItem = await addDoc(colectionRef, item);
       console.log(newItem.id);
    }
}