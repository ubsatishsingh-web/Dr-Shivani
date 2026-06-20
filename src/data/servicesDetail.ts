export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  whatIsIt: string;
  signsNeeded: string[];
  procedureSteps: string[];
  benefits: string[];
  faqs: FAQ[];
}

export const servicesDetailData: ServiceDetail[] = [
  {
    id: "painless-rct",
    title: "Painless Root Canal Treatment (RCT & Re-RCT)",
    subtitle: "Endodontic Nerve Preservation Therapy",
    location: "Vrindavan Colony, Lucknow",
    whatIsIt: "Root Canal Treatment (RCT) is a highly precise dental procedure designed to save a severely decayed, infected, or painful tooth. Instead of extracting the tooth, Dr. Shivani Srivastava carefully removes the infected pulp nerve, disinfects the internal chamber, and seals it with premium gutter-percha fillings. This stops the infection from spreading to the jawbone, eliminates excruciating pain, and preserves your natural tooth structure for normal chewing bite.",
    signsNeeded: [
      "Severe, throbbing toothache that worsens while chewing or lying down",
      "Spontaneous, unprovoked pain that radiates to your jaw or ear at night",
      "Extreme, lingering sensitivity to hot or cold food and drinks",
      "Swelling of the gums near the infected area or swelling of the face",
      "A small pimple (abscess) on your gums that discharges pus or fluid"
    ],
    procedureSteps: [
      "Patient Counselling & Digital Diagnostic: Dr. Shivani Srivastava performs a visual exam and takes high-resolution digital X-rays to map the infection. She explains the entire roadmap using reassuring educational video clips to fully calm any dental anxiety.",
      "Local Anesthetic: A highly precise local anesthetic is gently administered so that your mouth is completely numb. The entire process is tailored to be 100% painless and tension-free.",
      "Infection Access & Cleaning: A micro-opening is made to access the pulp chamber. Specialized micro-files gently clean out the infected tissues, shape the root canals, and sterilize the space with antibacterial irrigation.",
      "Root Filling: The sterilized canals are meticulously filled with a sterile, biocompatible sealing material (Gutta-Percha) to prevent any future bacterial reinfection.",
      "Temporary or Permanent Seal: The tooth opening is carefully closed with a durable filling material, preparing it to be capped with a custom Zirconia crown."
    ],
    benefits: [
      "100% Pain Relief: Quickly puts an end to excruciating toothache and inflammation.",
      "Prevents Bone Loss: Stops oral infection from spreading to your surrounding jaw structures.",
      "Painless Execution: Dr. Shivani's gentle technique makes the extraction of the pulp completely painless.",
      "Natural Look & Chewing: Keeps your natural jaw spacing and chewing power intact.",
      "Affordable Preservation: Highly pocket-friendly pricing compared to complex tooth replacements."
    ],
    faqs: [
      {
        q: "Is a Root Canal Treatment genuinely painless at SHMIK?",
        a: "Yes, absolutely! With Dr. Shivani's polite patient care, advanced local anesthetics, and expert endodontic techniques, patients report that the procedure is as comfortable and painless as a standard composite filling."
      },
      {
        q: "How many sittings does an RCT require?",
        a: "Usually, a standard RCT can be completed in 1 to 2 sittings, depending on the severity of the infection. Dr. Shivani will evaluate the infection using our digital dental X-rays."
      },
      {
        q: "What is a Re-RCT and why is it needed?",
        a: "A Re-RCT is a secondary treatment performed on a tooth that has had a previous root canal elsewhere which has become reinfected due to missed canals or damaged seals. Dr. Shivani Srivastava specializes in highly precise Re-RCT to save these teeth."
      },
      {
        q: "Is it mandatory to get a crown/cap after an RCT?",
        a: "In most cases, yes. After the pulp nerve is removed, the tooth can become brittle over time. A Zirconia crown shields the tooth from cracking under normal biting forces, preserving it for your lifetime."
      },
      {
        q: "How should I care for my treated tooth?",
        a: "Avoid chewing extremely hard or sticky food on the treated side until the permanent crown is placed. Brush and floss normally, keeping excellent hygiene."
      }
    ]
  },
  {
    id: "zirconia-crowns",
    title: "Precision Zirconia Crowns & Capping",
    subtitle: "High-Strength Aesthetic Dental Restorations",
    location: "Vrindavan Colony, Lucknow",
    whatIsIt: "Precision Zirconia Crowns are custom-designed protective caps placed over a damaged, chipped, or root-canal-treated tooth. Made of premium-grade zirconium dioxide, these crowns offer legendary strength and natural translucent aesthetics that perfectly mimic natural enamel. Dr. Shivani Srivastava carefully matches the shade, anatomy, and alignment to ensure a seamless blends.",
    signsNeeded: [
      "A weak tooth that has underwent a root canal treatment",
      "A cracked, chipped, or severely worn down tooth that needs physical shielding",
      "Severe tooth discoloration or staining that cannot be resolved with whitening",
      "A misshapen or poorly aligned tooth that needs cosmetic correction",
      "Protecting tooth implants or holding bridge structures securely"
    ],
    procedureSteps: [
      "Tooth Preparation: Dr. Shivani Srivastava carefully trims a tiny outer layer of the tooth to create a secure bonding foundation.",
      "Digital Custom Impression: A precise dental impression is taken to map the exact contours of your surrounding teeth.",
      "Color Matching: A detailed color chart is utilized alongside your natural teeth to choose the exact hue matching your smile.",
      "Temporary Crown: A protective temporary cap is placed while your custom Zirconia crown is fabricated in our partner premium lab.",
      "Precise Bonding: The permanent Zirconia crown is thoroughly evaluated for comfortable bite alignment and permanently cemented into place."
    ],
    benefits: [
      "Authentic Blending: So precise that even you cannot differentiate between your original tooth and the crown.",
      "Incredible Durability: Resistant to chipping, cracking, or wearing down under daily biting forces.",
      "100% Biocompatible: Zero metal elements, meaning zero allergic reactions or gray lines at your gum line.",
      "Stain-Resistant: Keeps its premium polish and shade for years without fading.",
      "Affordable Premium Care: Premium lab restoration offered at comfortable, pocket-friendly rates."
    ],
    faqs: [
      {
        q: "Will my Zirconia crown look obvious or fake?",
        a: "Not at all! Dr. Shivani Srivastava is highly precise with aesthetic tooth structures. The Zirconia crowns have a natural light-reflective translucent quality, making them indistinguishable from actual teeth."
      },
      {
        q: "How long do Zirconia crowns last?",
        a: "With good oral hygiene (regular brushing, flossing, and dental checkups), a high-quality Zirconia crown can easily last 15 to 20 years or a lifetime."
      },
      {
        q: "Does getting a crown require painful tooth grinding?",
        a: "No. The tooth trimming process is extremely gentle and performed under local anesthesia if required. Patients feel absolutely no pain or discomfort."
      },
      {
        q: "Are metal crowns better than Zirconia?",
        a: "Zirconia is far superior for aesthetics because it is entirely metal-free. It does not leave a dark metallic shadow at the gum line and offers comparable or superior strength to classic metal-fused crowns."
      },
      {
        q: "What is the warranty period on custom crowns?",
        a: "Our Zirconia crowns come with standard multi-year lab warranties, giving you ultimate confidence in your smile's long-term health."
      }
    ]
  },
  {
    id: "braces-aligners",
    title: "Orthodontic Braces & Modern Aligners",
    subtitle: "Dedicated Malocclusion Correction Services",
    location: "Vrindavan Colony, Lucknow",
    whatIsIt: "Orthodontic treatments correct crooked teeth, crowded spacing, and improper bite alignments. We offer a full spectrum of straightening solutions ranging from traditional high-durability metal and ceramic braces to advanced modern clear aligners (invisible braces). Dr. Shivani Srivastava delivers highly personalized care to guide your teeth gently and painlessly into perfect structural harmony.",
    signsNeeded: [
      "Crooked, rotated, or overlapping individual teeth",
      "Large gaps or spaces between teeth restricting proper chewing and smile confidence",
      "Overbite, underbite, crossbite, or open bite patterns causing speech or muscle strain",
      "Mouth breathing, jaw pain, or struggle in maintaining regular clean hygiene due to crowding",
      "Anxiety about smiling in social gatherings due to alignment issues"
    ],
    procedureSteps: [
      "Comprehensive Digital Mapping: Visually examining your mouth structure and taking detailed intraoral scans and clinical photos.",
      "Treatment Roadmapping: Explaining custom aligner paths or classic brace paths with clear timelines, costs, and comfortable milestones.",
      "Fitting & Placement: Mounting custom bracket attachments on teeth (for braces) or delivering your first series of customized clear aligner trays.",
      "Progressive Adjustments: Quick, painless checkups every 4-6 weeks to systematically move the jaws closer to your target profile.",
      "Retention Phase: Providing comfortable retainers once your ideal smile alignment has been completed to keep your pristine smile locked in."
    ],
    benefits: [
      "Perfect Harmony: Elevates your absolute self-esteem with a completely transformed, symmetrical smile.",
      "Improved Chewing & Speech: Restores correct biological bite mechanics and vocal clarity.",
      "Hygienic Maintenance: Straight teeth are incredibly easy to brush and floss, reducing risk of future cavity decay.",
      "Advanced Invisible Options: Modern clear aligners let you straighten your teeth completely invisibly without metallic brackets.",
      "Expert Dedicated Care: Dr. Shivani's gentle supervision keeps the progressive movement comfortable and pain-free."
    ],
    faqs: [
      {
        q: "What is the key difference between metallic braces and clear aligners?",
        a: "Metallic braces are permanently bonded to your teeth and adjusted periodically by the dentist. Clear aligners are series of removable, completely transparent plastic trays that you wear for 22 hours a day, offering ultimate comfort and aesthetics."
      },
      {
        q: "Are teeth straighteners painful to go through?",
        a: "There is a slight feeling of pressure for 2 to 3 days after first receiving braces or switching aligner trays. This is completely normal and shows your teeth are moving correctly. It is never severe pain."
      },
      {
        q: "What is the average treatment duration?",
        a: "Active orthodontic treatments take anywhere from 10 to 18 months, depending on the complexity of your bone alignment. Simple tooth gaps can be resolved in under a year."
      },
      {
        q: "Is there any age limit for braces or aligners?",
        a: "No age limit! While orthodontic treatments are very common in teenagers, adults of any age can safely straighten their teeth and enjoy an amazing cosmetic alignment."
      },
      {
        q: "What foods should I avoid with braces?",
        a: "With classic braces, avoid extremely sticky elements (like chewing gums) or hard elements (like biting raw apples directly). With clear aligners, you simply remove the trays to eat whatever food you love!"
      }
    ]
  },
  {
    id: "cosmetics-jewelry",
    title: "Cosmetic Dentistry & Premium Dental Jewelry",
    subtitle: "Aesthetic Enhancements & Sparkling Smile Designs",
    location: "Vrindavan Colony, Lucknow",
    whatIsIt: "Cosmetic dentistry transforms the visual quality of your teeth and gums. We combine advanced scaling, professional tooth whitening, smile symmetry correction, and safe custom dental jewelry. Dental jewelry involves bonding a tiny, sparkling therapeutic crystal or gem onto the tooth's surface without any drilling or permanent damage, giving you a custom, non-invasive sparkle.",
    signsNeeded: [
      "Yellowing, stained, or dull teeth due to caffeine, food, or aging",
      "Minor chips, fractures, or uneven tooth shapes disrupting smile symmetry",
      "Stain build-ops and yellow tartar scaling issues that need deep hygiene polishing",
      "Desire for a distinct, high-status artistic touch like a small diamond or gem sparkle"
    ],
    procedureSteps: [
      "Smile Consultation: We discuss your exact cosmetic aspirations and determine the best shade or gem placement.",
      "Gentle Polishing & Prep: The target teeth are safely polished and cleaned using deep hygienic scaling.",
      "Therapeutic Bonding: Specialized cosmetic adhesive is applied to place the dental jewelry or custom veneers.",
      "Curing Light: A high-tech curing light instantly cures the bond in seconds, completely painlessly.",
      "Perfect Polish: Confirming complete comfort, bite alignment, and delivering a spectacular mirror finish."
    ],
    benefits: [
      "Stunning First Impressions: Instant, stunning smile transformation that shifts how you interact with the world.",
      "100% Non-Invasive: Our premium dental jewelry requires zero drilling, zero pain, and can be removed easily whenever desired.",
      "Medical Grade Safety: We use only strictly hypoallergenic, certified lead-free dental jewels and crystals.",
      "Affordable Makeovers: Quick smile designs that are comfortable and incredibly budget-friendly."
    ],
    faqs: [
      {
        q: "Does placing dental jewelry damage my original enamel?",
        a: "Absolutely not! Dr. Shivani Srivastava uses medical-grade liquid enamel adaptors that gently bond the gem to the tooth. There is zero drilling and zero tooth damage."
      },
      {
        q: "How long does a dental jewel stay securely placed?",
        a: "It can stay firmly bonded for several months up to a few years, depending on your eating patterns and dental care. If you want it removed, Dr. Shivani can polish it off in just 2 minutes."
      },
      {
        q: "Will tooth whitening make my teeth permanently sensitive?",
        a: "We utilize controlled professional whitening formulas along with desensitizing agents that provide wonderful results with minimal to zero sensitivity."
      },
      {
        q: "How often should I get my teeth cleaned and scaled?",
        a: "We recommend getting a professional scaling and polishing done every 6 months to ward off plaque, tartar, gum infections, and bad breath."
      },
      {
        q: "Can I brush my teeth normally with dental jewelry?",
        a: "Yes, you can brush your teeth normally. The micro-crystals are extremely smooth and designed to withstand normal oral care."
      }
    ]
  },
  {
    id: "emergency-care",
    title: "24/7 Midnight Emergency Care & Pain Management",
    subtitle: "Round-the-Clock On-Call Dental Relief",
    location: "Vrindavan Colony, Lucknow",
    whatIsIt: "Severe dental pain, swelling, and tooth fractures don't respect regular business hours. At SHMIK 24x7 Dental Clinic in Lucknow, we provide a dedicated on-call service to manage sudden dental emergencies even at midnight or on major holidays. Call us anytime, and we will get a trained dental professional to resolve severe infections, toothaches, or accident trauma.",
    signsNeeded: [
      "Severe, agonizing toothache that makes sleeping, eating, or drinking impossible",
      "Sudden swelling of the cheek, jaw, or neck indicating an active bacterial abscess",
      "An accidental impact that knocks out, breaks, or fractures a tooth",
      "Continuous, uncontrolled bleeding after home care or a dental extraction elsewhere",
      "Extreme wisdom tooth pain radiating to your ears accompanied by a fever"
    ],
    procedureSteps: [
      "Immediate Phone Triaging: Call our hotline (+91 92367 37372). A professional evaluates your pain symptoms instantly.",
      "Emergency Clinic Opening / Guidance: If required, the clinic is prepared to receive you immediately for emergency relief.",
      "Severe Pain Mitigation: Dr. Shivani localizes the infection, administers pain relief, or performs urgent pain-management drainage.",
      "Definitive Solution Support: Performing emergency root cleaning, pulp extirpation, or broken tooth protection to stop infection.",
      "Post-Care Prescription: Providing anti-inflammatory and antiseptic instructions to guarantee comfort."
    ],
    benefits: [
      "Instant Midnight Support: No need to suffer through the night in agony. Call and get a professional solution.",
      "Prevents Severe Complications: Swift emergency infection control stops bacteria from spreading to the nervous system.",
      "Gentle Pain Management: Gentle clinical intervention designed to put a complete end to severe toothaches.",
      "Lucknow's Only Dedicated 24/7 Dental Hotline: Always active for Vrindavan Colony and adjacent neighborhoods."
    ],
    faqs: [
      {
        q: "Can I truly call the clinic at 1:00 AM or 3:00 AM for dental pain?",
        a: "Yes, absolutely! Our clinic takes pride in its '24x7 Emergency' promise. If you are experiencing severe, unbearable dental pain, call +91 92367 37372 immediately."
      },
      {
        q: "What should I do if a tooth gets completely knocked out in an accident?",
        a: "Pick up the knocked-out tooth by the crown (never touch the root), gently rinse it in clean water, and place it in a cup of cold milk or moist saliva. Call us (+91 92367 37372) immediately. If we treat it within 1 hour, there is a very high success rate of putting it back!"
      },
      {
        q: "Are midnight emergency services extremely expensive?",
        a: "No. SHMIK 24x7 Dental Clinic is built on patient empathy and affordability. Emergency consults are priced very reasonably to make sure pain relief is accessible to everyone."
      },
      {
        q: "How fast can I be seen in an emergency?",
        a: "Once you call our hotline, we evaluate your condition and schedule an immediate slot at the clinic, often preparing the medical chair before you even arrive."
      },
      {
        q: "What if it is just a minor toothache?",
        a: "You can still call us or request an appointment. We will guide you on whether it can be managed with medication overnight or needs immediate clinical attention."
      }
    ]
  },
  {
    id: "dental-fillings",
    title: "Tooth Fillings & Meticulous Restorations",
    subtitle: "Premium Tooth-Colored Composite Fillings",
    location: "Vrindavan Colony, Lucknow",
    whatIsIt: "Tooth fillings restore teeth damaged by decay or minor chipping back to their health and natural shape. At SHMIK 24x7 Dental Clinic, we utilize premium composite restorations (tooth-colored fillings) that bond chemically to the natural structure, sealing out bacteria and matching the aesthetic color of your teeth.",
    signsNeeded: [
      "Dark spots, holes, or visible cavities on your teeth surfaces",
      "Consistent food lodgment or trapping in between specific teeth",
      "Minor sensitivity when drinking cold water or consuming sweet foods",
      "Rough edges or minor fractures on your front teeth disrupting your tongue's feel",
      "Old, dark silver amalgam fillings that look unsightly or have worn outer seals"
    ],
    procedureSteps: [
      "Visual & Explorer Examination: Dr. Shivani Srivastava diagnoses the decay patterns using digital exploration tools.",
      "Decay Clean-out: The decayed, soft tooth structure is gently and completely removed without any discomfort.",
      "Enamel Bonding: A medical-grade composite bonding agent is brushed onto the cavity's microscopic surfaces.",
      "Composite Layers: The tooth-colored filling material is carefully placed in layers, perfectly sculpting the natural tooth grooves.",
      "Laser Curing & Polish: A high-tech curing light seals the filling instantly. We then smooth and polish it to feel completely natural to your bite."
    ],
    benefits: [
      "Natural Elegance: Blends seamlessly with your enamel, making the restoration virtually invisible.",
      "Halts Decay Spreading: Air-tight seal completely prevents bacteria from reaching your inner pulp nerve.",
      "Preserves Tooth Structure: Requires far less trimming of your natural tooth compared to old silver fillings.",
      "Fast & Durable: The filling is fully cured in seconds, and you can chew normally on it immediately.",
      "Pocket-Friendly Protection: An incredibly affordable way to save your tooth from needing complex root canals later."
    ],
    faqs: [
      {
        q: "How long does a standard composite filling take?",
        a: "A single tooth filling is extremely fast, taking only about 15 to 25 minutes from prep to polish."
      },
      {
        q: "Is the teeth filling procedure painful?",
        a: "No, filling decay is virtually painless. For deeper cavities, we apply a gentle numbing gel or anesthetic to make the experience completely stress-free."
      },
      {
        q: "Can I eat immediately after a composite filling?",
        a: "Yes! Since composite fillings are completely cured and hardened instantly using our specialized laser curing light, you can eat and drink immediately after leaving the clinic."
      },
      {
        q: "Should I replace my old black amalgam fillings?",
        a: "If your old silver fillings are chipped, leaking, causing dark stains, or if you simply prefer teeth-colored aesthetics, Dr. Shivani Srivastava can safely replace them with clean composite materials."
      },
      {
        q: "How long do composite tooth restorations last?",
        a: "With correct brushing, flossing, and regular cleanings, tooth-colored composite fillings easily last 7 to 10 years or longer."
      }
    ]
  }
];
