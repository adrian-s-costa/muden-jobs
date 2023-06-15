import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const navigation = [

]


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1684444347/muden_teste-identidade_copiar-3_page-0001_gaorrq.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/sign-in" className="text-sm font-semibold leading-6 text-[#003fcb]">
              Iniciar teste grátis<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1684444347/muden_teste-identidade_copiar-3_page-0001_gaorrq.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Iniciar teste grátis
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#003fcb] to-white opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="lg:flex lg:flex-row gap-7 py-32 sm:py-48 lg:py-56 md:flex-col justify-between">
          <div className="text-center lg:flex lg:flex-col lg:w-1/2 justify-center items-center">
            <h1 className="text-4xl font-bold tracking-tight lg:max-w-700px] text-gray-900 sm:text-6xl">
              Onde o profissional encontra a oportunidade
            </h1>
            <p className="mt-6 text-lg lg:max-w-[500px] leading-8 text-gray-600">
              Encontre um mundo de possibilidades onde profissionais autônomos se conectam com pessoas em busca de serviços excepcionais.  
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/sign-in"
                className="rounded-md bg-[#003fcb] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg- focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cadastre-se como talento
              </a>
              <a href="#read-more" className="text-sm font-semibold leading-6 text-gray-900">
                Contratar talento <span aria-hidden="true">→</span>
              </a>
            </div>  
          </div>

          <div className='relative lg:w-1/2 flex justify-center'>
            
            {/* <svg viewBox="0 0 200 200" className='hidden lg:block w-[200px] absolute left-[160px] top-[-50px] z-[0]' xmlns="http://www.w3.org/2000/svg">
              <path fill="#003FCB" d="M40.5,-27.5C56.2,-12.5,75.3,4.5,73.8,19.1C72.3,33.7,50.1,45.9,30.5,50.4C10.9,54.8,-6.2,51.6,-26.6,45.5C-47,39.4,-70.8,30.5,-74.9,16.1C-79,1.6,-63.5,-18.3,-47.7,-33.3C-32,-48.2,-16,-58.2,-1.8,-56.7C12.4,-55.3,24.7,-42.4,40.5,-27.5Z" transform="translate(100 100)" />
            </svg>

            <svg viewBox="0 0 200 200" className='hidden lg:block w-[300px] absolute left-[140px] bottom-[-150px] z-[2]' xmlns="http://www.w3.org/2000/svg">
              <path fill="#003FCB" d="M57.6,-23.2C62.9,-2.4,47.3,20.7,25.1,37.6C2.8,54.5,-26.2,65.3,-46.9,53C-67.6,40.7,-80,5.3,-70.8,-20.8C-61.6,-47,-30.8,-64,-2.3,-63.2C26.1,-62.4,52.3,-44,57.6,-23.2Z" transform="translate(100 100)" />
            </svg>

            <svg viewBox="0 0 200 200" className='hidden lg:block w-[200px] absolute right-[140px] top-[-30px] z-[2]' xmlns="http://www.w3.org/2000/svg">
              <path fill="#003FCB" d="M42.7,-60.5C48.9,-54.4,43,-33.2,38.6,-19C34.3,-4.9,31.5,2.2,29,9.3C26.5,16.3,24.2,23.2,19.4,37.2C14.6,51.3,7.3,72.5,-1,73.8C-9.2,75.1,-18.5,56.6,-27.1,43.8C-35.7,31,-43.7,23.9,-49.5,14.1C-55.4,4.4,-59.1,-8,-58.9,-22.4C-58.7,-36.8,-54.6,-53.1,-44.1,-57.8C-33.6,-62.5,-16.8,-55.6,0.7,-56.6C18.3,-57.6,36.6,-66.6,42.7,-60.5Z" transform="translate(100 100)" />
            </svg> */}

            <div className='rounded-xl bg-slate-200 w-[250px] h-[100px] absolute z-[2] bottom-0 right-[90px] flex flex-col pl-[20px] justify-center'>
              <p className="text-md lg:max-w-[500px] text-[#003fcb] ">
                Alex Marques
              </p>
              <p className="text-md lg:max-w-[500px] ">
                Entregador
              </p>
              <p className="text-md lg:max-w-[500px] text-gray-600">
                Belo Horizonte, MG
              </p>
            </div>

            <img
              className=""
              src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1686863328/pexels-yan-krukau-6818161_cupqz0_2_jwlmyl.png"
              alt=""
            />
          </div>
      
        </div>
      <div className="relative isolate overflow-hidden bg-white lg:overflow-visible lg:px-0" id='read-more'>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            
          <img
            className=""
            src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1686866453/pexels-yan-krukau-6818161_cupqz0_3_y8scwg.png"
            alt=""
          />

          <div className="lg:pr-4 flex items-center">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Teste grátis. </strong>
                    Oferecemos 30 dias para você testar e se apaixonar pela plataforma. Ah, e pode ficar tranquilo, não precisa do cartão de crédito!
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Alcance mais clientes e impulsione seu faturamento. </strong>
                    Conectamos você a pessoas em busca de serviços excepcionais. Não deixe escapar a oportunidade de enviar suas propostas e aumentar seus ganhos!
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Seu trabalho, suas escolhas. </strong>
                    Escolha os serviços mais próximos de você. Envie propostas personalizadas e deixe sua marca no mercado com seus serviços!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#003fcb] to-white opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />      
        </div>
      </div>
    </div>
   
        
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12" src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1686869510/logo-horizontal-branco_vypvoh.png" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                Graças a Muden, encontrei profissionais altamente qualificados para ajudar no crescimento do meu negócio. Estou impressionado com a qualidade e profissionalismo da plataforma.
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Roberta Frades</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Empreendedora</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

    </>
  )
}