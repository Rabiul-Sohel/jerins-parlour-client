import Container from "../../../Shared/Container";
import qualityImg from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
import Animation from "../Animation";


const Quality = () => {
    return (
        <div className="bg-[#FFF8F5]">
            <Container>
                <Animation>
                    <div className="flex gap-20 py-16">
                        <div>
                            <img className="max-w-[580px]" src={qualityImg} alt="" />
                        </div>
                        <div className=" flex flex-col justify-stretch py-2 space-y-8 ">
                            <h3 className="text-3xl text-black font-semibold">Let us handle your <br /> screen <span className="text-[#F63E7B]">Professionally</span>.</h3>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                            <div className="flex items-end h-full">
                                <div className="flex gap-10">
                                    <div>
                                        <h5 className="text-[#F63E7B] text-2xl font-bold">500+</h5>
                                        <p className="text-sm">Happy Customer</p>
                                    </div>
                                    <div>
                                        <h5 className="text-[#F63E7B] text-2xl font-bold">16+</h5>
                                        <p className="text-sm">Total Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animation>
            </Container>
        </div>
    );
};

export default Quality;