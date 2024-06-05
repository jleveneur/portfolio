import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold md:text-5xl">Compétences</h1>
        <p className="text-lg text-gray-600 dark:text-gray-500">
          Découvrez mes compétences en savoir, savoir-faire et savoir-être.
        </p>
      </div>
      <Tabs defaultValue="knowledge">
        <TabsList className="mb-2">
          <TabsTrigger value="knowledge">Savoir</TabsTrigger>
          <TabsTrigger value="skill">Savoir-faire</TabsTrigger>
          <TabsTrigger value="quality">Savoir-être</TabsTrigger>
        </TabsList>
        <TabsContent value="knowledge">
          <DataTable
            columns={columns}
            data={skills.filter((skill) => skill.source === "savoir")}
          />
        </TabsContent>
        <TabsContent value="skill">
          <DataTable
            columns={columns}
            data={skills.filter((skill) => skill.source === "savoir-faire")}
          />
        </TabsContent>
        <TabsContent value="quality">
          <DataTable
            columns={columns}
            data={skills.filter((skill) => skill.source === "savoir-être")}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Skills;
