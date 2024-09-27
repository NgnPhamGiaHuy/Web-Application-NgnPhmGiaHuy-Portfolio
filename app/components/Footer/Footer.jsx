import { FacebookIcon, FooterConnect, FooterContact, FooterEmail, FooterNavigation, FooterPrivacy, InstagramIcon, Logo, TwitterIcon, WhatsappIcon, YoutubeIcon } from "@/app/components";

const Line = () => {
    return (
        <div className="w-full h-[1px] bg-[#475467]"></div>
    )
}

const Footer = () => {
    return (
        <footer>
            <div className="h-[685px] px-[71px] py-[25px] flex flex-col flex-shrink-0 items-start justify-between self-stretch rounded-t-[24px] bg-[#272727]">
                <FooterConnect/>
                <Line />
                <div className="flex items-start justify-between self-stretch">
                    <div className="h-[239px] flex flex-col items-start justify-between">
                        <Logo justifyContent={"start"} paddingRight={0} paddingLeft={0}/>
                        <div className="w-[635px] flex flex-col justify-center flex-shrink-0">
                            <p className="text-[20px] text-[#FCFCFD] font-normal leading-normal line-clamp-3 tracking-[-0.3px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a
                                dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci
                                elementum egestas lobortis.
                            </p>
                        </div>
                        <div className="gap-1 flex items-start">
                            { [<FacebookIcon/>, <YoutubeIcon/>, <WhatsappIcon/>, <InstagramIcon/>, <TwitterIcon/>].map((value, index) => (
                                <div className="w-6 h-6 flex items-center justify-center" key={index}>
                                    {value}
                                </div>
                            )) }
                        </div>
                    </div>
                    <FooterNavigation />
                    <FooterContact />
                    <FooterEmail />
                </div>
                <Line />
                <FooterPrivacy />
            </div>
        </footer>
    );
};

export default Footer;