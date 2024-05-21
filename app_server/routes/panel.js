var express = require('express');
var router = express.Router();
var ctrlPanel = require('../controllers/panelController');
/* GET Panel listing. */
router.get('/', ctrlPanel.home);

//Painel um
router.get('/panelAlaSol', ctrlPanel.alaSol);
router.get('/panelAlaSol/info', ctrlPanel.alaSolInfo);

router.get('/panelAlaMar', ctrlPanel.alaMar);
router.get('/panelAlaMar/info', ctrlPanel.alaMarInfo);

router.get('/panelVilaNova', ctrlPanel.vilaNova);
router.get('/panelVilaNova/info', ctrlPanel.vilaNovaInfo);

router.get('/panelAlaTerra', ctrlPanel.alaTerra);
router.get('/panelAlaTerra/info', ctrlPanel.alaTerraInfo);

router.get('/panelSauipePremium', ctrlPanel.sauipePremium);
router.get('/panelSauipePremium/info', ctrlPanel.sauipePremiumInfo);

router.get('/panelAlaAgua', ctrlPanel.alaAgua);
router.get('/panelAlaAgua/info', ctrlPanel.alaAguaInfo);

router.get('/panelCentroNautico', ctrlPanel.centroNautico);
router.get('/panelCentroNautico/info', ctrlPanel.centroNauticoInfo);

module.exports = router;
