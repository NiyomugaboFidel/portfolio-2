import { ScrollReveal2 } from "../components/ScrollReal";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="block sm:flex lg:flex justify-between items-center pt-[70px]"
      >
        <div className=" w-[100%] h-full px-10 flex flex-col md:flex-row justify-between items-center gap-[40px] ">
          <div className="content w-full md:w-[50%] flex ">
            <div className="block">
             <ScrollReveal2 >
             <h2 className=" w-full h-full lg:w-1/2 flex items-center justify-center text-[40px] leading-[45px] md:text-[64px] md:leading-[80px] font-bold ">
                I'm Software Enginer
                </ h2>
             </ScrollReveal2>
            </div>
          </div>

          <div className="image ">
            <div className="w-full h-full">
            <ScrollReveal2 direction="right">
            <img
                className="w-full h-full md:h-100 md:w-96 rounded-full object-cover object-center"
                src="/img/light.jpg"
                alt="nature image"
              />
            </ScrollReveal2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
