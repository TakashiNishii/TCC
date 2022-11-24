import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Squares2X2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import Header from '../components/header'
import linguagemC from '../assets/C.png'
import linguagemPython from '../assets/Python.png'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'

const modules = [
    {
        id: 1,
        name: 'Basic Tee 8-Pack',
        href: '#',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
    },
]

interface Module {
    language: string
}

export default function Modules(props: Module) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    console.log(props.language);
    const linguagem = props.language !== undefined ? props.language : 'C';
    const corPrincipal = linguagem === 'C' ? 'bg-[#016FB9]' : 'bg-[#E26200]';
    const corHover = linguagem === 'C' ? 'hover:bg-[#016FB9]' : 'hover:bg-[#E26200]';
    const corSecundaria = linguagem === 'C' ? 'bg-[#B5FFE9]' : 'bg-[#F2763C]';
    const corTexto = linguagem === 'C' ? 'text-[#016FB9]' : 'text-white';
    const corBorder = linguagem === 'C' ? 'border-[#016FB9]' : 'border-[#E26200]';

    return (
        <div className="bg-white">
            <div>
                {/* Mobile menu */}
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                    <div className="flex px-4 pt-5 pb-2">
                                        <button
                                            type="button"
                                            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Links */}


                                    <div className="border-t border-gray-200 py-6 px-4">
                                        <a href="#" className="-m-2 flex items-center p-2">
                                            <img
                                                src="https://tailwindui.com/img/flags/flag-canada.svg"
                                                alt=""
                                                className="block h-auto w-5 flex-shrink-0"
                                            />
                                            <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                            <span className="sr-only">, change currency</span>
                                        </a>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <Header />
            </div>

            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>



                <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                    <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                        <aside>

                            <button
                                type="button"
                                className="inline-flex items-center lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="text-sm font-medium text-gray-700">Filters</span>
                                <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            </button>

                            <div className="hidden lg:block">
                                <form className="space-y-10 divide-y divide-gray-200">
                                    <div>
                                        <h1 className="text-4xl font-bold tracking-tight text-center text-gray-900">Exercícios na linguagem {linguagem}</h1>
                                        <div className="space-y-3 pt-6">
                                            <div className="flex items-center justify-center">
                                                <img
                                                    className="w-3/4 object-fill"
                                                    src={linguagem === 'C' ? linguagemC : linguagemPython}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Filtros:</h1>
                                        {//Radio Button
                                        }
                                        <div className="space-y-4 mt-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                            <div className="flex items-center">
                                                <input
                                                    id="semana"
                                                    name="notification-method"
                                                    type="radio"
                                                    defaultChecked={true}
                                                    className="h-6 w-6 border-gray-300 ring-indigo-600  focus:ring-indigo-500"
                                                />
                                                <label htmlFor="semana" className="ml-3 block text-base font-medium text-gray-700">
                                                    Semana
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="conteudo"
                                                    name="notification-method"
                                                    type="radio"
                                                    defaultChecked={false}
                                                    className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <label htmlFor="conteudo" className="ml-3 block text-base font-medium text-gray-700">
                                                    Conteúdo
                                                </label>
                                            </div>
                                        </div>
                                        {//Buttons
                                        }
                                        <div className="space-y-4 mt-6 flex-col items-center  sm:flex-col sm:items-center ">
                                            <button
                                                type="button"
                                                className={corPrincipal + " inline-flex w-full items-center text-center justify-center px-6 py-3 border border-transparent text-xl font-medium rounded-xl shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
                                            >
                                                Todos
                                            </button>
                                            <button
                                                type="button"
                                                className={corSecundaria + " inline-flex w-full items-center text-center justify-center px-6 py-3 border " + corBorder + " text-xl font-medium rounded-xl shadow-sm " + corTexto + " hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " + corHover}
                                            >
                                                Semântica
                                            </button>
                                            <button
                                                type="button"
                                                className={corSecundaria + " inline-flex w-full items-center text-center justify-center px-6 py-3 border " + corBorder + " text-xl font-medium rounded-xl shadow-sm " + corTexto + " hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " + corHover}
                                            >
                                                Sintaxe
                                            </button>
                                            <button
                                                type="button"
                                                className={corSecundaria + " inline-flex w-full items-center text-center justify-center px-6 py-3 border " + corBorder + " text-xl font-medium rounded-xl shadow-sm " + corTexto + "  hover:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " + corHover}
                                            >
                                                Estilo
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </aside>

                        <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
                            <h2 id="product-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                                {modules.map((module) => (
                                    <div
                                        key={module.id}
                                        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                                    >
                                        <div className="aspect-w-3 aspect-h-4 text-center flex items-center justify-center  bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                                            <h1 className='text-black text-4xl font-bold '>Semana {module.id}</h1>
                                        </div>
                                        <div className="flex flex-1 flex-col space-y-2 p-4">
                                            <Link
                                                type="button"
                                                className={corPrincipal + " inline-flex w-full items-center text-center justify-center px-6 py-3 border border-transparent text-xl font-medium rounded-xl shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
                                                to={'/conteudo'}
                                            >
                                                <Squares2X2Icon className='h-6 w-6 mr-1' />
                                                Verificar conteúdo
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    )
}
