const supabase = require("./supabaseclient")
async function Post(req, res) {
  const { todo } = req.body
  if (todo == "") {
    return res.status(400).send({ success: false, message: "Todo is empty" })
  }

  const { error } = await supabase
    .from("TodosTable")
    .insert([{ todo,user_id: req.user.id  }])
  if (error) {
    return res.status(500).send({ success: false, message: error.message })
  }

  // Fetch updated todos
  const { data: todos, error: fetchError } = await supabase
    .from("TodosTable")
    .select("*")
    .eq("user_id", req.user.id)
  if (fetchError) {
    return res.status(500).send({ success: false, message: fetchError.message })
  }

  res.send({
    success: true,
    message: "Hello Todo is added!",
    data: todos
  })
}
module.exports = Post

