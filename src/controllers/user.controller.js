import { asyncHandeler } from "../utils/asyncHandeler.js";

const registerUser = asyncHandeler (async (req, res) =>{
 return res.status(200).json({
    message: "ok"
  })
})


export {registerUser} 