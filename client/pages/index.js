import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
export default function Home({ products }) {
    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragaph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Amortecimento para suas milhas
                    </div>
                    <div className="text-md md:text-xl">
                    Uma entressola leve Nike ZoomX é combinada com alturas de pilha aumentadas para ajudar a fornecer amortecimento durante trechos prolongados de corrida.
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}