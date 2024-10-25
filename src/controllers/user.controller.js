import { asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"


const registerUser = asyncHandler( (req, res) =>{


  const {fullName, email, username, password,  } = req.body
  console.log("email:", email);

})

export {registerUser}