// script.js
let currentLevel = '';
let selectedObj = [];
let selectedDisc = [];

const questions = {
    facil: {
        objetivas: [
            { id: 1, text: 'Quais são os cinco requisitos para caracterizar a relação empregatícia, conforme o art. 3º da CLT?', options: ['A) Subordinação, habitualidade, onerosidade, pessoalidade e pessoa física.', 'B) Independência, eventualidade, gratuidade, impessoalidade e pessoa jurídica.', 'C) Autonomia, esporadicidade, voluntariedade, coletividade e empresa.', 'D) Liberdade, pontualidade, doação, delegação e grupo.'], correct: 'A' },
            { id: 2, text: 'Qual é a regra geral para o contrato de trabalho na CLT?', options: ['A) Por prazo determinado.', 'B) Por prazo indeterminado.', 'C) Sempre temporário.', 'D) Apenas de experiência.'], correct: 'B' },
            { id: 3, text: 'Qual é o prazo máximo do contrato de experiência?', options: ['A) 2 anos.', 'B) 90 dias.', 'C) 1 ano.', 'D) Indefinido.'], correct: 'B' },
            { id: 4, text: 'Para quem é direcionado o contrato de aprendizagem?', options: ['A) Jovens de 14 a 24 anos.', 'B) Adultos acima de 25 anos.', 'C) Idosos aposentados.', 'D) Empresas apenas.'], correct: 'A' },
            { id: 5, text: 'O que é teletrabalho, de acordo com a CLT?', options: ['A) Trabalho dentro da empresa.', 'B) Prestação de serviços fora das dependências do empregador.', 'C) Trabalho apenas presencial.', 'D) Trabalho em fábrica.'], correct: 'B' },
            { id: 6, text: 'Qual é a condição para alterar o regime de trabalho do presencial para remoto?', options: ['A) Mútuo acordo.', 'B) Vontade só do empregador.', 'C) Decisão judicial.', 'D) Sem condições.'], correct: 'A' },
            { id: 7, text: 'Qual é um requisito para o empregado hipersuficiente?', options: ['A) Diploma de nível superior.', 'B) Salário mínimo.', 'C) Idade abaixo de 18 anos.', 'D) Trabalho eventual.'], correct: 'A' },
            { id: 8, text: 'Quantos dias por semana mínimo para caracterizar empregado doméstico?', options: ['A) 1 dia.', 'B) Mais de 2 dias.', 'C) 5 dias.', 'D) Todos os dias.'], correct: 'B' },
            { id: 9, text: 'O que define a competência material da Justiça do Trabalho?', options: ['A) Tipos de casos que ela pode julgar.', 'B) Local geográfico apenas.', 'C) Salários dos juízes.', 'D) Número de processos.'], correct: 'A' },
            { id: 10, text: 'Qual é a regra geral para a competência territorial na Justiça do Trabalho?', options: ['A) Local onde o empregado prestava serviços.', 'B) Local de residência do juiz.', 'C) Sempre na capital.', 'D) Local de nascimento do empregado.'], correct: 'A' },
            { id: 11, text: 'Em quantos dias úteis deve ser alegada a incompetência territorial?', options: ['A) 10 dias.', 'B) 5 dias.', 'C) 15 dias.', 'D) 30 dias.'], correct: 'B' },
            { id: 12, text: 'A Justiça do Trabalho executa de ofício quais contribuições?', options: ['A) Impostos municipais.', 'B) Contribuições previdenciárias de suas sentenças.', 'C) Doações voluntárias.', 'D) Taxas bancárias.'], correct: 'B' },
            { id: 13, text: 'Quando não há Vara do Trabalho, qual justiça assume?', options: ['A) Justiça Federal.', 'B) Justiça Estadual.', 'C) Justiça Militar.', 'D) Nenhuma.'], correct: 'B' },
            { id: 14, text: 'Qual é o percentual das custas processuais no processo de conhecimento?', options: ['A) 5%.', 'B) 2%.', 'C) 10%.', 'D) 1%.'], correct: 'B' },
            { id: 15, text: 'Quem está isento de custas processuais?', options: ['A) Apenas empresas.', 'B) Beneficiários da justiça gratuita.', 'C) Somente juízes.', 'D) Ninguém.'], correct: 'B' },
            { id: 16, text: 'Em caso de acordo, como são as custas?', options: ['A) Pagas só pelo autor.', 'B) Divididas em partes iguais.', 'C) Isentas.', 'D) Pagas só pelo réu.'], correct: 'B' },
            { id: 17, text: 'Qual é a função do depósito recursal?', options: ['A) Garantia para recorrer.', 'B) Pagamento de salário.', 'C) Doação para caridade.', 'D) Taxa inicial.'], correct: 'A' },
            { id: 18, text: 'Qual a idade mínima para empregado doméstico?', options: ['A) 14 anos.', 'B) 16 anos.', 'C) 18 anos.', 'D) 12 anos.'], correct: 'C' },
            { id: 19, text: 'O que caracteriza o contrato por prazo indeterminado?', options: ['A) Tem data de fim fixa.', 'B) Sem data pré-fixada para término.', 'C) Limite de 90 dias.', 'D) Apenas para testes.'], correct: 'B' },
            { id: 20, text: 'Quais são as modalidades de teletrabalho?', options: ['A) Apenas presencial.', 'B) Por jornada, produção ou tarefa.', 'C) Somente noturno.', 'D) Em grupo.'], correct: 'B' },
            { id: 21, text: 'Para agente comercial, qual competência territorial na falta de local subordinado?', options: ['A) Local da empresa.', 'B) Domicílio do empregado.', 'C) Capital federal.', 'D) Exterior.'], correct: 'B' },
            { id: 22, text: 'Qual súmula vinculante trata da execução de contribuições previdenciárias?', options: ['A) Súmula 331.', 'B) Súmula Vinculante nº 53.', 'C) Súmula 12.', 'D) Súmula 386.'], correct: 'B' },
            { id: 23, text: 'Se houver acordo e justiça gratuita para o autor, quem paga custas?', options: ['A) Autor paga tudo.', 'B) Autor isento, divide com réu.', 'C) Ninguém paga.', 'D) Só o juiz.'], correct: 'B' },
            { id: 24, text: 'Qual artigo da CLT regula o teletrabalho?', options: ['A) Art. 3º.', 'B) Art. 75-B.', 'C) Art. 651.', 'D) Art. 800.'], correct: 'B' },
            { id: 25, text: 'O que permite ao hipersuficiente cláusula de arbitragem?', options: ['A) Iniciativa do empregador.', 'B) Iniciativa ou concordância do empregado.', 'C) Proibido sempre.', 'D) Decisão do governo.'], correct: 'B' },
            { id: 26, text: 'Qual lei regula o empregado doméstico?', options: ['A) CLT apenas.', 'B) LC 150/2015.', 'C) Lei 6.019/74.', 'D) CF/88.'], correct: 'B' },
            { id: 27, text: 'Antes de qual momento alegar incompetência territorial?', options: ['A) Após sentença.', 'B) Antes da audiência.', 'C) Durante recurso.', 'D) No final.'], correct: 'B' },
            { id: 28, text: 'Para recurso na Justiça Estadual subsidiária, para onde vai?', options: ['A) Tribunal de Justiça.', 'B) TRT.', 'C) STF.', 'D) STJ.'], correct: 'B' },
            { id: 29, text: 'Qual o mínimo das custas processuais?', options: ['A) R$ 100,00.', 'B) R$ 10,64.', 'C) R$ 50,00.', 'D) Sem mínimo.'], correct: 'B' },
            { id: 30, text: 'No teletrabalho por produção, há controle de jornada?', options: ['A) Sim, sempre.', 'B) Não.', 'C) Apenas diário.', 'D) Semanal.'], correct: 'B' }
        ],
        discursivas: [
            { id: 1, text: 'Liste os cinco requisitos da relação empregatícia (SHOPP).', correctKeywords: ['subordinação', 'habitualidade', 'onerosidade', 'pessoalidade', 'pessoa física'] },
            { id: 2, text: 'Explique em poucas palavras o que é contrato por prazo indeterminado.', correctKeywords: ['sem data pré-fixada', 'término'] },
            { id: 3, text: 'Qual o prazo máximo do contrato de experiência?', correctKeywords: ['90 dias'] },
            { id: 4, text: 'Para qual faixa etária é o contrato de aprendizagem?', correctKeywords: ['14 a 24 anos'] },
            { id: 5, text: 'Defina teletrabalho de forma simples.', correctKeywords: ['fora das dependências', 'empregador'] },
            { id: 6, text: 'Qual a condição básica para mudar de presencial para remoto?', correctKeywords: ['mútuo acordo'] },
            { id: 7, text: 'Liste os requisitos para empregado hipersuficiente.', correctKeywords: ['diploma', 'superior', 'salário', 'duas vezes', 'teto', 'rgps'] },
            { id: 8, text: 'Quantos dias por semana para ser empregado doméstico?', correctKeywords: ['mais de 2 dias'] },
            { id: 9, text: 'Liste três casos de competência material da Justiça do Trabalho.', correctKeywords: ['relação de trabalho', 'dano moral', 'execução'] },
            { id: 10, text: 'Qual a regra básica da competência territorial?', correctKeywords: ['local', 'prestação', 'serviços'] },
            { id: 11, text: 'Em quantos dias alegar incompetência territorial?', correctKeywords: ['5 dias'] },
            { id: 12, text: 'O que a Justiça do Trabalho executa de ofício?', correctKeywords: ['contribuições previdenciárias'] },
            { id: 13, text: 'Quando a Justiça Estadual assume em matéria trabalhista?', correctKeywords: ['não há vara do trabalho'] },
            { id: 14, text: 'Qual o percentual das custas processuais?', correctKeywords: ['2%'] },
            { id: 15, text: 'Liste dois isentos de custas.', correctKeywords: ['beneficiários', 'justiça gratuita', 'entes públicos'] },
            { id: 16, text: 'Como dividir custas em acordo?', correctKeywords: ['partes iguais'] },
            { id: 17, text: 'Defina depósito recursal.', correctKeywords: ['garantia', 'recorrer'] },
            { id: 18, text: 'Qual idade mínima para doméstico?', correctKeywords: ['18 anos'] },
            { id: 19, text: 'O que é contrato por prazo determinado?', correctKeywords: ['data de fim fixa'] },
            { id: 20, text: 'Liste as modalidades de teletrabalho.', correctKeywords: ['jornada', 'produção', 'tarefa'] },
            { id: 21, text: 'Qual competência para agente comercial?', correctKeywords: ['domicílio do empregado'] },
            { id: 22, text: 'Qual súmula sobre contribuições previdenciárias?', correctKeywords: ['súmula vinculante 53'] },
            { id: 23, text: 'Como são custas em acordo com justiça gratuita?', correctKeywords: ['autor isento'] },
            { id: 24, text: 'Cite um artigo sobre contrato de experiência.', correctKeywords: ['art. 445'] },
            { id: 25, text: 'O que permite arbitragem ao hipersuficiente?', correctKeywords: ['iniciativa ou concordância'] },
            { id: 26, text: 'Qual lei para empregado doméstico?', correctKeywords: ['lc 150/2015'] },
            { id: 27, text: 'Quando alegar incompetência territorial?', correctKeywords: ['antes da audiência'] },
            { id: 28, text: 'Para onde vai recurso na Justiça Estadual?', correctKeywords: ['trt'] },
            { id: 29, text: 'Qual mínimo das custas?', correctKeywords: ['r$ 10,64'] },
            { id: 30, text: 'Há horas extras no teletrabalho por tarefa? Explique brevemente.', correctKeywords: ['não', 'sem controle de jornada'] }
        ]
    },
    medio: {
        objetivas: [
            { id: 1, text: 'Quais os requisitos cumulativos para caracterizar a relação de emprego (art. 3º da CLT)?', options: ['A) Subordinação, eventualidade, onerosidade, impessoalidade e pessoa jurídica.', 'B) Subordinação, habitualidade, onerosidade, pessoalidade e pessoa física (SHOPP).', 'C) Independência, habitualidade, gratuidade, pessoalidade e pessoa física.', 'D) Subordinação, esporadicidade, onerosidade, impessoalidade e empresa.'], correct: 'B' },
            { id: 2, text: 'O contrato por prazo determinado é exceção e pode ser prorrogado:', options: ['A) Indefinidamente, desde que não ultrapasse 90 dias.', 'B) Uma única vez, por igual período, até o máximo de 2 anos.', 'C) Duas vezes, totalizando até 3 anos.', 'D) Sem prorrogação, exceto em contrato de experiência.'], correct: 'B' },
            { id: 3, text: 'No contrato de experiência, o prazo máximo é de:', options: ['A) 2 anos, prorrogável uma vez.', 'B) 90 dias, prorrogável uma única vez dentro desse período.', 'C) 1 ano, sem prorrogação.', 'D) 180 dias, prorrogável duas vezes.'], correct: 'B' },
            { id: 4, text: 'O contrato de aprendizagem tem prazo máximo de 2 anos, exceto para:', options: ['A) Menores de 18 anos.', 'B) Portadores de deficiência, sem limite de prazo ou idade.', 'C) Jovens acima de 24 anos.', 'D) Contratos em empresas públicas.'], correct: 'B' },
            { id: 5, text: 'No teletrabalho, a responsabilidade por gastos (equipamentos, infraestrutura, reembolso) deve ser:', options: ['A) Sempre do empregador, pelo risco do negócio.', 'B) Dividida em 50% entre as partes.', 'C) Prevista em contrato escrito (art. 75-D da CLT).', 'D) Do empregado, pois não há fiscalização.'], correct: 'C' },
            { id: 6, text: 'Para alterar o regime de trabalho do presencial para o remoto é necessário:', options: ['A) Vontade exclusiva do empregador.', 'B) Mútuo acordo, sem prazo de adaptação.', 'C) Adaptação prévia de 15 dias.', 'D) Autorização judicial.'], correct: 'B' },
            { id: 7, text: 'Para reversão do teletrabalho para presencial, aplica-se:', options: ['A) Mútuo acordo sem adaptação.', 'B) Vontade do empregador, com adaptação de 15 dias.', 'C) Iniciativa exclusiva do empregado.', 'D) Sem qualquer adaptação.'], correct: 'B' },
            { id: 8, text: 'O empregado hipersuficiente pode celebrar cláusula compromissória de arbitragem se:', options: ['A) Tiver iniciativa ou expressa concordância.', 'B) O empregador exigir.', 'C) For proibido em qualquer caso.', 'D) Houver autorização do sindicato.'], correct: 'A' },
            { id: 9, text: 'Requisitos para empregado hipersuficiente incluem:', options: ['A) Diploma de nível superior e salário igual ou superior a 2 vezes o teto do RGPS.', 'B) Experiência de 10 anos e salário mínimo.', 'C) Idade acima de 50 anos.', 'D) Trabalho eventual.'], correct: 'A' },
            { id: 10, text: 'Para caracterizar empregado doméstico (LC 150/2015), o serviço deve ser prestado por:', options: ['A) Mais de 1 dia por semana.', 'B) Mais de 2 dias por semana, de forma contínua.', 'C) Exatamente 2 dias por semana.', 'D) Menos de 2 dias, mas habitual.'], correct: 'B' },
            { id: 11, text: 'Menores de quantos anos não podem ser empregados domésticos?', options: ['A) 14 anos.', 'B) 16 anos.', 'C) 18 anos.', 'D) Sem restrição.'], correct: 'C' },
            { id: 12, text: 'A competência material da Justiça do Trabalho inclui:', options: ['A) Apenas relações estatutárias.', 'B) Relação de trabalho, dano moral, execução de contribuições previdenciárias e greve.', 'C) Ações criminais trabalhistas.', 'D) Disputas entre entes públicos exclusivamente.'], correct: 'B' },
            { id: 13, text: 'Regra geral da competência territorial (art. 651 da CLT):', options: ['A) Domicílio do empregador.', 'B) Local da prestação de serviços pelo empregado.', 'C) Residência do juiz.', 'D) Capital do estado.'], correct: 'B' },
            { id: 14, text: 'Para agente/viajante comercial, na falta de local subordinado, a competência é:', options: ['A) Local do contrato.', 'B) Domicílio do empregado.', 'C) Sempre na sede da empresa.', 'D) Foro eleito.'], correct: 'B' },
            { id: 15, text: 'A incompetência territorial deve ser alegada em:', options: ['A) 10 dias corridos após citação.', 'B) 5 dias úteis da notificação, em autos apartados, antes da audiência (art. 800 CLT).', 'C) Durante a audiência.', 'D) Após sentença.'], correct: 'B' },
            { id: 16, text: 'A execução de contribuições previdenciárias pela Justiça do Trabalho é:', options: ['A) De ofício, sobre sentenças condenatórias e acordos homologados (SV 53 STF).', 'B) Somente por iniciativa do INSS.', 'C) Da Justiça Comum.', 'D) Após inscrição em dívida ativa.'], correct: 'A' },
            { id: 17, text: 'Quando não há Vara do Trabalho na região, a competência é:', options: ['A) Justiça Federal.', 'B) Justiça Estadual, de forma subsidiária.', 'C) TRT diretamente.', 'D) Nenhuma.'], correct: 'B' },
            { id: 18, text: 'Recurso ordinário de sentença da Justiça Estadual em matéria trabalhista vai para:', options: ['A) Tribunal de Justiça.', 'B) TRT.', 'C) STF.', 'D) STJ.'], correct: 'B' },
            { id: 19, text: 'As custas processuais no conhecimento incidem em:', options: ['A) 2%, mínimo R$ 10,64, máximo 4 vezes teto RGPS.', 'B) 5%, sem limite.', 'C) 10%.', 'D) 1%.'], correct: 'A' },
            { id: 20, text: 'Isentos de custas incluem:', options: ['A) Apenas empregadores.', 'B) Beneficiários da justiça gratuita, entes públicos, MPT e massa falida.', 'C) Somente réus.', 'D) Todos pagam.'], correct: 'B' },
            { id: 21, text: 'Em acordo, as custas são:', options: ['A) Pagas integralmente pelo autor.', 'B) Divididas em partes iguais, salvo convenção em contrário (art. 789, §3º CLT).', 'C) Isentas.', 'D) Pelo réu em 100%.'], correct: 'B' },
            { id: 22, text: 'Se autor for beneficiário da justiça gratuita em acordo, as custas:', options: ['A) São pagas integralmente por ele.', 'B) Ele fica isento, e divide com réu.', 'C) São isentas para ambos.', 'D) Pagas só pelo réu.'], correct: 'B' },
            { id: 23, text: 'O depósito recursal é exigido para:', options: ['A) Início da ação.', 'B) Empresa condenada recorrer, como garantia.', 'C) Acordo homologado.', 'D) Pagamento de custas iniciais.'], correct: 'B' },
            { id: 24, text: 'No teletrabalho por produção ou tarefa:', options: ['A) Há controle de jornada e direito a horas extras.', 'B) Não há controle de jornada, logo sem horas extras nem intervalos.', 'C) Sempre 8 horas diárias.', 'D) Adicional noturno obrigatório.'], correct: 'B' },
            { id: 25, text: 'A Justiça do Trabalho não tem competência para:', options: ['A) Ações entre poder público e servidores estatutários.', 'B) Indenização por dano moral.', 'C) Execução de contribuições sociais.', 'D) Habeas corpus.'], correct: 'A' },
            { id: 26, text: 'Para empregador que promove atividades fora do local:', options: ['A) Competência é só domicílio do empregado.', 'B) Local de celebração do contrato ou prestação de serviços.', 'C) Sempre capital.', 'D) Foro eleito.'], correct: 'B' },
            { id: 27, text: 'O contrato por prazo indeterminado:', options: ['A) Tem data de término fixa.', 'B) Vige enquanto as partes quiserem, sem data pré-fixada.', 'C) Limite de 90 dias.', 'D) Exclusivo para experiência.'], correct: 'B' },
            { id: 28, text: 'No teletrabalho, o contrato pode prever prestação:', options: ['A) Apenas por jornada.', 'B) Por jornada, produção ou tarefa.', 'C) Somente presencial.', 'D) Sem contrato escrito.'], correct: 'B' },
            { id: 29, text: 'A Súmula Vinculante nº 53 do STF refere-se à:', options: ['A) Execução de ofício de contribuições previdenciárias pela JT.', 'B) Depósito recursal.', 'C) Custas em acordo.', 'D) Competência territorial.'], correct: 'A' },
            { id: 30, text: 'Em caso de incompetência territorial declarada:', options: ['A) Processo prossegue no juízo atual.', 'B) Autos são remetidos ao juízo competente, após suspensão.', 'C) Extinção sem resolução.', 'D) Nulidade absoluta imediata.'], correct: 'B' }
        ],
        discursivas: [
            { id: 1, text: 'Liste e explique brevemente os 5 requisitos da relação empregatícia (art. 3º CLT – SHOPP).', correctKeywords: ['subordinação', 'habitualidade', 'onerosidade', 'pessoalidade', 'pessoa física', 'explicação'] },
            { id: 2, text: 'Diferencie contrato por prazo determinado do contrato de experiência quanto a prazo máximo e prorrogações.', correctKeywords: ['determinado 2 anos', 'experiência 90 dias', 'prorrogação'] },
            { id: 3, text: 'Em que casos é cabível o contrato por prazo determinado? Cite o art. 443 CLT.', correctKeywords: ['exceção', 'art. 443'] },
            { id: 4, text: 'Explique o objetivo do contrato de aprendizagem e a exceção ao prazo máximo para PCD.', correctKeywords: ['formação', 'deficiência sem limite'] },
            { id: 5, text: 'No teletrabalho, como deve ser regulada a responsabilidade por gastos? Cite o artigo.', correctKeywords: ['contrato escrito', 'art. 75-d'] },
            { id: 6, text: 'Compare as condições para alteração do regime presencial → remoto e remoto → presencial.', correctKeywords: ['mútuo acordo', 'vontade empregador', '15 dias'] },
            { id: 7, text: 'Defina empregado hipersuficiente e explique sua exceção quanto à arbitragem.', correctKeywords: ['diploma superior', 'salário 2 teto', 'arbitragem concordância'] },
            { id: 8, text: 'Quais os requisitos cumulativos para empregado doméstico (LC 150/2015)?', correctKeywords: ['mais de 2 dias', 'contínua', 'lc 150'] },
            { id: 9, text: 'Liste 5 matérias de competência material da Justiça do Trabalho.', correctKeywords: ['relação trabalho', 'dano moral', 'contribuições', 'greve', 'mais uma'] },
            { id: 10, text: 'Explique a regra geral da competência territorial e uma exceção para agente comercial.', correctKeywords: ['prestação serviços', 'domicílio empregado'] },
            { id: 11, text: 'Descreva o procedimento e prazo para alegar incompetência territorial (art. 800 CLT).', correctKeywords: ['5 dias úteis', 'autos apartados', 'art. 800'] },
            { id: 12, text: 'Analise a competência da JT para execução de contribuições previdenciárias (SV 53 STF).', correctKeywords: ['ofício', 'sv 53'] },
            { id: 13, text: 'Quando e como atua a Justiça Estadual em matéria trabalhista? Para onde vai o recurso ordinário?', correctKeywords: ['subsidiária', 'trt'] },
            { id: 14, text: 'Como são calculadas as custas no processo de conhecimento? Cite percentual e limites.', correctKeywords: ['2%', 'mínimo 10,64', 'máximo 4 teto'] },
            { id: 15, text: 'Quem está isento de custas processuais? Liste pelo menos 4 casos.', correctKeywords: ['gratuita', 'entes públicos', 'mpt', 'massa falida'] },
            { id: 16, text: 'Em acordo na fase de conhecimento, como se dividem as custas? E se autor tiver justiça gratuita?', correctKeywords: ['iguais', 'isento'] },
            { id: 17, text: 'Explique a função do depósito recursal e sua obrigatoriedade para a empresa.', correctKeywords: ['garantia', 'empresa condenada'] },
            { id: 18, text: 'Por que menores de 18 anos não podem ser empregados domésticos?', correctKeywords: ['proibido', '18 anos'] },
            { id: 19, text: 'Caracterize o contrato por prazo indeterminado e sua diferença do determinado.', correctKeywords: ['sem data', 'diferença data fixa'] },
            { id: 20, text: 'No teletrabalho por produção/tarefa, há direito a horas extras? Justifique.', correctKeywords: ['não', 'sem controle'] },
            { id: 21, text: 'Para empregador com atividades externas, qual a competência territorial?', correctKeywords: ['celebração ou prestação'] },
            { id: 22, text: 'Qual o impacto da SV 53 STF na execução previdenciária pela JT?', correctKeywords: ['ofício', 'impacto'] },
            { id: 23, text: 'Se houver acordo e justiça gratuita para o reclamante, quem arca com custas?', correctKeywords: ['isento', 'réu'] },
            { id: 24, text: 'Cite e explique o prazo do contrato de experiência (art. 445, parágrafo único CLT).', correctKeywords: ['90 dias', 'art. 445'] },
            { id: 25, text: 'O empregado hipersuficiente pode firmar arbitragem? Em que condições?', correctKeywords: ['sim', 'concordância'] },
            { id: 26, text: 'Diferencie diarista de empregado doméstico com base na LC 150/2015.', correctKeywords: ['2 dias', 'lc 150'] },
            { id: 27, text: 'O que ocorre se incompetência territorial for alegada fora do prazo?', correctKeywords: ['preclusão'] },
            { id: 28, text: 'Explique a competência subsidiária da Justiça Estadual e o recurso cabível.', correctKeywords: ['ausência jt', 'recurso trt'] },
            { id: 29, text: 'Qual o valor mínimo e máximo das custas processuais?', correctKeywords: ['10,64', '4 teto'] },
            { id: 30, text: 'No teletrabalho, por que a modalidade por tarefa não gera direito a intervalos intrajornada?', correctKeywords: ['sem jornada', 'art. 62'] }
        ]
    },
    dificil: {
        objetivas: [
            { id: 1, text: 'Jeferson, dispensado em São Paulo/SP, ajuizou ação em Fortaleza/CE (seu domicílio atual), pleiteando horas extras de prestação exclusiva em SP. A ré alegou incompetência territorial. Considerando art. 651 CLT e art. 800 CLT, assinale a correta:', options: ['A) Incompetência relativa; exceção em 5 dias úteis da notificação, autos suspensos e remetidos se acolhida.', 'B) Incompetência absoluta; arguida a qualquer tempo, nulidade de pleno direito.', 'C) Competência do domicílio do reclamante por força de exceção constitucional.', 'D) Prazo de 10 dias corridos para exceção, sem suspensão do processo.'], correct: 'A' },
            { id: 2, text: 'Em teletrabalho por produção/tarefa (art. 75-C, § 2º CLT), o empregado comprovou controle indireto de jornada via metas diárias rígidas e monitoramento telemático. Assinale a consequência correta:', options: ['A) Mantém-se exclusão de jornada (art. 62, III CLT), sem horas extras.', 'B) Descaracteriza-se teletrabalho; aplica-se regime comum com controle de jornada e horas extras.', 'C) Direito apenas a adicional noturno, sem horas extras.', 'D) Necessário mútuo acordo para reversão ao presencial com 15 dias de adaptação.'], correct: 'B' },
            { id: 3, text: 'Empregado hipersuficiente (diploma superior + salário ≥ 2 tetos RGPS) celebrou cláusula de arbitragem por iniciativa do empregador, sem sua concordância expressa. A cláusula é:', options: ['A) Válida, pois hipersuficiência permite negociação livre (art. 507-A CLT).', 'B) Nula, pois exige iniciativa ou concordância expressa do empregado.', 'C) Válida apenas se homologada judicialmente.', 'D) Nula por violação ao jus postulandi.'], correct: 'B' },
            { id: 4, text: 'Paula presta serviços domésticos 3x/semana (segunda, quarta, sexta), com comunicação prévia para eventuais extras, sem CTPS assinada e pagamento por dia trabalhado. De acordo com LC 150/2015, assinale:', options: ['A) Diarista, pois < 4 dias/semana.', 'B) Empregada doméstica, pois > 2 dias/semana de forma contínua.', 'C) Eventual, pois esporádica e sem habitualidade.', 'D) Autônoma, pois gerencia horários e ausências.'], correct: 'B' },
            { id: 5, text: 'Contrato de experiência de 80 dias para desenvolvedores de app, com avaliação de habilidade complexa. Assinale a afirmativa correta:', options: ['A) Ilegal, pois experiência limitada a 60 dias.', 'B) Ilegal, pois natureza da tarefa exige contrato por prazo determinado comum (até 2 anos).', 'C) Legal, prazo máximo 90 dias (art. 445, parágrafo único CLT).', 'D) Ilegal, pois prorrogação obrigatória dentro dos 90 dias.'], correct: 'C' },
            { id: 6, text: 'Alteração unilateral do regime remoto para presencial sem adaptação de 15 dias. Consequência:', options: ['A) Nula a alteração; empregado pode recusar sem prejuízo.', 'B) Válida, pois empregador detém jus variandi.', 'C) Nula, com direito a rescisão indireta (art. 483 CLT).', 'D) Válida se mútuo acordo posterior.'], correct: 'C' },
            { id: 7, text: 'Execução de contribuições previdenciárias sobre horas extras condenadas, mas contribuições normais já recolhidas. Competência:', options: ['A) Justiça Comum, por iniciativa da Fazenda após dívida ativa.', 'B) Justiça do Trabalho, de ofício (SV 53 STF + art. 114, VIII CF).', 'C) Justiça do Trabalho, só por iniciativa do INSS.', 'D) Justiça Federal, execução fiscal autônoma.'], correct: 'B' },
            { id: 8, text: 'Custas em acordo antes da sentença, sem menção na petição conjunta, autor beneficiário de gratuidade desde o início. Assinale:', options: ['A) Custas 2% sobre acordo, divididas igualmente, autor isento.', 'B) Custas 2% integralmente pelo réu.', 'C) Custas 2% integralmente pelo autor, apesar da gratuidade.', 'D) Custas 5% sobre valor da causa, rateadas.'], correct: 'A' },
            { id: 9, text: 'Empresa condenada interpõe RO sem depósito recursal integral, alegando crise financeira. Consequência:', options: ['A) Deserção, pois depósito é pressuposto extrínseco irrenunciável.', 'B) Deserção, salvo se comprovada hipossuficiência (gratuidade).', 'C) Recurso conhecido, depósito substituível por seguro-garantia.', 'D) Recurso conhecido, depósito dispensável em execução.'], correct: 'B' },
            { id: 10, text: 'Justiça Estadual julga ação trabalhista subsidiária (ausência de JT). Recurso ordinário:', options: ['A) Endereçado ao TJ.', 'B) Endereçado ao TRT competente.', 'C) Cabível agravo de instrumento.', 'D) Sem recurso, decisão irrecorrível.'], correct: 'B' },
            { id: 11, text: 'Empregado em teletrabalho híbrido comparece habitualmente às dependências do empregador para reuniões semanais obrigatórias (mais de 50% do tempo). Assinale a consequência correta quanto ao regime (art. 75-B, §1º CLT e art. 62, III CLT):', options: ['A) Mantém-se teletrabalho, excluindo controle de jornada e horas extras.', 'B) Descaracteriza-se o teletrabalho; aplica-se regime presencial com direito a horas extras e intervalos.', 'C) Permanece teletrabalho, mas com direito a adicional de periculosidade.', 'D) Exige mútuo acordo para reversão, com adaptação de 15 dias.'], correct: 'B' },
            { id: 12, text: 'Empresa altera unilateralmente o regime remoto para presencial sem conceder os 15 dias de adaptação previstos no art. 75-F, §2º CLT. O empregado recusa o retorno. Consequência:', options: ['A) Rescisão indireta (art. 483, "d" CLT), com direito a todas as verbas rescisórias.', 'B) Nulidade da alteração, mas empregado obrigado a comparecer sob pena de abandono.', 'C) Válida a alteração pelo jus variandi amplo do empregador.', 'D) Necessária homologação sindical para validade.'], correct: 'A' },
            { id: 13, text: 'Contrato de experiência prorrogado indevidamente (totalizando 100 dias). Natureza do vínculo após o término:', options: ['A) Permanece por prazo determinado até 2 anos.', 'B) Converte-se automaticamente em indeterminado (art. 451 CLT).', 'C) Nulo o excesso, mas mantém experiência inicial.', 'D) Exige ação anulatória para conversão.'], correct: 'B' },
            { id: 14, text: 'Execução de contribuições previdenciárias sobre aviso-prévio indenizado e multa de 40% FGTS (verbas não salariais). Competência da JT:', options: ['A) De ofício, incluindo acréscimos (SV 53 STF).', 'B) Limitada a verbas salariais; SAT/RAT e multas excluídos.', 'C) Somente por iniciativa do INSS via execução fiscal.', 'D) Incompetente; remessa à Justiça Federal.'], correct: 'B' },
            { id: 15, text: 'Incompetência territorial arguida no 6º dia útil após notificação inicial (prazo art. 800 caput CLT). Juiz declara preclusão. Correto?', options: ['A) Sim, prazo preclusivo de 5 dias úteis, preclusão consumativa.', 'B) Não, prazo não preclusivo; pode ser arguida até audiência.', 'C) Sim, mas autos suspensos para decisão.', 'D) Não, prorrogação tácita da competência.'], correct: 'A' },
            { id: 16, text: 'Acordo homologado com valor alto (R$ 500.000,00), custas calculadas em 2% (R$ 10.000,00), mas limitado a 4 vezes teto RGPS (cerca de R$ 30.000,00 em 2026). Autor com gratuidade. Quem paga?', options: ['A) Réu integralmente, autor isento (art. 790-A CLT).', 'B) Divididas igualmente, autor isento.', 'C) Autor paga o excesso acima do limite.', 'D) Isentas por acordo.'], correct: 'B' },
            { id: 17, text: 'Empresa condenada interpõe RO sem depósito recursal integral, comprovando hipossuficiência econômica via balanços. Consequência:', options: ['A) Deserção absoluta, irrecorrível.', 'B) Possível dispensa ou redução se comprovada (Súmula 128 TST).', 'C) Substituição obrigatória por seguro-garantia judicial.', 'D) Recurso conhecido sem preparo.'], correct: 'B' },
            { id: 18, text: 'Empregado doméstico presta serviços em sítio de lazer da família (finalidade não lucrativa), mais de 2 dias/semana. Configura?', options: ['A) Não, âmbito residencial exige domicílio urbano.', 'B) Sim, LC 150/2015 abrange âmbito residencial amplo.', 'C) Não, finalidade não lucrativa exige residência principal.', 'D) Eventual, pois sítio não é residência.'], correct: 'B' },
            { id: 19, text: 'Hipersuficiente (diploma superior + salário >2 tetos) negocia acordo individual reduzindo adicional noturno para 20%. Válido?', options: ['A) Sim, negociação livre (art. 611-A CLT).', 'B) Não, redução de direito indisponível.', 'C) Sim, se homologado judicialmente.', 'D) Não, hipersuficiência não afasta proteção mínima.'], correct: 'B' },
            { id: 20, text: 'Justiça Estadual julga ação trabalhista subsidiária (ausência de JT na comarca). Sentença transitada. Recurso ordinário:', options: ['A) Para TJ, competência recursal comum.', 'B) Para TRT, competência funcional trabalhista (SV 22 STF).', 'C) Agravo de instrumento direto ao TST.', 'D) Sem recurso, decisão soberana.'], correct: 'B' },
            { id: 21, text: 'Teletrabalhador por tarefa recebe monitoramento por software de produtividade com metas horárias implícitas. Direito a horas extras?', options: ['A) Não, art. 62, III CLT exclui controle.', 'B) Sim, descaracteriza-se teletrabalho por controle indireto.', 'C) Apenas adicional noturno.', 'D) Exige prova de jornada efetiva >8h.'], correct: 'B' },
            { id: 22, text: 'Execução previdenciária de ofício sobre FGTS não depositado (verba indenizatória). Competência JT?', options: ['A) Sim, SV 53 STF abrange todas verbas condenatórias.', 'B) Não, limitada a parcelas salariais.', 'C) Somente INSS inicia.', 'D) Justiça Comum após dívida ativa.'], correct: 'B' },
            { id: 23, text: 'Incompetência territorial em ação de agente viajante: local de subordinação ausente, domicílio do empregado em outro estado. Competência?', options: ['A) Domicílio do empregado (exceção art. 651, §2º CLT).', 'B) Local de celebração do contrato.', 'C) Sede da empresa.', 'D) Foro eleito no contrato.'], correct: 'A' },
            { id: 24, text: 'Custas em acordo de R$ 100.000,00 (2% = R$ 2.000,00), autor beneficiário gratuidade desde inicial. Réu alega isenção parcial. Correto?', options: ['A) Autor isento total; réu paga integral.', 'B) Divididas, autor isento.', 'C) Isentas por acordo.', 'D) Autor paga mínimo R$ 10,64.'], correct: 'B' },
            { id: 25, text: 'Depósito recursal não recolhido por falência da empresa. Consequência no RO?', options: ['A) Deserção, mas massa falida isenta (Súmula 86 TST).', 'B) Recurso conhecido sem depósito.', 'C) Necessário seguro-garantia.', 'D) Extinção do processo.'], correct: 'A' },
            { id: 26, text: 'Empregado doméstico menor de 18 anos contratado irregularmente. Consequência?', options: ['A) Nulo o contrato; verbas rescisórias devidas.', 'B) Válido, mas sem FGTS.', 'C) Conversão em indeterminado.', 'D) Proibido, multa administrativa apenas.'], correct: 'A' },
            { id: 27, text: 'Alteração presencial → remoto sem mútuo acordo. Empregado recusa.', options: ['A) Nula; rescisão indireta possível.', 'B) Válida pelo poder diretivo.', 'C) Exige 15 dias adaptação.', 'D) Mútuo acordo obrigatório.'], correct: 'A' },
            { id: 28, text: 'Súmula Vinculante 53 STF exclui execução de contribuições sobre:', options: ['A) Multa FGTS e aviso indenizado.', 'B) Horas extras e adicional noturno.', 'C) Salários atrasados.', 'D) Todas verbas condenatórias.'], correct: 'A' },
            { id: 29, text: 'Incompetência territorial arguida após audiência inaugural (prazo perdido). Efeito?', options: ['A) Prorrogação da competência (preclusão).', 'B) Nulidade absoluta arguível a qualquer tempo.', 'C) Remessa de ofício.', 'D) Suspensão automática.'], correct: 'A' },
            { id: 30, text: 'Teletrabalho por produção com comparecimento esporádico para treinamento. Descaracteriza?', options: ['A) Não, comparecimento esporádico não descaracteriza (art. 75-B, §1º CLT).', 'B) Sim, habitualidade presencial.', 'C) Exige contrato escrito específico.', 'D) Direito a intervalo intrajornada.'], correct: 'A' }
        ],
        discursivas: [
            { id: 1, text: 'Analise, com base na LC 150/2015 e princípio da primazia da realidade, se Paula (3x/semana doméstica, comunicação prévia para extras, sem CTPS, pagamento por dia) configura empregada doméstica ou diarista/eventual. Fundamente com requisitos cumulativos e jurisprudência TST.', correctKeywords: ['empregada doméstica', 'mais de 2 dias', 'primazia realidade', 'tst'] },
            { id: 2, text: 'Empregado hipersuficiente celebrou cláusula compromissória de arbitragem sem iniciativa própria, apenas concordância tácita. Discuta validade à luz do art. 507-A CLT e art. 444, parágrafo único CLT. Há nulidade?', correctKeywords: ['nula', 'concordância expressa', 'art. 507-a'] },
            { id: 3, text: 'Teletrabalhador por produção comprovou monitoramento telemático rígido de metas diárias. Discuta descaracterização do regime (art. 75-C §2º vs. art. 62, III CLT) e direito a horas extras/intervalos.', correctKeywords: ['descaracteriza', 'controle indireto', 'horas extras'] },
            { id: 4, text: 'Contrato de experiência prorrogado indevidamente além de 90 dias. Consequências quanto à natureza do contrato (conversão em indeterminado?) e estabilidade. Cite art. 445 e Súmula 244 TST.', correctKeywords: ['conversão indeterminado', 'art. 451', 'súmula 244'] },
            { id: 5, text: 'Execução de contribuições previdenciárias sobre verbas condenatórias (horas extras), mas normais já recolhidas. Discuta competência da JT de ofício (SV 53 STF, art. 114 VIII CF) vs. exceções (SAT/RAT).', correctKeywords: ['ofício', 'sv 53', 'exceções sat'] },
            { id: 6, text: 'Alteração unilateral remoto → presencial sem 15 dias de adaptação. Argumente rescisão indireta (art. 483 CLT) ou nulidade da alteração.', correctKeywords: ['rescisão indireta', 'art. 483', 'nulidade'] },
            { id: 7, text: 'Incompetência territorial arguida em 6 dias úteis da notificação, em peça apartada. Discuta suspensão do processo, remessa dos autos e art. 800 CLT.', correctKeywords: ['preclusão', 'prazo 5 dias', 'art. 800'] },
            { id: 8, text: 'Acordo em fase de conhecimento, autor com gratuidade, sem menção a custas. Quem arca? Fundamente art. 789 §3º e 790-A CLT.', correctKeywords: ['divididas', 'autor isento', 'art. 789'] },
            { id: 9, text: 'Depósito recursal não integral por crise financeira da empresa condenada. Discuta deserção e possibilidade de substituição por seguro-garantia (art. 899 CLT).', correctKeywords: ['deserção', 'substituição possível', 'art. 899'] },
            { id: 10, text: 'Justiça Estadual julga subsidiariamente ação trabalhista. Recurso ordinário endereçado ao TRT ou TJ? Fundamente Súmula Vinculante 22 STF e art. 114 CF.', correctKeywords: ['trt', 'sv 22', 'art. 114'] },
            { id: 11, text: 'Analise se comparecimento habitual (mais de 50% do tempo) às dependências do empregador descaracteriza teletrabalho (art. 75-B, §1º CLT). Há direito a horas extras e intervalos? Fundamente com art. 62, III CLT e princípio da primazia da realidade.', correctKeywords: ['descaracteriza', 'habitual', 'horas extras', 'primazia'] },
            { id: 12, text: 'Empresa altera regime remoto para presencial sem 15 dias de adaptação (art. 75-F CLT). Empregado recusa retorno. Discuta rescisão indireta (art. 483, "d" CLT), nulidade da alteração e verbas devidas.', correctKeywords: ['rescisão indireta', 'nulidade', 'verbas'] },
            { id: 13, text: 'Contrato de experiência prorrogado além de 90 dias (total 120 dias). Natureza do vínculo pós-término? Conversão em indeterminado (art. 451 CLT)? Estabilidade provisória? Cite Súmula 244 TST.', correctKeywords: ['conversão', 'art. 451', 'súmula 244'] },
            { id: 14, text: 'Execução previdenciária de ofício sobre aviso-prévio indenizado e multa FGTS (não salariais). Competência JT? Limites da SV 53 STF e art. 114, VIII CF.', correctKeywords: ['limitada salariais', 'sv 53 exclui'] },
            { id: 15, text: 'Exceção de incompetência territorial arguida no 6º dia útil da notificação inicial. Preclusão do prazo (art. 800 CLT)? Natureza preclusiva ou não? Fundamente jurisprudência TST/SDI-2.', correctKeywords: ['preclusão', 'prazo 5', 'tst'] },
            { id: 16, text: 'Acordo homologado R$ 400.000,00; custas 2% = R$ 8.000,00 (dentro do limite 4x teto RGPS). Autor com gratuidade. Divisão das custas? Art. 789, §3º e 790-A CLT.', correctKeywords: ['divididas', 'isento', 'art. 789'] },
            { id: 17, text: 'Empresa em crise interpõe RO sem depósito recursal integral, comprovando hipossuficiência. Deserção? Possibilidade de redução ou substituição por seguro-garantia (art. 899 CLT e Súmula 128 TST)?', correctKeywords: ['redução possível', 'súmula 128'] },
            { id: 18, text: 'Serviços domésticos em sítio de lazer familiar (não lucrativo), >2 dias/semana. Configura empregado doméstico (LC 150/2015, art. 1º)? Âmbito residencial ampliado?', correctKeywords: ['sim', 'âmbito amplo', 'lc 150'] },
            { id: 19, text: 'Hipersuficiente negocia acordo individual reduzindo adicional noturno (art. 611-A CLT). Válido? Limites à negociação livre vs. direitos indisponíveis.', correctKeywords: ['não válido', 'indisponível'] },
            { id: 20, text: 'Justiça Estadual julga subsidiariamente ação trabalhista. Recurso ordinário para TRT ou TJ? Fundamente SV 22 STF e competência funcional.', correctKeywords: ['trt', 'sv 22'] },
            { id: 21, text: 'Teletrabalhador por tarefa monitorado por software com metas horárias. Descaracterização do regime? Direito a horas extras (art. 62, III vs. controle indireto)?', correctKeywords: ['descaracterização', 'controle indireto', 'horas extras'] },
            { id: 22, text: 'Execução previdenciária incluindo SAT/RAT sobre verbas condenatórias. Competência JT de ofício? Exclusões da SV 53 STF.', correctKeywords: ['exclusões sat', 'sv 53'] },
            { id: 23, text: 'Agente viajante: ausência de local subordinado fixo. Competência domicílio do empregado (art. 651, §2º CLT) ou outro? Pegadinha com domicílio vs. celebração.', correctKeywords: ['domicílio empregado', 'art. 651 §2'] },
            { id: 24, text: 'Custas em acordo alto: limite 4x teto RGPS vs. mínimo R$ 10,64. Autor gratuidade. Quem arca com excesso? Art. 789 CLT.', correctKeywords: ['divididas', 'isento', 'limite'] },
            { id: 25, text: 'Depósito recursal não recolhido por massa falida. Deserção no RO? Isenção para falida (Súmula 86 TST)?', correctKeywords: ['isenção', 'súmula 86'] },
            { id: 26, text: 'Contratação irregular de menor de 18 anos como doméstico. Nulidade do contrato? Verbas rescisórias e FGTS devidos?', correctKeywords: ['nulo', 'verbas devidas'] },
            { id: 27, text: 'Alteração presencial → remoto sem mútuo acordo (art. 75-F CLT). Recusa do empregado. Consequências rescisórias.', correctKeywords: ['nulidade', 'rescisão indireta'] },
            { id: 28, text: 'SV 53 STF: execução previdenciária de ofício exclui quais verbas? Análise sobre multas e indenizações.', correctKeywords: ['exclui multas', 'indenizações'] },
            { id: 29, text: 'Incompetência territorial arguida após audiência (prazo perdido). Prorrogação da competência? Preclusão consumativa (art. 800 CLT).', correctKeywords: ['prorrogação', 'preclusão'] },
            { id: 30, text: 'Teletrabalho por produção com comparecimento esporádico para treinamentos. Descaracteriza regime (art. 75-B, §1º CLT)? Direito a intervalos intrajornada?', correctKeywords: ['não descaracteriza', 'esporádico'] }
        ]
    }
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz(level) {
    currentLevel = level;
    document.getElementById('menu').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    const form = document.getElementById('quizForm');
    form.innerHTML = '';

    selectedObj = shuffle([...questions[level].objetivas]).slice(0, 15);
    selectedDisc = shuffle([...questions[level].discursivas]).slice(0, 15);

    selectedObj.forEach((q, index) => {
        form.innerHTML += `<div class="question objective">
            <p>${index + 1}. ${q.text}</p>
            ${q.options.map(opt => `<label><input type="radio" name="obj${index}" value="${opt.charAt(0)}">${opt}</label>`).join('')}
            <label class="not-know"><input type="radio" name="obj${index}" value="nao sei">Não sei</label>
        </div>`;
    });

    selectedDisc.forEach((q, index) => {
        form.innerHTML += `<div class="question discursive">
            <p>${index + 16}. ${q.text}</p>
            <textarea name="disc${index}"></textarea>
            <button type="button" onclick="this.previousElementSibling.value='Não sei';">Não sei</button>
        </div>`;
    });
}

function submitQuiz() {
    const form = document.getElementById('quizForm');
    const elements = form.elements;
    let allAnswered = true;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type === 'radio') {
            const name = elements[i].name;
            if (!form.querySelector(`input[name="${name}"]:checked`)) {
                allAnswered = false;
                break;
            }
        } else if (elements[i].type === 'textarea' && !elements[i].value.trim()) {
            allAnswered = false;
            break;
        }
    }
    if (!allAnswered) {
        alert('Responda todas as perguntas ou use "Não sei"! Como um vampiro, você não pode deixar sombras não resolvidas.');
        return;
    }

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = '';

    let objCorrect = 0;
    selectedObj.forEach((q, index) => {
        const selected = form.querySelector(`input[name="obj${index}"]:checked`).value;
        const isCorrect = selected === q.correct;
        if (isCorrect) objCorrect++;
        resultContent.innerHTML += `<p class="${isCorrect ? 'correct' : 'incorrect'}">Pergunta Obj ${index + 1}: ${isCorrect ? 'Correta! Você brilha como Edward ao sol.' : 'Errada. Como olhos vermelhos na escuridão.'} (Correta: ${q.correct})</p>`;
    });

    let discCorrect = 0;
    selectedDisc.forEach((q, index) => {
        const answer = form.querySelector(`textarea[name="disc${index}"]`).value.toLowerCase().trim();
        let isCorrect = false;
        if (answer !== 'não sei') {
            isCorrect = q.correctKeywords.every(kw => answer.includes(kw.toLowerCase()));
        }
        if (isCorrect) discCorrect++;
        resultContent.innerHTML += `<p class="${isCorrect ? 'correct' : 'incorrect'}">Pergunta Disc ${index + 1}: ${isCorrect ? 'Correta! Seu conhecimento é eterno como os vampiros.' : answer === 'não sei' ? 'Não sei (Errada). O mistério permanece.' : 'Errada. Como um lobo uivando na lua errada.'}</p>`;
    });

    const totalCorrect = objCorrect + discCorrect;
    let feedback = '';
    if (totalCorrect >= 25) feedback = 'Excelente! Você é um Cullen, mestre do conhecimento.';
    else if (totalCorrect >= 15) feedback = 'Bom! Como Bella, você está no caminho certo.';
    else feedback = 'Precisa praticar mais. Cuidado com os Volturi do direito!';

    resultContent.innerHTML = `<p>Objetivas corretas: ${objCorrect}/15</p><p>Discursivas corretas: ${discCorrect}/15</p><p>${feedback}</p>` + resultContent.innerHTML;
}

function backToMenu() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function restartQuiz() {
    startQuiz(currentLevel);
}