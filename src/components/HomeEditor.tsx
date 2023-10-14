import MobileMockup from "./MobileMockup";
import PersonalInfo from "./PersonalInfo";
import SocialLinksForm from "./SocialLinkForm";
import Background from "./Background/BackgroundForm";
import AdditionalLinkForm from "./AdditionalLinkForm";
import Publish from "./ActionButtons/PublishBtn";
import DemoBtn from "./ActionButtons/DemoBtn";
import Link from "next/link";
import { ShoppingCart ,Twitter} from "lucide-react";
import { buttonVariants } from "./ui/button";
const HomeEditor = () => {
  return (
    <>

    <div className="h-screen min-h-screen  w-full overflow-y-auto gap-4 flex flex-col bg-gray-100 py-8 px-16">
    <PersonalInfo/>
    <SocialLinksForm/>
    <AdditionalLinkForm/>
    <Background/>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 justify-center items-center w-full mb-20'>
    <Publish />
    <DemoBtn/>
    <Link
              target='_blank'
              href="https://github.com/sujjeee/linknode"
              className={buttonVariants()}>
              <ShoppingCart className='mr-2 h-4 w-4' />
              Get Project
            </Link>
            <Link
              target='_blank'
              href="https://twitter.com/Taquiimam14"
              className={buttonVariants()}>
              <Twitter className='mr-2 h-4 w-4' />
              Twitter
            </Link>
    </div>
      </div>
      <div className="h-auto w-[30%] hidden bg-gray-100 lg:block">
        {/* MOBILE MOCKUP  */}
        <MobileMockup />
      </div>
    </>
  );
};
export default HomeEditor;









