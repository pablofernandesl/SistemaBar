Documento de Requisitos - BarControl
Versão 1.0
Projeto: BarControl
Tipo: Sistema web de gestão para bar e resturante
TEcnologias previstas: Node.js + React + MySQL + Socket.IO

----------------------------------------------------------------

1. Objetivo do Sistema

O sistema BarControl tem como objetivo gerenciar pedidos de um bar/restauraante, permitindo o lançamento de pedidos por atendentes/garçons e o encaminhamento automático desses pedidos para os setores responsárveis, com bar e cozinha.

O sistema deverá reduzir:

    Erros manuais
    Perda de pedidos
    Atrasos de produção
    Falhas no fechamento de contas

2. Problema de negócio

Atualmente, muitos bares operam com:

    Comandas em papel
    Anotações manuais
    Comunicação verbal entre setores

Problemas gerados:

    Pedidos esquecidos
    Erros de entrega
    Fechamento incorreto
    Dificuldade de controle financeiro

----------------------------------------------------------------

3. Perfis de Usuário

3.1 Administrador

Responsável por configuração e gestão geral.

Permissões:

    Gerencias usuários
    Cadastrar produtos
    Cadastrar mesas
    Visualizar relatórios
    Acompanhar pedidos

3.2 Garçom / Atendente

Responsável pelo atendimento.

Permissões

    Abrir mesas
    Lançar pedidos
    Editar pedidos
    Fechar contas

3.3 Cozinha

Responsável por produção de alimentos.

Permissões:

    Visualizar pedidos de comida
    Alterar status de preparo

3.4 Bar

Responsável por bebidas.

Permissões:

    Visualizar pedidos de bebidas
    Alterar status de produção

----------------------------------------------------------------

4. Requisitos Funcionais

RF01 - Autenticação

O sistmea deve permitir login porm usuário e senha.

----------------------------------------------------------------

RF02 - Gestão de Usuários

O administrador deve poder:

    Criar usuários
    Editar usuários
    Desativar usuários

----------------------------------------------------------------

RF03 - Gestão de Mesas

O sistema deve permitir:

    Cadastrar mesas
    Visualizar status da mesa
    Alterar disponibilidade

----------------------------------------------------------------

RF04 - Gestão de Produtos

O sistema deve permitir cadastrar:

    Bebidas
    Comidas
    Porções
    Adicionais

Campos

    Nome
    Categoria
    Preço
    Disponibilidade

----------------------------------------------------------------

RF05 - Abertura de Pedido

Garçom deve poder abrir pedido asssioado a:

    Mesa
ou
    Comando

----------------------------------------------------------------

RF06 - Lançamento de itens

Itens adiocionais ao pedido devem conter:

    Produto
    Quantidade
    Observações

Exemplo:

    Sem cebola
    Sem gelo
    Ponto da carne

----------------------------------------------------------------

RF07 - Direcionamento Automático

O sistema deve enviar automaticamente:

    Produtos alimentícios -> Cozinha
    Bebidas -> Bar

----------------------------------------------------------------

RF08 - Atualizzação em Tempo Real

Pedidos novos devem aparecer automaticamente em:

    Cozinha
    Bar

Sem necessidade de atualizar página

----------------------------------------------------------------

RF09 - Controle de Status do Pedido

Status possíveis:

    Pendente
    Em preparo
    Pronto
    Entregue
    FInalizado

----------------------------------------------------------------

RF10 - Fechamento de Conta

Garçom deve poder encerrar pedido.

Informações:

    Subtotal
    Taxa de serviço
    Desconto
    Total Final

----------------------------------------------------------------

RF11 - Pagamento

Registrar forma de pagamento:

    Dinheiro
    Pix
    Cartão de débito
    Cartão de crédito

----------------------------------------------------------------

RF12 - HIstórico

Sistema deve armazenar histórico de pedidos finalizdos.

----------------------------------------------------------------

RF13 - Múltiplos tipos de atendimento

O sistema deve suportar:

    atendimento em mesas
    comandas individuas
    balcão
    delivery

----------------------------------------------------------------

5. Requisitos Não Funcionais

RNF01 — Performance

    Operações críticas em até 2 segundos.

RNF02 — Disponibilidade

    Sistema deve operar durante horário comercial sem interrupções.

RNF03 — Responsividade

Interface compatível com:

    desktop
    tablet
    celular

RNF04 — Segurança

    Senhas criptografadas.

RNF05 — Escalabilidade

    Arquitetura preparada para múltiplos estabelecimentos no futuro.

----------------------------------------------------------------

6. Regras de Negócio

RN01

    Uma mesa só pode possuir um pedido ativo.

RN02

    Pedido fechado não pode ser editado.

RN03

    Produto indisponível não pode ser vendido.

RN04

    Somente administradores podem alterar preços.

----------------------------------------------------------------

7. Funcionalidades Futuras

Fora da V1:

    QR Code nas mesas
    Cardápio digital
    Impressão térmica
    Controle de estoque
    Dashboard financeiro
    Multiunidades
    Delivery