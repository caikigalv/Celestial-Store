import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Product } from "@/types/items";
import { products } from "./data/products";
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useCartStore } from "./store/cart-store";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";



type Tab = {
    title: string;
    value: string;
    products: Product[];
};

export const TabMenuNav = () => {
    const tabs: Tab[] = [
        {
            title: 'Telescópio',
            value: 'telescopio',
            products: products.filter((product: any) => product.category === 'telescopio'),
        },
        {
            title: 'Binóculos',
            value: 'binoculos',
            products: products.filter((product: any) => product.category === 'binoculos'),
        },
        {
            title: 'Acessórios',
            value: 'acessorios',
            products: products.filter((product: any) => product.category === 'acessorios'),
        },
    ];

    const { toast } = useToast();
    const { upsertCartItem } = useCartStore(state => state);

    const handleAddButton = (product: Product) => {
        upsertCartItem(product, 1);
        toast({
            title: `Adicionado no carrinho!`,
            description: `${product.nome}`,
            action: <ToastAction altText="Try again" className="bg-black text-white hover:bg-red-600">Fechar</ToastAction>,
        });
    };

    return (
        <Tabs id="Loja" defaultValue="telescopio" className="w-full">
            <TabsList className="bg-black border-white border flex">
                {tabs.map(tab => (
                    <TabsTrigger value={tab.value} className="flex-1">
                        {tab.title}
                    </TabsTrigger>
                ))}

            </TabsList>
            {tabs.map(tab => (
                <TabsContent key={tab.value} value={tab.value} className="">
                    {tab.products.length > 0 ? (
                        <Card className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {tab.products.map(product => (
                                <div key={product.id}>
                                    <CardHeader className="xl:w-[200px] h-[150px] object-cover">
                                        <img className="rounded-md" src={product.url} alt={product.nome} />
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle className="font-bold items-center mb-2 text-sm capitalize truncate">{product.nome}</CardTitle>
                                        <CardDescription className="mb-2">R${product.preco}</CardDescription>
                                        <Button
                                            onClick={() => handleAddButton(product)}
                                            variant="default"
                                            className="w-full border ">
                                            Adicionar
                                        </Button>
                                    </CardContent>
                                </div>
                            ))}
                        </Card>
                    ) : (
                        <Card className="flex justify-center pt-4">
                            <CardContent>
                                <CardTitle className="font-bold flex justify-center items-center mb-2 text-[30px]">Ops!</CardTitle>
                                <CardDescription className="mb-2">Infelizmente não temos produtos nesta categoria.</CardDescription>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>
            ))}



        </Tabs>
    )
}