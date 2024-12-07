import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ITodo } from "../../types/types.ts";
import styles from "./AddTodoForm.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { addTodo } from "../../store/todos/todos.slice.ts";

const initialValues: ITodo = {
    id: "",
    title: "",
    description: "",
    isCompleted: false,
    isNecessary: false,
};

const validationSchema = Yup.object({
    id: Yup.string(),
    title: Yup.string()
        .transform(value => (value ? value.trim() : value))
        .required("Title is required")
        .min(3, "Title must be at least 3 characters"),
    description: Yup.string()
        .transform(value => (value ? value.trim() : value))
        .required("Description is required")
        .min(5, "Description must be at least 5 characters"),
    isCompleted: Yup.boolean(),
    isNecessary: Yup.boolean(),
});

const AddTodoForm = () => {
    const dispatch = useAppDispatch();

    const lastId = useAppSelector(store => {
        const storeLength = store.todos.length;
        return parseInt(store.todos[storeLength - 1].id);
    });

    const onSubmit = (values: ITodo) => {
        const newTodo = {
            ...values,
            id: (lastId + 1).toString(),
        };
        console.log(newTodo);
        dispatch(addTodo(newTodo));
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm();
            }}
        >
            {({ isSubmitting, errors }) => (
                <Form className={styles.form}>
                    <div>
                        <label
                            className={`${styles.textFieldsLabel} ${errors.title ? "text-rose-600" : "text-neutral-400"}`}
                            htmlFor="title"
                        >
                            Title
                        </label>

                        <Field
                            className={`${styles.textFields} ${errors.title ? "border-rose-600" : "border-neutral-400"}`}
                            id="title"
                            name="title"
                            type="text"
                        />
                        <ErrorMessage
                            className={styles.errorField}
                            name="title"
                            component="div"
                        />
                    </div>

                    <div>
                        <label
                            className={`${styles.textFieldsLabel} ${errors.description ? "text-rose-600" : "text-neutral-400"}`}
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <Field
                            className={`${styles.textFields} ${errors.description ? "border-rose-600" : "border-neutral-400"}`}
                            id="description"
                            name="description"
                            as="textarea"
                        />
                        <ErrorMessage
                            className={styles.errorField}
                            name="description"
                            component="div"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="isNecessary"
                            className={styles.toggleContainer}
                        >
                            <Field
                                id="isNecessary"
                                name="isNecessary"
                                type="checkbox"
                            />
                            This is necessary
                            <span className={styles.toggleBg}>
                                <span className={styles.toggleSlider}></span>
                            </span>
                        </label>
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
