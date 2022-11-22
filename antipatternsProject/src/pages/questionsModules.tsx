/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Tab, Transition } from '@headlessui/react'
import { Squares2X2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'
import Header from '../components/header'
import linguagemC from '../assets/C.png'
import Footer from '../components/footer'

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Dresses', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Denim', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Significant Other', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White' },
            { value: 'beige', label: 'Beige' },
            { value: 'blue', label: 'Blue' },
            { value: 'brown', label: 'Brown' },
            { value: 'green', label: 'Green' },
            { value: 'purple', label: 'Purple' },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'All New Arrivals' },
            { value: 'tees', label: 'Tees' },
            { value: 'crewnecks', label: 'Crewnecks' },
            { value: 'sweatshirts', label: 'Sweatshirts' },
            { value: 'pants-shorts', label: 'Pants & Shorts' },
        ],
    },
    {
        id: 'sizes',
        name: 'Sizes',
        options: [
            { value: 'xs', label: 'XS' },
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' },
            { value: '2xl', label: '2XL' },
        ],
    },
]
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
    // More products...
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Modules() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

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
                                    <Tab.Group as="div" className="mt-2">
                                        <div className="border-b border-gray-200">
                                            <Tab.List className="-mb-px flex space-x-8 px-4">
                                                {navigation.categories.map((category) => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({ selected }) =>
                                                            classNames(
                                                                selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                                'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                ))}
                                            </Tab.List>
                                        </div>
                                        <Tab.Panels as={Fragment}>
                                            {navigation.categories.map((category) => (
                                                <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                                                    <div className="grid grid-cols-2 gap-x-4">
                                                        {category.featured.map((item) => (
                                                            <div key={item.name} className="group relative text-sm">
                                                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                    <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                                                </div>
                                                                <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                    {item.name}
                                                                </a>
                                                                <p aria-hidden="true" className="mt-1">
                                                                    Shop now
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {category.sections.map((section) => (
                                                        <div key={section.name}>
                                                            <p
                                                                id={`${category.id}-${section.id}-heading-mobile`}
                                                                className="font-medium text-gray-900"
                                                            >
                                                                {section.name}
                                                            </p>
                                                            <ul
                                                                role="list"
                                                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                className="mt-6 flex flex-col space-y-6"
                                                            >
                                                                {section.items.map((item) => (
                                                                    <li key={item.name} className="flow-root">
                                                                        <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </Tab.Panel>
                                            ))}
                                        </Tab.Panels>
                                    </Tab.Group>

                                    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                        {navigation.pages.map((page) => (
                                            <div key={page.name} className="flow-root">
                                                <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                    {page.name}
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                        <div className="flow-root">
                                            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                                Sign in
                                            </a>
                                        </div>
                                        <div className="flow-root">
                                            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                                Create account
                                            </a>
                                        </div>
                                    </div>

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
                                    <form className="mt-4">
                                        {filters.map((section) => (
                                            <Disclosure as="div" key={section.name} className="border-t border-gray-200 pt-4 pb-4">
                                                {({ open }) => (
                                                    <fieldset>
                                                        <legend className="w-full px-2">
                                                            <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                                                <span className="text-sm font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex h-7 items-center">
                                                                    <ChevronDownIcon
                                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform')}
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </Disclosure.Button>
                                                        </legend>
                                                        <Disclosure.Panel className="px-4 pt-4 pb-2">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value} className="flex items-center">
                                                                        <input
                                                                            id={`${section.id}-${optionIdx}-mobile`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="checkbox"
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`${section.id}-${optionIdx}-mobile`}
                                                                            className="ml-3 text-sm text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </fieldset>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>



                <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                    <div className="pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                        <aside>
                            <h2 className="sr-only">Filters</h2>

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
                                        <h1 className="text-4xl font-bold tracking-tight text-center text-gray-900">Exercícios na linguagem C</h1>
                                        <div className="space-y-3 pt-6">
                                            <div className="flex items-center justify-center">
                                                <img
                                                    className="w-3/4 object-fill"
                                                    src={linguagemC}
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
                                                className="inline-flex w-full items-center text-center justify-center px-6 py-3 border border-transparent text-xl font-medium rounded-xl shadow-sm text-white bg-[#016FB9] hover:bg-[#016FB9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Todos
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-full items-center text-center justify-center px-6 py-3 border border-[#016FB9] text-xl font-medium rounded-xl shadow-sm text-[#016FB9] bg-[#B5FFE9] hover:bg-[#016FB9] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Semântica
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-full items-center text-center justify-center px-6 py-3 border border-[#016FB9] text-xl font-medium rounded-xl shadow-sm text-[#016FB9] bg-[#B5FFE9] hover:bg-[#016FB9] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Sintaxe
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex w-full items-center text-center justify-center px-6 py-3 border border-[#016FB9] text-xl font-medium rounded-xl shadow-sm text-[#016FB9] bg-[#B5FFE9] hover:bg-[#016FB9] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                                            <button
                                                type="button"
                                                className="inline-flex w-full items-center text-center justify-center px-6 py-3 border border-transparent text-xl font-medium rounded-xl shadow-sm text-white bg-[#016FB9] hover:bg-[#016FB9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                <Squares2X2Icon className='h-6 w-6 mr-1' />
                                                Verificar conteúdo
                                            </button>
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
