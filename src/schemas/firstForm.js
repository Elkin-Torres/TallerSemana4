import * as Yup from "yup";

export const firstForm = Yup.object().shape({
    clientName:Yup.string().matches(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?<!\s)$/,"only letters are allowed").required("Names are required"),
    cedula: Yup.string().matches(/^([0-9]{1,10})$/,"Enter a valid identification number(only numbers and maximum 10)").required("identification card is required"),
    phoneNumber:Yup.string().matches(/^([0-9]{1,20})$/,"only numbers are allowed").required("PhoneNumber is required"),
    email:Yup.string().matches(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/,"write a valid email").required("email is required")
});