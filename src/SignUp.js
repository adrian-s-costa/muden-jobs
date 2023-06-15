import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex w-1/1 lg:h-100%">
      <div className="flex w-1/3 flex-1 tall:h-100% taller:h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://res.cloudinary.com/dmo7nzytn/image/upload/v1684444347/muden_teste-identidade_copiar-3_page-0001_gaorrq.png"
            alt="Muden"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm lg:h-100%">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                Nome
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="pl-2	block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  padding
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-2	block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  padding
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-2	block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  padding
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Repita a senha
              </label>
            
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="pl-2	block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full mt-10 transition duration-300 justify-center rounded-md bg-[#003fcb] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#5794ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Criar conta
              </button>
            </div>

            <div className="text-gray-500 flex w-full justify-center my-[-10px]">
              ou
            </div>

            <div>
              <button
                className="justify-center flex w-full rounded-md px-3 py-1.5 text-sm font-semibold leading-6 border gap-2  border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                <span>Crie a conta com o Google</span>
              </button>
            </div>
            
            <div>
              <button type="button" class="justify-center flex w-full rounded-md px-3 py-1.5 text-sm font-semibold leading-6 border gap-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 text-center items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                Crie conta com Facebook
              </button>
            </div>

          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Já tem conta?{' '}
            <Link to={"/sign-in"}>
              <a href="#" className="font-semibold leading-6 transition duration-300 text-[#003fcb] hover:text-[#5794ff]">
                Faça Login
              </a>  
            </Link>
          </p>
        </div>
      </div>
      <img className="hidden lg:h-100% lg:w-2/3 lg:block" src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1685119021/montain_dnobor.png"} />
    </div>
  );
}
