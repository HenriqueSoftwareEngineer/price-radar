# PRICERADAR
## Apresentação
É um projeto para monitoramento de criptomoedas.
O projeto foi criado com o intuito de ajudar os usuários a monitorar as criptomoedas e é utilizada uma API para realizar a busca pela lista de criptomoedas. Tal lista será exibida no Frontend para o usuário final.
O objetivo é oferecer uma ferramenta gratuita que exibe preços de criptomoedas em tempo real, atualizando a cada 5 minutos. Isso pode atrair entusiastas e investidores interessados em monitorar o mercado de maneira prática.

## 

## REQUISITOS FUNCIONAIS 
- A API deve consultar uma fonte confiável de preços de criptomoedas a cada 5 minutos.
- O sistema deve exibir a lista de criptomoedas em tempo real.
- A API deve fornecer uma lista das principais criptomoedas, como Bitcoin, Ethereum, etc.
- A interface deve exibir os preços atualizados de forma clara e intuitiva.
- O sistema deve permitir acesso público sem login.

## REQUISITOS NÃO FUNCIONAIS
- A atualização dos preços deve ocorrer com latência mínima.
- O sistema deve suportar até 10.000 acessos simultâneos.
- A interface deve ser responsiva, funcionando bem em dispositivos móveis e desktops.



## TECNOLOGIAS SUGERIDAS
- Frontend: React.js ou uma página simples em HTML/CSS/JavaScript.
- Backend: Node.js com Express para a API. Axios para consumir a API de criptomoedas.
- Banco de Dados: MongoDB(para o histórico de preços)ou Redis(para cache de atualização rápidas)
- Serviços extenros: API de preços de criptomoedas(CoinGecko, CoinMarketCap ou Binance API).

## ARQUITETURA
- O servidor Node.js faz requisições à API de criptomoedas a cada 5 minutos. Os dados são armazenados temporariamente (cache). A interface consome a API local para exibir os preços aos usuários.