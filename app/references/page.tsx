import Image from "next/image";
import React from "react";

const References = () => {
  return (
    <div className="flex max-w-5xl flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold md:text-5xl">Références</h1>
        <p className="text-lg text-gray-600 dark:text-gray-500">
          Découvrez mes références externes pour la construction de mon
          portefeuille de compétences.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold md:text-3xl">
          Référentiel européen des e-compétences
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-500">
          Le référentiel européen des e-compétences est un cadre de référence
          pour décrire les compétences requises pour les TIC. Il est structuré
          en 40 compétences regroupées en 5 domaines de compétences. Il est
          utilisé pour la certification des compétences des professionnels des
          TIC.
        </p>
        <div className="flex flex-col gap-2">
          <Image
            src="/assets/images/repository.png"
            alt="Référentiel européen des e-compétences"
            width={800}
            height={400}
            className="h-auto w-full max-w-md"
          />
          <h4>
            Source :{" "}
            <a
              href="https://assets.ide-conseil-webmarketing.fr/wp-content/uploads/2019/05/European-e-Competence-Framework-3.0_FR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400"
            >
              European e-Competence Framework 3.0
            </a>
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold md:text-3xl">
          Définition d&apos;une compétence
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-500">
          Une compétence est la capacité à mobiliser des ressources cognitives
          (connaissances, raisonnement, habilités) pour accomplir une tâche ou
          résoudre un problème dans un domaine d&apos;activité donné. Elle se
          compose de trois dimensions : savoir, savoir-faire et savoir-être.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold md:text-3xl">
          Définition d&apos;un portefeuille de compétences
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-500">
          Un portefeuille de compétences est un outil de gestion de carrière qui
          permet de recenser, de valoriser et de développer ses compétences. Il
          est composé de trois parties : un CV, un portfolio et un Passeport de
          Compétences Européen.
        </p>
      </div>
    </div>
  );
};

export default References;
