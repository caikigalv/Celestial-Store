import { CheckoutSteps } from "@/types/chekout-steps";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { TypeOf, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useCheckout } from "@/components/store/checkout-store";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}

const formSchema = z.object({
    name: z.string().min(2, 'Preencha seu nome'),
    email: z.string().min(2, 'Preencha seu email').email()
});



export const StepUser = ({ setStep }: Props) => {
    const { name, setName } = useCheckout(state => state);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setName(values.name);
        setStep('address');
    }
    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 z-[1000]">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormLabel>Seu nome</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    placeholder="Qual seu nome?"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    placeholder="Digita seu email.."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="default">Próximo</Button>


            </form>

        </Form>
    );
}