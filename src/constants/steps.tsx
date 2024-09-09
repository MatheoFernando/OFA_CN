interface Municipio {
  id: number;
  name: string;
}

interface Provincia {
  id: number;
  name: string;
  municipios: Municipio[];
}
export const provincias: Provincia[] = [
  { id: 1, name: "Luanda", municipios: [
      { id: 1, name: "Cacuaco" },
      { id: 2, name: "Belas" },
      { id: 3, name: "Ingombota" },
      { id: 4, name: "Kilamba Kiaxi" },
      { id: 5, name: "Luanda" },
      { id: 6, name: "Viana" }
    ]
  },
  { id: 2, name: "Benguela", municipios: [
      { id: 1, name: "Benguela" },
      { id: 2, name: "Catumbela" },
      { id: 3, name: "Lobito" },
      { id: 4, name: "Baia Farta" },
      { id: 5, name: "Caimbambo" },
      { id: 6, name: "Ganda" },
      { id: 7, name: "Lobito" }
    ]
  },
  { id: 3, name: "Huambo", municipios: [
      { id: 1, name: "Huambo" },
      { id: 2, name: "Caála" },
      { id: 3, name: "Longonjo" },
      { id: 4, name: "Chivaura" },
      { id: 5, name: "Uam" }
    ]
  },
  { id: 4, name: "Huila", municipios: [
      { id: 1, name: "Lubango" },
      { id: 2, name: "Chibia" },
      { id: 3, name: "Jamba" },
      { id: 4, name: "Quipungo" },
      { id: 5, name: "Humpata" },
      { id: 6, name: "Cacula" }
    ]
  },
  { id: 5, name: "Kwanza Norte", municipios: [
      { id: 1, name: "Ndalatando" },
      { id: 2, name: "Banga" },
      { id: 3, name: "Cazengo" },
      { id: 4, name: "Golungo Alto" },
      { id: 5, name: "Lucala" }
    ]
  },
  { id: 6, name: "Kwanza Sul", municipios: [
      { id: 1, name: "Sumbe" },
      { id: 2, name: "Cangandala" },
      { id: 3, name: "Seles" },
      { id: 4, name: "Quibala" },
      { id: 5, name: "Cacuso" }
    ]
  },
  { id: 7, name: "Malanje", municipios: [
      { id: 1, name: "Malanje" },
      { id: 2, name: "Cacuso" },
      { id: 3, name: "Cangandala" },
      { id: 4, name: "Luquembo" },
      { id: 5, name: "Mucari" }
    ]
  },
  { id: 8, name: "Moxico", municipios: [
      { id: 1, name: "Luena" },
      { id: 2, name: "Alto Zambeze" },
      { id: 3, name: "Luchazes" },
      { id: 4, name: "Moxico" }
    ]
  },
  { id: 9, name: "Namibe", municipios: [
      { id: 1, name: "Namibe" },
      { id: 2, name: "Tômbwa" },
      { id: 3, name: "Virei" }
    ]
  },
  { id: 10, name: "Uíge", municipios: [
      { id: 1, name: "Uíge" },
      { id: 2, name: "Bembe" },
      { id: 3, name: "Damba" },
      { id: 4, name: "Songo" },
      { id: 5, name: "Negage" }
    ]
  },
  { id: 11, name: "Cuando Cubango", municipios: [
      { id: 1, name: "Menongue" },
      { id: 2, name: "Cuito Cuanavale" },
      { id: 3, name: "Cuito" },
      { id: 4, name: "Cuchi" }
    ]
  },
  { id: 12, name: "Zaire", municipios: [
      { id: 1, name: "Mbanza Congo" },
      { id: 2, name: "Soyo" },
      { id: 3, name: "Nzeto" },
      { id: 4, name: "Tomboco" }
    ]
  },
  { id: 13, name: "Lunda Norte", municipios: [
      { id: 1, name: "Dundo" },
      { id: 2, name: "Cacolo" },
      { id: 3, name: "Lucapa" },
      { id: 4, name: "Cambulo" }
    ]
  },
  { id: 14, name: "Lunda Sul", municipios: [
      { id: 1, name: "Saurimo" },
      { id: 2, name: "Cacolo" },
      { id: 3, name: "Muconda" },
      { id: 4, name: "Chitato" }
    ]
  },
  { id: 15, name: "Bie", municipios: [
      { id: 1, name: "Kuito" },
      { id: 2, name: "Camacupa" },
      { id: 3, name: "Chongoroi" }
    ]
  },
  { id: 16, name: "Cabinda", municipios: [
      { id: 1, name: "Cabinda" },
      { id: 2, name: "Cacongo" },
      { id: 3, name: "Tchimbamba" },
      { id: 4, name: "Buco-Zau" }
    ]
  },
  { id: 17, name: "Lunda Sul", municipios: [
      { id: 1, name: "Saurimo" },
      { id: 2, name: "Chitato" },
      { id: 3, name: "Dala" }
    ]
  },
  { id: 18, name: "Moxico", municipios: [
      { id: 1, name: "Luena" },
      { id: 2, name: "Luchazes" },
      { id: 3, name: "Camanongue" }
    ]
  }
];
