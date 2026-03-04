export type New = {
  id: number;
  img: string;
  title: string;
  text: string;
  link: string;
  category: "artigos" | "videos" | "fotos" | "noticias";
};

const news: New[] = [
  {
    id: 1,
    img: "/src/assets/img/news1.png",
    title: "Testes no Bahrain",
    text: "O motor voltou a roncar e o coração da equipe também! Entramos em uma nova temporada com sede de vitória, paixão renovada e a mesma garra que nos trouxe até aqui. 2025 promete emoções de tirar o fôlego!",
    link: "",
    category: "videos",
  },
  {
    id: 2,
    img: "/src/assets/img/news2.png",
    title: "Uniforme 2026",
    text: "De torcedor para torcedor: criamos um site feito para você viver o automobilismo virtual de perto. Notícias, resultados, bastidores e uma nova forma de sentir a equipe tudo reunido em um só lugar.",
    link: "",
    category: "fotos",
  },

  {
    id: 3,
    img: "/src/assets/img/news3.jpg",
    title: "Aprsentação do carro 2026",
    text: "Prepare o carrinho (e o coração)! Em breve, você poderá vestir as cores da equipe e levar um pedaço da nossa história para casa. Roupas, acessórios e colecionáveis que todo fã vai querer ter.",
    link: "",
    category: "noticias",
  },

  {
    id: 4,
    img: "/src/assets/img/news4.png",
    title: "Adeus 2025",
    text: "Mais que uma cor, uma declaração. Apresentamos o novo visual dos nossos carros: moderno, ousado e cheio de energia. Cada traço carrega o espírito da equipe e o brilho de quem acredita no impossível.",
    link: "",
    category: "noticias",
  },

  {
    id: 5,
    img: "/src/assets/img/news5.png",
    title: "Do virtual ao real: nasce o programa de formação de pilotos",
    text: "Sonhar em ser piloto nunca foi tão possível. Lançamos nosso programa de aprendizagem virtual, criado para descobrir e preparar os talentos que vão acelerar com a gente nas próximas temporadas.",
    link: "",
    category: "artigos",
  },
];

export default news;
