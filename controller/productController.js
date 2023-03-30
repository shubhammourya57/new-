const productSchema = require("../model/productModel");

exports.addProduct = async (req, res) => {
  try {
    const data = await productSchema.create({
      id: req.body._id,
      title: req.body.title,
      description: req.body.description,
      user: req.body.user,
      price: req.body.price,
    })
    if(data){
        return res.status(200).json({message:"data is submitted sucessfully", data:data})
    }return res.status(400).json({message:"data is notsubmitted ", data:{}})
  } catch (error) {
    console.log(error);
  }
};

exports.findProduct = async (req, res) => {
  try {
    let filter = {}
    filter.isDeleted = 0
    if(req.body.title){
        filter.title = req.body.title
    }
    console.log(filter)
    const allData = await productSchema.find({filter})
if(allData){
    return res.status(200).json({message:"data is find sucessfully", allData:allData})
}  return res.status(400).json({message:"data is not find sucessfully", allData:{}})
} catch (error) {
    console.log(error);
  }
};

exports.updateProduct = async(req,res)=>{
  try {
    const allData = await productSchema.findByIdAndUpdate({'_id':req.body._id},{
  
      title: req.body.title,
      description: req.body.description,
      user: req.body.user,
      price: req.body.price,
    })
    if(alldata){
    return res.status(200).json({message:"data is update"})
  }return res.status(400).json({message:"data is notupdate"})
  } catch (error) {
    console.log(error)
  }
}


exports.deleteProduct = async (req, res) => {
  try {
   const deleteData = await productSchema.find({isDeleted:1})
 if( deleteData){
    return res.status(200).json({message:"data is deleted sucessfully", allData:deleteData})
 } return res.status(400).json({message:"data is find sucessfully", allData:{}})
} catch (error) {
    console.log(error);
  }
};
