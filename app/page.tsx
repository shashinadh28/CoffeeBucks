import "remixicon/fonts/remixicon.css";

import Section3 from "./components/section3";
import Section5 from "./components/section5";
import Section4 from "./components/section4";
import Section2 from "./components/section2";
import Section1 from "./components/section1";
import Section6 from "./components/section6";
import Footer from "./components/footer";



export default function Home() {
  return (
    <div>
      

      {/* section1 */}
      <Section1 />
      {/* section 2 */}
      <Section2 />
      {/* section 3    */}
      <Section3 />
      {/* section 4 */}
      <Section4 />
       {/* section 5 */}
      <Section5 />
       {/* section 6  */}
       <Section6 />

       <Footer />
    </div>
  );
}
