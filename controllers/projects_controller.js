const Entity = require( '../lib/ronin-entity' )

module.exports = {
  getAll,
  getById, 
  createProject,
  updateProject,
  deleteProject
}

async function getAll( req, res ) {
  const store = new Entity( 'projects' )
  const projects = await store.find({})
  return res.json({ status: "success", meta: { "service": "projects", "method": "getAll", total: projects.length }, payload: projects })
}

async function getById( req, res ) {
  const id = req.params.id

  const store = new Entity( 'projects' )
  const project = await store.getById( id )

  return res.json({ status: "success", meta: { "service": "projects", "method": "getById" }, payload: project })
}

async function createProject( req, res ) {
  const obj = req.body

  const store = new Entity( 'projects' )
  const project = await store.insert( obj )

  return res.json({ status: "success", meta: { "service": "projects", "method": "createProject" }, payload: project })
}

function updateProject( req, res ) {
  return res.json({ status: "success", meta: { "service": "projects", "method": "updateProject" }, payload: [] })
}

function deleteProject( req, res ) {
  return res.json({ status: "success", meta: { "service": "projects", "method": "deleteProject" }, payload: [] })
}