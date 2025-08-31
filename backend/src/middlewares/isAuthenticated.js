// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";

// export const isAuthenticated = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//     console.log("Token:", token);
//   }

//   if (!token) {
//     return res
//       .status(401)
//       .json({ message: "Unauthorized - No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // id ya _id jo JWT me store hai wo le lo
//     req.user = await User.findById(decoded.id || decoded._id).select(
//       "name image email"
//     );

//     if (!req.user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     next();
//   } catch (error) {
//     console.log("Error in authentication", error);
//     return res.status(401).json({ message: "Unauthorized - Invalid token" });
//   }
// };


import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  let token;

  // ✅ Check header me token hai ya nahi
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("Token:", token);
  }

  // ✅ Agar token missing hai
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });
  }

  try {
    // ✅ Token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ JWT sign karte time sirf { id: user._id } bhejna chahiye
    req.user = await User.findById(decoded.id).select("name image email");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    // ✅ Pass request to next middleware/controller
    next();
  } catch (error) {
    console.log("Error in authentication:", error.message);
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};
