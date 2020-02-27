
module.exports = {
  getAll
}

function getAll( req, res ) {
  return res.json({ status: "success", meta: { "service": "users", "method": "getAll" }, payload: [] })
}