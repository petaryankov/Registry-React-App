import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SearchInput() {
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmith = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate(`/search?term=${term}`);
    };

    return (
        <form onSubmit={handleSubmith}>
            <input
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
        </form>
    );
}