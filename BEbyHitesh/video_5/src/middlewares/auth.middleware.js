import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "") //bcz 2 possobilities are thr, whther cookie or header
        
        // console.log(token);
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)  //dono same hai kya nahi
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken") //this chks whether this mile hue token wala user is presnt in DB or not
    
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
})

// This code snippet defines a middleware function `verifyJWT` responsible for verifying JSON Web Tokens (JWT) extracted from the incoming request. Let's break down the functionality:

// 1. Import Statements:
//    - It imports necessary modules and dependencies such as `ApiError`, `asyncHandler`, `jsonwebtoken`, and the `User` model.

// 2. Middleware Function:
//    - The `verifyJWT` function is defined as an asynchronous handler using the `asyncHandler` middleware. This middleware ensures proper error handling for asynchronous operations within the function.

// 3. Token Extraction:
//    - It extracts the JWT from the incoming request. It checks for the token in two locations:
//      - From the `accessToken` cookie in the request's cookies.
//      - From the `Authorization` header, removing the `"Bearer "` prefix if present.
//    - If no token is found in either location, it throws a 401 error indicating an unauthorized request.

// 4. Token Verification:
//    - It verifies the extracted token using the `jsonwebtoken.verify()` method, passing the token and the secret key (`ACCESS_TOKEN_SECRET`) as parameters.
//    - If the token is successfully decoded and verified, it contains the user's `_id`.
//    - It retrieves the user from the database based on the decoded `_id` using the `User.findById()` method. It excludes sensitive fields like `password` and `refreshToken` from the retrieved user data.
//    - If no user is found, it throws a 401 error indicating an invalid access token.

// 5. Request Augmentation:
//    - If the token is valid and the user is found, it attaches the user object to the `req` (request) object for subsequent middleware or route handlers to access.

// 6. Next Function Call:
//    - It calls the `next()` function to pass control to the next middleware or route handler in the chain.

// 7. Error Handling:
//    - If any errors occur during token verification or user retrieval, it catches these errors.
//    - It throws a 401 error with the error message if available or a generic "Invalid access token" message otherwise.

// This middleware ensures that routes protected by JWT authentication only allow access to authenticated users with valid access tokens. If the token is missing, invalid, or expired, the middleware responds with a 401 error, preventing unauthorized access to protected resources.