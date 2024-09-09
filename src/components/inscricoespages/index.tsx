import React, { useState } from "react";
import DadosPessoais from "./steppers/DadosPessoais";
import DadosInstitucionais from "./steppers/DadosInstitucionais";
import DadosAcademicos from "./steppers/DadosAcademicos";
import AnexarDocumentos from "./steppers/AnexarDocumentos";
import Pagamento from "./steppers/Pagamento";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
// import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schema/registerSchema";

const steps = [
  { title: "Dados Pessoais", Component: DadosPessoais },
  { title: "Dados Institucionais", Component: DadosInstitucionais },
  { title: "Dados Acadêmicos", Component: DadosAcademicos },
  { title: "Anexar Documentos", Component: AnexarDocumentos },
  { title: "Pagamento", Component: Pagamento },
];

export function StepNavegations() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema[activeStep]),
  });

  const totalSteps = steps.length;
  const isLastStep = activeStep === totalSteps - 1;
console.log(watch('imagem'))
  const onSubmit = async (data) => {
    try {
      const updateData = { ...formData, ...data }
      console.log(updateData);
      if (activeStep < 4) {
        handleNext();
      } else {
        //const response = await axios.post("/api/formulario", updateData);
        console.log("Dados enviados com sucesso:");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      // Show error message
    }
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const StepComponent = steps[activeStep].Component;

  return (
    <Box className="w-full my-12">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.title} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {step.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit(onSubmit)} className="py-16 mx-8 ">
        <React.Fragment>
          <StepComponent
            errors={errors}
            register={register}
            watch={watch}
          />
          <div className="flex justify-between mt-4">
            <Button
              color="inherit"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Voltar
            </Button>
            <Button variant="contained" color="primary" type="submit">
              {isLastStep ? "Submit" : "seguinte"}
            </Button>
          </div>
        </React.Fragment>
      </form>
    </Box>
  );
}
