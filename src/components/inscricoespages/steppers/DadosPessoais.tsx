import  { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  // Button,
} from "@mui/material";
import { provincias } from "@/constants/steps";

function DadosPessoais({ register, watch, errors }) {
  // const [image, setImage] = useState<string | null>(null);
  const [municipios, setMunicipios] = useState<{ id: number; name: string }[]>(
    []
  );

  const provincia = watch("provincia");

  useEffect(() => {
    const prov = provincias.find((p) => p.name === provincia);
    if (prov) {
      setMunicipios(prov.municipios);
    } else {
      setMunicipios([]);
    }
  }, [provincia]);

  // console.log(image);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   console.log("event: ", e);
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setImage(imageUrl);
  //   }
  // };

  console.log(errors);

  return (
    <div className="">
      <h1 className="mb-4">DADOS PESSOAIS</h1>
      {/* Div principal de imagem e formulário */}
        {/* {image && (
          <img
            src={image}
            alt="Uploaded"
            className="max-h-48 max-w-full object-contain rounded-lg"
          />
        )}
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadSharp />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            {...register("imagem")}
            //accept="image/*"
          />
          
        </Button> */}
      <div className="flex flex-col  gap-4 w-full">
        {/* Div da Imagem */}
        {/* <div className="flex">
          <div className="w-full  md:w-72">
            <div className="relative w-full">
                <input
                type="file"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
                /> 
              <div className="flex flex-col items-center justify-center p-2 border-2 border-dashed border-green-500 rounded-lg bg-gray-50">
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="max-h-48 max-w-full object-contain rounded-lg"
                  />
                ) : (
                  <p className="text-gray-500 text-center">
                    Arraste e solte uma imagem aqui ou clique para selecionar.
                  </p>
                )}
              </div>
              {errors?.imagem && (
                <p className="text-red-500">{errors?.imagem?.message}</p>
              )}
              
            </div>
          </div>
        </div> */}

        {/* Formulário ocupando o resto da linha */}
        <form className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TextField
                id="nomeComepleto"
                label="Nome completo *"
                variant="outlined"
                {...register("nomeComepleto")}
                error={Boolean(errors.nomeComepleto)}
                helperText={errors.nomeComepleto?.message}
              />
          <TextField
            id="dataNascimento"
            label="Data de Nascimento *"
            variant="outlined"
            type="date"
            {...register("dataNascimento")}
            error={Boolean(errors.dataNascimento)}
            helperText={errors.dataNascimento?.message}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="numeroBI"
            label="Nº de B.I ou Passaporte *"
            variant="outlined"
            {...register("numeroBI")}
            error={Boolean(errors.numeroBI)}
            helperText={errors.numeroBI?.message}
          />
          <FormControl fullWidth error={Boolean(errors.genero)}>
            <InputLabel id="genero">Gênero *</InputLabel>
            <Select
              labelId="genero"
              id="genero"
              {...register("genero")}
              label="Gênero"
            >
              <MenuItem value="Feminino">Feminino</MenuItem>
              <MenuItem value="Masculino">Masculino</MenuItem>
            </Select>
            <FormHelperText>{errors.genero?.message}</FormHelperText>
          </FormControl>

          <TextField
            id="nomePai"
            label="Nome do Pai *"
            variant="outlined"
            {...register("nomePai")}
            error={Boolean(errors.nomePai)}
            helperText={errors.nomePai?.message}
          />
          <TextField
            id="nomeMae"
            label="Nome da Mãe *"
            variant="outlined"
            {...register("nomeMae")}
            error={Boolean(errors.nomeMae)}
            helperText={errors.nomeMae?.message}
          />
          <FormControl fullWidth error={Boolean(errors.estadoCivil)}>
            <InputLabel id="estadoCivil">Estado civil *</InputLabel>
            <Select
              labelId="estadoCivil"
              id="estadoCivil"
              {...register("estadoCivil")}
              label="Estado civil"
            >
              <MenuItem value="Solteiro(a)">Solteiro(a)</MenuItem>
              <MenuItem value="Divorciado(a)">Divorciado(a)</MenuItem>
              <MenuItem value="Viúvo(a)">Viúvo(a)</MenuItem>
            </Select>
            <FormHelperText>{errors.estadoCivil?.message}</FormHelperText>
          </FormControl>

          <TextField
            id="nacionalidade"
            label="Nacionalidade *"
            variant="outlined"
            {...register("nacionalidade")}
            error={Boolean(errors.nacionalidade)}
            helperText={errors.nacionalidade?.message}
          />
          <TextField
            id="naturalidade"
            label="Naturalidade *"
            variant="outlined"
            {...register("naturalidade")}
            error={Boolean(errors.naturalidade)}
            helperText={errors.naturalidade?.message}
          />
        </form>
      </div>

      {/* Seção de Endereço */}
      <div className="mt-6">
        <h1 className="mb-4">ENDEREÇO ACTUAL</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormControl fullWidth error={Boolean(errors.provincia)}>
            <InputLabel id="provincia">Província *</InputLabel>
            <Select
              labelId="provincia"
              id="provincia"
              {...register("provincia")}
              label="Província"
            >
              {provincias.map((prov) => (
                <MenuItem key={prov.id} value={prov.name}>
                  {prov.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.provincia?.message}</FormHelperText>
          </FormControl>

          <FormControl fullWidth error={Boolean(errors.municipio)}>
            <InputLabel id="municipio">Município *</InputLabel>
            <Select
              labelId="municipio"
              id="municipio"
              {...register("municipio")}
              label="Município"
            >
              {municipios.map((municipio) => (
                <MenuItem key={municipio.id} value={municipio.name}>
                  {municipio.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.municipio?.message}</FormHelperText>
          </FormControl>

          <TextField
            id="bairro"
            label="Bairro *"
            variant="outlined"
            {...register("bairro")}
            error={Boolean(errors.bairro)}
            helperText={errors.bairro?.message}
          />
          <TextField
            id="rua"
            label="Rua *"
            variant="outlined"
            {...register("rua")}
            error={Boolean(errors.rua)}
            helperText={errors.rua?.message}
          />
          <TextField
            id="telefone"
            label="Telefone *"
            variant="outlined"
            {...register("telefone")}
            error={Boolean(errors.telefone)}
            helperText={errors.telefone?.message}
          />
          <TextField
            id="telefone2"
            label="Telefone 2"
            variant="outlined"
            {...register("telefone2")}
            error={Boolean(errors.telefone2)}
            helperText={errors.telefone2?.message}
          />
          <TextField
            id="numeroContribuinte"
            label="Nº de Contribuinte *"
            variant="outlined"
            {...register("numeroContribuinte")}
            error={Boolean(errors.numeroContribuinte)}
            helperText={errors.numeroContribuinte?.message}
          />
          <TextField
            id="email"
            label="Email *"
            variant="outlined"
            {...register("email")}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        </form>
      </div>
    </div>
  );
}

export default DadosPessoais;
