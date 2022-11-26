import { Button } from "./components/Button";
import { Header } from "./components/Header";
import BackgroundImage from "./assets/background-image.svg";
import info from "./service/info.json";

function App() {
  return (
    <div className="App">
      <section className="pt-20 min-h-screen bg-primary flex items-center justify-center text-center">
        <img
          src={BackgroundImage}
          className="animation min-w-[400px] min-h-[400px] absolute "
        />
        <div className="min-w-[400px] min-h-[400px] flex items-center flex-col justify-center realtive z-10">
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
        </div>
      </section>
      <section
        id="about"
        className="p-20 min-h-screen bg-third flex items-start justify-center"
      >
        <div className="max-w-screen-md min-w-screen-md">
          {info.about.map((about) => (
            <>
              <h2 className="text-secondary text-3xl mb-8 font-bold">
                {about.title}
              </h2>
              <span className="text-xl leading-9 whitespace-pre-wrap">
                {about.content}
              </span>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
