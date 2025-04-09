import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('* required')
      .min(3, '* required- min 3 symblols'),
    number: Yup.string()
      .required('* required- number')
      .matches(/^[\d+() -]+$/, '* required- number'),
  });
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.classBox}>
        <div className={css.inputBlock}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.inputBlock}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button className={css.btnSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
