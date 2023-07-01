import * as yup from 'yup';

export const employeeDataValidationSchema = yup.object().shape({
  data: yup.string().required(),
  user_id: yup.string().nullable(),
});
