# Podcast manager

### Descrição
Um app ao estilo Netflix, aonde possa centralizar diferente episódios de podcasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios dos podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:
 Listar os episódios dos podcasts em sessões de categorias

### Como vou implementar:
Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link (GET)

    ``` js
    [
    {
        podcastName: "Curso em Vídeo",
        episode: "AOS 84 ANOS LECIONANDO PARA 9 TURMAS PRESENCIAIS - Experience Podcast #08 - Mario Monteiro",
        videoId: "hCZ7y2sjc94&",
        cover: "https://i.ytimg.com/vi/hCZ7y2sjc94/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCfN-7Ab2S30tCkbus9__isb1cJbg",
        link: "https://www.youtube.com/watch?v=hCZ7y2sjc94&",
        category: "["saúde", "bodybuilder"]"
    },
    {
        podcastName: "Flow",
        episode: "TECNOLOGIA E IA [+ FABIO AKITA]",
        videoId: "--slRywdonM"
        cover: "https://i.ytimg.com/vi/--slRywdonM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB3x3pSwqDkVj9ZidjSe1kHAgCQ_A",
        link: "https://www.youtube.com/watch?v=--slRywdonM",
        category: "["tecnologia", "ia"]"
    }
    ]
    ```
GET: Retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast.
