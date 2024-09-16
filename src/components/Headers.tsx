import { Link } from "react-router-dom"
import SearchInput from "./SearchInput";

export default function Header() {
    return (
        <div>
            <Link to={"/"}>NPM Regitry</Link>
            <SearchInput />
        </div>
    );
}