import { Disclosure } from '@headlessui/react'
import { ArrowDownTrayIcon, ChevronDownIcon, ChevronLeftIcon, EyeDropperIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'

import api from '../services/api'
import { useEffect, useState } from 'react'
import { Questoes } from '../models/Questoes'
import { Conteudo } from '../models/Conteudo'





export default function Contents() {
    const [questoes, setQuestoes] = useState<Questoes[]>([])
    
    
    function goToTop() {
        window.scrollTo(0, 0);
    }

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    console.log(params)
    const linguagem = params.get("linguagem");
    const semana = params.get("semana");
    const conteudo = params.get("conteudo");
    const descricaoConteudo = params.get("descricao");

    useEffect(() => {
        console.log(linguagem, semana, conteudo);
        if(semana != null){
            api.get("/questoes/semana/"+semana+"/"+linguagem)
            .then((response) => setQuestoes(response.data))
            .catch((error) => console.log(error))
        }else{
            api.get("/questoes/conteudo/"+conteudo+"/"+linguagem)
            .then((response) => setQuestoes(response.data))
            .catch((error) => console.log(error))
            
        } 
    }, []);

    


    return (
        goToTop(),
        <>
            <Header />

            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                        <div className='flex items-center'>
                            <Link
                                to="/modulos"
                                className="text-[#016FB9] hover:text-[#016FB9] hover:underline"
                            >
                                <ChevronLeftIcon className="h-8 w-8 inline" />
                            </Link>
                            <h2 className="text-center text-3xl w-full font-bold tracking-tight text-gray-900 sm:text-4xl">

                                Conteúdos abordados  {semana != null ? "na semana " + semana : "com " + descricaoConteudo}
                            </h2>
                        </div>

                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            {questoes.map((faq, pos) => (
                                <Disclosure as="div" key={faq.idQuestao} className="py-3 px-5 text-center bg-[#D9D9D9]  rounded-lg">
                                    {({ open }) => (

                                        <>
                                            <dt className="text-lg">
                                                <Disclosure.Button className="flex w-full items-start  justify-between text-left text-gray-400">
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ?
                                                            <EyeIcon
                                                                className='h-6 w-6 transform text-[#016FB9]'
                                                                aria-hidden="true"
                                                            />
                                                            :
                                                            <EyeSlashIcon
                                                                className='h-6 w-6 transform'
                                                                aria-hidden="true"
                                                            />
                                                        }

                                                    </span>
                                                    <span className="font-medium text-gray-900"> {pos + 1} - {faq.antipadrao}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <a
                                                            href={"./docs/" + faq.idQuestao + ".pdf"}
                                                            download={faq.idQuestao + ".pdf"}
                                                            onClick={() => open = open}
                                                        >
                                                            <ArrowDownTrayIcon
                                                                className='h-6 w-6 transform text-[#016FB9]'
                                                                aria-hidden="true"
                                                            />
                                                        </a>

                                                    </span>
                                                </Disclosure.Button>
                                            </dt>
                                            <Disclosure.Panel as="dd" className="mt-4 bg-white py-4 flex flex-col items-center">
                                                <h3 className="text-lg font-medium text-gray-900"> {faq.titulo}</h3>
                                                <p className="text-base text-black">{faq.descricao}</p>
                                                <img src={"./" + faq.idQuestao + ".png"} className="self-center pt-8" />
                                                <div className="flex flex-col items-center">
                                                    <h3 className="text-lg font-medium text-gray-900">Alternativas</h3>
                                                    <div className="flex flex-col items-start">
                                                        {faq.alternativas.split(";").map((option, pos) => (
                                                            <div key={pos} className="flex flex-row items-start">
                                                                <p className="text-base text-start text-black">{option}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </dl>
                        <a
                            type="button"
                            className="inline-flex mt-16 w-full items-center self-end text-center justify-center px-6 py-3 border  text-xl font-medium rounded-xl shadow-sm text-white bg-[#016FB9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            href={"./docs/SEMANA 1.pdf"}
                            download={"SEMANA 1.pdf"}
                        >
                            <ArrowDownTrayIcon
                                className='h-6 w-6 mr-4 transform text-white'
                                aria-hidden="true"
                            />
                            Download de todo o conteúdo
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}
