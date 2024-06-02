import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { SearchBarProps } from "../../types";

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query === "") {
            toast.error("enter your request");
          } else {
            onSearch(values.query);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
          <button className={css.button} type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
