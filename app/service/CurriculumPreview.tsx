import React from 'react';
import SheetLayout from "@/app/components/SheetLayout";
import ListContactDetail from "@/app/service/ListContactDetail";
import ListExperience from "@/app/service/ListExperience";
import ListFormation from "@/app/service/ListFormation";
import ListHobby from "@/app/service/ListHobby";
import ListLanguage from "@/app/service/ListLanguage";
import ListSkill from "@/app/service/ListSkill";
import Motivation from "@/app/service/Motivation";
import { Button } from "@/components/ui/button";
import { getAllCurriculums } from "@/lib/actionsCurriculums";
import { getUser } from "@/lib/actionsUsers";

export default async function CurriculumPreview({ curriculumId }: { curriculumId: string }) {
  const user = await getUser();
  const data = await getAllCurriculums(user?.id as string);

  return (
    <section className="grid items-start">
      

      <div id="pdf" className="border-2 bg-blue-500 border-white p-4 rounded-lg flex flex-col md:flex-row">
        <div className="md:w-1/5 lg:w-auto">
          <ListContactDetail curriculumId={data[0]?.id} />
          <ListHobby curriculumId={data[0]?.id} />
          <ListSkill curriculumId={data[0]?.id} />
          <ListLanguage curriculumId={data[0]?.id} />
        </div>
        <div className="border border-white mx-4"></div>
        <div className="md:w-4/5 lg:w-full">
          <Motivation curriculumId={data[0]?.id} />
          <ListFormation curriculumId={data[0]?.id} />
          <ListExperience curriculumId={data[0]?.id} />
        </div>
      </div>


    </section>
  );
}
