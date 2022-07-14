import batataFrita from "../assets/images/batataFrita.png";
import cheddar from "../assets/images/cheddar.png";
import estacado from "../assets/images/estacado.png";
import h20Limao from "../assets/images/h20Limao.png";
import ihaaDuplo from "../assets/images/ihaaDuplo.png";
import kabooom from "../assets/images/kabooom.png";
import misturao from "../assets/images/misturao.png";
import nuggets from "../assets/images/nuggets.png";
import onionRing from "../assets/images/onionRing.png";
import shakeLeiteMocaPacoca from "../assets/images/shakeLeiteMocaPacoca.png";
import sucoDeLaranja from "../assets/images/sucoDeLaranja.png";
import sundaeOvoMaltino from "../assets/images/sundaeOvoMaltino.png";

import acompanhamentos from "../assets/images/acompanhamentos.png";
import bebidas from "../assets/images/bebidas.png";
import burguer from "../assets/images/burguer.png";
import sobremesas from "../assets/images/sobremesas.png";

export const itemList = [
  {
    id: 1,
    itemImg: cheddar,
    itemTitle: "Cheddar",
    description: "Hmm queijo cheddar",
    price: 10.99,
    itemCategory: "burguer",
  },
  {
    id: 2,
    itemImg: ihaaDuplo,
    itemTitle: "Ihaa Duplo",
    description: "Dois deliciosos hambúrgueres grelhados ",
    price: 13.99,
    itemCategory: "burguer",
  },
  {
    id: 3,
    itemImg: estacado,
    itemTitle: "Estacado",
    description: "Se uma camada de cheddar já é bom...",
    price: 18.99,
    itemCategory: "burguer",
  },
  {
    id: 4,
    itemImg: kabooom,
    itemTitle: "Kaboom",
    description: "quatro carnes e quatro camadas de queijo e bacon",
    price: 28.99,
    itemCategory: "burguer",
  },
  {
    id: 5,
    itemImg: batataFrita,
    itemTitle: "Batatas Fritas",
    description: "Crocantes e irresistiveis",
    price: 8.59,
    itemCategory: "acompanhamento",
  },
  {
    id: 6,
    itemImg: onionRing,
    itemTitle: "Onion Ring",
    description: "fresquinhas e crocantes",
    price: 8.59,
    itemCategory: "acompanhamento",
  },
  {
    id: 7,
    itemImg: nuggets,
    itemTitle: "Nuggets",
    description: "crocantes e com tempero suave",
    price: 8.59,
    itemCategory: "acompanhamento",
  },
  {
    id: 8,
    itemImg: misturao,
    itemTitle: "Misturão",
    description: "Batata frita com cheddar e bacon crocante",
    price: 14.59,
    itemCategory: "acompanhamento",
  },
  {
    id: 9,
    itemImg: sucoDeLaranja,
    itemTitle: "Suco de Larnja",
    description: "100% natural",
    price: 9.99,
    itemCategory: "bebida",
  },
  {
    id: 10,
    itemImg: h20Limao,
    itemTitle: "H20 Limão",
    description: "Sabor Limão",
    price: 9.99,
    itemCategory: "bebida",
  },
  {
    id: 11,
    itemImg: shakeLeiteMocaPacoca,
    itemTitle: "Shake de Leite Moça com Paçoca",
    description: "Uma deliciosa sobremesa ",
    price: 11.99,
    itemCategory: "sobremesa",
  },
  {
    id: 12,
    itemImg: sundaeOvoMaltino,
    itemTitle: "Sundae Ovo Maltino",
    description: "Sabor Ovomaltine",
    price: 6.99,
    itemCategory: "sobremesa",
  },
];

export const categoryImages = {
  burguerImg: burguer,
  acompanhamentosImg: acompanhamentos,
  bebidasImg: bebidas,
  sobremesasImg: sobremesas,
};

export const kitchenItemList:any = []