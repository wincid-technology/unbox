import HeadingTwo from "@/components/typography/HeadingTwo";
import Image from "next/image";
import Link from "next/link";



const About = () => {
    return (
        <section className="py-24 relative bg-[#e7e7e7]">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h2 className="text-transparent bg-gradient-to-r from-[#0F063F] to-[#f58720] bg-clip-text kanit-semibold-italic text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Who We Are</h2>
                            <p className="text-[#0f063f] text-base kanit-light font-normal leading-relaxed lg:text-start text-center">Empowering businesses with top-tier packaging solutions, we are your
                                go-to partner for all things corrugated. We've been at
                                the forefront of delivering innovative, durable, and eco friendly
                                boxes that safeguard products while enhancing brand value. With over
                                a decade of expertise, we've built a legacy of quality and
                                reliability, serving diverse industries with precision and care.
                                Trust us to protect what matters most. At Coropack, we specialize in creating high-quality, eco-friendly packaging designed to fit your unique products. Our solutions ensure maximum protection while minimizing environmental impact. Trust us to elevate your brand with packaging that delivers both style and sustainability. </p>

                            <Link href={"/about"} className="cta flex items-center kanit-medium">
                                <span>Read More</span>
                                <svg width="15px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </Link>
                        </div>

                    </div>
                    <img className="lg:mx-0 mx-auto hover:shadow-[0_0px_15px_rgba(0,0,0,0.9)] hover:rounded-none hover:rounded-tr-[30px] sm:hover:rounded-tr-[50px] lg:hover:rounded-tr-[100px] hover:rounded-bl-[30px] sm:hover:rounded-bl-[50px] lg:hover:rounded-bl-[100px] duration-150 cursor-pointer h-full rounded-tl-[30px] sm:rounded-tl-[50px] lg:rounded-tl-[100px] rounded-br-[30px] sm:rounded-br-[50px] lg:rounded-br-[100px] object-cover" src="/img/recycleCard.jpg" alt="about Us image" />
                </div>
            </div>
        </section>

    );
};
export default About;