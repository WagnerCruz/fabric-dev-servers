/**
 * @param {org.magna.cadeiacustodiav1.transactions.AtualizaVestigio} dadosvestigio
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

 function gravaRequisicao(dadosvestigio){
     return getAssetRegistry('')
        .then(function(setRequisicao){
            var factory = getFactory();
            var NS = 'org.magna.cadeiacustodiav1.vestigio';
            var requisicao = factory.newResource(NS,'idrequisicao', dadosvestigio.idRequisicao);
            requisicao.idRequisicao = dadosvestigio.idRequisicao;
            requisicao.numBO = dadosvestigio.numBO;
            requisicao.NomeCedente = dadosvestigio.NomeCedente;
            requisicao.NomeReceptor = dadosvestigio.NomeReceptor;
            requisicao.TipoOcorrencia = dadosvestigio.TipoOcorrencia;

            var event = factory.newEvent(NS,'Requisição gravada');
            event.idRequisicao = dadosvestigio.idRequisicao;
            emit(event);

            return setRequisicao.add(requisicao);


        });

 }