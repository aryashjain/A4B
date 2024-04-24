import { City } from "../schema/city.model.js";


const getCities = async (req, res)=>{
    try {
        const cities = await City.find();
        if(!cities){
           return res.status(400).json({
                success:"false",
                 error:"could not find cities"
              });
        }
        return res.status(200).json({success:true, cities})
        
    } catch (error) {
        return  res.status(500).json({
            success:"false",
            error: error.message
        })
    }
};

const getCityByName = async (req, res) =>{
    try {
        const {name} = req.body;
        if(!name) {
            return  res.status(400).json({
                success:"false",
                error: "please send the city name"
            })
        }
        const city = await City.findOne({name});
        if(!city){
            return   res.status(400).json({
                success:"false",
                error: "Unable to find City"
            })
        }
        return   res.status(200).json({success:true, city})
    } catch (error) {
        return   res.status(500).json({
            success:"false",
            error: error.message
        })
    }
}
const getCity = async (req, res)=>{
    try {
        const {name, district, pincode, locality, state} = req.query;
        console.log(req.query)
        if(!name && !district&& !pincode&&!state &&!locality) {
            return      res.status(400).json({
                success:"false",
                error: "Please send correct req.body"
            })
        }
        
        const cities = await City.find({
            $or: [{name}, {district}, {pincode}, {locality}, {state}]
        })
    
        if(!cities){
            return   res.status(400).json({
                success:"false",
                error: "Unable to find City"
            })
        }
        return   res.status(200).json({success:true,
        cities})
        
    } catch (error) {
        return   res.status(500).json({
            success:"false",
            error: error.message
        })
    }
};


export{
    getCities,
    getCity,
    getCityByName
}