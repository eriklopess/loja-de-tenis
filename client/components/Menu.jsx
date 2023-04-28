import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
    {
        id: 1, name: "Inicio", url: "/"
    },
    {
        id: 2, name: "Sobre", url: "/Sobre"
    },
    {
        id: 3, name: "Categorias", subMenu: true
    },
    {
        id: 4, name: "Contato", url: "/Contato"
    },
];

const subMenuData = [
    {
        id: 1, name: "Jordan", doc_count: 2, slug: "jordan"
    },
    {
        id: 2, name: "Sneakers", doc_count: 0, slug: "sneakers"
    },
    {
        id: 3, name: "Running shoes", doc_count: 0, slug: "running-shoes"
    },
    {
        id: 4, name: "Football shoes", doc_count: 0, slug: "football-shoes"
    },
]

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {
                data.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            {!!item?.subMenu ? (
                                <li className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}>
                                    {item.name}
                                    <BsChevronDown size={12} />
                                    {
                                        showCatMenu && (
                                            <ul className="bg-white absolute top-6 left-0 min-w-[250px] py-1 px-1 text-black shadow-lg">
                                                {subMenuData.map((subItem) => {
                                                    return (
                                                        <li key={subItem.id} className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                                            <Link href="/" onClick={() => setShowCatMenu(false)} className="flex justify-between w-full">
                                                                {subItem.name}
                                                                <span className="opacity-50 text-sm">
                                                                    ({subItem.doc_count})
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        )}
                                </li>
                            ) : (
                                <li className="cursor-pointer">
                                    <Link href="/">
                                        {item.name}
                                    </Link>
                                </li>
                            )}
                        </React.Fragment>
                    )
                })}
        </ul>
    );
}

export default Menu;