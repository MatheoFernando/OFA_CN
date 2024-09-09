import { z } from "zod";
const MAX_IMAGE_SIZE = 1024 * 1024 * 1;
const MAX_FILE_SIZE = 2048 * 2048 * 1;
const ACCEPTED_IMAGE_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const educationSchema = z.object({
  curso: z.string().min(1, "Nº de Contribuinte é obrigatório"),
  universidade: z.string().min(1, "Nº de Contribuinte é obrigatório"),
  anoconclusao: z.string().min(1, "Nº de Contribuinte é obrigatório"),
  pais: z.string().min(1, "Nº de Contribuinte é obrigatório"),
  sector: z.string().min(1, "Nº de Contribuinte é obrigatório"),
  telefone: z.string().min(1, "Nº de Contribuinte é obrigatório"),
  email: z.string().min(1, "Nº de Contribuinte é obrigatório"),
});

export const registerSchema = [
  z.object({
    imagem: z
      .any()
      .optional()
      .refine((files) => {
        if (!files || !files[0]) return true;
        return files[0].size <= MAX_IMAGE_SIZE;
      }, `o tamanho máximo é 1MB.`)
      .refine((files) => {
        if (!files || !files[0]) return true;
        return ACCEPTED_IMAGE_MIME_TYPES.includes(files[0].type);
      }, "Apenas .jpg, .jpeg, .png é suportado."),
    nomeComepleto: z.string().min(1, "Nome completo é obrigatório"),
    dataNascimento: z.string().min(1, "Data de Nascimento é obrigatória"),
    numeroBI: z
    .string()
    .min(1, "Nº de B.I ou Passaporte é obrigatório")
    .regex(/^[a-zA-Z0-9]{5,20}$/, "Número de B.I ou Passaporte inválido"), 
    genero: z.string().min(1, "Gênero é obrigatório"),
    nomePai: z.string().min(1, "Nome do Pai é obrigatório"),
    nomeMae: z.string().min(1, "Nome da Mãe é obrigatório"),
    estadoCivil: z.string().min(1, "Estado civil é obrigatório"),
    nacionalidade: z.string().min(1, "Nacionalidade é obrigatória"),
    naturalidade: z.string().min(1, "Naturalidade é obrigatória"),
    provincia: z.string().min(1, "Província é obrigatória"),
    municipio: z.string().min(1, "Município é obrigatório"),
    bairro: z.string().min(1, "Bairro é obrigatório"),
    rua: z.string().min(1, "Rua é obrigatória"),
    telefone: z.string().min(9, "Telefone é obrigatório").max(12, "Deve ter no máximo 12 digitos"),
    telefone2: z.string().optional(),
    numeroContribuinte: z.string().min(1, "Nº de Contribuinte é obrigatório"),
    email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  }),
  z.object({
    localtrabalho: z.string().min(1, "Nº de Contribuinte é obrigatório"),
    provincia: z.string().min(1, "Nº de Contribuinte é obrigatório"),
    municipio: z.string().min(1, "Nº de Contribuinte é obrigatório"),
    endereçoIntituição: z.string().min(1, "Nº de Contribuinte é obrigatório"),
    sector: z.string().min(1, "Nº de Contribuinte é obrigatório"),
    telefone: z.string().min(1, "Nº de Contribuinte é obrigatório"),
    email: z.string().min(1, "Nº de Contribuinte é obrigatório"),
  }),
  z.object({
    licenciatura: educationSchema,
    posGraduacao: educationSchema,
    mestrado: educationSchema,
    especialidade: educationSchema,
    doutoramento: educationSchema,
  }),
  z.object({
    fotocópiacoloridaBIPassaporte: z
      .string()
      .min(1, "Nº de Contribuinte é obrigatório"),
    fotocópiaDiplomaCertificado: z
      .string()
      .min(1, "Nº de Contribuinte é obrigatório"),
    fotocópiaDeclaraçãoINAREES: z
      .string()
      .min(1, "Nº de Contribuinte é obrigatório"),
  }),
];
