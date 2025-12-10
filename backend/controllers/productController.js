
//function for add product
const addProduct = async (req, res) => {
     try{
        const {name,description,price,category,size,bestselelr} = req.body;
        
        const image1 = req.file.image1[0];
        const image2 = req.file.image2[0];
        const image3 = req.file.image3[0];
        const image4 = req.file.image4[0];

        console.log(name,description,price,category,size,bestselelr);
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