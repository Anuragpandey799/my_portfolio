import React from 'react'
import { Link } from 'react-router-dom'

function GreatIndianScientist({dark}) {
  return (
    <div className={`pt-20 bg-gradient-to-br ${dark?'from-blue-950 via-orange-900 text-gray-200 to-black':'from-orange-200 via-blue-100 to-gray-200 '}`}>
    <div className="min-h-screen border-3 border-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl">The great Indian Scientists</h1>
          <p>There are many great Scientists of India who gave their contribution to our country and transformed our lives.</p>
          <hr />
        </div>
    

      <main className="max-w-4xl mx-auto p-5">
        {/* Scientist 1: C.V. Raman */}
        <section className="bg-yellow-300 border border-maroon rounded-lg flex justify-between items-center p-5 mb-5">
          <div className="text-right">
            <h2 className="uppercase text-2xl">1. C.V. Raman</h2>
            <p>(1888 - 1970)</p>
          </div>
          <div className="bg-cover bg-center w-32 h-32 rounded-lg" style={{ backgroundImage: "url(https://www.optica-opn.org/opn/media/images/articles/0309/Features/FeatureImages/feature5-fig1.jpg)" }}></div>
        </section>
        <section className="pt-5">
          <h3 className="text-lg font-bold">Biographical (sir Chandrasekhar Venkata Raman)</h3>
          <hr />
          <p>
            <b>C.V. Raman</b> was born at <i>Tiruchairappalli</i> in Southern India on November 7<sup>th</sup> 1888. His father was a lecturer in mathematics and physics. In 1904 he passed his B.A., winning first place and gold medal in physics; in 1907 he gained his M.A. degree with highest distinctions.
          </p>
          <p>
            Raman joined the <i>Indian Finance Department in 1907</i>, though the duties of his office took most of his time, Raman found opportunities for carrying on experimental research in the laboratory of the Indian Association for the Cultivation of Science at Calcutta (of which he became Honorary Secretary in 1919).
          </p>
          <p>
            After 15 years at Calcutta he became Professor at the <i>Indian Institute of Science</i> at Bangalore (1933 - 1948), and since 1948 he is Director of the <i>Raman Institute of Research</i> at Bangalore, established and endowed by himself.
          </p>
          <p>
            He contributed an article on the <i>theory of musical instruments</i> to the 8th Volume of the <i>Handbuch der Physik</i>, 1928. In 1922 he published his work on the <i>“Molecular Diffraction of Light”</i>, the first of a series of investigations with his collaborators which ultimately led to his discovery, on the 28th of February, 1928, of the radiation effect which bears his name (“A new radiation”, Indian J. Phys., 2 (1928) 387), and which gained him the 1930 <i>Nobel Prize in Physics</i>.
          </p>
          <p>
            He was the President of the 16th session of the <i>Indian Science Congress in 1929</i>. He was the <i>founder President of the Indian Academy of Sciences</i> from 1933 until his death. He was a member of the Pontifical Academy of Sciences in 1961.
          </p>
          <div className="pt-5">
            <h3 className="font-bold">Awards and honours:</h3>
            <hr />
            <ul className="list-disc pl-5">
              <li>In 1912, Raman received <i>the Curzon Research Award</i>, while still working in the Indian Finance Service.</li>
              <li>In 1913, he received <i>the Woodburn Research Medal</i>, while still working in the Indian Finance Service.</li>
              <li>In 1928, he received <i>the Matteucci Medal</i> from the Accademia Nazionale delle Scienze in Rome.</li>
              <li>In 1930, he received <i>the Hughes Medal of the Royal Society</i>.</li>
              <li>In 1941, he was awarded <i>the Franklin Medal by the Franklin Institute in Philadelphia</i>.</li>
              <li>In 1954, he was awarded <i>the Bharat Ratna</i> (along with politician and former Governor-General of India C. Rajagopalachari and philosopher Sir Sarvepalli Radhakrishnan).</li>
              <li>In 1957, he was awarded <i>the Lenin Peace Prize</i></li>
            </ul>
          </div>
          <p>
            <i>
              <b>Sir Chandrasekhara Venkata Raman – died on November 21, 1970.</b>
            </i>
          </p>
          <div className="text-right">
            <Link to="https://en.wikipedia.org/wiki/C._V._Raman" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more about C.V. Raman on Wikipedia..</Link>
          </div>
        </section>

        {/* Scientist 2: Homi Jehangir Bhabha */}
        <section className="bg-yellow-300 border border-maroon rounded-lg flex justify-between items-center p-5 mb-5">
          <div className="text-right">
            <h2 className="uppercase text-2xl">2. Homi Jehangir Bhabha</h2>
            <p>(1909 - 1966)</p>
          </div>
          <div className="bg-cover bg-center w-32 h-32 rounded-lg" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Homi_Jehangir_Bhabha_1960s.jpg/220px-Homi_Jehangir_Bhabha_1960s.jpg)" }}></div>
        </section>
        <section className="pt-5">
          <h3 className="text-lg font-bold">Indian physicist (sir Homi Jehangir Bhabha)</h3>
          <hr />
          <p>
            <b>Homi Bhabha</b> was born in <i>Mumbai, India</i> on October 30<sup>th</sup>, 1888. He was a <i>Indian physicist</i>, the principal architect of the nuclear energy program.
          </p>
          <p>
            Bhabha went to <i>the University of Cambridge, England, in 1927</i> to study <i>mechanical engineering</i>, but there he developed a strong interest in physics and started his research in 1930 at the Cavendish Laboratories in Cambridge and in 1935 obtained a doctorate. When World War II broke out in 1939, Bhabha was in India on a holiday. With Europe in turmoil, he decided to stay, and at the behest of physicist Sir Chandrasekhara Venkata Raman, director of the Indian Institute of Science, Bangalore (Bengaluru), he joined the institute as a reader in physics in 1940.
          </p>
          <p>
            In 1954, Bhabha founded a <i>nuclear research center at Trombay</i> which was later renamed the <i>Bhabha Atomic Research Centre (BARC)</i>. A strong proponent of nuclear energy, Bhabha organized the first UN Conference on the Peaceful Uses of Atomic Energy in 1955. He was the <i>head of India's nuclear program until his death</i>.
          </p>
          <p>
            Bhabha's contribution to the development of atomic energy made him a significant figure in international scientific circles. He served as president of the United Nations Conference on the Peaceful Uses of Atomic Energy in 1955 and as president of the International Union of Pure and Applied Physics from 1960 to 1963.
          </p>
          <div className="pt-5">
            <h3 className="font-bold">Awards and honours</h3>
            <hr />
            <ul className="list-disc pl-5">
              <li>In 1942, Bhabha received <i>the Adams Prize</i>, he was the first Indian to receive the honour.</li>
              <li>He gained international prominence after deriving a correct expression for the probability of scattering positrons by electrons, a process now known as <i>Bhabha scattering</i>.</li>
              <li>He was nominated for the <i>Nobel Prize for Physics in 1951 and 1953-1956</i></li>
              <li>He was awarded <i>Padma Bhushan in 1954</i>.</li>
              <li>He was elected a Foreign Honorary Fellow of the American Academy of Arts and Sciences in 1958, and appointed the President of the International Union of Pure and Applied Physics from 1960 to 1963.</li>
              <li>Bhabha received several honorary doctoral degrees in science throughout his career:</li>
              <ul className="list-disc pl-5">
                <li>Patana - 1944</li>
                <li>Lucknow - 1949</li>
                <li>Banaras - 1950</li>
                <li>Agra - 1952</li>
                <li>Perth - 1954</li>
                <li>Allahabad - 1958</li>
                <li>Cambridge - 1959</li>
                <li>London - 1960</li>
                <li>Pandova - 1961</li>
              </ul>
            </ul>
          </div>
          <p>
            <i>
              <b>Homi Jehangir Bhabha died on 24 January 1966 in a crash of Air India Flight, due to misunderstanding between Geneva Airport and pilot about the aircraft position near the mountain.</b>
            </i>
          </p>
          <div className="text-right">
            <Link to="https://en.wikipedia.org/wiki/Homi_J._Bhabha" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more about Homi J. Bhabha on Wikipedia..</Link>
          </div>
        </section>

        {/* Scientist 3: Mokshagundam Visvesvaraya */}
        <section className="bg-yellow-300 border border-maroon rounded-lg flex justify-between items-center p-5 mb-5">
          <div className="text-right">
            <h2 className="uppercase text-2xl">3. Mokshagundam Visvesvaraya</h2>
            <p>(1888 - 1970)</p>
          </div>
          <div className="bg-cover bg-center w-32 h-32 rounded-lg" style={{ backgroundImage: "url(https://rishihood.edu.in/wp-content/uploads/2020/09/09-15_BlogBanner-scaled-1.jpg)" }}></div>
        </section>
        <section className="pt-5">
          <h3 className="text-lg font-bold">An Excellent Statesman and Eminent Engineer (sir Mokshagundam Visvesvaraya)</h3>
          <hr />
          <p>
            <b>Mokshagundam Visvesvaraya</b> was born on 15th September 1861 to a Telugu Brahmin Family in Muddenahalli village in Chikkaballapur District. His parents were Mokshagundam Srinivasa Shastry and Venkatalakshmamma. Mokshagundam Srinivasa Shastry was a renowned Sanskrit scholar. At the age of 12, Visvesvaraya lost his father.
          </p>
          <p>
            Sir MV enrolled for his early education in Chikballapur, where he completed his primary education. Then for his high school education, Sir MV came to Bangalore. In 1881, after receiving a bachelor's degree in Arts from the <i>Central College in Bangalore</i>, affiliated to the Madras University, he pursued <i>civil engineering from the reputed College of Engineering, Pune</i>.
          </p>
          <h3 className="font-bold">Famous Contribution of M. Visvesvarya</h3>
          <hr />
          <p>
            <i>The Krishnarajasagara dam</i> is the biggest landmark in Mysuru. Dating back to the 1930s, this 130 feet high dam isn't just a popular tourist attraction, it is also the source of irrigation and drinking water for large parts of Karnataka. This dam was built and designed by Sir Mokshagundam Visvesvaraya, he was the engineer of this dam.
          </p>
          <h3 className="font-bold">Building the dam</h3>
          <hr />
          <p>
            Construction for the dam began in 1911 and with it, Visvesvaraya took on the role of Dewan. As the dam grew taller, its effects began to be felt. By 1915-16, farmers with lands irrigated by the project's canals had started growing sugarcane crops.
            <br />
            By the early 1920s, the dam had reached a height of 80 feet and work on the second stage commenced. By then the courts had ruled that Madras could not keep the Krishnarajasagara dam height from being raised.
          </p>
          <div className="pt-5">
            <h3 className="font-bold">Awards and honours:</h3>
            <hr />
            <ul className="list-disc pl-5">
              <li>Visvesvaraya was appointed a <i>Companion of the Order of the Indian Empire (CIE) in 1911 by King Edward.</i></li>
              <li>In 1915, Visvesvaraya was knighted as a <i>Knight Commander of the Order of the Indian Empire (KCIE) by King George</i> for his contributions to the public good.</li>
              <li>In 1955, Visvesvaraya received the <i>Bharat Ratna, India's highest civilian honour.</i></li>
              <li>He received an <i>honorary membership</i> from the <i>Institution of Civil Engineers, London.</i></li>
              <li>He received several honorary degrees including <i>D.Sc., LL.D., D.Litt. from eight universities in India</i>.</li>
              <li>He was the president of the 1923 session of the Indian Science Congress.</li>
            </ul>
          </div>
          <p>
            <i>
              <b>Sir Visvesvaraya died on 12/14 April 1962, aged 100.</b>
              <br />
              Visvesvaraya was known for his sincerity, time management and dedication to his cause. A very important part of Visvesvaraya's nature was his love for the Kannada language.
            </i>
          </p>
          <div className="text-right">
            <Link to="https://en.wikipedia.org/wiki/M._Visvesvaraya" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more about M. Visvesvaraya on Wikipedia..</Link>
          </div>
        </section>

        {/* Scientist 4: Srinivasa Iyengar Ramanujan */}
        <section className="bg-yellow-300 border border-maroon rounded-lg flex justify-between items-center p-5 mb-5">
          <div className="text-right">
            <h2 className="uppercase text-2xl">4. Srinivasa Iyengar Ramanujan</h2>
            <p>(1887 - 1920)</p>
          </div>
          <div className="bg-cover bg-center w-32 h-32 rounded-lg" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/7/70/Srinivasa_Ramanujan_-_OPC_-_2_%28cleaned%29.jpg)" }}></div>
        </section>
        <section className="pt-5">
          <h3 className="text-lg font-bold">Mathematician (sir Srinivasa Iyengar Ramanujan)</h3>
          <hr />
          <p>
            <i>Srinivasa Ramanujan</i> was born in his grandmother's house in Erode, a small village about 400 km southwest of Madras (now Chennai). When Ramanujan was a year old his mother took him to the town of Kumbakonam, about 160 km nearer Madras. His father worked in Kumbakonam as a clerk in a cloth merchant's shop. In December 1889 he contracted <i>smallpox</i>.
          </p>
          <p>
            When he was nearly five years old, Ramanujan entered the primary school in Kumbakonam although he would attend several different primary schools before entering the Town High School in Kumbakonam in January 1898. In 1900 he began to work on his own on mathematics summing <i>geometric and arithmetic series</i>.
          </p>
          <p>
            By 1904 Ramanujan had begun to undertake deep research. He investigated the <i>series &Sigma;(1/n) and calculated Euler's constant to 15 decimal places</i>. He began to study the <i>Bernoulli numbers</i>, although this was entirely his own independent discovery.
          </p>
          <p>
            In 1911 Ramanujan approached the <i>founder of the Indian Mathematical Society</i> for advice on a job. After this, he was appointed to his first job, a temporary post in the Accountant General's Office in Madras. It was then suggested that he approach Ramachandra Rao who was a Collector at Nellore. <i>Ramachandra Rao</i> was a <i>founder member of the Indian Mathematical Society</i> who had helped start the mathematics library.
          </p>
          <h3 className="font-bold">Adulthood in India</h3>
          <hr />
          <p>
            On 14 July 1909, Ramanujan married <i>Janaki (Janakiammal; 21 March 1899 - 13 April 1994)</i>, a girl his mother had selected for him a year earlier and who was ten years old when they married. Janaki was from Rajendram, a village close to Marudur (Karur district) Railway Station. Ramanujan's father did not participate in the marriage ceremony. As was common at that time, Janaki continued to stay at her maternal home for three years after marriage, until she reached puberty. In 1912, she and Ramanujan's mother joined Ramanujan in Madras.
          </p>
          <div className="pt-5">
            <h3 className="font-bold">Awards and achievements:</h3>
            <ul className="list-disc pl-5">
              <li>In 1918, he was elected as one of the <i>youngest Fellows in the history of Royal Society</i> for his investigation in <i>Elliptic functions and the Theory of Numbers</i>.</li>
              <li>In the same year, he was the <i>first Indian</i> who was honoured by being elected as a <i>Fellow of Trinity College</i>.</li>
            </ul>
          </div>
          <p>
            <i>
              <b>Ramanujan died on April 26, 1920, at the age of 32 years after suffering from tuberculosis. The self-taught genius lived a short but vibrant life and he is widely regarded as India's greatest mathematician. Srinivasa Iyengar Ramanujan is an inspiration for mathematicians across the globe.</b>
            </i>
          </p>
          <div className="text-right">
            <Link to="https://en.wikipedia.org/wiki/Srinivasa_Ramanujan" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more about Srinivasa Ramanujan on Wikipedia..</Link>
          </div>
        </section>

        {/* Scientist 5: A.P.J. Abdul Kalam */}
        <section className="bg-yellow-300 border border-maroon rounded-lg flex justify-between items-center p-5 mb-5">
          <div className="text-right">
            <h2 className="uppercase text-2xl">5. A.P.J. Abdul Kalam</h2>
            <p>(1931 - 2015)</p>
          </div>
          <div className="bg-cover bg-center w-32 h-32 rounded-lg" style={{ backgroundImage: "url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmFBBNHLKYJIfylBPnn8V5bIlsgWXZFl1bz5nE49X3WmzN4Pw-)" }}></div>
        </section>
        <section className="pt-5">
          <h3 className="text-lg font-bold">Indian Aerospace Scientist and Statesman (sir A.P.J. Abdul Kalam)</h3>
          <hr />
          <p>
            <i>A.P.J. Abdul Kalam</i>, in full <i>Avul Pakir Jainulabdeen Abdul Kalam</i>, born in <i>October 15, 1931 in Rameswaram, India</i>. He was an <i>Indian scientist and politician</i> who played a leading role in the development of <i>India's missile and nuclear weapons programs</i>. He was <i>president of India from 2002 to 2007</i>.
          </p>
          <p>
            Kalam earned a degree in <i>aeronautical engineering</i> from the <i>Madras Institute of Technology</i> and in 1958 joined the <i>Defence Research and Development Organisation (DRDO)</i>. In 1969 he moved to the <i>Indian Space Research Organisation</i>, where he was project director of the SLV-III, the <i>first satellite launch vehicle</i> that was both designed and produced in India. Rejoining DRDO in 1982, Kalam planned the program that produced a number of successful missiles, which helped earn him the nickname <i>“Missile Man”.</i> Among those successes was <i>Agni, India's first intermediate-range ballistic missile</i>, which incorporated aspects of the SLV-III and was launched in 1989.
          </p>
          <p>
            From 1992 to 1997 Kalam was <i>scientific adviser</i> to the <i>defense minister</i>, and he later served as <i>principal scientific adviser (1999-2001) to the government</i> with the rank of cabinet minister. His prominent role in the country's 1998 nuclear weapons tests solidified India as a <i>nuclear power</i> and established Kalam as a <i>national hero</i>.
          </p>
          <p>
            In 2002 India's ruling <i>National Democratic Alliance (NDA)</i> put forward Kalam to succeed <i>outgoing President Kocheril Raman Narayanan</i>. <i>Kalam was nominated by the Hindu nationalist (Hindutva) NDA even though he was Muslim</i>, and his stature and popular appeal were such that even the main opposition party, the Indian National Congress, also proposed his candidacy. Kalam easily won the election and was sworn in as <i>India's 11th president</i>, a largely ceremonial post, in July 2002. He left office at the end of his term in 2007 and was succeeded by Pratibha Patil, the country's first woman president. He won the 2002 presidential election with an electoral vote of 922,884, surpassing the 107,366 votes won by Lakshmi Sahgal. His term lasted from 25 July 2002, to 25 July 2007.
          </p>
          <p>
            After leaving office, Kalam became a <i>visiting professor</i> at the <i>Indian Institute of Management Shillong</i>, the <i>Indian Institute of Management Ahmedabad</i>, and the <i>Indian Institute of Management Indore</i>; an honorary fellow of Indian Institute of Science, Bangalore; chancellor of the Indian <i>Institute of Space Science and Technology Thiruvananthapuram</i>; <i>professor of Aerospace Engineering at Anna University</i>; and an adjunct at many other academic and research institutions across India.
          </p>
          <div className="pt-5">
            <h3 className="font-bold">Awards and honours:</h3>
            <ul className="list-disc pl-5">
              <li>Kalam received <i>7 honorary doctorates from 40 universities</i></li>
              <li><i>The Government of India honoured</i> him with the <i>Padma Bhushan in 1981 and the Padma Vibhushan in 1990</i> for his work with ISRO and DRDO and his role as a scientific advisor to the Government</li>
              <li>In 1997, Kalam received <i>India's highest civilian honour</i>, <i>the Bharat Ratna</i>, for his contribution to the scientific research and modernisation of defence technology in India</li>
              <li>In 2013, he was the recipient of the Von Braun Award from the National Space Society "to recognize excellence in the management and leadership of a space-related project".</li>
            </ul>
            <b>Following his death, Kalam received numerous tributes:</b>
            <ul className="list-disc pl-5">
              <li>The Tamil Nadu state government announced that his birthday, 15 October, would be observed across the state as <i>"Youth Renaissance Day"</i>.</li>
              <li>On the anniversary of Kalam's birth in 2015 the CBSE set topics on his name in the CBSE expression series.</li>
              <li>Researchers at NASA's Jet Propulsion Laboratory (JPL) had discovered a new bacterium on the filters of the International Space Station (ISS) and named it <i>Solibacillus kalamii to honour the late president Dr. A. P. J. Abdul Kalam</i>.</li>
            </ul>
            <b>Institutions and locations were renamed or named in honour of Kalam following his death:</b>
            <ul className="list-disc pl-5">
              <li><i>Kerala Technological University</i>, headquartered at Thiruvananthapuram where Kalam lived for years, was renamed to <i>A P J Abdul Kalam Technological University</i> after his death.</li>
              <li><i>An agricultural college at Kishanganj</i>, Bihar, was renamed the <i>"Dr. Kalam Agricultural College"</i></li>
              <li>India's First Medical Tech Institute named as <i>Kalam Institute of Health Technology located at Visakhapatnam</i></li>
              <li><i>Uttar Pradesh Technical University (UPTU)</i> was renamed <i>A. P. J. Abdul Kalam Technical University</i> by the Uttar Pradesh state government.</li>
              <li>Construction of <i>Dr. A. P. J. Abdul Kalam Science City started in Patna in February 2019.</i></li>
              <li>Wheeler Island, a national missile test site in Odisha, was renamed <i>Abdul Kalam Island</i> in September 2015.</li>
              <li>A prominent road in New Delhi was renamed from <i>Aurangzeb Road to Dr APJ Abdul Kalam Road</i> in August 2015.</li>
            </ul>
          </div>
          <p>
            <i>
              <b>On 27 July 2015, Kalam travelled to Shillong to deliver a lecture on "Creating a Livable Planet Earth" at the Indian Institute of Management Shillong. He was rushed to the nearby Bethany Hospital in a critical condition; upon arrival, he lacked a pulse or any other signs of life. Despite being placed in the intensive care unit, Kalam was confirmed dead of a sudden cardiac arrest at 7:45 p.m.(IST). His last words, to his aide Srijan Pal Singh, were reportedly: "Funny guy! Are you doing well?"</b>
            </i>
          </p>
          <div className="text-right">
            <Link to="https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam" target="_blank" rel="noopener noreferrer" className="text-blue-500">See more about A. P. J. Abdul Kalam on Wikipedia..</Link>
          </div>
        </section>
      </main>
    </div>
    </div>  )
}

export default GreatIndianScientist