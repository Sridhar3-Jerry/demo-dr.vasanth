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
      '/src/assets/Braces-1.jpg',
      '/src/assets/Braces-2.jpeg',
      '/src/assets/Orthodontics-1.png',
      '/src/assets/Orthodontics-2.png'
    ],
    introduction: 'Braces are orthodontic devices used to correct misaligned teeth and jaw problems. They gradually move teeth into the correct position to improve both dental function and appearance.',
    description: 'Braces use brackets, wires, and bands to slowly adjust teeth into the desired alignment. They help fix issues like crooked teeth, overcrowding, and bite problems such as overbite or underbite.',
    candidates: 'People with crooked teeth, crowded teeth, bite problems, or jaw alignment issues are ideal candidates.',
    procedure: [
      'Initial dental examination and X-rays.',
      'Treatment planning by the orthodontist.',
      'Placement of brackets and wires on teeth.',
      'Periodic adjustments to move teeth gradually.',
      'Removal of braces after alignment is achieved.',
      'Use of retainers to maintain teeth position.'
    ],
    benefits: [
      'Improves teeth alignment and corrects crooked or misaligned teeth for better oral function',
      'Enhances smile aesthetics by creating a more uniform and attractive appearance',
      'Corrects bite problems including overbite, underbite, and crossbite for proper jaw alignment',
      'Improves oral hygiene by aligning teeth properly, making them easier to clean and maintain',
      'Boosts confidence and self-esteem with a straighter, more beautiful smile',
      'Prevents future dental problems such as tooth decay, gum disease, and excessive wear'
    ]
  },

  {
    id: 'invisalign',
    title: 'Invisalign',
    images: [
      '/src/assets/Orthodontics-1.png',
      '/src/assets/Orthodontics-2.png'
    ],
    introduction: 'Invisalign is a modern orthodontic treatment that uses clear aligners to straighten teeth discreetly.',
    description: 'Unlike traditional braces, Invisalign uses removable transparent trays that gradually shift teeth into the correct position.',
    candidates: 'Patients with mild to moderate teeth misalignment who prefer a nearly invisible orthodontic treatment.',
    procedure: [
      'Consultation and digital scan of teeth.',
      'Creation of custom aligners.',
      'Patient wears aligners for 20–22 hours daily.',
      'Aligners are replaced every few weeks.',
      'Teeth gradually move to correct alignment.'
    ],
    benefits: [
      'Nearly invisible treatment that allows you to straighten teeth discreetly without anyone noticing',
      'Comfortable and removable aligners that can be taken out for eating, brushing, and special occasions',
      'Easier oral hygiene maintenance as aligners are removable, allowing normal brushing and flossing',
      'No metal wires or brackets means no mouth irritation or emergency visits for broken brackets',
      'Fewer dental visits required compared to traditional braces, saving you time',
      'Predictable results with 3D treatment planning showing your final smile before starting'
    ]
  },

  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    images: [
      '/src/assets/Restorativedentistry.png'
    ],
    introduction: 'Cosmetic dentistry focuses on improving the appearance of teeth, gums, and smile.',
    description: 'It includes procedures like teeth whitening, veneers, bonding, and smile makeovers to enhance dental aesthetics.',
    candidates: 'Patients with stained, chipped, uneven, or misaligned teeth seeking smile improvement.',
    procedure: [
      'Smile assessment and consultation.',
      'Treatment planning based on aesthetic goals.',
      'Procedures such as whitening, bonding, or veneers.',
      'Final adjustments for natural appearance.'
    ],
    benefits: [
      'Improved smile appearance with whiter, brighter, and more symmetrical teeth',
      'Boosted self-confidence in social and professional situations with an attractive smile',
      'Better facial aesthetics as a beautiful smile enhances overall facial harmony',
      'Customized smile design tailored to your unique facial features and preferences',
      'Long-lasting results with proper care and maintenance',
      'Minimally invasive procedures that preserve natural tooth structure'
    ]
  },

  {
    id: 'veneers',
    title: 'Veneers / Laminates',
    images: [
      '/src/assets/Prosthodontics-1.png',
      '/src/assets/Prosthodontics-2.png'
    ],
    introduction: 'Dental veneers are thin shells placed on the front surface of teeth to improve their appearance.',
    description: 'They are commonly made from porcelain or composite resin and help correct discoloration, gaps, and minor misalignment.',
    candidates: 'People with stained, chipped, uneven, or slightly misaligned teeth.',
    procedure: [
      'Consultation and smile analysis.',
      'Preparation of tooth surface.',
      'Custom veneer creation.',
      'Bonding veneer to the tooth surface.',
      'Final polishing and adjustments.'
    ],
    benefits: [
      'Improves tooth color and shape, covering stains and discoloration that whitening cannot fix',
      'Long-lasting results with porcelain veneers lasting 10-15 years with proper care',
      'Natural-looking smile as veneers are custom-made to match your natural teeth perfectly',
      'Minimally invasive procedure requiring little to no tooth reduction in many cases',
      'Stain-resistant material that maintains its bright appearance over time',
      'Corrects multiple cosmetic issues simultaneously including gaps, chips, and misalignment'
    ]
  },

  {
    id: 'laser-dentistry',
    title: 'Laser Dentistry',
    images: [
      '/src/assets/Laser Dentistry-1.png',
      '/src/assets/Laser Dentistry-2.png',
      '/src/assets/Laser Dentistry-3.png'
    ],
    introduction: 'Laser dentistry uses advanced laser technology to perform dental procedures with precision and minimal discomfort.',
    description: 'It is used for gum treatments, cavity removal, teeth whitening, and other dental procedures.',
    candidates: 'Patients requiring minimally invasive dental treatments.',
    procedure: [
      'Dental examination.',
      'Laser application on the targeted area.',
      'Treatment of gum or tooth problem.',
      'Post-treatment evaluation.'
    ],
    benefits: [
      'Less pain and bleeding during and after procedures compared to traditional methods',
      'Faster healing time as laser technology promotes tissue regeneration and reduces trauma',
      'Minimal anesthesia required for most procedures, making treatment more comfortable',
      'Precise treatment targeting only affected areas while preserving healthy tissue',
      'Reduced risk of infection due to the sterilizing effect of laser technology',
      'Less swelling and discomfort following treatment for a better recovery experience'
    ]
  },

  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    images: [
      '/src/assets/Endodontics-1.png',
      '/src/assets/Endodontics-2.png'
    ],
    introduction: 'Root canal treatment removes infected pulp from inside the tooth to save it from extraction.',
    description: 'The procedure cleans and seals the inner part of the tooth to eliminate infection and prevent further damage.',
    candidates: 'Patients with severe tooth decay, infection, or tooth pain.',
    procedure: [
      'X-ray examination.',
      'Removal of infected pulp.',
      'Cleaning and disinfecting the canal.',
      'Filling and sealing the tooth.',
      'Placement of crown if necessary.'
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
      '/src/assets/Restorativedentistry.png'
    ],
    introduction: 'Dental fillings restore teeth damaged by cavities.',
    description: 'The decayed portion of the tooth is removed and replaced with filling material such as composite resin.',
    candidates: 'Patients with cavities or minor tooth damage.',
    procedure: [
      'Removal of tooth decay.',
      'Cleaning of the cavity.',
      'Filling placement.',
      'Shaping and polishing.'
    ],
    benefits: [
      'Stops cavity progression preventing further decay and damage to the tooth',
      'Restores tooth function allowing normal chewing and biting without sensitivity',
      'Improves tooth strength by filling the cavity and reinforcing the tooth structure',
      'Quick and simple procedure that can often be completed in a single visit',
      'Tooth-colored materials blend seamlessly with natural teeth for aesthetic results',
      'Prevents future complications such as tooth loss, infection, or need for root canal'
    ]
  },

  {
    id: 'dental-crown-bridges',
    title: 'Dental Crown and Bridges',
    images: [
      '/src/assets/Prosthodontics-1.png',
      '/src/assets/Prosthodontics-2.png'
    ],
    introduction: 'Crowns and bridges restore damaged or missing teeth.',
    description: 'Crowns cover damaged teeth, while bridges replace missing teeth using neighboring teeth as support.',
    candidates: 'Patients with broken, weak, or missing teeth.',
    procedure: [
      'Tooth preparation.',
      'Impression for crown or bridge.',
      'Temporary crown placement.',
      'Permanent crown/bridge placement.'
    ],
    benefits: [
      'Restores chewing ability and bite function for comfortable eating and speaking',
      'Improves smile appearance by covering damaged or discolored teeth with natural-looking restorations',
      'Strengthens weak teeth protecting them from further damage or fracture',
      'Prevents teeth shifting by filling gaps left by missing teeth with bridges',
      'Long-lasting solution with crowns and bridges lasting 10-15 years or more',
      'Custom-made to match your natural teeth in color, shape, and size for seamless results'
    ]
  },

  {
    id: 'dental-implants',
    title: 'Dental Implants',
    images: [
      '/src/assets/Dental Implants-1.png',
      '/src/assets/Dental Implants-2.png'
    ],
    introduction: 'Dental implants replace missing teeth using artificial tooth roots.',
    description: 'A titanium implant is placed in the jawbone to support crowns, bridges, or dentures.',
    candidates: 'Patients missing one or more teeth with healthy jawbone.',
    procedure: [
      'Consultation and X-rays.',
      'Implant placement in jawbone.',
      'Healing period for bone integration.',
      'Placement of crown on implant.'
    ],
    benefits: [
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
      '/src/assets/Oral and maxillo facial surgery-1.png',
      '/src/assets/Oral and maxillo facial surgery-2.png'
    ],
    introduction: 'TMJ treatment addresses disorders of the jaw joint and surrounding muscles.',
    description: 'It helps relieve pain, clicking sounds, and restricted jaw movement.',
    candidates: 'Patients with jaw pain, headaches, or difficulty opening the mouth.',
    procedure: [
      'Jaw examination.',
      'Imaging and diagnosis.',
      'Medication or therapy.',
      'Use of mouth guards if required.'
    ],
    benefits: [
      'Relieves jaw pain and discomfort associated with TMJ disorders',
      'Improves jaw movement and range of motion for easier opening and closing',
      'Reduces headaches, migraines, and facial pain caused by jaw tension',
      'Improves chewing comfort and eliminates clicking or popping sounds',
      'Non-invasive treatment options available before considering surgery',
      'Better quality of life with reduced pain and improved daily function'
    ]
  },

  {
    id: 'gum-recontouring',
    title: 'Gum Recontouring',
    images: [
      '/src/assets/Periodontics-1.png',
      '/src/assets/Periodontics-2.png'
    ],
    introduction: 'Gum recontouring reshapes the gum line to improve the appearance of the smile.',
    description: 'Excess gum tissue is removed or reshaped using laser or surgical methods.',
    candidates: 'People with gummy smiles or uneven gum lines.',
    procedure: [
      'Consultation and planning.',
      'Laser or surgical reshaping of gums.',
      'Healing and follow-up.'
    ],
    benefits: [
      'Improves smile symmetry by creating a balanced and proportionate gum line',
      'Enhances tooth appearance making teeth look longer and more prominent',
      'Quick recovery with minimal discomfort when using laser technology',
      'Long-lasting results that permanently improve your smile aesthetics',
      'Boosts confidence by eliminating gummy smile concerns',
      'Minimally invasive procedure with precise control over gum tissue removal'
    ]
  },

  {
    id: 'child-dentistry',
    title: 'Child Dentistry',
    images: [
      '/src/assets/Pediatric Dentistry-1.png',
      '/src/assets/Pediatric Dentistry-2.png',
      '/src/assets/Pediatric Dentistry-3.png'
    ],
    introduction: 'Child dentistry focuses on the dental health of infants, children, and adolescents.',
    description: 'It includes preventive care, cavity treatment, and education about oral hygiene.',
    candidates: 'Children from infancy through teenage years.',
    procedure: [
      'Routine dental check-ups.',
      'Preventive treatments like fluoride.',
      'Cavity treatment if required.',
      'Oral hygiene education.'
    ],
    benefits: [
      'Prevents dental problems early through regular check-ups and preventive care',
      'Promotes healthy oral habits that last a lifetime starting from childhood',
      'Ensures proper tooth development and monitors growth of permanent teeth',
      'Child-friendly treatment environment that makes dental visits fun and stress-free',
      'Early detection of orthodontic issues allowing timely intervention',
      'Education for parents and children about proper nutrition and oral hygiene practices'
    ]
  },

  {
    id: 'wisdom-tooth-removal',
    title: 'Wisdom Tooth Removal',
    images: [
      '/src/assets/Oral and maxillo facial surgery-1.png',
      '/src/assets/Oral and maxillo facial surgery-2.png'
    ],
    introduction: 'Wisdom tooth removal is a surgical procedure to remove impacted or problematic third molars.',
    description: 'It prevents pain, infection, and crowding caused by wisdom teeth.',
    candidates: 'Patients with impacted wisdom teeth, pain, swelling, or infection.',
    procedure: [
      'Dental examination and X-rays.',
      'Local anesthesia or sedation.',
      'Surgical removal of the tooth.',
      'Stitches and healing guidance.'
    ],
    benefits: [
      'Relieves pain and swelling caused by impacted or infected wisdom teeth',
      'Prevents infection and cyst formation that can damage surrounding structures',
      'Protects nearby teeth from crowding, damage, and misalignment',
      'Improves oral health by eliminating hard-to-clean areas prone to decay',
      'Prevents future complications such as gum disease and tooth decay',
      'Quick recovery with modern surgical techniques and sedation options available'
    ]
  }
];
