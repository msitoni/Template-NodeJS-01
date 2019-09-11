A estrutura

    modules/
    middlewares/
    models/
    controllers/
    views/
    routes/
    fixtures/
    config/
    test/
    bin/
    doc/
    index.js

Modules
Em modules você vai colocar partes do código onde a resolução do problema é a nível de algoritmo, utilizando recursos nativos da linguagem, como estruturas baseadas em objetos padrões, ou até mesmo a lógica de negócio, que exige apenas o processamento das entradas ou algo relacionado. Lembrando sempre que cada pedaço deve manter o princípio de responsabilidade única, onde se faz uma coisa de cada vez e não tudo em um lugar só.

Neste ponto você percebe que a analogia da árvore já se aplica ao que estamos fazendo, utilizando técnicas simples de organização para empoderar não só uma, mas todas que fizerem parte do projeto.

Middlewares
Os middlewares têm um propósito similar ao dos modules; a única diferença é que eles têm o impacto na estrutura lógica do Express e têm o objetivo de serem ativados em meio ao processo de requisição http pelo qual eles foram atribuídos. O restante da operação pode ser feita utilizado o mesmo princípio dos modules ou até reutilizá-los em seus middlewares. Lembrando que, cada faz apenas uma única tarefa.

Models
Também muito similar aos modules, os models têm como objetivo arramar a lógica de processamento à entrada e saída de dados, sistemas de mensagens, paralelismo e afins. Todos eles estão relacionados a interoperabilidade da aplicação.

Controllers
Os controllers têm como principal objetivo reunir componentes construídos com base nos conceitos anteriores e direcioná-los ao seu objetivo. Por exemplo, a consolidação da entrega de uma view ou uma coleção de dados para um web service.

Views
As views têm como objetivo processar a lógica da interface e entregar aos seus clientes. Ela não é necessária para o web services, mas tem um grande poder se você estiver criando uma aplicação que demande a entrega deste propósito. E que inclusive, tem uma sub-lógica utilizando uma template engine, onde você estrutura os dados em uma interface de usuário.

Routes
As routes devem endereçar a lógica a nível de linguagem utilizando a interface de comunicação baseada no http. Por exemplo, ao acessar uma URL, basicamente você acessa um endereço que é imediatamente ativado para processar um conteúdo programado previamente para tal objetivo.

Fixtures
A uma camada quase que acessível apenas para o programador, os fixtures servem para que você crie pedaços de código que ajudam a automatizar tarefas. Alguns exemplos de tarefa são o backup de banco de dados, importação de dados, iniciação da aplicação, distribuição de nós etc. Mas isso vai depender da sua disposição ao encarar isso como uma real necessidade.

Config
Esta peça é importante para armazenar as principais informações que dão origem a iniciação do projeto ou chaves de segurança, que serão armazenadas e ignoradas pela ferramenta de controle de versão – e as possibilidades são infinitas.

Test
Essa é uma das partes cruciais para que você construa um jardim similar a este:

Aqui é onde você controla cada parte específica, testando a unidade e o comportamento do código e o comportamento da interface e estresse da aplicação, todos baseados no princípio de testar somente o que você programar e casos que estejam ao alcance do funcionamento básico, definidos em um escopo previamente definido.

Bin
Este é o gatilho do maquinário de operações, onde o processo de ativação pode ser manual ou automatizado, e também pode armazenar a automação de tarefas de verificação de complexidade, sintaxe, execução e até mesmo a execução dos testes antes de reiniciar uma aplicação. Aplicação essa baseada na base de código que você criou, prevenindo qualquer problema de execução, uma vez que contém algum tipo de mau funcionamento. Para evitar esse tipo de problema, utilize ambientes de simulação do ambiente real.

Doc
Esta parte tem uma grande utilidade: basicamente você armazena as informações de como utilizar a API de cada componente, execução da aplicação, instalação, exemplos e todo o tipo de conhecimento que vai te ajudar a livrar sua memória de informações que você não precisa mais – com isso ela deixa espaço para novos itens. A linguagem precisa ser simples e objetiva porque outras pessoas podem utilizar as suas referências e melhorar ou corrigir erros.


Entry-point
Um ponto de entrada, que no caso é o arquivo index.js, serve como um núcleo de um corpo gravitacional, onde tudo está circulando ao seu redor por conta do seu peso em importância e por ele ser o ponto de ligação para qualquer parte da aplicação. Por exemplo, iniciar conexões com bancos, outros servidores, tarefas em plano de fundo, tarefas agendadas em plano de fundo, configurações e disponibilização do acesso a API desse ponto de entrada.
