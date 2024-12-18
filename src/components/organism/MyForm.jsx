
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      projectDetails: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("يجب إدخال الإسم"),
      email: Yup.string().email("إيميل غير صحيح").required("يجب إدخال الإيميل"),
      subject: Yup.string().required("أدخل عنوان للرسالة"),
      projectDetails: Yup.string().required("أضف بعض التفاصيل"),
    }),
    onSubmit: (values) => {
      emailjs
        .send(
          'service_mubfs0c',
          'template_xcajtf7',
          values,              
          'rVqaFlF2NIt-exij6'
        )
        .then(
          // eslint-disable-next-line no-unused-vars
          (result) => {
            toast.success('Message sent successfully!');
            formik.resetForm();
          },
          (error) => {
            toast.error('Error sending message:', error.text);
          }
        );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className=" mx-auto p-8 bg-white rounded">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-semibold text-my-color">
            الإسم
          </label>
          <input
            id="name"
            name="name"
            type="text"
            {...formik.getFieldProps("name")}
            className={`mt-1 block w-full px-3 py-2 border ${
              formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="font-semibold text-my-color flex flex-col gap-2">
            اللإيميل <p className='text-xs'>(عليك ادخال ايميلك الصحيح حتى نستطيع الرد على هذه الرسالة)</p>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
            className={`mt-1 block w-full px-3 py-2 border ${
              formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="subject" className="block font-semibold text-my-color">
            عنوان الرسالة
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            {...formik.getFieldProps("subject")}
            className={`mt-1 block w-full px-3 py-2 border ${
              formik.touched.subject && formik.errors.subject ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.subject}</p>
          ) : null}
        </div>

      </div>

      <div className="mt-6">
        <label htmlFor="projectDetails" className="block font-semibold text-my-color">
          التفاصيل
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          {...formik.getFieldProps("projectDetails")}
          rows="4"
          className={`mt-1 block w-full px-3 py-2 border ${
            formik.touched.projectDetails && formik.errors.projectDetails ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {formik.touched.projectDetails && formik.errors.projectDetails ? (
            <p className="text-red-500 text-xs mt-1">{formik.errors.projectDetails}</p>
          ) : null}
      </div>

      <button
        type="submit"
        className="mt-6 w-full text-lg font-bold py-2 px-4 bg-my-color text-white rounded-md shadow hover:bg-yellow-600 transition-all duration-300"
      >
        إرسال
      </button>
      <p className="text-center text-gray-500 text-sm mt-4">
          سوف يتم الرد على الرسائل خلال 24 ساعة
      </p>
    </form>
  );
};

export default MyForm;