// const supabase = require("./supabaseclient")

// async function Delete(req, res) {
//   const { id } = req.body
//   const { error } = await supabase
//     .from('TodosTable')
//     .delete()
//     .eq("id", id)
//     .eq("user_id", req.user.id)

//   if (error) {
//     return res.status(500).send("An error occured")
//   }

//   // Fetch updated todos
//   const { data: todos, error: fetchError } = await supabase
//     .from("TodosTable")
//     .select("*")
//     .eq("user_id", req.user.id)
//   if (fetchError) {
//     return res.status(500).send("An error occured")
//   }

//   return res.send({ success: true, message: "Deleted Successfully", data: todos })
// }
// module.exports = Delete

const supabase = require("../supabaseclient");

async function Delete(req, res) {
  const { id } = req.body;

  const { error } = await supabase
    .from("TodosTable")
    .delete()
    .eq("id", id)
    .eq("user_id", req.user.id);

  if (error) {
    return res.status(500).send({ success: false });
  }

  res.send({ success: true, id });
}

module.exports = Delete;
