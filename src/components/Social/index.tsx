import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "phosphor-react";

export function Social() {
  return (
    <div className=" mt-4 flex justify-center md:justify-start ">
      <a
        className="mr-2"
        href="https://github.com/brenolapreza"
        rel="noreferrer"
        target="_blank"
      >
        <GithubLogo size={32} color="#e7c549" />
      </a>
      <a
        className="mr-2"
        href="https://www.linkedin.com/in/brenolapreza/"
        rel="noreferrer"
        target="_blank"
      >
        <LinkedinLogo size={32} color="#e7c549" />
      </a>
      <a
        className="mr-2"
        href="mailto:brenolapreza@gmail.com"
        rel="noreferrer"
        target="_blank"
      >
        <EnvelopeSimple size={32} color="#e7c549" />
      </a>
    </div>
  );
}
