const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);


async function verifyUser(req, res, next) {
  try {
    // Log the full authorization header for debugging
    console.log("METHOD:", req.method);
    console.log("URL:", req.originalUrl);
    console.log("AUTH:", req.headers.authorization);
    let token;
    if (req.headers.authorization) {
      const parts = req.headers.authorization.split(" ");
      if (parts.length === 2 && parts[0] === "Bearer") {
        token = parts[1];
      } else {
        token = req.headers.authorization;
      }
    }
    console.log("Token received:", token);
    if (!token) return res.status(401).send({ error: "No token protvided" });

    // Ask Supabase if this token is valid
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data?.user?.id) {
      console.log("Supabase error:", error);
      return res.status(401).send({ error: "Invalid or expired token" });
    }

    req.user = { id: data.user.id, email: data.user.email }; // set id from data.user.id
    next();
  } catch (err) {
    console.error("Middleware error:", err);
    return res.status(401).send({ error: "Invalid token" });
  }
}

module.exports = verifyUser;
