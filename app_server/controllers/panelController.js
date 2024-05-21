var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const utils = require('../utils/utils');

module.exports.home = (req, res) => {
    renderPanelHome(req, res);
};

var renderPanelHome = (req, res) => {
    res.render('index');
};

module.exports.alaSol = (req, res) => {
    res.render('panel');
};

module.exports.alaSolInfo = (req, res) =>{
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=18&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
            .then(utils.scraping)
                .then(function(panel) {
                        res.json(panel);
                })
};

module.exports.alaMar = (req, res) => {
    res.render('panel');
};

module.exports.alaMarInfo = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=20&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
            .then(utils.scraping)
                .then(function(panel) {
                        res.json(panel);
                });
};

module.exports.vilaNova = (req, res) => {
    res.render('panel');
};

module.exports.vilaNovaInfo = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=23&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
            .then(utils.scraping)
                .then(function(panel) {
                        res.json(panel);
                });
};

module.exports.alaTerra = (req, res) => {
    res.render('panel');
};

module.exports.alaTerraInfo = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=21&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
            .then(utils.scraping)
                .then(function(panel) {
                        res.json(panel);
                });
};

module.exports.sauipePremium = (req, res) => {
    res.render('panel');
};

module.exports.sauipePremiumInfo = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=22&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
            .then(utils.scraping)
                .then(function(panel) {
                        res.json(panel);
                });
};

module.exports.alaAgua = (req, res) => {
    res.render('panel');
};

module.exports.alaAguaInfo = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=19&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
            .then(utils.scraping)
                .then(function(panel) {
                        res.json(panel);
                });
};

module.exports.centroNautico = (req, res) => {
    res.render('panel');
};

module.exports.centroNauticoInfo = (req, res) => {
    var url = 'http://www.globalbus.com.br/Painel/SimuladorPainel.aspx?IdPainel=10&HC=j%24fT71@e';
    jsdom.JSDOM.fromURL(url)
            .then(utils.scraping)
                .then(function(panel) {
                        res.json(panel);
                });
};