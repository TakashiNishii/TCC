import { Popover, Transition } from '@headlessui/react'
import Header from '../components/header'
import banner from '../assets/home_banner.png'
import linguagemC from '../assets/C.png'
import linguagemPython from '../assets/Python.png'
import Footer from '../components/footer'


export default function Home() {
    return (
        <div className="relative bg-white">
            <Popover className="relative bg-[D9D9D9] shadow">
                <Header />
            </Popover>

            <main className="lg:relative">

                <section>
                    <div className="mx-48 w-full max-w-7xl  pt-16 pb-20 text-center max-xl:justify-between xl:justify-center  md:mx-0 md:flex lg:py-48 lg:text-left">
                        <div className="px-4 sm:px-8 sm:w-full md:w-full lg:mr-72 lg:w-1/2 xl:pr-16">
                            <h1 className="text-4xl font-bold tracking-tight text-center items-center align-middle text-gray-900 sm:text-4xl md:text-4xl  lg:text-4xl xl:text-4xl">
                                <span className="block xl:inline text-center justify-center items-center self-center">Estude os padrões de equívocos e aprimore sua habilidade de
                                    percebê-los no seu código!</span>
                            </h1>
                            <p className="mx-auto mt-3 max-w-md text-lg text-center text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                                As linguagens abordadas nos exercícios são C e Python. Com mais de 100 questões de múltipla escolha disponíveis para você
                            </p>
                        </div>
                        <div className="inline sm:hidden md:hidden lg:inline h-max items-center lg:absolute lg:inset-y-0 lg:right-0 lg:h-fit lg:w-1/2">
                            <img
                                className="object-cover"
                                src={banner}
                                alt=""
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-[#D9D9D9]">
                        <div className="pt-12 sm:pt-16 lg:pt-24">
                            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                                <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
                                    <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                        Selecione a linguagem a ser estudada:
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-[#D9D9D9] pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
                            <div className="relative">
                                <div className="absolute inset-0 h-3/4 bg-[#D9D9D9]" />
                                <div className="relative z-10 mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                                    <div className="space-y-4 ite lg:grid lg:max-w-full lg:grid-cols-2 lg:gap-10 lg:space-y-0">
                                        {/*Imagem C com um botão embaixo*/}
                                        <div className="flex flex-col rounded-lg overflow-hidden ">
                                            <div className="flex-shrink-0 items-center self-center">
                                                <img
                                                    className="w-full object-fill"
                                                    src={linguagemC}
                                                    alt=""
                                                />
                                            </div>
                                            <a
                                                href="/#/modulos"
                                                className='bg-[#016FB9] self-center text-white mt-8 block w-1/2 py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                            >
                                                Estudar C
                                            </a>
                                        </div>
                                        {/*Imagem Python com um botão embaixo*/}
                                        <div className="flex flex-col rounded-lg  overflow-hidden">
                                            <div className="flex-shrink-0 self-center">
                                                <img
                                                    className="w-full object-fill"
                                                    src={linguagemPython}
                                                    alt=""
                                                />
                                            </div>
                                            <a
                                                //vai para o questionsModules.tsx
                                                href="/#/modulos"
                                                className='bg-[#F2763C] self-center text-white mt-8 block w-1/2 py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                            >
                                                Estudar Python
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


            </main>


            <Footer />
        </div>
    )
}
