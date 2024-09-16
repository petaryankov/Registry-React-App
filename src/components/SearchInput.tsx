import { Form } from "react-router-dom";

export default function SearchInput() {

    return (
        <Form action="/search">
            <input name="term" />
        </Form>
    );
}