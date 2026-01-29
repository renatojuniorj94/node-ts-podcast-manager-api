import * as http from "http";
import { HttpMethod } from "./utils/http-methods";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from "./routes/routes";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //queryString
    // localhost:3636/api/episode?p=flow
    const [baseUrl, queryString] = request.url?.split("?") ??  ["", ""];

    console.log(baseUrl);
    console.log(queryString);    

    // listar podcasts
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) { // /api/list > Endpoint
        await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) { // /api/episode > Endpoint
        await getFilterEpisodes(request, response);
    }
};