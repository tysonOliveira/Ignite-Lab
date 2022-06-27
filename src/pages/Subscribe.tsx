import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { LogoRocketseat } from "../components/LogoRocketseat";
import { useCreateSubcriberMutation } from "../graphql/generated";


export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, {loading}] = useCreateSubcriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event/lesson/abertura-do-evento-ignite-lab');
  }
  //bg-blur
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto lg:flex-col">
        <div className="pr-1 max-w-[640px] lg:max-w-[900px] lg:flex lg:flex-col lg:px-8 lg:items-center lg:text-center lg:gap-5">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong> do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado. 
          </p>
        </div>

        <div className="lg:mt-10 p-8 bg-gray-700 border border-gray-500 rounded lg:w-full">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="email" 
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      
      
      <div className="bg-code  bg-no-repeat bg-contain bg-center  w-[98%] h-[590px] md:h-[300px]"></div>
      
      
      <div className=" bg-black w-full h-20 flex items-center justify-between px-5 text-gray-300 md:flex-col md:h-32 md:justify-around md:text-center">
        
        <div className="flex items-center gap-6 md:flex-col md:gap-4">

        <LogoRocketseat />
        <span className="">Rocketseat - Todos os direitos reservados </span> 
        </div>
        <p>
          Políticas de privacidade
        </p> 
      </div>
      
      {/*<img src="/src/assets/code-mockup.png" className="mt-10" alt="" />*/}
    </div>
  )
}