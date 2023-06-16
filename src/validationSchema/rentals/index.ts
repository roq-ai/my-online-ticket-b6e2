import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_start: yup.date().required(),
  rental_end: yup.date().required(),
  customer_id: yup.string().nullable().required(),
  video_id: yup.string().nullable().required(),
});
