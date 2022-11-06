// Tabela de Medidas
var devrocket_tabela_medidas = {
	titulo: 'Tabela de Medidas',
	imagem: 'https://cdn.awsli.com.br/2039/2039282/arquivos/tabela.jpg',
	// categorias: [''] // Para todas as categorias
	categorias: ['Vasos'] // Para categorias específicas
};

var devrocket_itens_menu = 6;
var devrocket_itens_menu_texto = 'Categorias';
var devrocket_rastreio_correios = true;
var devrocket_url_youtube = 'https://www.youtube.com/watch?v=l93wnBKkscw';

var devrocket_formas_envio = [
	'https://cdn.awsli.com.br/1197/1197939/arquivos/jadlog.png',
	'https://cdn.awsli.com.br/1197/1197939/arquivos/_sedex.png',
	'https://cdn.awsli.com.br/1197/1197939/arquivos/pac.png'
];

var devrocket_produtos_linha_celular = 2;

var devrocket_cor_barra_topo = '#00CEC9';
var devrocket_cor_menu = '#00CEC9';
var devrocket_cor_rodape = '#00CEC9';
var devrocket_cor_meio_pagamento = '#ffffff';
var devrocket_cor_botao_newsletter = '#00CEC9';

var devrocket_menu_fixo = true;
var devrocket_barra_contato = false;

var devrocket_barra_oferta = {
	frase: '<strong>Frete Grátis</strong> para todo o Brasil. Pague com <img src="https://cdn.awsli.com.br/1934/1934313/arquivos/pix-2.png" style="height: 18px;" />.',
	cor: '#00CEC9'
};

var frase_pix_comprar = '<div style="text-align: center;"> Pague também com <img src="https://cdn.awsli.com.br/1934/1934313/arquivos/pix-logo.png" style="height: 22px !important;" /> </div>';

var devrocket_instagram = '@seuinstagram';
var devrocket_horario_atendimento = 'Seg. a Sex: das 8h às 18h';
var devrocket_whatapp = '(00) 00000-0000 - Chama no Whats!';

var devrocket_frase_newsletter = '<p>Receba nossas <strong>ofertas exclusivas</strong>. Aproveite!</p>';

var depoimentos = [
	{
		imagem: 'https://cdn.awsli.com.br/1934/1934313/arquivos/depoimento-6.png',
		nome: 'José Paulo da Silva',
		mensagem: 'Esse tema era tudo que eu precisava. Agora posso vender tranquilamente!',
		localidade: 'Brasília / DF',
		estrelas: 5
	},
	{
		imagem: 'https://cdn.awsli.com.br/1934/1934313/arquivos/depoimento-5.png',
		nome: 'Maria Tereza da Silva',
		mensagem: 'Amei o tema, muito fácil e prático. Além de lindo... amei!',
		localidade: 'São Paulo / SP',
		estrelas: 5
	},
	{
		imagem: 'https://cdn.awsli.com.br/1934/1934313/arquivos/depoimento-4.png',
		nome: 'Roberta Pereira da Silva',
		mensagem: 'Além do tema ser top, o suporte é muito atencioso. Recomendo sem medo.',
		localidade: 'Curitiba / PR',
		estrelas: 5
	},
	{
		imagem: 'https://cdn.awsli.com.br/1934/1934313/arquivos/depoimento-3.png',
		nome: 'Carla de Almeida Castro',
		mensagem: 'Agora minha loja tem personalidade. Ficou difícil de escolher entre tantas opções sensacionais. Parabéns!',
		localidade: 'Rio de Janeiro / RJ',
		estrelas: 5
	},
	{
		imagem: 'https://cdn.awsli.com.br/1934/1934313/arquivos/depoimento-2.png',
		nome: 'Flávia da Silva Pereira',
		mensagem: 'O tema é fenomenal, com recursos simples de instalar. Nota 10 para vocês.',
		localidade: 'Manaus / AM',
		estrelas: 5
	},
	{
		imagem: 'https://cdn.awsli.com.br/1934/1934313/arquivos/depoimento-1.png',
		nome: 'Fernando Oliveira Lima',
		mensagem: 'Tema muito fácil de instalar, e o manual é super completo.',
		localidade: 'Salvador / BA',
		estrelas: 5
	}
];

// Banners Após lançamentos
devrocket_lancamentos = {
	lancamento: true,
	area: 'lancamento',
	img1: 'https://cdn.awsli.com.br/2393/2393413/arquivos/banner-secao-lancamentos-min.png',
	link1: "https://devrocket-vip-casa-e-decor.lojaintegrada.com.br/",
	img2: '',
	link2: '',
	img3: '',
	link3: ''
};

// Banners após mais vendidos
devrocket_mais_vendidos = {
	maisvendido: true,
	area: 'mas-vendido',
	img1: 'https://cdn.awsli.com.br/2393/2393413/arquivos/banner-secao-mais-vendidos-1-min.png',
	link1: "https://devrocket-vip-casa-e-decor.lojaintegrada.com.br/",
	img2: 'https://cdn.awsli.com.br/2393/2393413/arquivos/banner-secao-mais-vendidos-2-min.png',
	link2: 'https://devrocket-vip-casa-e-decor.lojaintegrada.com.br/',
	img3: '',
	link3: ''
};

// Banners após destaques
devrocket_destaques = {
	destaque: true,
	area: 'destaque',
	img1: 'https://cdn.awsli.com.br/2393/2393413/arquivos/banner-secao-destaques-1-min.png',
	link1: "https://devrocket-vip-casa-e-decor.lojaintegrada.com.br/",
	img2: 'https://cdn.awsli.com.br/2393/2393413/arquivos/banner-secao-destaques-2-min.png',
	link2: 'https://devrocket-vip-casa-e-decor.lojaintegrada.com.br/',
	img3: 'https://cdn.awsli.com.br/2393/2393413/arquivos/banner-secao-destaques-3-min.png',
	link3: 'https://devrocket-vip-casa-e-decor.lojaintegrada.com.br/'
};

// Imagens Categorias

/* Colocar as imagens na mesma ordem da categoria, sempre respeitando a quandidade visível em tela */
var devrocket_imagens_categoria = [
	'https://cdn.awsli.com.br/2393/2393413/arquivos/almofadas.png',
	'https://cdn.awsli.com.br/2393/2393413/arquivos/bandeja.png',
	'https://cdn.awsli.com.br/2393/2393413/arquivos/espelho.png',
	'https://cdn.awsli.com.br/2393/2393413/arquivos/luminaria.png',
	'https://cdn.awsli.com.br/2393/2393413/arquivos/quadro-armacao.png',
	'https://cdn.awsli.com.br/2393/2393413/arquivos/vaso.png',
	'https://cdn.awsli.com.br/2176/2176146/arquivos/menu.png',
	'https://cdn.awsli.com.br/1938/1938120/arquivos/imagem-exemplo-devrocket.png',
	'https://cdn.awsli.com.br/1938/1938120/arquivos/imagem-exemplo-devrocket.png',
	'https://cdn.awsli.com.br/1938/1938120/arquivos/imagem-exemplo-devrocket.png',
	'https://cdn.awsli.com.br/1938/1938120/arquivos/imagem-exemplo-devrocket.png',
	'https://cdn.awsli.com.br/1938/1938120/arquivos/imagem-exemplo-devrocket.png',
	'https://cdn.awsli.com.br/1938/1938120/arquivos/imagem-exemplo-devrocket.png',
	'https://cdn.awsli.com.br/1938/1938120/arquivos/imagem-exemplo-devrocket.png',
];

var devrocket_imagens_categoria_posicao = 'esquerda'; /* esquerda | centro | direita */
/* Quando deixar na posição "centro", alterar o valor de "--devrocket-imagem-categoria-espaco-abaixo" para "0px" */

// WhatsApp Flutuante
var devrocket_whatsapp = {
	numero: '5500000000000',
	mensagem: 'Olá, tudo bem? Quero falar sobre o tema para a minha loja virtual!',
	pulse: true
};

// Instagram Flutuante
var devrocket_instagram_flutuante = {
	usuario: 'seuinstagram', /* Nome do usuário do Instagram */
	pulse: true
};

// Telegram Flutuante
var devrocket_telegram = {
	usuario: 'seutelegram', /* Nome do usuário do telegram */
	pulse: true
};

// Pedidos WhatsApp
var devrocket_pedidos_whatsapp_listagem_produtos = true;
var devrocket_pedidos_whatsapp_botao_comprar = true;

var devrocket_pedidos_whatsapp_listagem_produtos_dados = {
	numero: '5500000000000',
	mensagem: 'Olá, tudo bem? Preciso de ajudar com o produto',
	frase_botao: 'Pedir pelo WhatsApp'
};

// Timer
var devrocket_timer_produtos = [
	{ 'produto': 151522236, 'data': '2022-12-31T20:22:00', 'frase': 'A Promoção expira em', 'cor_fundo': '#00CEC9', 'cor_texto': '#ffffff' },
	{ 'produto': 151522667, 'data': '2022-12-31T20:22:00', 'frase': 'A Promoção expira em', 'cor_fundo': '#00CEC9', 'cor_texto': '#ffffff' },
	// {'produto': 131169866, 'data': '2022-12-31T21:22:00', 'frase': 'A Promoção expira em', 'cor_fundo': '#e74c3c', 'cor_texto': '#ffffff'}
];

// Banners Mobile

var devrocket_banner_mobile = [
	{
		link: "https://devrocket-vip-casa-e-decor.lojaintegrada.com.br/",
		img: "https://cdn.awsli.com.br/2393/2393413/arquivos/banner-full-mobile-3-min.png"
	},
	{
		link: "https://devrocket-vip-casa-e-decor.lojaintegrada.com.br/",
		img: "https://cdn.awsli.com.br/2393/2393413/arquivos/banner-full-mobile-2-min.png"
	},
	{
		link: "https://devrocket-vip-casa-e-decor.lojaintegrada.com.br/",
		img: "https://cdn.awsli.com.br/2393/2393413/arquivos/banner-full-mobile-1-min.png"
	}
];

// Feed Instagram

var devrocket_feed_conta = {
	frase: 'Siga nosso Instagram',
	conta: '@seuinstagram',
	url: 'https://www.instagram.com/instagram/'
};

var devrocket_feed = [
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/pixel1.jpg',
		url: 'https://integrando.se/servicos/implantacao/configuracoes-gerais/configurao-do-pixel-do-facebook-5305/'
	},
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/analytics-1.jpg',
		url: 'https://integrando.se/servicos/implantacao/configuracoes-gerais/configurao-do-google-analytics-5185/'
	},
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/bling-1.jpg',
		url: 'https://integrando.se/servicos/implantacao/configuracoes-gerais/integrao-erp-bling-5387/'
	},
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/envio-1.jpg',
		url: 'https://integrando.se/servicos/implantacao/configuracoes-gerais/configuraes-das-formas-de-envio-5415/'
	},
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/banner-1.jpg',
		url: 'https://integrando.se/servicos/marketing/banner/criao-de-banner-avulso-5280/'
	},
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/extra-1.jpg',
		url: 'https://integrando.se/servicos/marketing/seo-e-conteudo/cadastro-de-pginas-extras-5360/'
	},
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/categoria-1.jpg',
		url: 'https://integrando.se/servicos/implantacao/configuracoes-gerais/cadastro-de-categorias-com-seo-5414/'
	},
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/blog-1.jpg',
		url: 'https://integrando.se/servicos/marketing/seo-e-conteudo/criao-de-contedo-para-blog-5515/'
	},
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/gerenciamento-1.jpg',
		url: 'https://integrando.se/servicos/implantacao/gestao-de-loja/gerenciamento-de-loja-virtual-5458/'
	},
	{
		img: 'https://cdn.awsli.com.br/2248/2248515/arquivos/layout-1.jpg',
		url: 'https://integrando.se/servicos/implantacao/layout/criao-de-layout-personalizado-5502/'
	},
];

// Timer Régua
var devrocket_timer_regua = {
	data: '2022-12-31T20:22:00',
	titulo: 'Promoção Exclusiva',
	frase: 'Aproveite os melhores produtos com os melhores preços!',
	cor_fundo: '#00CEC9',
	cor_texto: '#ffffff',
	url: 'https://devrocket-vip-escolar.lojaintegrada.com.br/'
};

// Carrossel de Produtos
var devrocket_carrossel_categorias_posicao = 'cabecalho'; // cabecalho | rodape
var devrocket_carrossel_categorias = [
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/prateleiras.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Prateleiras',
	},
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/cama.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Cama',
	},
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/tapete.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Tapetes',
	},
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/vasos.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Vasos',
	},
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/quadros.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Quadros',
	},
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/luminaria.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Luminárias',
	},
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/espelhos.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Espelhos',
	},
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/bandejas.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Bandejas',
	},
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/almofadas.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Almofadas',
	},
	{
		img: 'https://cdn.awsli.com.br/2393/2393413/arquivos/velas.jpg',
		url: 'https://devrocket-vip-moda-infantil.lojaintegrada.com.br/',
		titulo: 'Velas',
	}
];

var devrocket_paginas_extras_cabecalho = [
	{
		url: 'https://devrocket-vip-moda.lojaintegrada.com.br/pagina/missao-e-valores.html',
		nome: 'Missão e Valores',
	},
	{
		url: 'https://devrocket-vip-moda.lojaintegrada.com.br/pagina/politica-de-privacidade.html',
		nome: 'Política de Privacidade',
	},
	{
		url: 'https://devrocket-vip-moda.lojaintegrada.com.br/pagina/quem-somos.html',
		nome: 'Quem Somos',
	},
	{
		url: 'https://devrocket-vip-moda.lojaintegrada.com.br/pagina/servicos.html',
		nome: 'Serviços',
	},
];

var devrocket_produtos_vitrine = {
	produtos: [151521991, 151522236, 151522667, 151524219],
	titulo: 'Produtos em Destaque',
	texto: 'Promoção Exclusiva. Aproveite!',
	data_final: '2023-12-31T00:00:00',
	cor_fundo: '#00CEC9',
	cor_texto: '#ffffff'
};

var devrocket_oferta_dia = {
	titulo: 'Promoções Exclusivas',
	cor: '#ffffff'
}

// Sobre Nós
var devrocket_sobre_nos = {
	titulo: "Sobre Nós - Confira!",
	conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /> <br /> " +
		"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br /> <br /> " +
		"<strong>Missão e Valores!</strong> <br /> " +
		"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
	imagem: "https://cdn.awsli.com.br/2393/2393413/arquivos/banner-secao-destaques-1-min.png"

};