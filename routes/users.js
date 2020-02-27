const controller = require( '../controllers/users_controller' )

module.exports = ( router ) => {
	router.get( `/services/users`, controller.getAll ) 
}