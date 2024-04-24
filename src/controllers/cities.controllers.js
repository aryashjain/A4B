import { City } from "../schema/city.model.js";

const addCity = async(req,res)=>{
  try {
    const {name, district, state, pincode, locality} = req.body;
    if(!name || !state || !district || !pincode || !locality) {
     res.status(400).json({success:false,error:"invalid details , Please send the correct city data"});
    }
    console.log(name, district, state,pincode, locality);

    const city = await City.create(
        {
            name,
            district,
            state,
            pincode,
            locality
        }
    )
    console.log(city);
    if(!city) {
     res.status(400).json({
      success:"false",
      error:"Unable to add city try again later"
    });
    }
    res.status(201).json({
      success:"true",
      city
    });
  } catch (error) {
    res.status(500).json({
      success:"false",
       error:error.message
    });
  }
}
const updateCity = async(req,res)=>{
  try {
    const {_id} = req.query
    if(!_id){
      res.status(400).json({
        success:"false",
         error:"Please send Id in query"
      });
    }
    
    const {name, district, state, pincode, locality} = req.body;
    const updatedCity = await City.findByIdAndUpdate(
      _id,
      {
        $set:{
          name,
          district,
          state,
          pincode,
          locality,
        }
      },
      {
        new:true
      })
    if(!updatedCity){
      res.status(400).json({
        success:"false",
         error:"cannot Update city please try again"
      });
    }
    res.status(200).json({
      success:"true",
       updatedCity
    })
  } catch (error) {
    res.status(500).json({
      success:"false",
       error:error.message
    });
  }
}
const deleteCity = async(req,res)=>{
  try {
    const {_id} = req.query;
    if(!_id){
      res.status(400).json({
        success:"false",
         error:"Please send Id as a query parameter"
      });
    }
    const resp = await City.findByIdAndDelete(_id);
    if(!resp){
      res.status(400).json({
        success:"false",
         error:"cannot delete city. please try again"
      });
    }
    res.status(200).json({
      success:true,
      resp
  })
  } catch (error) {
    res.status(500).json({
      success:"false",
       error:error
    });
  }
}


export {
 addCity,
 updateCity,
 deleteCity
}


