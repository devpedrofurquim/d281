"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Faq from "@/components/faq";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Avaliar a D281 para a minha empresa",
    "Saiba Mais",
    "Obter um Orçamento",
    "Outros",
  ]),
  services: z.enum([
    "Desenvolvimento de Apps Mobile",
    "UI/UX Design",
    "Desenvolvimento de Websites",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Avaliar a D281 para a minha empresa" | "Saiba Mais" | "Obter um Orçamento" | "Outros";
  services:
    | "Desenvolvimento de Apps Mobile"
    | "UI/UX Design"
    | "Desenvolvimento de Websites"
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Saiba Mais",
      services: "Desenvolvimento de Apps Mobile",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full md:items-center md:justify-between text-white bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsites={() => {}}
        scrollToDesign={() => {}}
        scrollToStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
      <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto text-center bg-black/[0.96] bg-grid-white/[0.02] pt-10 md:pt-20 ">
      <div>
          <div className="text-3xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contate nossa equipe de vendas
          </div>
          <div
            className="py-10 text-lg text-gray-300">
            Vamos conversar sobre como a D281 pode alavancar o seu negócio.
          </div>
      </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
            space-y-4
            border rounded-3xl p-10"
            >
              <div className="md:flex items-center gap-6 ">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Nome *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Sobrenome *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Nome de sua empresa?
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Serviços que está interessado
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <div className="flex gap-4">
                          <SelectItem value="Desenvolvimento de Apps Mobile">
                          Desenvolvimento de Apps Mobile
                          </SelectItem>
                        </div>
                        <SelectItem value="Desenvolvimento de Websites">Desenvolvimento de Websites</SelectItem>
                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Como podemos te ajudar?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <div className="flex gap-4">
                          <SelectItem value="Avaliar a D281 para a minha empresa">
                            Avaliar a D281 para a minha empresa
                          </SelectItem>
                        </div>
                        <SelectItem value="Saiba Mais">Saiba Mais</SelectItem>
                        <SelectItem value="Obter um Orçamento">Obter um Orçamento</SelectItem>

                        <SelectItem value="Outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Gostaria de acrescentar alguma informação importante?
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-4 items-center">
                <div>
                  <Checkbox
                    id="terms"
                    className="outline outline-white"
                  />
                </div>
                <div className="text-sm font-light  mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Eu concordo com a D281 enviando comunicações de marketing relacionadas à D281.
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="
                            text-sm
                            font-light
                        
                            "
                  disabled={loading}
                  onClick={() => form.handleSubmit(onSubmit)}
                >
                  Enviar
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div
                className="
        text-xl 
        md:text-2xl 
        flex 
        items-center
        justify-center
        flex-col
        px-8 relative"
              >
                <div className="w-80 py-20">
                  <PiSmiley className="text-6xl text-[#fff] mx-auto" />

                  <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10">
                  Nós recebemos sua solicitação e vamos entrar em contato com você via email em breve.
                  </div>
                </div>
              </div>
            </>
          )}
        </Form>
      </div>
      <Faq/>
    </main>
  );
}