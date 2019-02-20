/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Registro da prova
 * @param {org.custodia.magna.registroprova} RegistroProva
 * @transaction
 */

async function RegistroProva(tx){
    //save the old value
    const anterior = tx.prova.value;
    
    // update the asset with new value
    tx.prova.value = tx.atual;

    //get the asset registry
    const assetRegistry = await getAssetRegistry('org.custodia.magna.RegistroProva')

    //update the asset registry
    await assetRegistry.update(tx.prova);

    //emit an event for the modified asset
    let event = getFactory().newEvent('org.custodia.magna','custodia');
    event.prova = tx.prova;
    event.anterior = anterior;
    event.atual = tx.atual;
    emit(event);

}
