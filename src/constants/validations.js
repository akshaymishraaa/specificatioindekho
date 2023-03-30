import * as Yup from "yup";

export const validateSchema = Yup.object().shape({
  brandName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter brand name"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter name"),
  modelNumber: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Please enter Model number"),
  price: Yup.number().required("Please enter price"),
  
});
