// const supabase = require("./supabaseclient");

// async function Patch(req, res) {
//   const { id, isCompleted } = req.body;

//   const { data, error } = await supabase
//     .from("TodosTable")
//     .update({ isCompleted })
//     .eq("id", id)
//     .eq("user_id", req.user.id)
//     .select();

//   if(error) return res.status(500).send({ success: false, message: error.message });

//   // Return updated todos
//   const { data: todos, error: fetchError } = await supabase
//     .from("TodosTable")
//     .select("*")
//     .eq("user_id", req.user.id)
//   if(fetchError) return res.status(500).send({ success: false, message: fetchError.message });

//   res.send({ success: true, message: "Updated!", data: todos });
// }

// module.exports = Patch;

const supabase = require("../supabaseclient");

async function Patch(req, res) {
  const { id, isCompleted } = req.body;

  const { data, error } = await supabase
    .from("TodosTable")
    .update({ isCompleted })
    .eq("id", id)
    .eq("user_id", req.user.id)
    .select()
    .single();

  if (error) {
    return res.status(500).send({ success: false });
  }

  res.send({ success: true, data });
}

module.exports = Patch;