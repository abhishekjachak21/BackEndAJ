
import {asyncHandler} from '../utils/asyncHandler.js'
// import { ApiError } from '../../../video_567/src/utils/ApiError.js';

const registerUser = asyncHandler(async(req,res)=>{
    

res.status(200).json(
    {
        message:"Hi Congrats, bete"
    }
)   //#12 video, postman, trial

})
   

export {registerUser,}


//     const {username, email, fullName, password}  = req.bodyy
//     console.log("emial: ",email);

// //   if(fullName===""){
// //     throw new ApiError(400,"fullname is requireed")j
// // }
//       if([username, email, fullName, password].some)


// )


















// res.status(200).json(
//     {
//         message:"Hi Congrats"
//     }
// )   //#12 video, postman, trial