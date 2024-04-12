const Razorpay=require('razorpay');
async function checkout(req,res){
    const instance= new Razorpay({
        key_id: process.env.KEY_ID,
        key_secret: process.env.KEY_SECRET
      })
    const options={
        amount:5000,
        currency:"INR"
    };
   const order= await instance.orders.create(options);
   console.log(order)
   res.status(200).json({msg:"success"});

}
module.exports=checkout;