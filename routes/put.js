// const supabase = require("./supabaseclient")
// async function Put(req, res) {
//     const {id,newTodo } = req.body
//     const { data, error } = await supabase
//         .from('TodosTable')
//         .update({todo: newTodo})

//         .eq('id', id)
//         .eq("user_id", req.user.id)
//         .select()
//         if(error){
//             return res.status(500).send("An error occured")
//         }
//         const { data: todos, error: fetchError } = await supabase
//             .from("TodosTable")
//             .select("*")
//             .eq("user_id", req.user.id)
//           if (fetchError) {
//             return res.status(500).send({ success: false, message: fetchError.message })
//           }
//     return res.send({success:true,message:"Done",data:todos})
// }
// module.exports = Put

const supabase = require("./supabaseclient");

async function Put(req, res) {
  const { id, newTodo } = req.body;

  const { data, error } = await supabase
    .from("TodosTable")
    .update({ todo: newTodo })
    .eq("id", id)
    .eq("user_id", req.user.id)
    .select()
    .single();

  if (error) {
    return res.status(500).send({ success: false });
  }

  res.send({ success: true, data });
}

module.exports = Put;
