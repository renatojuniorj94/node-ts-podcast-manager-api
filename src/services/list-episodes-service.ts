import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";
import { promises } from "dns";

export const serviceListEpisodes = async ():Promise<PodcastTransferModel> => {

    //Define contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    //Busca os dados
    const data = await repositoryPodcast();

    //Verifico o tipo de resposta
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };

    return responseFormat;
};