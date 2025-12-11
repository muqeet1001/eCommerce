
//function for add product
const addProduct = async (req, res) => {
     try{
        const {name,description,price,category,size,bestseller} = req.body;
        
        const image1 = req.files.image1&&req.files.image1[0];
        const image2 = req.files.image2&&req.files.image2[0];
        const image3 = req.files.image3&&req.files.image3[0];
        const image4 = req.files.image4&&req.files.image4[0];

        console.log(name,description,price,category,size,bestseller);
       // console.log(image1, image2, image3, image4);

        res.json({})
     }
     catch (e){
         console.log(e);
     }
}
//function for list product
const listProduct = async (req, res) => {

}
//function for remove product
const removeProduct = async (req, res) => {

}
//function for single  product info
const singleProduct = async (req, res) => {

}

export{addProduct,removeProduct,singleProduct,listProduct};