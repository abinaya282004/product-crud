const Product=require('./structure.js');


//get a product

const getProducts=async(req,res)=>{
   try{
        const products=await Product.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};

const getProduct=async(req,res)=>{
    try{
        const{id}=req.params
        const product=await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};


//post a product

const createProduct=async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

//update a product

const updateProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(400).json({message:"Product not found"})
        }
        const UpdatedProduct=await Product.findById(id);
        res.status(500).json(UpdatedProduct);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

//delete a product

const deleteProduct=async(req,res)=>{
     try{
        const {id}=req.params;

        const product=await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message:"Product Not Found"})
        }
        res.status(200).json({message:"Product Deleted Successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports={ getProducts, getProduct, createProduct, updateProduct, deleteProduct }