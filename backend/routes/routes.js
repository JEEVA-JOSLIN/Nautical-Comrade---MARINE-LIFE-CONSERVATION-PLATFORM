var express=require('express');
const router =express.Router();
var userController = require('../src/user/userController');
router.route('/user/getAll').get(userController.getDataControllerfn);

router.route('/user/create').post(userController.register); 

router.route('/user/change').post(userController.changePassword);

router.route('/user/updateParticipants').post(userController.updateParticipants);
router.route('/user/userprofile').post(userController.userprofile);
router.route('/user/createevent').post(userController.createevent);
router.route('/user/admin').post(userController.adminlogfun);
router.route('/user/viewalert').get(userController.retrieveAlerts);
router.route('/user/findName').post(userController.findName);
router.route('/user/leader').get(userController.leader);
router.route('/user/retprofile/:email').get(userController.retrieveProfile);
router.route('/user/saveComplaint').post(userController.saveComplaint);
router.route('/user/log').post(userController.logfun);
router.route('/user/raise').post(userController.raise);
router.route('/user/raisefetch').get(userController.retrievecomplaint);
// Change .post to .delete to handle DELETE requests
router.route('/user/remove/:userId').delete(userController.removeUser);
router.route('/user/removeeve/:userId').delete(userController.removeEvent);
router.route('/user/admin/get').get(userController.retrievedata);
router.route('/user/admin/eve').get(userController.retrieveevent);
router.route('/user/admin/userl').get(userController.retrievedata);
router.route('/user/admin/sendAlert').post(userController.storeAlert);


module.exports = router;
