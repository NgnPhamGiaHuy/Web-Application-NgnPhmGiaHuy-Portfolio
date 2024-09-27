import { BlogCard, TextButton } from "@/app/components";
import Project01 from "@/app/assets/project/project-02.png";

const Blog = () => {
    return (
        <div>
            <div className="px-[71px] py-[97px] gap-[48px] flex flex-col items-center self-stretch">
                <div className="w-[1298px] flex items-center justify-between">
                    <div>
                        <span className="text-[48px] text-[#344054] font-bold leading-normal block tracking-[-0.72px]">
                            From my <br/> blog post
                        </span>
                    </div>
                    <TextButton label={"See All"}/>
                </div>
                <div className="w-[1299px] flex items-start justify-between">
                    <BlogCard imageUrl={Project01}/>
                    <BlogCard imageUrl={Project01}/>
                    <BlogCard imageUrl={Project01}/>
                </div>
            </div>
        </div>
    );
};

export default Blog;