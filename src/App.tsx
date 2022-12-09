import { Button } from "./components/Button";
import { Header } from "./components/Header";
import BackgroundImage from "./assets/background-image.svg";
import info from "./service/info.json";

import cssIcon from "./assets/css-icon.svg";

import BrenoTech from "./assets/breno-tech.svg";
import { Social } from "./components/Social";

function App() {
  return (
    <div className="App">
      <section className="bg-background-main-home bg-cover bg-no-repeat">
        <div className="container p-20 min-h-screen items-center flex flex-col items-center md:justify-between md:flex-row   w-full">
          <div>
            <div className="text-center min-w-[300px] min-h-[400px] flex flex-col justify-center realtive z-10 md:text-start">
              <span className="text-base uppercase font-bold pb-2">
                Olá, eu sou
              </span>
              <h1 className="text-6xl uppercase pb-2 font-black">Breno</h1>
              <h2 className="text-xl uppercase pb-2 text-secondary">
                Desenvolvedor Frontend
              </h2>

              <p className="text-base text-gray-500">
                Um desenvolvedor frontend apaixonado <br />
                por tecnologia e por desenvolver páginas
              </p>
              <div className="pt-4">
                <Button title="CONHECER" link="#about" />
              </div>
              <div className="pt-4">
                <Social />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-full" src={BrenoTech} />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="p-20 min-h-screen bg-background-secoudary-home bg-cover flex items-start justify-center"
      >
        <div className="max-w-screen-md min-w-screen-md">
          {info.about.map((about) => (
            <>
              <h2 className="text-secondary text-3xl mb-8 font-bold">
                {about.title}
              </h2>
              <span className="text-lg leading-9 whitespace-pre-wrap">
                {about.content}
              </span>
            </>
          ))}
        </div>
      </section>
      <section className="pt-20 min-h-screen bg-third flex items-center justify-center text-center">
        <img
          src={BackgroundImage}
          className="animation min-w-[400px] min-h-[400px] absolute z-0 "
        />
        <div className="realtive z-10">
          <div className="grid grid-cols-3 gap-10 md:grid-cols-4 md:gap-14">
            {info.technology.map((tec) => (
              <div className="w-24 h-24 bg-secondary cursor-pointer border-[1px] border-border-color-primary rounded drop-shadow-block-shadow">
                <img
                  className="p-2"
                  title={tec.title}
                  src={`src/assets/${tec.image}.svg`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="hidden md:block  bg-background-thirdy-home bg-cover h-[260px]"></section>
      <section className="hidden md:block  bg-third">
        <div className="container flex justify-center items-center text-sm text-white p-10 border-t-2 mt-10 border-t-gray-900">
          Feito com ❤️ por Breno Lapreza
        </div>
      </section>
    </div>
  );
}

export default App;
