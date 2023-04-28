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
        id: 1, name: "Jordan", doc_count: 2
    },
    {
        id: 2, name: "Sneakers", doc_count: 0
    },
    {
        id: 3, name: "Running shoes", doc_count: 0
    },
    {
        id: 4, name: "Football shoes", doc_count: 0
    },
]

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {
                data.map((item) => {
                    return (
                        <React.Fragment key={item.id}>
                            {!!item?.subMenu ? (
                                <li className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}>
                                    <div className="flex justify-between items-center">
                                        {item.name}
                                        <BsChevronDown size={12} />

                                    </div>
                                    {
                                        showCatMenu && (
                                            <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                                {subMenuData.map((subItem) => {
                                                    return (
                                                        <li key={subItem.id} className="py-4 px-8 border-t flex justify-between">
                                                            <Link href="/" onClick={() => {
                                                                setShowCatMenu(false)
                                                                setMobileMenu(false)
                                                            }} className="flex justify-between w-full">
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
                                <li className="py-4 px-5 border-b">
                                    <Link href="/" onClick={() => setMobileMenu(false)}>
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

export default MenuMobile;