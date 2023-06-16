import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  rental_price: yup.number().integer().required(),
  studio_id: yup.string().nullable().required(),
});
