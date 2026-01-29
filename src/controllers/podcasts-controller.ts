import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

    const content: PodcastTransferModel = await serviceListEpisodes();

    //Escrever no cabeçalho da resposta
    res.writeHead(content.statusCode, { "content-type": ContentType.JSON });
    res.write(JSON.stringify(content.body));
    //Escrever no fim da resposta / JSON.stringify > Converte um arquivo json todo em string
    res.end();
}

export const getFilterEpisodes = async(req: IncomingMessage, res: ServerResponse) => {

    const content:PodcastTransferModel = await serviceFilterEpisodes(req.url)

    res.writeHead(content.statusCode, { "content-Type": ContentType.JSON })
    res.write(JSON.stringify(content.body));
    res.end();
}