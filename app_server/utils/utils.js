function defaultvalues(obj) {
    if (obj.title == 'Costa do Sauípe - Ala Sol / Premium' )
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].vehicle === ' - ' )
                obj.travels[i].distance = '-';
            if(obj.travels[i].vehicle === ' - ' && obj.travels[i].preview==="chegando"){
                obj.travels.splice(i,1);
                i--;
            }

        }
    if (obj.title == 'Costa do Sauípe - Ala Mar')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].vehicle === ' - ' )
                obj.travels[i].distance = '-';
            if(obj.travels[i].vehicle === ' - ' && obj.travels[i].preview==="chegando"){
                obj.travels.splice(i,1);
                i--;
            }
        }
    if (obj.title == 'Costa do Sauípe - Ala Terra')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].vehicle === ' - ' )
                obj.travels[i].distance = '-';
            if(obj.travels[i].vehicle === ' - ' && obj.travels[i].preview==="chegando"){
                obj.travels.splice(i,1);
                i--;
            }
        }   
    if (obj.title == 'Costa do Sauípe - Premium')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].vehicle === ' - ' )
                obj.travels[i].distance = '-';
            if(obj.travels[i].vehicle === ' - ' && obj.travels[i].preview==="chegando"){
                obj.travels.splice(i,1);
                i--;
            }
        }
    if (obj.title == 'Costa do Sauípe - Ala Água')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].vehicle === ' - ' )
                obj.travels[i].distance = '-';
            if(obj.travels[i].vehicle === ' - ' && obj.travels[i].preview==="chegando"){
                obj.travels.splice(i,1);
                i--;
            }
        }
    if (obj.title == 'Costa do Sauípe - Vila Nova Praia')
        for (var i = 0; i < obj.travels.length; i++) {
            if (obj.travels[i].vehicle === ' - ' )
                obj.travels[i].distance = '-';
            if(obj.travels[i].vehicle === ' - ' && obj.travels[i].preview==="chegando"){
                obj.travels.splice(i,1);
                i--;
            }
        }
    
 
    return obj;
}

function getDate(){
    var data = new Date();
    var dataNow = new Date(data.valueOf()- 180*60000);
    var options = {
        year: 'numeric', month: 'numeric', day: 'numeric' , hour: 'numeric' , minute: 'numeric' ,
    };

    return dataNow.toLocaleDateString('en-US', options);
}

function scraping(dom) {
    var dataNow = getDate();
    console.log(dataNow);
    var panel = {
        title: dom.window.document.body.querySelector('#LabelNomePonto').textContent,
        infoDate: dataNow,
        travels: []
    };

    if (dom.window.document.body.querySelector('#TabelaHorarios').children[0].children.length <= 1) {
        return panel;
    } else {
        for (var i = 1; i < (dom.window.document.body.querySelector('#TabelaHorarios').children[0].children.length); i++) {
            if (!dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[3].textContent.includes('hoje')) {
                panel.travels.push({
                    road: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[0].textContent,
                    vehicle: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[1].textContent,
                    destiny: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[2].textContent,
                    distance: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[3].textContent,
                    preview: dom.window.document.body.querySelector('#TabelaHorarios').children[0].children[i].children[4].textContent
                });
            }
        }
        panel = defaultvalues(panel);
        console.log(panel);
        return panel;
    }
}

module.exports = {
    defaultvalues,
    getDate,
    scraping
};