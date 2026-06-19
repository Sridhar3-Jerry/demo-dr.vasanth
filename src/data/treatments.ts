import Braces1 from '../assets/Braces-1.jpg';
import Braces2 from '../assets/Braces-2.jpeg';
import Orthodontics1 from '../assets/Orthodontics-1.png';
import Orthodontics2 from '../assets/Orthodontics-2.png';
import Invisalign1 from '../assets/invisalign-1.jpeg';
import Invisalign2 from '../assets/invisalign.jpg';
import Invisalign3 from '../assets/invisalign-3.jpg';
import Restorativedentistry from '../assets/Restorativedentistry.png';
import Prosthodontics1 from '../assets/Prosthodontics-1.png';
import Prosthodontics2 from '../assets/Prosthodontics-2.png';
import LaserDentistry1 from '../assets/Laser Dentistry-1.png';
import LaserDentistry2 from '../assets/Laser Dentistry-2.png';
import LaserDentistry3 from '../assets/Laser Dentistry-3.png';
import Endodontics1 from '../assets/Endodontics-1.png';
import Endodontics2 from '../assets/Endodontics-2.png';
import DentalImplants1 from '../assets/Dental Implants-1.png';
import DentalImplants2 from '../assets/Dental Implants-2.png';

import Periodontics1 from '../assets/Periodontics-1.png';
import Periodontics2 from '../assets/Periodontics-2.png';
import PediatricDentistry1 from '../assets/Pediatric Dentistry-1.png';
import PediatricDentistry2 from '../assets/Pediatric Dentistry-2.png';
import PediatricDentistry3 from '../assets/Pediatric Dentistry-3.png';
import Tmj1 from '../assets/tmj-01.png';
import Tmj2 from '../assets/tmj-02.png';
import WisdomTooth1 from '../assets/wisdomtooth-01.png';
import WisdomTooth2 from '../assets/wisdomtooth-02.png';

export interface Treatment {
  id: string;
  title: string;
  images: string[];
  introduction: string;
  description?: string;
  candidates?: string;
  benefits?: string[];
  procedure?: string[];
}

export const treatmentData: Treatment[] = [
  {
    id: 'braces',
    title: 'Braces',
    images: [
      Braces1,
      Braces2,
      Orthodontics1,
      Orthodontics2
    ],
    introduction: 'Complete Braces Solutions in Paramathi Velur. A beautiful smile is never out of reach! We make straightening your teeth simple, comfortable and effective with advanced braces treatment designed for all ages. Whether you\'re a teen starting your journey or an adult finally ready for your dream smile, we\'re here to guide you every step of the way.',
    description: 'Braces gently move your teeth into perfect alignment through three simple parts working together: Brackets (these tiny clips are fixed on your teeth and act as gentle anchors for your braces), Archwire (the guiding wire that slowly moves your teeth into their correct positions), Elastic Bands (small rubber bands that fine-tune your bite and help achieve a perfectly balanced smile). With our personalized dental braces treatment in Paramathi Velur, you\'ll enjoy a smooth, confident journey toward a beautifully aligned smile. Types of Braces We Offer: Metal Braces (traditional yet effective, these braces use high-quality stainless steel brackets and wires to gradually move teeth into place. They are durable, efficient and ideal for complex alignment issues), Ceramic Braces (perfect for patients looking for a more discreet option. Ceramic braces blend with your natural tooth color offering both performance and aesthetics), Clear Aligners (the most modern orthodontic solution; clear aligners are removable, comfortable and nearly invisible. They let you straighten your teeth without metal wires or brackets), Lingual Braces (placed behind the teeth, lingual braces are completely invisible while providing the same effectiveness as traditional ones, ideal for professionals or anyone seeking a subtle solution), Self-Ligating Braces (these braces use advanced technology to reduce friction and discomfort often resulting in faster treatment times and fewer adjustments). We make your smile transformation smooth and stress-free. Our orthodontic experts provide personalized braces treatment ensuring every stage of your journey is comfortable, precise and results-driven. From your first consultation to the final reveal of your new smile, we are with you every step of the way.',
    candidates: 'People with crooked teeth, crowded teeth, bite problems, or jaw alignment issues are ideal candidates. Suitable for all ages, from teens starting their journey to adults ready for their dream smile.',
    procedure: [
      'Consultation – The orthodontist examines the alignment of your teeth, the bite and oral health during a detailed consultation. Based on your objectives and the lifestyle then we choose dental braces that suit you the best in Paramathi Velur',
      'Treatment Planning – The treatment plan is individually tailored with the help of digital scans and X-rays to follow tooth movement and get an idea of the final smile',
      'Braces Placement – The braces you have selected whether metal, ceramic, or clear are the least damaging to your teeth and are put very accurately. Our attention during the entire operation is on your comfort and the visual aspect',
      'Adjustment Visits – We keep track of your development through regular revision appointments and, if necessary, we make the changes that facilitate the movement of your teeth'
    ],
    benefits: [
      'Straighten misaligned teeth using braces for improved oral function',
      'Suitable for all ages from teens to adults for a dream smile',
      'Metal Braces – Durable, efficient and ideal for complex alignment issues',
      'Ceramic Braces – Discreet option that blends with your natural tooth color',
      'Clear Aligners – Removable, comfortable and nearly invisible orthodontic solution',
      'Lingual Braces – Completely invisible, placed behind the teeth for a subtle solution',
      'Self-Ligating Braces – Faster treatment times and fewer adjustments',
      'Personalized treatment plan tailored with digital scans and X-rays',
      'Smooth, stress-free smile transformation with expert orthodontic care',
      'Regular adjustment visits to track development and ensure effective results'
    ]
  },

  {
    id: 'invisalign',
    title: 'Invisalign',
    images: [
      Invisalign1,
      Invisalign3,
      Invisalign2
    ],
    introduction: 'Invisalign uses a series of clear, removable aligners that gradually move your teeth into the desired position, helping you achieve a healthier, straighter, and more confident smile.',
    description: 'Our experienced dental specialists create personalized Invisalign treatment plans tailored to each patient\'s dental needs and smile goals. Invisalign is an ideal orthodontic solution for patients with crooked teeth, gaps, overcrowding, bite issues, or mild to moderate alignment problems. The clear aligners are custom-made using advanced digital scanning and modern dental technology, ensuring a precise fit and effective tooth movement throughout the treatment process. Since the aligners are nearly invisible, patients can improve their smiles with confidence while maintaining a natural appearance during treatment. Our treatment process begins with a detailed consultation and digital smile assessment to evaluate your teeth alignment and bite condition. We use advanced imaging and digital planning technology to design a customized Invisalign treatment plan that maps the gradual movement of your teeth step by step. Patients receive a series of aligners that are replaced at regular intervals as the teeth shift into proper alignment. One of the major advantages of Invisalign is the convenience and comfort it offers compared to traditional braces. The aligners are removable, allowing patients to eat, brush, and floss more comfortably without dietary restrictions. The smooth and comfortable material also reduces irritation commonly associated with metal brackets and wires. Our team is dedicated to providing safe, comfortable, and high-quality orthodontic care in a hygienic and patient-friendly environment. We closely monitor your progress throughout the treatment to ensure effective results and a beautiful smile transformation.',
    candidates: 'Patients with crooked or misaligned teeth, gaps between teeth, overcrowded teeth, overbite or underbite issues, desire for a discreet orthodontic treatment, or need for a comfortable alternative to braces.',
    procedure: [
      'Detailed consultation and digital smile assessment to evaluate teeth alignment and bite condition',
      'Advanced imaging and digital planning technology to design a customized Invisalign treatment plan',
      'Custom-made clear aligners created using advanced digital scanning and modern dental technology',
      'Patients wear aligners and replace them at regular intervals as teeth shift into proper alignment',
      'Close monitoring of progress throughout the treatment to ensure effective results'
    ],
    benefits: [
      'Clear and nearly invisible aligners for a discreet orthodontic treatment',
      'Comfortable and removable design with no metal brackets or wires',
      'Easier brushing and flossing without dietary restrictions',
      'Customized treatment for every patient based on smile goals and dental needs',
      'Improved smile appearance and confidence',
      'Effective and predictable teeth alignment with step-by-step digital planning',
      'Reduces irritation commonly associated with metal brackets and wires',
      'Advanced digital scanning ensures a precise fit and effective tooth movement',
      'Convenient and comfortable compared to traditional braces',
      'Regular progress monitoring for a beautiful smile transformation'
    ]
  },

  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    images: [
      Restorativedentistry
    ],
    introduction: 'We offer advanced Cosmetic Dentistry treatments designed to improve the appearance of your smile and boost your confidence.',
    description: 'A beautiful smile can make a lasting impression, and our experienced dental specialists provide personalized cosmetic solutions to enhance the shape, color, alignment, and overall aesthetics of your teeth. Cosmetic dentistry includes a variety of treatments such as teeth whitening, smile makeovers, dental veneers, bonding, gum contouring, and tooth reshaping. Whether you have stained, chipped, uneven, misaligned, or damaged teeth, we use modern dental technology and advanced techniques to deliver natural-looking and long-lasting results tailored to your smile goals. Our team focuses on providing safe, comfortable, and minimally invasive cosmetic dental care in a hygienic and patient-friendly environment. Before starting treatment, we conduct a detailed consultation to understand your concerns and create a customized treatment plan that suits your dental needs and expectations.',
    candidates: 'Patients with stained, chipped, uneven, or misaligned teeth seeking smile improvement. Whether you have stained, chipped, uneven, misaligned, or damaged teeth.',
    procedure: [
      'Detailed consultation to understand your concerns and smile goals',
      'Creating a customized treatment plan that suits your dental needs and expectations',
      'Using modern dental technology and advanced techniques for treatment',
      'Delivering natural-looking and long-lasting results tailored to your smile goals',
      'Safe, comfortable, and minimally invasive cosmetic dental care'
    ],
    benefits: [
      'Enhances smile appearance and confidence',
      'Improves the color and shape of teeth',
      'Corrects chipped, uneven, or damaged teeth',
      'Creates a more balanced and attractive smile',
      'Provides natural-looking results',
      'Supports better oral aesthetics and self-esteem',
      'Personalized treatments for every patient',
      'Modern dental technology and advanced techniques',
      'Safe, comfortable, and minimally invasive care',
      'Hygienic and patient-friendly environment'
    ]
  },

  {
    id: 'veneers',
    title: 'Veneers / Laminates',
    images: [
      Prosthodontics1,
      Prosthodontics2
    ],
    introduction: 'We offer advanced Veneers and Laminates treatments designed to enhance the appearance of your smile and create a natural, confident look.',
    description: 'Dental veneers and laminates are thin, custom-made shells placed over the front surface of teeth to improve their color, shape, size, and overall appearance. Our experienced dental specialists provide personalized cosmetic dental solutions to help patients achieve a brighter, more attractive smile with long-lasting results. Veneers and laminates are an excellent cosmetic dental option for patients with stained, chipped, cracked, uneven, misaligned, worn, or slightly gapped teeth. Using advanced dental technology and high-quality materials, we carefully design veneers that match the natural appearance of your teeth while improving smile symmetry and aesthetics. Each treatment is customized according to the patient\'s facial features, smile goals, and dental condition. Our treatment process begins with a detailed consultation and smile evaluation to understand your concerns and expectations. We assess your teeth, bite alignment, gum health, and smile structure before creating a personalized treatment plan. Depending on the patient\'s needs, we may recommend porcelain veneers or dental laminates for the best cosmetic outcome. Porcelain veneers are known for their durability, stain resistance, and natural appearance, while laminates are thinner and require minimal tooth preparation. Both treatments provide highly aesthetic and comfortable results with a minimally invasive procedure. Our dental team ensures precise fitting and natural-looking results that blend seamlessly with your existing teeth. We focus on providing safe, comfortable, and high-quality cosmetic dental care in a hygienic and patient-friendly environment.',
    candidates: 'Patients with discolored or stained teeth, chipped or cracked teeth, uneven or irregularly shaped teeth, small gaps between teeth, worn-down teeth, mildly misaligned teeth, or those seeking a smile makeover and cosmetic enhancement.',
    procedure: [
      'Detailed consultation and smile evaluation to understand your concerns and expectations',
      'Assessment of teeth, bite alignment, gum health, and smile structure',
      'Creating a personalized treatment plan recommending porcelain veneers or dental laminates',
      'Careful design of veneers using advanced dental technology and high-quality materials',
      'Precise fitting and bonding of veneers for natural-looking results that blend seamlessly with existing teeth'
    ],
    benefits: [
      'Enhances smile appearance and confidence',
      'Provides natural-looking cosmetic results',
      'Improves tooth color, shape, and alignment',
      'Covers stains, chips, and imperfections',
      'Durable and stain-resistant solution',
      'Minimally invasive cosmetic treatment',
      'Customized to match natural teeth',
      'Improves smile symmetry and aesthetics',
      'Porcelain veneers offer durability and stain resistance for long-lasting results',
      'Laminates require minimal tooth preparation for a comfortable treatment experience'
    ]
  },

  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    images: [
      LaserDentistry1,
      LaserDentistry2,
      LaserDentistry3
    ],
    introduction: 'Laser dentistry uses advanced laser technology to perform dental procedures with precision and minimal discomfort. Laser dentistry in Paramathi Velur is used in several procedures across all.',
    description: 'Laser Dentistry Treatment in Paramathi Velur is planned only after checking whether laser support is suitable for the condition being treated. The dentist first examines the area, then performs the procedure with precision, and finally checks comfort and healing after treatment. Types of Laser Dentistry Used For Different Needs: Soft Tissue Laser Dentistry (used for gum reshaping, soft tissue correction, and selected gum procedures), Hard Tissue Laser Dentistry (used in selected tooth-related procedures that need controlled precision), Laser-Assisted Gum Treatment (used in selected tooth-related procedures that need controlled precision), Laser Support In Cosmetic Procedures (used in selected aesthetic procedures where precise tissue sculpting matters), Gum And Soft Tissues Laser Use (used where soft cleaning and controlled tissue shaping are required), Teeth-Related Laser Use (used in selected hard-tissue procedures where laser support is suitable). Laser dentistry in Paramathi Velur is suitable when the condition and tissue type make laser support ideal for precision, comfort, or healing. It is often used for gum-related treatments, soft tissue corrections, selected cavity preparations, and other treatments where a minimally invasive approach suits better.',
    candidates: 'Patients requiring minimally invasive dental treatments. Laser dentistry is suitable when the condition and tissue type make laser support ideal for precision, comfort, or healing.',
    procedure: [
      'Examination & Treatment Planning – The dentist checks the condition, the issue involved and treatment goal to decide whether laser will support precision, comfort or healing',
      'Laser-Assisted Treatment – Laser used in a controlled way on selected areas. Maybe used for gum treatment, soft tissue correction or other procedures. If needed, other dental instruments also used',
      'Post-Treatment Check & Care Guidance – Treated area checked after the procedure. The dentist explains what is normal during healing and what needs review. Homecare advice and follow-up instructions provided'
    ],
    benefits: [
      'Less pain and bleeding during and after procedures compared to traditional methods',
      'Faster healing time as laser technology promotes tissue regeneration and reduces trauma',
      'Minimal anesthesia required for most procedures, making treatment more comfortable',
      'Precise treatment targeting only affected areas while preserving healthy tissue',
      'Reduced risk of infection due to the sterilizing effect of laser technology',
      'Less swelling and discomfort following treatment for a better recovery experience',
      'Gum whitening and gum reshaping with reduced tissue trauma',
      'Selected gum infection and soft tissue procedures with precision',
      'Periodontal and other soft tissue corrections for improved oral health',
      'Laser-assisted tooth preparation when suitable for cavity treatment',
      'Laser-assisted endodontic support in selected cases for better outcomes',
      'Selected surgical procedures where controlled tissue handling is helpful',
      'Enhance precision about drilling, healing, or stitches in suitable cases',
      'Reduce bleeding and swelling during and after treatment',
      'Clean where precise tissue removal is required for optimal results',
      'Slightly healing for a more comfortable treatment experience',
      'Situations where reduced bleeding and easier healing support better outcomes',
      'Selected patients who need a minimally invasive approach where clinically suitable'
    ]
  },

  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    images: [
      Endodontics1,
      Endodontics2
    ],
    introduction: 'Restore Your Smile with the Best Root Canal Dentist in Paramathi Velur.',
    description: 'Root canal treatment is a dental procedure that involves removing the infected or damaged tooth pulp, which is the soft tissue inside the tooth. This treatment is usually performed when the tooth pulp is infected, inflamed, or has died due to decay or injury. If left untreated, the infection can spread to the surrounding teeth, causing further damage and pain. Common symptoms of a root canal infection include: Swelling, tender, or painful gums around the tooth; Constant toothache while chewing or biting; Sensitivity to hot or cold food and drinks; Darkening or discoloration of the tooth itself.',
    candidates: 'Patients with severe tooth decay, infection, or tooth pain.',
    procedure: [
      'Exam & Numbing – We check the tooth with X-rays and numb the area with local anesthesia for a painless experience',
      'Infection Cleaning – The infected pulp is removed, and the inside of the tooth is carefully cleaned and disinfected',
      'Filling & Sealing – The cleaned canals are filled with a safe material and sealed to prevent future infections',
      'Tooth Restoration – A crown or filling is placed to restore the tooth\'s strength, appearance, and function'
    ],
    benefits: [
      'Saves natural tooth from extraction, preserving your original tooth structure and function',
      'Eliminates pain and discomfort caused by infected or damaged tooth pulp',
      'Prevents infection spread to surrounding teeth, gums, and jawbone',
      'Restores normal chewing function allowing you to eat comfortably again',
      'Cost-effective compared to tooth extraction and replacement with implants or bridges',
      'High success rate with modern techniques making it a reliable treatment option'
    ]
  },

  {
    id: 'dental-filling',
    title: 'Dental Filling',
    images: [
      Restorativedentistry
    ],
    introduction: 'Dental fillings restore teeth damaged by cavities. A dental filling in Paramathi Velur is usually done in a short planned visit. The tooth is checked first, the damaged part is removed, and the area is restored carefully. The last step is to make sure the filling feels even while biting.',
    description: 'A dental fillings treatment in Paramathi Velur is usually advised when the tooth can still be repaired directly. Types of Dental Fillings Used for Different Needs: Tooth-Coloured Composite Fillings (Match natural tooth shades and suit many routine cavity repairs), Glass Ionomer Fillings (Useful in selected cases where fluoride release may help), Amalgam Fillings (Strong and cost-effective for back teeth under heavy chewing pressure), Gold Fillings (Very durable and long-lasting, but usually chosen less due to cost), Temporary Fillings (Used for short-term sealing until final treatment is completed), Replacement Fillings (Used when an old filling has failed, leaked, or worn out). Who May Need a Dental Filling? Small to moderate tooth decay, Sensitivity to sweets, cold, or pressure, A dark spot or visible hole in the tooth, A chipped edge or worn area, Food gets trapped in the same place often, An old filling that has cracked, worn down, or loosened. A dental filling is recommended only after checking whether the tooth can support it well: Depth and spread of the cavity, Pain history and lingering sensitivity, Amount of healthy tooth still present, Tooth position and chewing load, Cracks or damaged old restorations, Needs for an X-ray to see hidden decay. When Is A Filling Enough, And When Is It Not? A filling is usually enough when decay affects the outer part of the tooth and the tooth still has enough structure to hold a direct restoration. If the decay has reached the pulp, the tooth may need root canal treatment. If a large part of the tooth is weak or broken, a crown may support it better.',
    candidates: 'Patients with cavities or minor tooth damage. A dental fillings treatment in Paramathi Velur is usually advised when the tooth can still be repaired directly.',
    procedure: [
      'Examination & Decay Assessment – The dentist checks how deep the decay or damage is. An X-ray may be advised if the cavity is not fully visible, to confirm whether a filling is enough for the tooth',
      'Tooth Prep and Filling Placement – The decayed or damaged part of the tooth is removed. The area is cleaned before the filling material is placed. Local anaesthesia may be used if the tooth is sensitive or the cavity is deeper',
      'Shaping, Bite Check & Polishing – The filling is shaped to match the tooth surface. The bite is checked so the tooth does not feel high. The filling is polished to leave the surface smooth'
    ],
    benefits: [
      'Stops cavity progression preventing further decay and damage to the tooth',
      'Restores tooth function allowing normal chewing and biting without sensitivity',
      'Improves tooth strength by filling the cavity and reinforcing the tooth structure',
      'Quick and simple procedure that can often be completed in a single visit',
      'Tooth-colored materials blend seamlessly with natural teeth for aesthetic results',
      'Prevents future complications such as tooth loss, infection, or need for root canal',
      'What To Expect During And After A Dental Filling – During the dental filling treatment procedure, the tooth may be numbed if the cavity is deep or sensitive. You may feel pressure or vibration, but the treatment is usually comfortable',
      'After the filling, mild sensitivity to cold or pressure can happen for a few days. If the bite feels slightly high, a small adjustment may be needed. Sharp pain, prolonged sensitivity, or pain while biting should be reviewed'
    ]
  },

  {
    id: 'dental-crown-bridges',
    title: 'Dental Crown and Bridges',
    images: [
      Prosthodontics1,
      Prosthodontics2
    ],
    introduction: 'Trusted Dental Crown Clinic in Paramathi Velur. We specialize in delivering high-quality treatments that restore your teeth\'s strength, appearance, and function.',
    description: 'Whether you have a cracked, chipped, discolored, or severely worn tooth, our expert tooth crown dentist in Paramathi Velur helps you protect, rebuild, and perfect your smile with personalized care. We use advanced intraoral scanners and cutting-edge dental technologies to ensure smooth, precise, and comfortable procedures. Our dental crown hospital in Paramathi Velur provides safe, reliable treatments using high-quality biocompatible materials like Temporary Dental Crown (protects your tooth while your permanent crown is being made, providing comfort and safety), Porcelain Crowns (blend seamlessly with your teeth, offering a natural look and lasting quality for both front and back teeth), Ceramic Crowns (strong and aesthetically pleasing, ideal for front teeth with a natural, durable finish), Metal Crowns (gold or metal provide strength and durability, perfect for back teeth, though less visible), Zirconia Crowns (strong, natural-looking, and ideal for both front and back teeth, providing long-lasting results), Resin Crowns (budget-friendly option, perfect for temporary use, but less durable than other materials). Missing teeth can affect your smile, your bite, and your confidence. We offer high-quality dental bridges in Paramathi Velur to restore the strength, function, and appearance of your smile. Dental bridges act as an effective solution to replace one or more missing teeth and are designed to fill the gaps and re-establishing the natural alignment of your bite, it will maintain the balance of your facial support, your jaw structure, and help strengthen your overall oral health for years to come.',
    candidates: 'Patients with broken, weak, or missing teeth.',
    procedure: [
      'Consultation – Our experienced dental specialists excel in tooth crowns & bridges, providing precise treatments for a lasting smile',
      'Dental Scanning – Patient-Centric Approach. Our team takes a personalized, patient-focused approach to meet each individual\'s unique dental needs',
      'Temporary Crown – Bring back your perfect smile with our expert tooth crown dental in Paramathi Velur combining advanced care, a perfect fit, and a natural look to transform your confidence and restore your smile',
      'Final Placement – Expert team designs custom dental bridges that fit naturally, helping you chew, speak, and smile with ease'
    ],
    benefits: [
      'Improves Smile Aesthetics with natural-looking crowns and bridges',
      'Restores Tooth Function for comfortable eating and speaking',
      'Natural-Looking Results that blend seamlessly with your existing teeth',
      'Durable & Long-Lasting solutions that can last many years',
      'Protects Weakened Teeth from further damage or fracture',
      'Supports Dental Bridges to replace missing teeth effectively',
      'Restores Chewing Ability – Dental bridges make it easier to bite and chew your food comfortably and naturally',
      'Maintain Facial Structure – They help preserve the natural shape of your face by preventing sagging caused by missing teeth',
      'Prevent Teeth from Shifting – Bridges keep your remaining teeth properly aligned by filling the space left by missing teeth'
    ]
  },

  {
    id: 'dental-implants',
    title: 'Dental Implants',
    images: [
      DentalImplants1,
      DentalImplants2
    ],
    introduction: 'Reclaim Your Smile with Confidence. Bring back your bite with permanent implants. Choose the smart solution for missing, damaged, or dentured teeth with our expert implantation doctors in Paramathi Velur providing durable, natural looking results.',
    description: 'Bring your smile back to life with Dental implants treatment in Paramathi Velur using world-class advanced technology. We offer transparent dental evaluations and treatments that serve as long-lasting, impactful solutions for missing or damaged teeth. In dental implantations, there are three layers that play a vital role: The implant screw acts as the artificial tooth root placed into the jawbone. The abutment connects the implant screw to the crown. The crown is the visible part of the tooth that looks and functions like a natural tooth. Explore the Different Types of Dental Implants for a Perfect Smile: Endosteal Implants (Placed into the jawbone directly to support one or more teeth), Subperiosteal Implants (Placed on top of the jawbone beneath the gum tissue specifically for insufficient bone density), Mini Dental Implants (Smaller implants used for patients with limited bone structure or as a less invasive alternative), Zygomatic Implants (Implant into cheekbone (zygoma) instead of the jawbone, ideal for patients with significant upper jawbone loss), Single Tooth Implants (Replaces a single missing tooth with an individual implant and crown), All-on-4 Implants (A method that uses four implants to support a full set of dentures for people who have lost all their teeth).',
    candidates: 'Patients missing one or more teeth with healthy jawbone.',
    procedure: [
      'Consultation – Meet with our expert dental restoration specialist to discuss your needs and plan the best solution for your smile',
      'Implant Placement – The dental implant near me is carefully placed into your jawbone, providing a stable foundation for your new tooth',
      'Healing – The implant fuses with the bone in a process called osseointegration, ensuring a strong, lasting bond',
      'Abutment Placement – Once healed, an abutment is attached to the implant to connect the final crown or bridge',
      'Final Restoration – A custom-made crown or bridge is placed on the abutment, completing your smile with a natural look and feel'
    ],
    benefits: [
      'Reduced Bone Loss – The titanium screw fuses with your jawbone, helping to prevent further bone loss',
      'Non-Removable – The implant bonds securely with your mouth, so you can eat, smile, and brush without worry',
      'Natural-Looking – The dental implant blends with your natural teeth for a lifelike appearance',
      'No Special Maintenance – The implant requires no special care, making it a low-maintenance solution for daily oral hygiene',
      'Permanent tooth replacement solution that can last a lifetime with proper care',
      'Improves chewing ability and bite force comparable to natural teeth',
      'Prevents bone loss by stimulating the jawbone just like natural tooth roots',
      'Natural appearance and feel that looks and functions exactly like your real teeth',
      'No damage to adjacent teeth unlike bridges which require grinding down healthy teeth',
      'High success rate of over 95% making it the most reliable tooth replacement option'
    ]
  },

  {
    id: 'tmj-treatment',
    title: 'TMJ / TMD Treatments',
    images: [
      Tmj1,
      Tmj2
    ],
    introduction: 'We provide advanced TMJ / TMD Treatments designed to relieve jaw pain, improve jaw function, and restore comfort in your daily life.',
    description: 'The temporomandibular joint (TMJ) connects the jawbone to the skull and plays an important role in speaking, chewing, and mouth movement. When this joint or the surrounding muscles become strained or damaged, it can lead to Temporomandibular Disorders (TMD), causing pain, discomfort, and difficulty in jaw movement. Our experienced dental specialists offer personalized treatment solutions to help manage and treat TMJ-related conditions effectively. TMJ disorders can develop due to several reasons, including teeth grinding, jaw clenching, stress, arthritis, injury, bite misalignment, or excessive pressure on the jaw joint. Patients suffering from TMJ problems may experience symptoms such as jaw pain, headaches, facial pain, clicking or popping sounds while opening the mouth, difficulty chewing, ear pain, jaw locking, neck pain, or stiffness around the jaw muscles. We begin the treatment process with a detailed consultation and comprehensive dental evaluation. Our specialists carefully examine the jaw joint, bite alignment, muscle movement, and related symptoms. Digital imaging and diagnostic methods may also be used to better understand the condition and create a personalized treatment plan. Depending on the severity of the condition, our TMJ / TMD treatments may include bite correction, custom mouthguards or night guards, jaw exercises, muscle relaxation therapy, pain management, stress management guidance, and advanced dental procedures when necessary. We use modern technology and minimally invasive techniques to ensure safe, comfortable, and effective treatment with improved jaw function and reduced discomfort. Our team is committed to providing compassionate and patient-focused care in a hygienic and comfortable environment. We understand how chronic jaw pain and discomfort can affect daily activities, sleep quality, eating habits, and overall well-being. That is why we focus on providing treatments that not only relieve symptoms but also improve long-term jaw health and quality of life.',
    candidates: 'Patients with jaw pain, headaches, or difficulty opening the mouth. Common symptoms include jaw pain or tenderness, clicking or popping sounds in the jaw, difficulty chewing or opening the mouth, jaw locking or stiffness, headaches and facial pain, ear pain or ringing in the ears, neck and shoulder discomfort, teeth grinding or jaw clenching.',
    procedure: [
      'Detailed consultation and comprehensive dental evaluation of the jaw joint, bite alignment, and muscle movement',
      'Digital imaging and diagnostic methods to better understand the condition',
      'Creating a personalized treatment plan suitable for the patient\'s needs',
      'Bite correction, custom mouthguards or night guards, jaw exercises, and muscle relaxation therapy',
      'Pain management, stress management guidance, and advanced dental procedures when necessary',
      'Modern technology and minimally invasive techniques for safe, comfortable, and effective treatment'
    ],
    benefits: [
      'Relieves jaw pain and discomfort',
      'Improves jaw movement and function',
      'Reduces headaches and facial tension',
      'Helps prevent teeth grinding damage',
      'Improves chewing and speaking comfort',
      'Supports better sleep and relaxation',
      'Personalized treatment for long-term relief',
      'Reduces clicking or popping sounds in the jaw',
      'Relieves ear pain and neck and shoulder discomfort',
      'Improves long-term jaw health and quality of life'
    ]
  },

  {
    id: 'gum-recontouring',
    title: 'Gum Recontouring',
    images: [
      Periodontics1,
      Periodontics2
    ],
    introduction: 'We offer advanced Gum Recontouring treatment designed to improve the appearance of your smile by reshaping uneven or excessive gum tissue.',
    description: 'A balanced gum line plays an important role in creating a confident and attractive smile, and our expert dental specialists provide customized solutions based on your individual needs. Gum recontouring is an effective cosmetic dental procedure for patients who have a "gummy smile," uneven gum levels, or excess gum tissue covering the teeth. Using modern dental technology and precise techniques, we carefully sculpt the gum line to create a more symmetrical and natural appearance while maintaining your oral health and comfort throughout the procedure. Our team focuses on providing a safe, painless, and comfortable treatment experience with minimal recovery time. Before the procedure, we perform a detailed consultation to understand your smile goals and recommend the best treatment plan for you. We ensure every patient receives personalized attention and high-quality dental care in a hygienic and friendly environment.',
    candidates: 'People with gummy smiles or uneven gum lines. Patients who have a "gummy smile," uneven gum levels, or excess gum tissue covering the teeth.',
    procedure: [
      'Detailed consultation to understand your smile goals and recommend the best treatment plan',
      'Using modern dental technology and precise techniques to carefully sculpt the gum line',
      'Creating a more symmetrical and natural appearance while maintaining oral health',
      'Safe, painless, and comfortable treatment experience with minimal recovery time'
    ],
    benefits: [
      'Improves smile appearance and confidence',
      'Creates a balanced and symmetrical gum line',
      'Reduces excess gum tissue',
      'Enhances overall facial aesthetics',
      'Provides long-lasting cosmetic results',
      'Quick and minimally invasive procedure',
      'Safe, painless, and comfortable treatment experience',
      'Minimal recovery time for faster healing',
      'Personalized attention and high-quality dental care',
      'Maintains your oral health and comfort throughout the procedure'
    ]
  },

  {
    id: 'child-dentistry',
    title: 'Child Dentistry',
    images: [
      PediatricDentistry1,
      PediatricDentistry2,
      PediatricDentistry3
    ],
    introduction: 'We provide expert pediatric dentistry with a gentle and caring approach, to ensure your child\'s healthy and happy smile.',
    description: 'We are a leading kids dental clinic in Coimbatore, ensuring your child\'s dental health is well cared for from an early age. We know that dental visits can be stressful for children. That\'s why we use special techniques to keep them calm and comfortable. Our pediatric dental clinic in Coimbatore offers safe and effective gently control methods, including child-friendly sedation, to help children feel relaxed during treatment. Our trained professionals ensure your child\'s dental care is smooth, stress-free, and positive.',
    candidates: 'Children from infancy through teenage years requiring gentle, child-friendly dental care.',
    procedure: [
      'Routine Dental Checkups – We recommend that your child receive a dental checkup every six months to maintain good oral hygiene and to prevent dental problems',
      'Fluoride Treatment – It makes teeth stronger and helps prevent cavities. Our pediatric dentists use fluoride treatment to keep your child\'s teeth healthy',
      'Dental Cleaning – Regular dental cleanings are essential for maintaining healthy teeth and gums. Our pediatric team provides gentle dental cleanings for children',
      'Dental Fillings – If your child has cavities or tooth decay, our expert dental provides fillings to fix the tooth and stop further damage',
      'Extractions – Sometimes, a tooth needs to be removed. Our pediatric oral dental service makes sure the process is gentle, safe, and pain free for your child',
      'Orthodontic Treatment – We specialize in providing orthodontic treatments, addressing misalignments, and pediatric orthodontic correction using natural growth'
    ],
    benefits: [
      'Friendly Consultation – We start with a children-friendly consultation, understanding your child\'s dental needs while making them feel safe and comfortable',
      'Expert Treatment – Once the treatment plan is ready, our experienced pediatric dentist in Coimbatore provides gentle and effective teeth care, ensuring a pain-free treatment experience',
      'Follow Up & Care – We schedule follow-up visits to monitor your child\'s teeth progress, guaranteeing long-term dental health and a happy smile',
      'Client Satisfaction – Our satisfied patients and parents trust us for our child-friendly approach and expert dental care',
      'Experienced Pediatric Dentists – With 13+ years of experience, our skilled pediatric specialists offer pain-free and stress-free dental treatments',
      'Kids Play Area Zone – We have a dedicated play area for kids, making visits enjoyable for children. This helps them feel relaxed and comfortable during their dental care'
    ]
  },

  {
    id: 'wisdom-tooth-removal',
    title: 'Wisdom Tooth Removal',
    images: [
      WisdomTooth1,
      WisdomTooth2
    ],
    introduction: 'We provide advanced Wisdom Tooth Removal treatment to help patients relieve pain, prevent dental complications, and maintain better oral health.',
    description: 'Wisdom teeth can often grow improperly or become impacted, causing discomfort, swelling, infection, and crowding of nearby teeth. Our experienced dental specialists offer safe and effective wisdom tooth extraction tailored to each patient\'s condition and comfort. Wisdom tooth removal is a common dental procedure recommended for patients experiencing pain, gum infection, jaw stiffness, swelling, or impacted wisdom teeth. Using advanced dental technology and modern extraction techniques, we carefully remove problematic wisdom teeth while ensuring minimal discomfort and a smooth treatment experience. Our team focuses on providing safe, comfortable, and stress-free dental care with proper anesthesia and personalized attention throughout the procedure. Before treatment, we perform a detailed dental examination and digital X-rays to evaluate the position of the wisdom teeth and create the most suitable treatment plan. We are committed to maintaining a hygienic and patient-friendly environment for quality dental care.',
    candidates: 'Patients with impacted wisdom teeth, pain, swelling, or infection. Patients experiencing pain, gum infection, jaw stiffness, swelling, or impacted wisdom teeth.',
    procedure: [
      'Detailed dental examination and digital X-rays to evaluate the position of the wisdom teeth',
      'Creating the most suitable treatment plan based on patient\'s condition',
      'Proper anesthesia administration for safe, comfortable, and stress-free dental care',
      'Using advanced dental technology and modern extraction techniques to carefully remove problematic wisdom teeth',
      'Ensuring minimal discomfort and a smooth treatment experience with personalized attention'
    ],
    benefits: [
      'Relieves pain and discomfort caused by impacted or infected wisdom teeth',
      'Prevents infection and gum problems',
      'Protects nearby teeth from damage and crowding',
      'Reduces swelling and jaw stiffness',
      'Prevents overcrowding of teeth',
      'Supports better oral health and hygiene',
      'Safe and effective treatment with faster recovery',
      'Advanced dental technology and modern extraction techniques',
      'Proper anesthesia and personalized attention throughout the procedure',
      'Hygienic and patient-friendly environment for quality dental care'
    ]
  }
];
