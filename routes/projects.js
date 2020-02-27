const controller = require( '../controllers/projects_controller' )

module.exports = ( router ) => {
	// CREATE
	router.post( `/services/projects`,  controller.createProject )

	// READ
	router.get( `/services/projects/:id`, controller.getById ) 

	router.get( `/services/projects`, controller.getAll )

	// UPDATE
	router.put( `/services/projects/:id`, controller.updateProject )

	// DELTE
	router.delete( `/services/projects/:id`, controller.deleteProject )
}