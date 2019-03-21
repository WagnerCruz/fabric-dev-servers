/**
 * @param {org.magna.cadeiacustodiav1.vestigio.AtualizaVestigio} dadosvestigio
 * @transaction
 * 
 * 
 */

 function atualizaVestigio(dadosvestigio){

    return getAssetRegistry('org.magna.cadeiacustodiav1.vestigio.vestigios')

        .then(function(setvestigio){
            var factory = getFactory();
            var NS = 'org.magna.cadeiacustodiav1.vestigio';
            var vestigio = factory.newResource(NS,'idvestigios',dadosvestigio.idVestigio);
            vestigio.requisicao = dadosvestigio.requisicao;
            vestigio.numBO = dadosvestigio.numBO;
            vestigio.dataEvento = dadosvestigio.dataEvento;
            vestigio.Cedente = dadosvestigio.Cedente;
            vestigio.Receptor = dadosvestigio.Receptor;
            vestigio.TipoOcorrencia = dadosvestigio.TipoOcorrencia;
            vestigio.NumLacre = dadosvestigio.NumLacre;
            vestigio.TipoVestigio = dadosvestigio.TipoVestigio;
            vestigio.descricao = dadosvestigio.descricao;
            vestigio.status = dadosvestigio.status;

            var event = factory.newEvent(NS,'VestigioCriado');
            event.idVestigioCriado = vestigio.idVestigio;
            emit(event);

            return setvestigio.add(vestigio);
        });
 }