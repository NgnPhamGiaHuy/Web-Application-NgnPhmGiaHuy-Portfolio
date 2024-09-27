import { calculateHeight } from "@/app/utils";
import { USER_WORK_EXPERIENCE } from "@/app/constants";
import { CircleVector, WorkCard } from "@/app/components";

const WorkExperience = () => {
    const numberOfElements = USER_WORK_EXPERIENCE?.length || 0;
    const height = calculateHeight(numberOfElements);

    return (
        <section>
            <div className="w-full min-h-[827px] px-[71px] flex flex-col flex-shrink-0 items-center self-stretch">
                <div className="py-[85px] gap-[10px] flex items-center justify-center self-stretch">
                    <div>
                        <span className="text-[64px] font-medium leading-[100%] tracking-[-0.96px]">
                            My <span className="text-primary">Work Experience</span>
                        </span>
                    </div>
                </div>
                <div className="w-[1298px] mb-[155px] flex items-start justify-between">
                    <div className="gap-10 flex flex-col items-start self-stretch">
                        { USER_WORK_EXPERIENCE?.map((value, index) => (
                            <WorkCard key={index} title={value.companyName} subtitle={value.timeline}/>
                        )) }
                    </div>
                    <div className="gap-[10px] flex items-start relative" style={{height: height}}>
                        <div className="w-[3px] left-[24px] bg-[#344054] absolute z-[-1]"
                             style={{height: height}}></div>
                        <div className="flex flex-col items-start justify-between self-stretch">
                            { USER_WORK_EXPERIENCE?.map((value, index) => {
                                if (index % 2 !== 0) {
                                    return <CircleVector key={index} />
                                }

                                return <CircleVector key={index} isColor={true} />
                            }) }
                        </div>
                    </div>
                    <div className="gap-10 flex flex-col items-start">
                        { USER_WORK_EXPERIENCE?.map((value, index) => (
                            <WorkCard key={index} title={value.role} subtitle={value.description}/>
                        )) }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;