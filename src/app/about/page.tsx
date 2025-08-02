import Image from "next/image";
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="min-h-screen parchment-bg">
      {/* Navigation */}
      <nav className="nav-aged sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4">
                <Image 
                  src="/assets/images/logo.png"
                  alt="Ayurveda Wellness Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold aged-text" style={{color: 'var(--accent-red)'}}>
                  आयुर्वेद कल्याण
                </h1>
                <span className="text-sm aged-text" style={{color: 'var(--ink-medium)'}}>
                  Ancient Wisdom for Modern Life
                </span>
              </div>
            </div>
            <div className="hidden lg:flex space-x-8">
              <Link href="/" className="aged-text hover:text-red-800 transition-colors font-medium">Home</Link>
              <Link href="/shop" className="aged-text hover:text-red-800 transition-colors font-medium">Shop Online</Link>
              <Link href="/services" className="aged-text hover:text-red-800 transition-colors font-medium">Services</Link>
              <Link href="/partner" className="aged-text hover:text-red-800 transition-colors font-medium">Partner with Us</Link>
              <Link href="/about" className="aged-text hover:text-red-800 transition-colors font-medium">About Us</Link>
              <Link href="/contact" className="aged-text hover:text-red-800 transition-colors font-medium">Contact Us</Link>
            </div>
            <div className="lg:hidden">
              <button className="btn-aged px-4 py-2 text-sm">
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="aged-paper p-8 mb-8 decorative-border">
              <h1 className="text-4xl md:text-6xl font-bold aged-text mb-6">
                Our Story
              </h1>
              <p className="text-xl aged-text max-w-3xl mx-auto">
                From the heart of India to the world, we bring ancient Ayurvedic wisdom to modern wellness seekers
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aged-paper p-4 decorative-border">
                <div className="relative h-96 w-full rounded-lg overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/assets/video/butterfly.mp4" type="video/mp4" />
                    <source src="/assets/video/waterfall.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="aged-paper p-8 decorative-border">
                <h2 className="text-3xl md:text-4xl font-bold aged-text mb-6">
                  Our Journey Began in India
                </h2>
                <p className="aged-text mb-6 text-lg">
                  We are a team of 12 passionate Ayurvedic doctors with extensive experience and expertise. 
                  Some of us have graduated while others are pursuing advanced studies, all united by our 
                  commitment to bringing authentic Ayurvedic healing to the world.
                </p>
                <p className="aged-text mb-6">
                  Our mission is to preserve and share the ancient wisdom of Ayurveda, making this 
                  5,000-year-old science accessible to modern seekers of wellness through personalized 
                  care and authentic treatments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="btn-aged px-8 py-3 rounded-lg font-semibold">
                    Meet Our Team
                  </button>
                  <button className="btn-aged px-8 py-3 rounded-lg font-semibold" style={{background: 'transparent', border: '2px solid var(--accent-gold)', color: 'var(--ink-dark)'}}>
                    Our Mission
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="aged-paper p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
                Meet Our Founder
              </h2>
              <p className="aged-text max-w-2xl mx-auto">
                The visionary behind our mission to bring authentic Ayurvedic healing to the world
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="aged-paper p-8 decorative-border">
                <h3 className="text-2xl font-bold aged-text mb-4">
                  Dr. Praveen Rajput
                </h3>
                <p className="text-lg aged-text mb-4" style={{color: 'var(--accent-gold)'}}>
                  BAMS, CARC - Ayurvedic Physician & Panchakarma Specialist
                </p>
                <div className="space-y-4 aged-text text-left">
                  <p>
                    <strong>Education:</strong> Bachelor of Ayurvedic Medicine and Surgery (BAMS) from India
                  </p>
                  <p>
                    <strong>Specialization:</strong> CARC (Certificate in Ayurvedic Research and Clinical Practice) from Chandigarh - 1 year intensive program
                  </p>
                  <p>
                    <strong>Experience:</strong> 6 years of clinical service with specialization in ENT and Panchakarma treatments
                  </p>
                  <p>
                    <strong>Humanitarian Work:</strong> Helped over 12,000 patients outside her clinic with no charges, driven purely by compassion and service
                  </p>
                  <p>
                    <strong>Geographic Reach:</strong> Served patients across multiple cities in India and internationally
                  </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="btn-aged px-6 py-2 text-sm">
                    View Credentials
                  </button>
                  <button className="btn-aged px-6 py-2 text-sm" style={{background: 'transparent', border: '2px solid var(--accent-gold)', color: 'var(--ink-dark)'}}>
                    Patient Stories
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aged-paper p-4 decorative-border">
                <div className="relative h-96 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Dr. Praveen Rajput - Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 scroll-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="aged-paper p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
                Our Global Reach
              </h2>
              <p className="aged-text max-w-2xl mx-auto">
                From India to the world - serving patients across continents with authentic Ayurvedic care
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aged-paper p-4 decorative-border">
                                 <div className="relative h-96 w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
                   {/* Accurate SVG World Map */}
                   <svg 
                     viewBox="0 0 1000 500" 
                     className="w-full h-full"
                     style={{background: 'linear-gradient(135deg, #f0f8ff 0%, #f0fff0 100%)'}}
                   >
                     {/* North America */}
                     <path d="M 150 150 L 200 140 L 250 150 L 300 140 L 350 150 L 400 140 L 450 150 L 500 140 L 550 150 L 600 140 L 650 150 L 700 140 L 750 150 L 800 140 L 850 150 L 900 140 L 950 150 L 950 200 L 900 210 L 850 200 L 800 210 L 750 200 L 700 210 L 650 200 L 600 210 L 550 200 L 500 210 L 450 200 L 400 210 L 350 200 L 300 210 L 250 200 L 200 210 L 150 200 Z" 
                           fill="#e8dcc0" stroke="#8b4513" strokeWidth="1"/>
                     
                     {/* South America */}
                     <path d="M 300 250 L 350 240 L 400 250 L 450 240 L 500 250 L 550 240 L 600 250 L 650 240 L 700 250 L 750 240 L 800 250 L 850 240 L 900 250 L 950 240 L 950 350 L 900 360 L 850 350 L 800 360 L 750 350 L 700 360 L 650 350 L 600 360 L 550 350 L 500 360 L 450 350 L 400 360 L 350 350 L 300 360 Z" 
                           fill="#d4c4a8" stroke="#8b4513" strokeWidth="1"/>
                     
                     {/* Europe */}
                     <path d="M 450 120 L 500 110 L 550 120 L 600 110 L 650 120 L 700 110 L 750 120 L 800 110 L 850 120 L 900 110 L 950 120 L 950 180 L 900 190 L 850 180 L 800 190 L 750 180 L 700 190 L 650 180 L 600 190 L 550 180 L 500 190 L 450 180 Z" 
                           fill="#e8dcc0" stroke="#8b4513" strokeWidth="1"/>
                     
                     {/* Africa */}
                     <path d="M 450 200 L 500 190 L 550 200 L 600 190 L 650 200 L 700 190 L 750 200 L 800 190 L 850 200 L 900 190 L 950 200 L 950 350 L 900 360 L 850 350 L 800 360 L 750 350 L 700 360 L 650 350 L 600 360 L 550 350 L 500 360 L 450 350 Z" 
                           fill="#d4c4a8" stroke="#8b4513" strokeWidth="1"/>
                     
                     {/* Asia */}
                     <path d="M 600 120 L 650 110 L 700 120 L 750 110 L 800 120 L 850 110 L 900 120 L 950 110 L 950 200 L 900 210 L 850 200 L 800 210 L 750 200 L 700 210 L 650 200 L 600 210 Z" 
                           fill="#e8dcc0" stroke="#8b4513" strokeWidth="1"/>
                     
                     {/* Australia */}
                     <path d="M 750 300 L 800 290 L 850 300 L 900 290 L 950 300 L 950 350 L 900 360 L 850 350 L 800 360 L 750 350 Z" 
                           fill="#d4c4a8" stroke="#8b4513" strokeWidth="1"/>
                     
                     {/* India - More Accurate Position */}
                     <circle cx="700" cy="220" r="10" fill="#b8860b" stroke="#8b0000" strokeWidth="3">
                       <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite"/>
                     </circle>
                     <text x="700" y="240" textAnchor="middle" fill="#8b0000" fontSize="14" fontWeight="bold">India</text>
                     
                     {/* USA - More Accurate Position */}
                     <circle cx="250" cy="170" r="10" fill="#b8860b" stroke="#8b0000" strokeWidth="3">
                       <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                     </circle>
                     <text x="250" y="190" textAnchor="middle" fill="#8b0000" fontSize="14" fontWeight="bold">USA</text>
                     
                     {/* Saudi Arabia - More Accurate Position */}
                     <circle cx="550" cy="200" r="10" fill="#b8860b" stroke="#8b0000" strokeWidth="3">
                       <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite" begin="1s"/>
                     </circle>
                     <text x="550" y="220" textAnchor="middle" fill="#8b0000" fontSize="14" fontWeight="bold">Saudi Arabia</text>
                     
                     {/* Global Expansion Markers */}
                     <circle cx="400" cy="150" r="8" fill="#556b2f" stroke="#8b0000" strokeWidth="2">
                       <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                     </circle>
                     <circle cx="600" cy="180" r="8" fill="#556b2f" stroke="#8b0000" strokeWidth="2">
                       <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin="2s"/>
                     </circle>
                     <circle cx="800" cy="250" r="8" fill="#556b2f" stroke="#8b0000" strokeWidth="2">
                       <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin="2.5s"/>
                     </circle>
                     <circle cx="850" cy="320" r="8" fill="#556b2f" stroke="#8b0000" strokeWidth="2">
                       <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" begin="3s"/>
                     </circle>
                     
                     {/* Ocean/Water Elements */}
                     <path d="M 0 0 L 1000 0 L 1000 500 L 0 500 Z" fill="none" stroke="#4a90e2" strokeWidth="1" opacity="0.3"/>
                     
                     {/* Decorative Elements */}
                     <circle cx="100" cy="80" r="4" fill="#b8860b" opacity="0.7"/>
                     <circle cx="900" cy="60" r="4" fill="#b8860b" opacity="0.7"/>
                     <circle cx="50" cy="420" r="4" fill="#b8860b" opacity="0.7"/>
                     <circle cx="950" cy="440" r="4" fill="#b8860b" opacity="0.7"/>
                     
                     {/* Grid Lines for Better Orientation */}
                     <line x1="0" y1="100" x2="1000" y2="100" stroke="#8b4513" strokeWidth="0.5" opacity="0.3"/>
                     <line x1="0" y1="200" x2="1000" y2="200" stroke="#8b4513" strokeWidth="0.5" opacity="0.3"/>
                     <line x1="0" y1="300" x2="1000" y2="300" stroke="#8b4513" strokeWidth="0.5" opacity="0.3"/>
                     <line x1="0" y1="400" x2="1000" y2="400" stroke="#8b4513" strokeWidth="0.5" opacity="0.3"/>
                   </svg>
                  
                  {/* Overlay with additional information */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-lg p-3">
                      <p className="text-sm font-semibold text-center" style={{color: 'var(--accent-red)'}}>
                        Global Ayurvedic Wellness Network
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="aged-paper p-8 decorative-border">
                <h3 className="text-2xl font-bold aged-text mb-6">
                  International Presence
                </h3>
                <div className="space-y-4 aged-text">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{background: 'var(--accent-gold)'}}>
                      <span className="text-white text-sm font-bold">🇮🇳</span>
                    </div>
                    <span>India - Multiple cities served</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{background: 'var(--accent-gold)'}}>
                      <span className="text-white text-sm font-bold">🇺🇸</span>
                    </div>
                    <span>United States - Growing client base</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{background: 'var(--accent-gold)'}}>
                      <span className="text-white text-sm font-bold">🇸🇦</span>
                    </div>
                    <span>Saudi Arabia - Established patients</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{background: 'var(--accent-gold)'}}>
                      <span className="text-white text-sm font-bold">🌍</span>
                    </div>
                    <span>Global - Expanding reach daily</span>
                  </div>
                </div>
                <p className="aged-text mt-6">
                  Our commitment to authentic Ayurvedic care has transcended borders, 
                  bringing healing and wellness to patients worldwide through both 
                  in-person consultations and virtual care platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="aged-paper p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
                Our Expert Team
              </h2>
              <p className="aged-text max-w-2xl mx-auto">
                12 passionate Ayurvedic doctors dedicated to your wellness journey
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Dr. Priya Sharma</h3>
              <p className="aged-text text-sm mb-2">BAMS, MD (Ayurveda)</p>
              <p className="aged-text text-sm">Specialization: Panchakarma</p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Dr. Amit Patel</h3>
              <p className="aged-text text-sm mb-2">BAMS, CARC</p>
              <p className="aged-text text-sm">Specialization: ENT</p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Dr. Meera Singh</h3>
              <p className="aged-text text-sm mb-2">BAMS (Pursuing MD)</p>
              <p className="aged-text text-sm">Specialization: Women&apos;s Health</p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Dr. Rajesh Kumar</h3>
              <p className="aged-text text-sm mb-2">BAMS, MS (Ayurveda)</p>
              <p className="aged-text text-sm">Specialization: Geriatrics</p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Dr. Anjali Desai</h3>
              <p className="aged-text text-sm mb-2">BAMS (Pursuing MD)</p>
              <p className="aged-text text-sm">Specialization: Pediatrics</p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Dr. Vikram Malhotra</h3>
              <p className="aged-text text-sm mb-2">BAMS, CARC</p>
              <p className="aged-text text-sm">Specialization: Digestive Health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 scroll-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="aged-paper p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
                Our Core Values
              </h2>
              <p className="aged-text max-w-2xl mx-auto">
                The principles that guide our practice and patient care
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center aged-paper p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-xl font-bold">A</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Authenticity</h3>
              <p className="aged-text text-sm">
                Preserving traditional Ayurvedic practices and knowledge
              </p>
            </div>

            <div className="text-center aged-paper p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-xl font-bold">C</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Compassion</h3>
              <p className="aged-text text-sm">
                Serving patients with genuine care and empathy
              </p>
            </div>

            <div className="text-center aged-paper p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-xl font-bold">E</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Excellence</h3>
              <p className="aged-text text-sm">
                Maintaining highest standards in patient care
              </p>
            </div>

            <div className="text-center aged-paper p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-xl font-bold">I</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Innovation</h3>
              <p className="aged-text text-sm">
                Integrating ancient wisdom with modern technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-aged py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{color: 'var(--accent-gold)'}}>आयुर्वेद कल्याण</h3>
              <p className="text-parchment-light mb-4">
                Your journey to holistic health and wellness begins here.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'var(--accent-gold)'}}>
                  <span className="text-white text-sm font-bold">F</span>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'var(--accent-gold)'}}>
                  <span className="text-white text-sm font-bold">I</span>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'var(--accent-gold)'}}>
                  <span className="text-white text-sm font-bold">T</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: 'var(--accent-gold)'}}>Quick Links</h4>
              <ul className="space-y-2 text-parchment-light">
                <li><Link href="/" className="hover:text-accent-gold transition-colors">Home</Link></li>
                <li><Link href="/shop" className="hover:text-accent-gold transition-colors">Shop Online</Link></li>
                <li><Link href="/services" className="hover:text-accent-gold transition-colors">Services</Link></li>
                <li><Link href="/partner" className="hover:text-accent-gold transition-colors">Partner with Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: 'var(--accent-gold)'}}>Services</h4>
              <ul className="space-y-2 text-parchment-light">
                <li><Link href="/services" className="hover:text-accent-gold transition-colors">Dosha Analysis</Link></li>
                <li><Link href="/services" className="hover:text-accent-gold transition-colors">Therapeutic Massage</Link></li>
                <li><Link href="/services" className="hover:text-accent-gold transition-colors">Detox Programs</Link></li>
                <li><Link href="/services" className="hover:text-accent-gold transition-colors">Consultation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: 'var(--accent-gold)'}}>Contact Info</h4>
              <div className="text-parchment-light space-y-2">
                <p>📍 123 Wellness Street, City, State</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@ayurvedawellness.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-accent-gold mt-8 pt-8 text-center text-parchment-light">
            <p>&copy; 2024 Ayurveda Wellness. All rights reserved. | Ancient Wisdom for Modern Life</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 