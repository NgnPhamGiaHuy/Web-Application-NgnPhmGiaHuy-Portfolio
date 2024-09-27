import { ReviewCard } from "@/app/components";
import Frame from "@/app/assets/frame/frame-01.png";
import Avatar from "@/app/assets/avatar/avatar.png";

const Review = () => {
    const style = { backgroundImage: `url(${Frame.src})`, backgroundColor: "lightgray", backgroundPosition: "50%", backgroundSize: "cover", backgroundRepeat: "no-repeat", fallback: "var(--black, #171717)" }

    return (
        <section>
            <div
                className="h-[863px] px-[71px] py-[116px] gap-[96px] flex flex-col flex-shrink-0 items-center self-stretch rounded-[50px] overflow-hidden relative"
                style={style}>
                <div className="w-[1299px] gap-[14px] flex flex-col items-center relative">
                    <div className="flex flex-col items-center justify-center">
                        <span
                            className="text-[48px] text-white text-center font-medium leading-normal tracking-[-0.72px]">
                            Testimonials That <br/> Speak to <span className="text-primary">My Results</span>
                        </span>
                    </div>
                    <div className="w-[742px] h-[61px] flex flex-col justify-center">
                        <p className="text-[20px] text-[#F9FAFB] text-center font-normal leading-normal tracking-[-0.3px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a
                            dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci
                            elementum egestas lobortis.
                        </p>
                    </div>
                    <div className="w-[28px] h-[28px] top-[-12px] right-[440px] absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none"
                             strokeWidth="4px" stroke="white">
                            <path
                                d="M2 20.0811C2 17.0811 5 11.0811 2 2.08105M9.5 23.5811C13.8333 19.4144 22.7 9.28105 23.5 2.08105M12.5 30.5811C15.1667 30.5811 22.3 29.1811 29.5 23.5811"
                                stroke="#FFFDFC" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="w-[26px] h-[26px] bottom-[66px] right-[240px] absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="white">
                            <path
                                d="M11.9808 2.12271L10.4215 4.20376L7.04297 3.42336C5.22377 2.96814 3.01473 2.64297 2.10512 2.64297C-0.298833 2.64297 0.090997 5.17924 2.81981 7.84558L5.09382 10.0567L2.42998 12.788C0.740714 14.4789 -0.16889 15.9746 0.0260252 16.69C0.220941 17.7956 0.805686 17.9256 5.80851 17.7305L11.2661 17.5354L12.5006 19.6165C17.1136 27.4854 21.2068 27.5504 19.1277 19.6815L18.2181 16.2998L19.9074 15.9096C24.9102 14.8041 25.5599 14.5439 25.5599 13.6335C25.5599 13.1132 23.6757 11.7475 21.4017 10.642C16.5938 8.23577 16.139 7.71551 16.139 4.46389C16.139 -0.413553 14.6447 -1.25898 11.9808 2.12271ZM7.69269 7.19525C7.69269 7.52041 7.56275 7.84558 7.4328 7.84558C7.23789 7.84558 6.91303 7.52041 6.71812 7.19525C6.5232 6.80506 6.65314 6.54493 6.978 6.54493C7.36783 6.54493 7.69269 6.80506 7.69269 7.19525ZM12.7605 9.27629C13.2153 9.73152 13.5401 11.0972 13.5401 12.3328V14.674L11.4611 12.593C9.70682 10.8371 9.57687 10.3818 10.2916 9.53642C11.2661 8.3008 11.7209 8.23577 12.7605 9.27629ZM8.21247 14.2188C8.34241 14.674 7.75766 14.9992 6.71812 14.9992C5.15879 14.9992 5.02885 14.8691 5.74354 14.0237C6.65314 12.9181 7.75766 12.9831 8.21247 14.2188Z"
                                fill="#FCFCFD"/>
                        </svg>
                    </div>
                </div>
                <div className="w-[26px] h-[26px] top-[313px] left-[352px] absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="white">
                        <path
                            d="M19.225 6.60665L16.7558 7.42234L14.4303 4.8503C13.1981 3.43663 11.5717 1.90676 10.8255 1.38666C8.85326 0.0121054 7.72287 2.31576 8.43701 6.06353L9.03832 9.17778L5.29114 9.89544C2.93846 10.3167 1.33697 11.0237 1.08784 11.722C0.615611 12.7405 1.02097 13.1816 5.23684 15.8821L9.82584 18.8426L9.64868 21.2557C8.93382 30.3491 12.2547 32.7429 15.0484 25.0984L16.2358 21.804L17.8447 22.4497C22.5812 24.4033 23.263 24.5614 23.7836 23.8145C24.081 23.3876 23.3161 21.1899 22.0827 18.9826C19.5141 14.2595 19.4385 13.5726 21.2977 10.905C24.0866 6.9035 23.344 5.35546 19.225 6.60665ZM12.8066 8.31626C12.6206 8.58302 12.3281 8.77549 12.2215 8.70119C12.0616 8.58974 11.981 8.13722 12.007 7.75901C12.0702 7.32744 12.3256 7.18833 12.5921 7.37408C12.9119 7.59698 13.0297 7.99614 12.8066 8.31626ZM15.7743 12.9213C15.8871 13.5548 15.3727 14.8609 14.6662 15.8746L13.3276 17.7953L12.8118 14.8992C12.3766 12.4557 12.5303 12.0079 13.6 11.723C15.1061 11.2665 15.5164 11.4732 15.7743 12.9213ZM9.21703 14.3756C9.06335 14.8233 8.39769 14.7557 7.54485 14.1613C6.26558 13.2697 6.23334 13.0887 7.30308 12.8038C8.68146 12.4169 9.55043 13.1018 9.21703 14.3756Z"
                            fill="#FCFCFD"/>
                    </svg>
                </div>
                <div className="gap-6 flex items-start justify-center">
                    <ReviewCard imageUrl={Avatar.src}/>
                    <ReviewCard imageUrl={Avatar.src}/>
                    <ReviewCard imageUrl={Avatar.src}/>
                </div>
            </div>
        </section>
    );
};

export default Review;