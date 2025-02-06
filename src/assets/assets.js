

import camiseta_ef_1 from './camiseta_ef_1.JPG'
import camiseta_ef_2 from './camiseta_ef_2.JPG'
import camiseta_ef_3 from './camiseta_ef_3.JPG'
import camiseta_ef_4 from './camiseta_ef_4.JPG'

import pantalon_ef_1 from './pantalon_ef_1.JPG'
import pantalon_ef_2 from './pantalon_ef_2.JPG'
import pantalon_ef_3 from './pantalon_ef_3.JPG'
import pantalon_ef_4 from './pantalon_ef_4.JPG'

import chompa_ef_1 from './chompa_ef_1.JPG'
import chompa_ef_2 from './chompa_ef_2.JPG'
import chompa_ef_3 from './chompa_ef_3.JPG'
import chompa_ef_4 from './chompa_ef_4.JPG'

import camiseta_d_1 from './camiseta_d_1.JPG'
import camiseta_d_2 from './camiseta_d_2.JPG'
import camiseta_d_3 from './camiseta_d_3.JPG'
import camiseta_d_4 from './camiseta_d_4.JPG'

import falda1 from './falda1.jpg'
import falda2 from './falda2.jpg'
import falda3 from './falda3.jpg'

import chompad1 from './chompad1.jpg'
import chompad2 from './chompad2.jpg'
import chompad3 from './chompad3.jpg'
import chompad4 from './chompad4.jpg'

import pantalond1 from './pantalond1.jpg'
import pantalond2 from './pantalond2.jpg'
import pantalond3 from './pantalond3.jpg'
import pantalond4 from './pantalond4.jpg'

import chompap1 from './chompap1.jpg'
import chompap2 from './chompap2.jpg'
import chompap3 from './chompap3.jpg'
import chompap4 from './chompap4.jpg'






import logo from './logo.png'
import hero_img from './hero_img.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import dropdown_icon2 from './dropdown_icon2.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import contact_img from './contact_img.jpg'
import cross_icon from './cross_icon.png'
import banco_img from './banco_img.png'
import about from './about.JPG'

export const assets = {
    logo,
    hero_img,
    dropdown_icon,
    dropdown_icon2,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    contact_img,
    cross_icon,
    banco_img,
    about,

}

export const products = [
    {
        _id: "aaaaa",
        name: "Camiseta de Educación Física",
        description: "Cómoda, ligera y transpirable, perfecta para tus clases deportivas. Incluye el logo de la escuela.",
        price: 15,
        image: [camiseta_ef_1,camiseta_ef_2,camiseta_ef_3,camiseta_ef_4],
        category: "Semanal",
        subCategory: "EE.FF",
        sizes: ["34","36","38","40", "42", "44",],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Calentador de Educación Física",
        description: "Pantalón cómodo y elástico, ideal para actividades deportivas.",
        price: 12,
        image: [pantalon_ef_1,pantalon_ef_2,pantalon_ef_3,pantalon_ef_4],
        category: "Semanal",
        subCategory: "EE.FF",
        sizes: ["34","36","38","40", "42", "44", ],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaac",
        name: "Chompa de Educación Física",
        description: "Chompa cómoda y liviana, diseñada para deportes, con materiales que permiten la movilidad.",
        price: 20,
        image: [chompa_ef_1,chompa_ef_2,chompa_ef_3,chompa_ef_4],
        category: "Semanal",
        subCategory: "EE.FF",
        sizes: ["34","36","38","40", "42", "44", ],
        date: 1716234545448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Camiseta de diario",
        description: "Camiseta polo uniforme de manga corta con cuello y botones, ideal para ambientes laborales o casuales. Confortable, duradera y fácil de cuidar.",
        price: 25,
        image: [camiseta_d_1,camiseta_d_2,camiseta_d_3,camiseta_d_4],
        category: "Semanal",
        subCategory: "Diario",
        sizes: ["34","36","38","40", "42", "44", ],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Falda de diario",
        description: "Falda escolar de alta calidad, diseñada para brindar comodidad y durabilidad. Confeccionada en tela resistente, de ajuste cómodo y corte clásico",
        price: 25,
        image: [falda1,falda2,falda3],
        category: "Semanal",
        subCategory: "Diario",
        sizes: ["34","36","38","40", "42", "44",],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Jean escolar",
        description: "Jean escolar clásico, resistente y cómodo. Diseño con ajuste regular, ideal para el uso diario. Fabricado con mezclilla de alta calidad para mayor durabilidad. ",
        price: 30,
        image: [pantalond1,pantalond2,pantalond3,pantalond4],
        category: "Semanal",
        subCategory: "Diario",
        sizes: ["34","36","38","40", "42", "44", ],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaac",
        name: "Chompa de Diario",
        description: "Chompa escolar clásica, ideal para el uso diario. Fabricada con materiales cómodos y resistentes, brinda abrigo y durabilidad. ",
        price: 35,
        image: [chompad1,chompad2,chompad3,chompad4],
        category: "Semanal",
        subCategory: "Diario",
        sizes: ["34","36","38","40", "42", "44", ],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Chompa de Promo 2024-25",
        description: "Luce con orgullo tu promoción con esta chompa exclusiva de la Clase 2024-2025. Diseñada para brindar comodidad y estilo, cuenta con un ajuste moderno, materiales de alta calidad y un diseño personalizado que representa tu generación.",
        price: 40,
        image: [chompap1,chompap2,chompap3,chompap4],
        category: "Promo",
        subCategory: "",
        sizes: ["34","36","38","40", "42", "44", ],
        date: 1716621345448,
        bestseller: false
    },

]
