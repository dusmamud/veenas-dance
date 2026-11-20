// MOCK DATA — all content for Veena's School of Indian Dances lives in this ONE file.
// Swap names, prices, dates and stories here when the client approves real details.
// Brand details (phone/email) are taken from the client's original website screenshot;
// location, prices in AUD, dates and testimonials are realistic mock placeholders.
export const site = {
  name: "Veena's School of Indian Dances",
  shortName: "Veena's School",
  tagline: 'Where tradition learns to move',
  url: 'https://veenas-dance.pages.dev',
  description:
    "Veena's School of Indian Dances in Melbourne teaches Bharatanatyam, Mohiniyattam, Kuchipudi and Hip Hop for ages 5 to adult — small classes, a caring Guru, and a clear path from first adavu to Arangetram. Book a free trial class.",
  year: 2026,
};

export const contact = {
  email: 'info@veenasschoolofindiandances.com.au',
  phoneDisplay: '0470 552 003',
  phoneIntl: '+61 470 552 003',
  phoneHref: 'tel:+61470552003',
  hours: 'Mon–Fri 4pm–8pm · Sat 9am–4pm (AEST)',
  location: 'Brunswick East, Melbourne, VIC, Australia',
  address: 'Studio 2, 184 Lygon Street, Brunswick East VIC 3057 (mock address)',
};

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/veenasschool.melbourne', handle: '@veenasschool.melbourne' },
  { label: 'Facebook', href: 'https://www.facebook.com/veenasschoolofindiandances', handle: 'VeenasSchoolofIndianDances' },
  { label: 'YouTube', href: 'https://www.youtube.com/@VeenasSchoolofIndianDances', handle: '@VeenasSchoolofIndianDances' },
];

export const rating = { value: 4.9, count: 127, source: 'Google reviews (mock)' };

export const stats = [
  { value: 18, suffix: '+', label: 'Years Teaching', sub: 'in Melbourne' },
  { value: 650, suffix: '+', label: 'Students Taught', sub: 'ages 5 to adult' },
  { value: 42, suffix: '', label: 'Arangetrams', sub: 'debut solos guided' },
  { value: 120, suffix: '+', label: 'Stage Performances', sub: 'across Victoria' },
];

export const levels = ['Foundation', 'Intermediate', 'Advanced', 'Arangetram Preparation'] as const;

export const courses = [
  {
    slug: 'bharatanatyam',
    title: 'Bharatanatyam',
    origin: 'Tamil Nadu · Temple tradition',
    img: '/images/course-bharatanatyam.webp',
    heroImg: '/images/hero-dancer.webp',
    ages: 'Ages 5+',
    tagline: 'Strength, precision and storytelling — the oldest classical form, taught step by step.',
    short: 'Araimandi posture, adavus, mudras and abhinaya — a complete foundation in the Kalakshetra-inspired tradition.',
    about: [
      'Bharatanatyam is one of the oldest classical dance forms of India, born in the temples of Tamil Nadu. It is built on three pillars — bhava (expression), raga (melody) and tala (rhythm) — and it trains the whole dancer: strong legs in araimandi, precise footwork, eloquent hands and a face that can tell a story without a single word.',
      'At Veena\u2019s School, beginners start with posture, basic adavus (step units) and hand gestures, then progress through alarippu, jatiswaram and shabdam toward varnam — the centrepiece of the repertoire — and finally padams and tillana. Every level has a clear checklist, so students and parents always know what comes next.',
    ],
    learn: ['Araimandi posture & adavu units', 'Single & double hand mudras (asamyuta & samyuta hastas)', 'Abhinaya — facial expression & storytelling', 'Tala & rhythm training with sollukattu', 'Repertoire: alarippu to varnam, padam & tillana', 'Theory: history, terminology & exam preparation'],
    dress: 'Practice saree or salwar kameez with dupatta pinned, ghungroo (ankle bells) from Term 2, hair tied back, no socks.',
    duration: '60 min (Foundation) · 75 min (Intermediate) · 90 min (Advanced)',
    feeHint: 'From $260 / term',
  },
  {
    slug: 'mohiniyattam',
    title: 'Mohiniyattam',
    origin: 'Kerala · The dance of the enchantress',
    img: '/images/course-mohiniyattam.webp',
    heroImg: '/images/course-mohiniyattam.webp',
    ages: 'Ages 8+',
    tagline: 'Grace in white and gold — Kerala\u2019s gentle, swaying classical form.',
    short: 'Lasya-rich movement, soft torso sway and lyrical abhinaya in the white-and-gold kasavu tradition of Kerala.',
    about: [
      'Mohiniyattam, from Kerala, is known as the dance of Mohini the enchantress. Where Bharatanatyam is sculptural and strong, Mohiniyattam is fluid and lyrical — movements roll like paddy fields in the breeze, and expression is subtle, feminine and deeply musical.',
      'Students learn the characteristic swaying torso, basic chuzhippu and adavus, then cholkettu, varnam, padam and tillana in Malayalam and Sanskrit compositions. The form is ideal for older children, teens and adults who love grace, music and nuanced storytelling.',
    ],
    learn: ['Swaying lasya movement & posture', 'Basic adavus & chuzhippu patterns', 'Lyrical abhinaya in Malayalam padams', 'Cholkettu, varnam & tillana repertoire', 'Kasavu costume & jasmine hair styling for stage', 'Kerala music & sopana style appreciation'],
    dress: 'Practice saree (Kerala style preferred for senior levels), hair in a side bun with jasmine for performances.',
    duration: '60 min (Foundation) · 75 min (Intermediate & Advanced)',
    feeHint: 'From $260 / term',
  },
  {
    slug: 'kuchipudi',
    title: 'Kuchipudi',
    origin: 'Andhra Pradesh · Dance-drama',
    img: '/images/course-kuchipudi.webp',
    heroImg: '/images/course-kuchipudi.webp',
    ages: 'Ages 7+',
    tagline: 'Fast feet, bright expression — Andhra\u2019s joyful dance-drama tradition.',
    short: 'Brisk footwork, dramatic character work and the famous brass-plate tarangam — energy with elegance.',
    about: [
      'Kuchipudi, from the village of Kuchipudi in Andhra Pradesh, began as dance-drama performed by travelling troupes. It is quick, bright and theatrical: dancers speak, act and dance, sometimes balancing on the rim of a brass plate in the beloved tarangam.',
      'Our Kuchipudi classes build strong rhythm and expressive acting from the start. Students progress from basic steps and jatis to shabdam, tarangam and character pieces from Bhagavata stories — a wonderful path for children who love drama as much as dance.',
    ],
    learn: ['Basic steps, jatis & brisk footwork', 'Character abhinaya & dialogue delivery', 'Tarangam — dancing on a brass plate (Advanced)', 'Shabdam & Bhagavata story pieces', 'Telugu & Sanskrit composition meaning', 'Stage confidence & dance-drama ensemble work'],
    dress: 'Practice saree or salwar with long pleated fan for senior levels, ghungroo from Term 2.',
    duration: '60 min (Foundation) · 75 min (Intermediate & Advanced)',
    feeHint: 'From $260 / term',
  },
  {
    slug: 'hip-hop',
    title: 'Hip Hop',
    origin: 'Contemporary · Street styles',
    img: '/images/course-hiphop.webp',
    heroImg: '/images/course-hiphop.webp',
    ages: 'Ages 6+ & Teens',
    tagline: 'Groove, freestyle and confidence — high-energy street dance for kids and teens.',
    short: 'Foundations, grooves, choreography and freestyle in a supportive, no-pressure crew environment.',
    about: [
      'Our Hip Hop program brings the same discipline and joy as our classical classes to street styles. Students learn foundational grooves, isolation, footwork and musicality, then build choreography and freestyle confidence across the term.',
      'Classes are grouped by age — Juniors (6–9), Intermediates (10–13) and Teens (14+) — and every term ends with an informal studio showcase for families. No auditions, no experience needed: just sneakers and energy.',
    ],
    learn: ['Grooves, bounce & foundational steps', 'Isolations, footwork & floor basics', 'Choreography & performance skills', 'Freestyle & musicality', 'Crew routines for showcases & events', 'Fitness, coordination & confidence'],
    dress: 'Comfortable street clothes and clean indoor sneakers (no outdoor shoes on the studio floor).',
    duration: '45 min (Juniors) · 60 min (Intermediates & Teens)',
    feeHint: 'From $220 / term',
  },
];

export const timetable = [
  { day: 'Monday', classes: [
    { time: '4:30–5:30pm', name: 'Bharatanatyam Foundation', course: 'Bharatanatyam', age: '5–8 yrs', level: 'Foundation', duration: '60 min', teacher: 'Veena', studio: 'Studio A' },
    { time: '5:45–7:00pm', name: 'Bharatanatyam Intermediate', course: 'Bharatanatyam', age: '9–13 yrs', level: 'Intermediate', duration: '75 min', teacher: 'Veena', studio: 'Studio A' },
    { time: '7:15–8:15pm', name: 'Hip Hop Teens', course: 'Hip Hop', age: '14+ yrs', level: 'All levels', duration: '60 min', teacher: 'Jordan', studio: 'Studio B' },
  ]},
  { day: 'Tuesday', classes: [
    { time: '4:30–5:30pm', name: 'Kuchipudi Foundation', course: 'Kuchipudi', age: '7–11 yrs', level: 'Foundation', duration: '60 min', teacher: 'Veena', studio: 'Studio A' },
    { time: '5:45–7:00pm', name: 'Mohiniyattam Foundation & Intermediate', course: 'Mohiniyattam', age: '8+ yrs', level: 'Foundation–Intermediate', duration: '75 min', teacher: 'Veena', studio: 'Studio A' },
  ]},
  { day: 'Wednesday', classes: [
    { time: '4:15–5:00pm', name: 'Hip Hop Juniors', course: 'Hip Hop', age: '6–9 yrs', level: 'Foundation', duration: '45 min', teacher: 'Jordan', studio: 'Studio B' },
    { time: '5:15–6:15pm', name: 'Hip Hop Intermediates', course: 'Hip Hop', age: '10–13 yrs', level: 'Intermediate', duration: '60 min', teacher: 'Jordan', studio: 'Studio B' },
    { time: '6:30–8:00pm', name: 'Bharatanatyam Advanced', course: 'Bharatanatyam', age: '13+ yrs', level: 'Advanced', duration: '90 min', teacher: 'Veena', studio: 'Studio A' },
  ]},
  { day: 'Thursday', classes: [
    { time: '4:30–5:30pm', name: 'Bharatanatyam Foundation (Batch 2)', course: 'Bharatanatyam', age: '8–12 yrs', level: 'Foundation', duration: '60 min', teacher: 'Ananya', studio: 'Studio A' },
    { time: '5:45–7:00pm', name: 'Kuchipudi Intermediate & Advanced', course: 'Kuchipudi', age: '11+ yrs', level: 'Intermediate–Advanced', duration: '75 min', teacher: 'Veena', studio: 'Studio A' },
  ]},
  { day: 'Saturday', classes: [
    { time: '9:00–10:00am', name: 'Bharatanatyam Beginners (Weekend)', course: 'Bharatanatyam', age: '5–10 yrs', level: 'Foundation', duration: '60 min', teacher: 'Ananya', studio: 'Studio A' },
    { time: '10:15–11:45am', name: 'Arangetram Preparation', course: 'Bharatanatyam', age: 'By invitation', level: 'Arangetram Prep', duration: '90 min', teacher: 'Veena', studio: 'Studio A' },
    { time: '12:00–1:00pm', name: 'Adult Classical (Mixed Forms)', course: 'Bharatanatyam', age: 'Adults', level: 'All levels', duration: '60 min', teacher: 'Veena', studio: 'Studio A' },
    { time: '1:15–2:15pm', name: 'Mohiniyattam Advanced', course: 'Mohiniyattam', age: '14+ yrs', level: 'Advanced', duration: '60 min', teacher: 'Veena', studio: 'Studio A' },
  ]},
];

export const pricing = {
  termWeeks: 10,
  rows: [
    { item: 'Bharatanatyam / Mohiniyattam / Kuchipudi — per term (1 class/week)', price: '$260' },
    { item: 'Hip Hop — per term (1 class/week)', price: '$220' },
    { item: 'Second class per week (any form)', price: '+$180 / term' },
    { item: 'Annual registration fee (per student)', price: '$35' },
    { item: 'Ghungroo (ankle bells) — purchased through the school', price: '$45' },
    { item: 'Costume hire for performances (per event)', price: '$40–$60' },
    { item: 'Arangetram preparation program', price: 'Quoted individually — talk to us' },
  ],
  discounts: [
    { title: 'Sibling discount', text: '10% off term fees for the second child, 15% for the third.' },
    { title: 'Multi-class discount', text: 'Second weekly class is $180 instead of $260 — mix forms freely.' },
    { title: 'Early-bird', text: '5% off when the full term is paid before the term starts.' },
  ],
  policies: [
    { title: 'Missed classes', text: 'One make-up class per term in another batch of the same level, subject to space. Fees are not refunded for missed classes.' },
    { title: 'Costume & recital fees', text: 'Annual recital costume hire is $40–$60 per student. There is no separate recital fee — tickets for Taal are sold separately.' },
    { title: 'Withdrawals', text: 'Two weeks\u2019 written notice before the next term. Mid-term withdrawals are credited, not refunded, except for medical reasons.' },
    { title: 'Payment', text: 'Bank transfer or card at the studio. Term fees are due in Week 1; payment plans are available on request — just ask.' },
  ],
};

export const guru = {
  name: 'Veena Nair',
  role: 'Founder, Guru & Artistic Director',
  img: '/images/guru-veena.webp',
  credentials: ['Trained under renowned gurus in Chennai & Kalamandalam, Kerala', 'Diploma in Bharatanatyam; advanced training in Mohiniyattam & Kuchipudi', '18+ years teaching in Melbourne; 650+ students', 'Choreographer for 42 Arangetrams and 120+ stage productions', 'Working With Children Check (VIC) & First Aid certified'],
  bio: [
    'Veena began dancing at the age of five in Kerala and went on to train intensively in Chennai, where she completed her own Arangetram and performed across India. After moving to Melbourne, she founded Veena\u2019s School of Indian Dances with a single belief: classical dance should be taught with rigour and with joy — never one without the other.',
    'Her teaching is known for its clarity. Every student follows a visible path — Foundation, Intermediate, Advanced, Arangetram Preparation — and every parent knows exactly where their child stands. Veena choreographs all school productions herself and still teaches every classical batch personally, assisted by senior students she has trained.',
    '“Dance is not steps,” she tells new families. “Steps are just how the story travels. We teach the story.”',
  ],
};

export const teachers = [
  { name: 'Veena Nair', role: 'Guru — Bharatanatyam, Mohiniyattam, Kuchipudi', img: '/images/guru-veena.webp', text: 'Founder and principal teacher for all classical forms.' },
  { name: 'Ananya Rao', role: 'Assistant Teacher — Bharatanatyam', img: '/images/teacher-ananya.webp', text: 'Veena\u2019s senior disciple; leads Foundation batches and theory classes.' },
  { name: 'Jordan Lee', role: 'Hip Hop Instructor', img: '/images/teacher-jordan.webp', text: 'Street styles specialist with 10 years of crew and battle experience.' },
];

export const timeline = [
  { year: '2008', title: 'First classes in Melbourne', text: 'Veena starts teaching six students in a community hall in Brunswick.' },
  { year: '2012', title: 'First Arangetram', text: 'The school\u2019s first student debuts solo — a tradition that has now reached 42 Arangetrams.' },
  { year: '2016', title: 'Taal is born', text: 'Our annual recital, Taal — The Rhythm of Dance, sells out its first theatre season.' },
  { year: '2021', title: 'Hip Hop program launches', text: 'Street styles join the classical program, taught with the same care and structure.' },
  { year: '2026', title: 'A studio of our own', text: 'We move into a dedicated two-studio space in Brunswick East (mock milestone).' },
];

export const parentInfo = [
  { title: 'What to wear', text: 'Classical: practice saree or salwar kameez with dupatta; ghungroo from Term 2. Hip Hop: comfortable clothes and clean indoor sneakers. Hair tied back for all classes.' },
  { title: 'What to bring', text: 'A water bottle and a small notebook for theory and practice notes. Please arrive 10 minutes early — classes start on time.' },
  { title: 'Drop-off & pick-up', text: 'Parents drop off at the studio door and are welcome at monthly open classes. Children under 10 must be collected from inside the studio.' },
  { title: 'Photos & consent', text: 'We photograph classes and performances for our gallery and social media only with written parent consent, and we never publish children\u2019s surnames. Opt out any time — no questions asked.' },
];

export const gallery = [
  { img: '/images/hero-dancer.webp', cat: 'Performances', caption: 'Varnam centrepiece — Taal annual recital', alt: 'Bharatanatyam dancer in red and cream costume performing varnam' },
  { img: '/images/gallery-class.webp', cat: 'Classes', caption: 'Saturday Foundation batch in the studio', alt: 'Children learning Bharatanatyam in a bright studio class' },
  { img: '/images/gallery-arangetram.webp', cat: 'Arangetram', caption: 'A debut solo, guided end to end', alt: 'Arangetram debut performance on a decorated stage' },
  { img: '/images/gallery-ghungroo.webp', cat: 'Classes', caption: 'Ghungroo — the sound of practice', alt: 'Close-up of ghungroo ankle bells and dancer feet' },
  { img: '/images/course-mohiniyattam.webp', cat: 'Performances', caption: 'Mohiniyattam in white and gold kasavu', alt: 'Mohiniyattam dancer in white and gold kasavu costume' },
  { img: '/images/gallery-costume.webp', cat: 'Backstage', caption: 'Backstage — temple jewellery and final pleats', alt: 'Dancer preparing costume and jewellery backstage' },
  { img: '/images/course-hiphop.webp', cat: 'Hip Hop', caption: 'Teens crew — end-of-term showcase', alt: 'Hip hop dancer in a dynamic freeze pose' },
  { img: '/images/studio-wide.webp', cat: 'Classes', caption: 'Our Brunswick East studio', alt: 'Wide view of the dance studio with Nataraja statue' },
  { img: '/images/event-taal.webp', cat: 'Performances', caption: 'Taal — The Rhythm of Dance, finale', alt: 'Group classical dance performance on stage under spotlights' },
  { img: '/images/arangetram-stage.webp', cat: 'Arangetram', caption: 'Arangetram debut with live orchestra', alt: 'Arangetram debut solo on stage with live Carnatic musicians' },
  { img: '/images/troupe-performance.webp', cat: 'Performances', caption: 'The troupe at a Melbourne wedding', alt: 'Dance troupe performing at a wedding celebration' },
  { img: '/images/teacher-students.webp', cat: 'Classes', caption: 'Guided practice in Studio A', alt: 'Teacher guiding students during class, seen from behind' },
];

export const events = [
  {
    slug: 'taal-rhythm-of-dance-2027',
    title: 'Taal — The Rhythm of Dance',
    date: '2027-06-19',
    dateDisplay: 'Saturday, 19 June 2027 · 6:30pm',
    venue: 'Clocktower Centre, Moonee Ponds (mock venue)',
    img: '/images/event-taal.webp',
    excerpt: 'Our flagship annual recital — all four forms, one stage, and the Arangetram-year students leading the finale.',
    body: [
      'Taal is the night the whole school works toward: every batch, every form, one stage. Bharatanatyam, Mohiniyattam and Kuchipudi classes present items from their repertoire, the Hip Hop crews bring the energy, and our Arangetram-preparation students lead the closing tillana.',
      'Families are seated by tier — Platinum and Gold in the dress circle, Silver and Bronze in the stalls — and every ticket includes the printed program. Children performing do not need a ticket. Doors open at 5:45pm; the show runs about two hours with one interval.',
    ],
    tickets: [
      { tier: 'Platinum', price: 32 },
      { tier: 'Gold', price: 27 },
      { tier: 'Silver', price: 25 },
      { tier: 'Bronze', price: 20 },
    ],
  },
  {
    slug: 'abhinaya-workshop-2027',
    title: 'Abhinaya Weekend Workshop',
    date: '2027-03-13',
    dateDisplay: 'Saturday, 13 March 2027 · 10am–3pm',
    venue: 'Veena\u2019s School Studio, Brunswick East',
    img: '/images/event-workshop.webp',
    excerpt: 'A one-day deep dive into facial expression and storytelling for Intermediate and Advanced students.',
    body: [
      'Abhinaya — the art of expression — is where good dancers become storytellers. This one-day workshop breaks down the navarasas (nine emotions), eye movements and character work, with live feedback on each student\u2019s chosen padam.',
      'Open to Intermediate and Advanced students of any classical form. Places are limited to 20 so everyone performs and receives notes. Bring lunch, a notebook and one item you are working on.',
    ],
    tickets: [
      { tier: 'Student', price: 45 },
      { tier: 'Observer (parent)', price: 15 },
    ],
  },
  {
    slug: 'open-day-free-trials-2027',
    title: 'Open Day & Free Trial Classes',
    date: '2027-01-23',
    dateDisplay: 'Saturday, 23 January 2027 · 9am–1pm',
    venue: 'Veena\u2019s School Studio, Brunswick East',
    img: '/images/studio-wide.webp',
    excerpt: 'Try every form in one morning — 30-minute taster classes, meet Guru Veena, and enrol for Term 1 on the day.',
    body: [
      'Thinking about dance for 2027? Our Open Day runs free 30-minute taster classes in Bharatanatyam, Mohiniyattam, Kuchipudi and Hip Hop across the morning. No costume or experience needed — just comfortable clothes.',
      'Meet Guru Veena, see the studios, ask about levels, fees and Arangetram pathways, and watch senior students demonstrate each form. Enrolments taken on the day receive the early-bird discount for Term 1.',
    ],
    tickets: [{ tier: 'Free entry — bookings preferred', price: 0 }],
  },
];

export const testimonials = [
  { quote: 'My daughter started at six, shy and unsure. Three years on she walks into class like she owns the stage — Veena teaches discipline and confidence in equal measure.', name: 'Priya S.', role: 'Parent — Bharatanatyam, Foundation to Intermediate', img: '/images/welcome-dancer.webp' },
  { quote: 'As an adult beginner I was nervous, but the Saturday adult class is the highlight of my week. Clear levels, kind corrections, real progress.', name: 'Meera K.', role: 'Adult student — Mohiniyattam', img: '/images/course-mohiniyattam.webp' },
  { quote: 'The Arangetram preparation was extraordinary — choreography, live musicians, costume, everything guided. It was the proudest day of our family\u2019s life.', name: 'Lakshmi & Raj T.', role: 'Parents — Arangetram 2025', img: '/images/gallery-arangetram.webp' },
  { quote: 'My son does Hip Hop on Wednesdays and counts down the days. Jordan makes hard choreography feel like a game, and the showcase had us all cheering.', name: 'Daniel M.', role: 'Parent — Hip Hop Intermediates', img: '/images/course-hiphop.webp' },
  { quote: 'Transparent fees, a real timetable, make-up classes when we travel — as a parent, the organisation matters as much as the teaching. Both are excellent here.', name: 'Anitha R.', role: 'Parent — Kuchipudi', img: '/images/course-kuchipudi.webp' },
  { quote: 'I joined for fitness and stayed for the storytelling. Learning abhinaya changed how I watch every performance now.', name: 'Sarah W.', role: 'Adult student — Bharatanatyam', img: '/images/blog-beginner.webp' },
];

export const faqs = [
  { q: 'Can my child try a class before enrolling?', a: 'Yes — your first class is a free trial, with no obligation. Book through the Book a Free Trial page, wear comfortable clothes, and arrive 10 minutes early. Parents are welcome to watch the trial class.' },
  { q: 'What age can children start?', a: 'Bharatanatyam from age 5, Hip Hop from 6, Kuchipudi from 7 and Mohiniyattam from 8. Adults are welcome in every form — our Saturday adult classical class is mixed-level and beginner-friendly.' },
  { q: 'My child has no dance experience. Is that okay?', a: 'Absolutely. Foundation classes assume nothing. Students are grouped by age and level, and the first term focuses on posture, rhythm and enjoying movement before any repertoire.' },
  { q: 'What is an Arangetram, and how long does it take to reach?', a: 'An Arangetram is a dancer\u2019s debut solo performance — roughly 2 hours of full repertoire with live musicians, marking graduation from student to performer. Most students take 6–8 years of consistent training to be ready; our Arangetram Preparation level is by invitation when Guru Veena judges a student ready.' },
  { q: 'What should students wear and bring?', a: 'Classical students wear a practice saree or salwar kameez with dupatta, with ghungroo from Term 2. Hip Hop students wear comfortable clothes and clean indoor sneakers. Everyone brings a water bottle and a practice notebook.' },
  { q: 'How much does it cost, and are there discounts?', a: 'Classical forms are $260 per 10-week term and Hip Hop is $220, plus a $35 annual registration. Siblings receive 10–15% off, a second weekly class is discounted to $180, and early-bird payment saves 5%. See the Pricing page for the full fee table and policies.' },
  { q: 'What happens if we miss a class?', a: 'Each student can take one make-up class per term in another batch at the same level, subject to space. Please let us know in advance where possible.' },
  { q: 'Do students perform on stage?', a: 'Yes. Every student performs at Taal, our annual recital, and senior students perform at community and festival events across Melbourne through the year.' },
];

export const blogPosts = [
  {
    slug: 'beginners-guide-bharatanatyam',
    title: 'A Beginner\u2019s Guide to Bharatanatyam: What Your First Term Actually Looks Like',
    category: 'Guides',
    author: 'Veena Nair',
    authorRole: 'Guru & Artistic Director',
    date: '2026-11-05',
    readingTime: '6 min read',
    excerpt: 'Araimandi, adavus, mudras — the words sound big, but the first term is friendly, structured and fun. Here is exactly what beginners learn, week by week.',
    img: '/images/blog-beginner.webp',
    body: [
      'Every Bharatanatyam journey starts the same way: standing in araimandi, knees bent and turned out, wondering how something that looks so graceful can make your thighs burn. That burn is famous — and temporary. Within a few weeks, the posture that felt impossible becomes the place your body goes without thinking. That is the quiet magic of a well-taught first term: nothing is rushed, and everything builds.',
      'The first thing beginners learn is not a dance at all. It is the language. Adavus are the basic step units — the alphabet of the form — and each one combines feet, arms, eyes and head in a set pattern. Students also meet the mudras, the hand gestures that will later become words: kataka, alapadma, pataka. In class we teach them with stories, because a five-year-old remembers “the lotus opening” far better than a Sanskrit list.',
      'Rhythm arrives early too. Bharatanatyam is danced to tala, a repeating cycle of beats, and beginners clap, count and step to sollukattu — spoken rhythm syllables — long before they dance to recorded music. Parents are often surprised at how quickly children internalise complex rhythms when they are taught through the body first and theory second.',
      'By the end of the first term, a Foundation student can hold araimandi with correct alignment, perform the first sets of adavus in three speeds, name and show the single-hand mudras, and perform a short alarippu-style opening sequence. Just as importantly, they know the classroom culture: how to greet the Guru, how to tie ghungroo, how to practise ten minutes a day without it becoming a battle at home.',
      'If you are choosing a school, ask to see the level structure. A good school can tell you exactly what Foundation, Intermediate and Advanced each contain, and what an Arangetram requires years down the track. Dance training is a long road — it should be a mapped one. And if your child comes home from the trial class demonstrating a mudra at the dinner table, that is the oldest sign in the world that the journey has begun.',
    ],
  },
  {
    slug: 'what-is-arangetram',
    title: 'What Is an Arangetram? A Parent\u2019s Honest Guide',
    category: 'For Parents',
    author: 'Veena Nair',
    authorRole: 'Guru & Artistic Director',
    date: '2026-10-22',
    readingTime: '7 min read',
    excerpt: 'Two hours on stage, live musicians, years of practice — an Arangetram is a graduation, a celebration and a big family decision. Here is what it involves and when a student is ready.',
    img: '/images/gallery-arangetram.webp',
    body: [
      'The word Arangetram comes from Tamil: arangam, the stage, and etram, ascending. It is the moment a student ascends the stage alone for the first time as a complete performer — typically around two hours of full classical repertoire, danced with live musicians, in full costume and jewellery, before an audience of family, friends and the wider community.',
      'It is best understood as a graduation. Just as a music student might sit a final recital examination, the Arangetram dancer presents the complete margam — the traditional sequence from alarippu through varnam to tillana — demonstrating technique, stamina, rhythm and, above all, abhinaya: the expressive storytelling that separates a performer from a student.',
      'Readiness is the Guru\u2019s call, and it is not only about steps. At our school, a student is invited into Arangetram Preparation when their technique is secure, their varnam can hold an audience for thirty minutes, and — this matters most — they have the maturity to rehearse seriously for six to nine months. Most students reach that point after six to eight years of consistent training. There is no fixed age, and rushing helps no one: an Arangetram should be a triumph, not an endurance test.',
      'For families, the honest conversation includes cost and effort. Beyond preparation classes, there are musicians, theatre hire, costume, invitations and catering to plan. Schools should give you a clear, itemised picture early — ask for it. What families consistently tell us afterwards, though, is that the day becomes a landmark: grandparents flying in, a teenager standing tall in her heritage, a confidence that carries into every interview and presentation afterwards.',
      'If your child is a few years into training, start the conversation early and casually. Watch an Arangetram together — most schools welcome prospective families — and let your child see what the summit looks like. The path is long, but it is walked one adavu at a time, and every great Arangetram began with a five-year-old in a practice saree, learning to bend her knees and smile at the same time.',
    ],
  },
  {
    slug: 'mohiniyattam-vs-bharatanatyam',
    title: 'Mohiniyattam vs Bharatanatyam: Which Classical Form Suits Your Child?',
    category: 'Guides',
    author: 'Ananya Rao',
    authorRole: 'Assistant Teacher',
    date: '2026-10-08',
    readingTime: '5 min read',
    excerpt: 'One is sculptural and strong, the other fluid and lyrical. Both are beautiful — the right choice depends on your child\u2019s temperament, not on which is “better”.',
    img: '/images/blog-mohini.webp',
    body: [
      'Parents often ask us which form is “better” — Bharatanatyam or Mohiniyattam. It is the wrong question, and we say so kindly. These are two complete classical languages with different personalities. The right question is: which language will your child love speaking for the next ten years?',
      'Bharatanatyam, from Tamil Nadu, is architecture in motion. The araimandi posture is deep and grounded, the movements are geometric, the footwork is percussive and precise. Children who love structure, maths-like rhythm and a satisfying physical challenge often thrive here. It is also the most physically demanding of the two at the start — those first months of araimandi build serious leg strength.',
      'Mohiniyattam, from Kerala, is water in motion. The torso sways in continuous, rolling curves; the steps are soft; the expression is subtle and lyrical rather than dramatic. It tends to suit older children, teens and adults, and students drawn to music, poetry and nuance. Do not mistake gentle for easy — sustaining that fluid control for a full varnam requires deep core strength and patience.',
      'Practical differences matter too. Bharatanatyam classes here start from age five; Mohiniyattam from eight, because its control develops best in slightly older bodies. Costumes differ — the pleated silk fan of Bharatanatyam versus the white-and-gold kasavu of Mohiniyattam — and so does the music: Carnatic compositions in Tamil and Telugu for one, Malayalam sopana-inflected pieces for the other.',
      'Our honest advice: watch both. Bring your child to a trial class in each form, and watch their face, not their feet. Children choose with their whole bodies — one form will make them lean forward. That lean is worth more than any comparison chart, including this one. And remember, many of our senior students eventually study both. The forms are different languages, and bilingual dancers are richer for it.',
    ],
  },
];

// ── Upgrade additions (mock) ──────────────────────────────────────────────
export const teachersFull = [
  {
    slug: 'veena-nair', name: 'Veena Nair', role: 'Founder, Guru & Artistic Director',
    forms: 'Bharatanatyam · Mohiniyattam · Kuchipudi', img: '/images/guru-veena.webp',
    lineage: 'Disciple of gurus in Chennai (Kalakshetra tradition) and Kalamandalam, Kerala',
    years: '18+ years teaching',
    bio: [
      'Veena began dancing at five in Kerala and trained intensively in Chennai, completing her own Arangetram before performing across India. Her Bharatanatyam lineage traces to the Kalakshetra tradition — known for clarity, geometry and devotion — and her Mohiniyattam training comes from Kalamandalam, Kerala\u2019s legendary arts university.',
      'Since founding the school in Melbourne in 2008 (mock), she has taught 650+ students, choreographed 42 Arangetrams and more than 120 stage productions. She still teaches every classical batch personally, because she believes a Guru should know every student\u2019s araimandi by sight.',
      'Veena holds a Diploma in Bharatanatyam, advanced training in Mohiniyattam and Kuchipudi, a current Victorian Working With Children Check and First Aid certification.',
    ],
    quote: 'Dance is not steps. Steps are just how the story travels — we teach the story.',
  },
  {
    slug: 'ananya-rao', name: 'Ananya Rao', role: 'Assistant Teacher — Bharatanatyam',
    forms: 'Bharatanatyam · Theory & Nattuvangam basics', img: '/images/teacher-ananya.webp',
    lineage: 'Senior disciple of Guru Veena Nair; Arangetram 2016 (mock)',
    years: '9 years teaching',
    bio: [
      'Ananya joined Veena\u2019s School as a shy nine-year-old and completed her Arangetram in 2016. She now leads the Foundation batches and theory classes, and is famous among parents for practice notes so clear that children actually follow them.',
      'She specialises in the early years: posture without tears, rhythm through games, and mudras taught as stories. Ananya also conducts nattuvangam (hand cymbals) for school performances and holds a current Victorian Working With Children Check and First Aid certification.',
    ],
    quote: 'A five-year-old remembers “the lotus opening” long after she forgets a Sanskrit list. Teach the story first.',
  },
  {
    slug: 'jordan-lee', name: 'Jordan Lee', role: 'Hip Hop Instructor',
    forms: 'Hip Hop · Street styles · Freestyle', img: '/images/teacher-jordan.webp',
    lineage: 'Melbourne street-dance crews; 10 years of battle and showcase experience (mock)',
    years: '10 years teaching',
    bio: [
      'Jordan brings a decade of Melbourne crew, battle and showcase experience to our Hip Hop program. His classes teach real foundations — groove, bounce, isolations, footwork — with the same structure and respect as our classical program.',
      'Parents love that Jordan\u2019s room is high-energy but never high-pressure: no auditions, clear progressions, and an end-of-term showcase where every crew performs. Jordan holds a current Victorian Working With Children Check and First Aid certification.',
    ],
    quote: 'Confidence is a skill. We practise it like any other step — every single class.',
  },
];

export const ageGroups = [
  { slug: 'little-dancers', title: 'Little Dancers', ages: 'Ages 5–7', img: '/images/little-dancers.webp', text: 'First steps through stories and games — posture, rhythm and mudras taught as play, in 45–60 minute classes with a parent viewing area.', classes: ['Bharatanatyam Foundation (Sat & Mon)', 'Hip Hop Juniors from age 6'], note: 'Best start: Bharatanatyam Foundation, Saturday 9am with Ananya.' },
  { slug: 'juniors', title: 'Juniors', ages: 'Ages 8–12', img: '/images/gallery-class.webp', text: 'The building years — full adavu sets, first repertoire items, theory notebooks and a first taste of the Taal stage.', classes: ['Bharatanatyam Foundation & Intermediate', 'Kuchipudi Foundation', 'Mohiniyattam Foundation (8+)', 'Hip Hop Intermediates (10–13)'], note: 'Most juniors take one class a week; keen dancers add a second form at the multi-class discount.' },
  { slug: 'teens', title: 'Teens', ages: 'Ages 13–17', img: '/images/gallery-arangetram.webp', text: 'Serious training with serious joy — varnam-level repertoire, abhinaya depth, performance troupe opportunities and the Arangetram pathway.', classes: ['Bharatanatyam Intermediate & Advanced', 'Kuchipudi Intermediate & Advanced', 'Mohiniyattam Advanced (14+)', 'Hip Hop Teens'], note: 'Teens preparing for Arangetram join the Saturday preparation batch by invitation.' },
  { slug: 'adults', title: 'Adults', ages: 'Ages 18+', img: '/images/teacher-students.webp', text: 'Beginners absolutely welcome — many of our adult students had never danced before. Fitness, culture, music and one hour a week that is entirely yours.', classes: ['Adult Classical — mixed forms (Sat 12pm)', 'Mohiniyattam Foundation for adults', 'Private lessons by arrangement'], note: 'No leotards, no judgement — practice saree or comfortable salwar, and a water bottle.' },
];

export const terms2027 = [
  { term: 'Term 1', dates: 'Mon 25 Jan – Sat 3 Apr 2027', weeks: 10, notes: 'Open Day & free trials: Sat 23 Jan. No classes Fri 26 Jan (Australia Day) or Mon 8 Mar (Labour Day) — make-ups in Week 10.' },
  { term: 'Term 2', dates: 'Mon 19 Apr – Sat 26 Jun 2027', weeks: 10, notes: 'Taal — The Rhythm of Dance: Sat 19 Jun, Clocktower Centre. Dress rehearsal Thu 17 Jun (evening, students only).' },
  { term: 'Term 3', dates: 'Mon 12 Jul – Sat 18 Sep 2027', weeks: 10, notes: 'Mid-year exams & level assessments in Weeks 8–9. Abhinaya workshop weekend: 14–15 Aug (mock).' },
  { term: 'Term 4', dates: 'Mon 4 Oct – Sat 11 Dec 2027', weeks: 10, notes: 'Arangetram season: Oct–Nov (dates per family). End-of-year studio showcase & awards: Sat 11 Dec.' },
];
export const keyDates2027 = [
  { date: 'Sat 23 Jan 2027', event: 'Open Day & Free Trial Classes', href: '/events/open-day-free-trials-2027/' },
  { date: 'Sat 13 Mar 2027', event: 'Abhinaya Weekend Workshop', href: '/events/abhinaya-workshop-2027/' },
  { date: 'Sat 19 Jun 2027', event: 'Taal — The Rhythm of Dance (annual recital)', href: '/events/taal-rhythm-of-dance-2027/' },
  { date: 'Weeks 8–9, Term 3', event: 'Level assessments & exams', href: '/term-dates/' },
  { date: 'Sat 11 Dec 2027', event: 'End-of-year showcase & awards', href: '/term-dates/' },
];

export const arangetramInfo = {
  img: '/images/arangetram-stage.webp',
  readiness: ['Technique secure across the full margam — alarippu to tillana', 'A varnam that can hold an audience for 30 minutes', 'Abhinaya maturity: padams performed with understanding, not imitation', 'Stamina for a two-hour solo with live musicians', 'Six to nine months of serious, consistent rehearsal commitment'],
  included: ['Personal choreography & full margam preparation by Guru Veena', 'Weekly preparation batch + private lessons in the final term', 'Live Carnatic orchestra coordination (vocal, mridangam, violin, nattuvangam)', 'Costume, jewellery & make-up guidance (hire or tailor)', 'Theatre booking, lighting & stage rehearsal management', 'Invitation, program & photography guidance for families', 'A clear, itemised budget before you commit — no surprises'],
  steps: [
    { n: '01', t: 'Invitation', d: 'Guru Veena invites a student whose technique, expression and maturity are ready — usually after 6–8 years of training.' },
    { n: '02', t: 'Family meeting', d: 'We map the full picture together: repertoire, timeline, itemised costs and what the preparation months look like.' },
    { n: '03', t: 'Preparation', d: 'Weekly preparation batch plus private lessons; the margam is polished item by item with live-music rehearsals.' },
    { n: '04', t: 'The debut', d: 'A two-hour solo on a theatre stage with live orchestra — family, friends and community celebrating a graduation years in the making.' },
  ],
  debuts: [
    { name: 'Shruti', year: '2026', note: 'Bharatanatyam — “She owned the stage from the first alarippu.”' },
    { name: 'Devika', year: '2025', note: 'Bharatanatyam — now assisting Foundation batches.' },
    { name: 'Anjali', year: '2025', note: 'Mohiniyattam — the school\u2019s first Mohiniyattam debut.' },
    { name: 'Kavya', year: '2024', note: 'Bharatanatyam — performed her varnam at two Melbourne festivals since.' },
  ],
};

export const childSafety = {
  img: '/images/teacher-students.webp',
  commitments: [
    { title: 'Victorian Child Safe Standards', text: 'We align our policies and daily practice with Victoria\u2019s 11 Child Safe Standards — child safety is in our policies, our hiring, our studio layout and our culture, not just on this page.' },
    { title: 'Working With Children Checks', text: 'Every teacher and regular volunteer holds a current Victorian Working With Children Check (WWCC), verified before their first class and re-checked annually. First Aid certification is held by all lead teachers.' },
    { title: 'Supervision & pick-up', text: 'Children under 10 are released only to a parent or a nominated adult, from inside the studio. Students wait inside — never on the street — and two adults are present or within sight during children\u2019s classes.' },
    { title: 'Photo & video consent', text: 'We photograph or film students only with written parent consent (collected at enrolment, changeable any time). We never publish a child\u2019s surname, and class photos focus on dance, not faces, wherever possible.' },
    { title: 'Safe communication', text: 'All communication about children goes through parents — teachers do not privately message students. Class updates use the school email and parent group channels only.' },
    { title: 'Speaking up', text: 'Any parent or student can raise a concern directly with Guru Veena, in person or at info@veenasschoolofindiandances.com.au. Concerns are taken seriously, documented, and — where required — reported to the Commission for Children and Young People or Victoria Police.' },
  ],
  code: ['Treat every child with respect, patience and cultural sensitivity', 'No physical correction without asking — adjustments are demonstrated or verbal first', 'Changing for performances happens in designated areas with adult supervision at the door, never inside', 'Bullying, exclusion and body-shaming are not tolerated — in class or in the parent chat'],
};

export const hireInfo = {
  img: '/images/troupe-performance.webp',
  packages: [
    { title: 'Weddings & Receptions', price: 'From $650 (mock)', text: 'A 15–25 minute classical or fusion set that stops the room — Bharatanatyam, Mohiniyattam and Kuchipudi items, plus a welcome dance for the couple\u2019s entrance if you wish.' },
    { title: 'Festivals & Community Events', price: 'From $450 (mock)', text: 'Stage-ready group choreography for cultural festivals, school fetes and council events across Melbourne — 10–30 minutes, MC notes and music supplied.' },
    { title: 'Corporate & Cultural Programs', price: 'From $850 (mock)', text: 'Performances and interactive workshops for Diwali, Harmony Week and cultural-awareness programs — including a short “try the mudras” segment audiences love.' },
  ],
  includes: ['Professional troupe of senior students & teachers (4–10 dancers)', 'Traditional costumes, jewellery and props included', 'Music, MC script notes and a pre-event planning call', 'Public liability insured (mock detail — confirm before launch)', 'Melbourne metro travel included; regional Victoria by arrangement'],
};

export const firstClassGuide = {
  img: '/images/first-class.webp',
  bring: ['A water bottle (dancing is thirsty work)', 'A small notebook for steps, terms and practice notes', 'Hair tie — hair is worn tied back in every class', 'Your ghungroo if you have them (from Term 2 we fit them at the studio)'],
  wear: ['Classical: practice saree, or salwar kameez with a dupatta that can be pinned', 'Hip Hop: comfortable clothes and clean indoor sneakers (no outdoor shoes on the floor)', 'No jewellery except small studs — bangles and steps do not mix', 'Bare feet for classical classes — no socks, they slip'],
  happens: [
    { t: 'Arrive 10 minutes early', d: 'Meet your teacher, see the studio, tie hair back and settle in. Parents of trial students are welcome to watch.' },
    { t: 'Warm-up & first steps', d: 'A gentle warm-up, then your first adavus or grooves — every first class teaches real steps, not just watching.' },
    { t: 'Rhythm & a short sequence', d: 'Clap the tala, learn a mudra or two, and put steps together into a tiny sequence you can show at home.' },
    { t: 'Questions & next steps', d: 'Your teacher suggests the right batch and level, explains fees honestly, and there is never any pressure to enrol on the day.' },
  ],
};

export const enrolSteps = [
  { n: '01', t: 'Try a free class', d: 'Every enrolment starts with a free trial, so the student meets the teacher and the class before anyone commits.' },
  { n: '02', t: 'Submit the enrolment form', d: 'Parent details, student age, course choice and consents — five minutes, below. We confirm your batch within one business day.' },
  { n: '03', t: 'Pay Week 1 & begin', d: 'Term fees are due in Week 1 (payment plans on request). Bring a water bottle and a notebook — we handle the rest.' },
];
