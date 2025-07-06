import { useNavigate } from "react-router";
import { Button } from "./ui/button";

type NavbarProps = {
    searchBarHidden?: boolean;
};

export function Navbar({ searchBarHidden = false }: NavbarProps) {
    const navigate = useNavigate();
    return (
        <>
            <nav className="flex items-center justify-between py-4 bg-white border-b border-gray-200">
                <div>
                    <span className="text-xl font-bold">RentAllHub</span>
                </div>

                {!searchBarHidden && (
                    <div
                        className={`flex border-primary border-2 rounded-md overflow-hidden max-w-150 w-full mx-2`}
                    >
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
                )}

                <div className="flex items-center gap-2">
                    <Button size={"lg"} className="font-semibold" onClick={() => navigate('\login')}>Login</Button>
                    <Button size={"lg"} variant={"outline"} onClick={() => navigate('\signup')}>Sign Up</Button>
                </div>
            </nav>
            {/* bottom nav bar */}
            <nav className="flex items-center justify-between py-4 bg-white">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <svg className="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        <span>All Category</span>
                    </div>
                    <div>Hot offers</div>
                    <div>Gift boxes</div>
                    <div>Projects</div>
                    <div>Menu item</div>

                    <select name="" id="">
                        <option value="" selected disabled hidden>Help</option>
                    </select>

                </div>

                <div className="flex items-center gap-6">
                    <select name="" id="">
                        <option value="" selected>English, USD</option>
                    </select>
                    <div>
                        <label>Ship to</label>
                        <select name="" id="countrySelect" className="ml-1 outline-none">
                            <option value="nepal" selected>🇳🇵</option>
                            <option value="india">🇮🇳</option>
                        </select>
                    </div>
                </div>
            </nav>
        </>
    );
}

// export { Navbar };