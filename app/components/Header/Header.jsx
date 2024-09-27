import { Logo, NavigationCard } from "@/app/components";
import { NAVIGATION_ITEMS } from "@/app/constants/NavigationConstants";

const Header = () => {
    return (
        <div className="w-full mt-10 flex items-center justify-center">
            <div className="w-[1298px] h-[86px]">
                <div className="w-full h-full bg-accent rounded-[50px]">
                    <div className="h-full p-[10px] flex items-center justify-center gap-[14px]">
                        { NAVIGATION_ITEMS.map((item, index) =>
                            item.type === "logo" ? (
                                <Logo key={index} />
                            ) : (
                                <NavigationCard key={index} title={item.title} link={item.link} active={item.active} />
                            )
                        ) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;