const supabase = require("./supabaseclient");
async function Get(req,res) {
    const { data, error } = await supabase
        .from('TodosTable')
        .select('*')
        .eq("user_id", req.user.id)
    if (error) {
        console.log(error)
        return res.status(500).send("Unauthorized")
    }
    res.send({ success: true, data: data })
}
module.exports = Get




