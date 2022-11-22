import { Disclosure } from '@headlessui/react'
import { ArrowDownTrayIcon, ChevronDownIcon, ChevronLeftIcon, EyeDropperIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'




const faqs = [
    {
        id: "1-ABC01",
        question: "Falta de “ ; ” no final da linha",
        title: "Porque o código não está executando?",
        description:
            `O código abaixo apresenta uma simples interação com o usuário, 
            onde o usuário digita um número e o programa mostra uma mensagem com 
            o número digitado, analisando por completo, qual seria o erro, que está 
            impedindo a execução?`,
        options: [
            {
                option: "A",
                awnser: "A inclusão das bibliotecas está sendo feita de maneira errada.",
            },
            {
                option: "B",
                awnser: "Está faltando um ponto e vírgula, no primeiro “printf”.",
            },
            {
                option: "C",
                awnser: "O “scanf” está esperando um outro tipo de dado.",
            },
            {
                option: "D",
                awnser: "Não é necessário ponto e vírgula no “scanf”.",
            },
        ]
    },
    {
        id: "3-ABC01",
        question: "Falta do “&” na frente da variável no “scanf”",
        title: "Por que meu código não está parando?",
        description:
            `Um aluno de programação estava implementando um código para fazer a leitura de UM número e mostrá-lo na tela, porém algo inesperado aconteceu, seu código parava de funcionar todas as vezes que ele realizava a leitura do número, de acordo a imagem do código abaixo responda qual alternativa está mostrando o problema verdadeiro:`,
        options: [
            {
                option: "A",
                awnser: "O aluno esqueceu de colocar o “&” na frente da variável no “scanf”.",
            },
            {
                option: "B",
                awnser: "Falta do uso de um laço de repetição “for” para realizar a leitura do número.",
            },
            {
                option: "C",
                awnser: "Falta do “ ; “ no final da chamada da biblioteca.",
            },
            {
                option: "D",
                awnser: "O termo correto dentro do “printf” para mostrar o número deveria ser “ %f ”.",
            },
        ]
    },
    {
        id: "5-BCF02",
        question: "Uso indevido do “&” na frente da variável no “printf”",
        title: "Dividindo números",
        description:
            `Um certo aluno criou um código para realizar a divisão de dois números, porém, além dele querer saber de forma rápida qual é o resultado certo, ele implementou uma funcionalidade para saber se o valor do divisor é maior ou menor que o valor do dividendo, mas algo deu errado, e os valores finais estão incorretos.  Analisando o código abaixo aponte o erro cometido: `,
        options: [
            {
                option: "A",
                awnser: "Como podemos observar o usuário está utilizando o ' & ' na frente das variáveis, na função ' printf '."
            },
            {
                option: "B",
                awnser: "O erro está presente dentro da condição do ' if ', onde a expressão relacional está sendo feita de forma incorreta."
            },
            {
                option: "C",
                awnser: "A criação das variáveis está sendo feita de forma incorreta, pois todas são do mesmo tipo, logo a única forma correta seria: ' float x, y, divisao; '."
            },
            {
                option: "D",
                awnser: "No trecho do código onde está sendo realizada a divisão, a estrutura está errada, onde precisamos colocar na frente de cada variável o ' & ',  desta forma: ' &divisao = &x / &y; ',  logo os dados estão incorretos por este motivo."
            },
        ]
    },
    {
        id: "6-DFG01",
        question: "Escrita incorreta do comando “printf”",
        title: "Trabalhando com estrutura de seleção ",
        description:
            `Um certo aluno estava implementando um conteúdo novo, as estruturas de seleção, no seu código ele está utilizando o “if” e o “else”, porém algo deu errado na execução, analise o código abaixo e indique qual o erro está presente no código: `,
        options: [
            {
                option: "A",
                awnser: "O erro está na escrita da função “printf”, o aluno escreveu de forma errada."
            },
            {
                option: "B",
                awnser: "Está entrando em “loop” quando chega no “if” a condição feita está aplicada de forma errada."
            },
            {
                option: "C",
                awnser: "A condição da estrutura de seleção “if” está errada, o correto seria “ = “, ficando desta forma “ soma = 180”."
            },
            {
                option: "D",
                awnser: "As declarações das variáveis estão sendo feitas de forma incorreta, é necessário declarar cada variável em uma linha juntamente com o seu tipo e o “ ; “ no final."
            },
        ]
    },

    {
        id: "33-ABC03",
        question: "Falta de indentação",
        title: "Por que está dando erro?",
        description:
            `Um aluno estava implementando um código onde ele iria ler um número e mostrá-lo na tela, porém esse código possui um erro, com ajuda do código abaixo identifique o erro e selecione a alternativa correta:`,
        options: [
            {
                option: "A",
                awnser: "A identação do código está incorreta."
            },
            {
                option: "B",
                awnser: "Está apresentando o valor incorreto, pois a declaração da variável foi feita de forma incorreta."
            },
            {
                option: "C",
                awnser: "Falta do “ ; “ no final da chamada da biblioteca.",
            },
            {
                option: "D",
                awnser: "O uso do “&” com a variável na função ‘scanf’, não é necessário.",
            },
        ]
    }
]

export default function Contents() {
    return (
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

                                Conteúdo abordados na Semana 1
                            </h2>
                        </div>

                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            {faqs.map((faq, pos) => (
                                <Disclosure as="div" key={faq.question} className="py-3 px-5 text-center bg-[#D9D9D9]  rounded-lg">
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
                                                    <span className="font-medium text-gray-900"> {pos + 1} - {faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        <a
                                                            href={"./docs/" + faq.id + ".pdf"}
                                                            download={faq.id + ".pdf"}
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
                                                <h3 className="text-lg font-medium text-gray-900"> {faq.title}</h3>
                                                <p className="text-base text-black">{faq.description}</p>
                                                <img src={"./" + faq.id + ".png"} className="self-center pt-8" />
                                                <div className="flex flex-col items-center">
                                                    <h3 className="text-lg font-medium text-gray-900">Alternativas</h3>
                                                    <div className="flex flex-col items-start">
                                                        {faq.options.map((option, pos) => (
                                                            <div className="flex flex-row items-start">
                                                                <p className="text-base text-start text-black">{option.option} - {option.awnser}</p>
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
                        <button
                            type="button"
                            className="inline-flex mt-16 w-full items-center self-end text-center justify-center px-6 py-3 border  text-xl font-medium rounded-xl shadow-sm text-white bg-[#016FB9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <ArrowDownTrayIcon
                                className='h-6 w-6 mr-4 transform text-white'
                                aria-hidden="true"
                            />
                            Download de todo o conteúdo
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}
