import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ITodo } from "../../types/types.ts";

const initialValues: ITodo = {
    id: "",
    title: "",
    description: "",
    isCompleted: false,
    isNecessary: false,
};

const validationSchema = Yup.object({
    title: Yup.string()
        .required("Title is required")
        .min(3, "Title must be at least 3 characters"),
    description: Yup.string()
        .required("Description is required")
        .min(5, "Description must be at least 5 characters"),
    isCompleted: Yup.boolean(),
    isNecessary: Yup.boolean(),
});

const AddTodoForm = () => {
    const onSubmit = (values: ITodo) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm(); // Скидання форми після відправки
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title" type="text" />
                        <ErrorMessage name="title" component="div" />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <Field
                            id="description"
                            name="description"
                            as="textarea"
                        />
                        <ErrorMessage name="description" component="div" />
                    </div>

                    <div>
                        <Field
                            id="isCompleted"
                            name="isCompleted"
                            type="checkbox"
                        />
                        <label htmlFor="isCompleted">Is Completed</label>
                    </div>

                    <div>
                        <Field
                            id="isNecessary"
                            name="isNecessary"
                            type="checkbox"
                        />
                        <label htmlFor="isNecessary">Is Necessary</label>
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default AddTodoForm;
