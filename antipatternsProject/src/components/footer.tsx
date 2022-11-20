import { SVGProps } from "react"

const navigation = {
    primeira: [
        { name: 'Quem somos?', href: '#' },
        { name: 'Contato', href: '#' },
        { name: 'Pesquisa desenvolvida', href: '#' },
    ],
    segunda: [
        { name: 'Relatar erros', href: '#' },
    ]

}

export default function Footer() {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <img
                            className="h-10"
                            src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300"
                            alt="Company name"
                        />
                        <p className="text-base text-gray-500">
                            É um projeto para divulgar os recursos educacionais desenvolvidos através de uma pesquisa realizada na UFMS com o objetivo de desenvolver a habilidade da percepção de padrões de
                            equívocos com aprendizes de programação.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div className="mt-12 md:mt-0">
                                <h2 className="text-lg font-medium text-gray-900">Saiba mais</h2>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.primeira.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                            <div className="mt-12 md:mt-0">
                                <ul role="list" className="mt-12 space-y-4">
                                    {navigation.segunda.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; 2022 Ygor Takashi Nishi, Gabriel Silverson Gomes & Yorah Bosse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
