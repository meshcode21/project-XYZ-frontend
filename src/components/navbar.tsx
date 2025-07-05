import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="flex items-center justify-between py-3 bg-white">
            <div>
                <span className="text-xl font-bold">RentAllHub</span>
            </div>

            <div className="border-primary border flex rounded-md overflow-hidden max-w-150 w-full mx-2">
                <input
                    id="searchInput"
                    name="searchInput"
                    type="text"
                    placeholder="search items"
                    className="outline-none px-2 w-full text-gray-500"
                />
                <select
                    id="searchCategorySelect"
                    name="searchCategorySelect"
                    className="text-gray-500 outline-none px-3 border-l"
                >
                    <option selected disabled hidden>All category</option>
                </select>
                <button className="bg-primary text-white font-semibold px-6 py-2">Search</button>
            </div>

            <div className="flex items-center gap-2">
                <Button size={"lg"} className="font-semibold" onClick={()=>navigate('\login')}>Login</Button>
                <Button size={"lg"} variant={"outline"} onClick={()=>navigate('\signup')}>Sign Up</Button>
            </div>
        </nav>
    );
}