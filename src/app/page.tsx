import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen parchment-bg">
      {/* Navigation */}
      <nav className="nav-aged sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-4">
                <Image 
                  src="/images/logo.png"
                  alt="Ayurveda Wellness Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                  priority
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
              <a href="#home" className="aged-text hover:text-red-800 transition-colors font-medium">Home</a>
              <a href="#shop" className="aged-text hover:text-red-800 transition-colors font-medium">Shop Online</a>
              <a href="#services" className="aged-text hover:text-red-800 transition-colors font-medium">Services</a>
              <a href="#partner" className="aged-text hover:text-red-800 transition-colors font-medium">Partner with Us</a>
              <Link href="/about" className="aged-text hover:text-red-800 transition-colors font-medium">About Us</Link>
              <a href="#contact" className="aged-text hover:text-red-800 transition-colors font-medium">Contact Us</a>
            </div>
            <div className="lg:hidden">
              <button className="btn-aged px-4 py-2 text-sm">
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="aged-paper p-8 mb-8 decorative-border">
                <h1 className="text-4xl md:text-6xl font-bold aged-text mb-6">
                  Discover the Ancient Wisdom of
                  <span className="text-yellow-600"> आयुर्वेद</span>
                </h1>
                <p className="text-xl aged-text mb-8">
                  Experience holistic wellness through the 5,000-year-old science of life. 
                  Balance your mind, body, and spirit with natural healing practices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="btn-aged px-8 py-3 rounded-lg font-semibold">
                    Begin Your Journey
                  </button>
                  <button className="btn-aged px-8 py-3 rounded-lg font-semibold" style={{background: 'transparent', border: '2px solid var(--accent-gold)', color: 'var(--ink-dark)'}}>
                    Explore Services
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aged-paper p-4 decorative-border">
                <div className="relative h-96 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Ayurvedic herbs and spices"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nature Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="aged-paper p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
                Nature&apos;s Healing Power
              </h2>
              <p className="aged-text max-w-2xl mx-auto">
                Ancient wisdom meets natural healing through sacred herbs, medicinal plants, and traditional practices
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="aged-paper p-6 decorative-border">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Fresh herbs and leaves"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold aged-text mb-4">Sacred Herbs</h3>
              <p className="aged-text">
                Discover the healing properties of Tulsi, Ashwagandha, and other sacred herbs used in traditional Ayurvedic medicine.
              </p>
            </div>

            <div className="aged-paper p-6 decorative-border">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Fresh vegetables and fruits"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold aged-text mb-4">Natural Nutrition</h3>
              <p className="aged-text">
                Nourish your body with seasonal, organic foods that align with your dosha constitution.
              </p>
            </div>

            <div className="aged-paper p-6 decorative-border">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Peaceful meditation setting"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold aged-text mb-4">Mindful Practices</h3>
              <p className="aged-text">
                Connect with your inner self through meditation, yoga, and ancient breathing techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 scroll-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="aged-paper p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
                Our Ayurvedic Services
              </h2>
              <p className="aged-text max-w-2xl mx-auto">
                Comprehensive wellness solutions tailored to your unique constitution
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Dosha Analysis</h3>
              <p className="aged-text text-sm">
                Discover your unique mind-body constitution and receive personalized recommendations.
              </p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Therapeutic Massage</h3>
              <p className="aged-text text-sm">
                Experience authentic Abhyanga, Shirodhara, and traditional massage therapies.
              </p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Detox Programs</h3>
              <p className="aged-text text-sm">
                Purify your body with Panchakarma treatments and natural detoxification.
              </p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--accent-gold)'}}>
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-lg font-semibold aged-text mb-2">Consultation</h3>
              <p className="aged-text text-sm">
                One-on-one sessions with certified Ayurvedic practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="aged-paper p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
                Shop Authentic Ayurvedic Products
              </h2>
              <p className="aged-text max-w-2xl mx-auto">
                Premium herbs, oils, and wellness products sourced from the finest organic farms
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aged-paper p-6 decorative-border">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Ayurvedic oils and herbs"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold aged-text mb-2">Medicinal Oils</h3>
              <p className="aged-text text-sm mb-4">Pure essential oils for therapeutic use</p>
              <button className="btn-aged px-6 py-2 text-sm w-full">View Products</button>
            </div>

            <div className="aged-paper p-6 decorative-border">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Herbal supplements"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold aged-text mb-2">Herbal Supplements</h3>
              <p className="aged-text text-sm mb-4">Natural supplements for daily wellness</p>
              <button className="btn-aged px-6 py-2 text-sm w-full">View Products</button>
            </div>

            <div className="aged-paper p-6 decorative-border">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Wellness products"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold aged-text mb-2">Wellness Products</h3>
              <p className="aged-text text-sm mb-4">Complete wellness solutions for your lifestyle</p>
              <button className="btn-aged px-6 py-2 text-sm w-full">View Products</button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-20 scroll-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aged-paper p-8 decorative-border">
                <h2 className="text-3xl md:text-4xl font-bold aged-text mb-6">
                  Partner With Us
                </h2>
                <p className="aged-text mb-6">
                  Join our network of wellness practitioners, organic farmers, and holistic healers. 
                  Together, we can spread the ancient wisdom of Ayurveda to more people.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{background: 'var(--accent-gold)'}}>
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="aged-text">Wellness Practitioners</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{background: 'var(--accent-gold)'}}>
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="aged-text">Organic Farmers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{background: 'var(--accent-gold)'}}>
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="aged-text">Holistic Healers</span>
                  </div>
                </div>
                <button className="btn-aged px-8 py-3 rounded-lg font-semibold mt-6">
                  Become a Partner
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aged-paper p-4 decorative-border">
                <div className="relative h-96 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Community and partnership"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="aged-paper p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
                About Our Mission
              </h2>
              <p className="aged-text max-w-3xl mx-auto">
                We are dedicated to preserving and sharing the ancient wisdom of Ayurveda, 
                making this 5,000-year-old science accessible to modern seekers of wellness.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="aged-paper p-6 decorative-border text-center">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Traditional wisdom"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold aged-text mb-2">Ancient Wisdom</h3>
              <p className="aged-text text-sm">
                Preserving traditional knowledge passed down through generations of healers.
              </p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Natural healing"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold aged-text mb-2">Natural Healing</h3>
              <p className="aged-text text-sm">
                Using nature&apos;s gifts to restore balance and promote holistic wellness.
              </p>
            </div>

            <div className="aged-paper p-6 decorative-border text-center">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Community wellness"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold aged-text mb-2">Community Wellness</h3>
              <p className="aged-text text-sm">
                Building a community of wellness seekers and practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 scroll-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="aged-paper p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
                Meet Our Expert Physician
              </h2>
              <p className="aged-text max-w-2xl mx-auto">
                Led by Dr. Praveen Rajput, a compassionate Ayurvedic physician with over 5 years of clinical experience
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aged-paper p-4 decorative-border">
                <div className="relative h-96 w-full rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Dr. Praveen Rajput - Ayurvedic Physician"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="aged-paper p-8 decorative-border">
                <h3 className="text-2xl font-bold aged-text mb-4">
                  Dr. Praveen Rajput
                </h3>
                <p className="text-lg aged-text mb-4" style={{color: 'var(--accent-gold)'}}>
                  BAMS, MD (Pursuing) - Ayurvedic Physician & Panchakarma Specialist
                </p>
                <div className="space-y-4 aged-text text-left">
                  <p className="mb-4">
                    A compassionate and result-driven Ayurvedic physician, blending traditional Ayurvedic wisdom with evidence-based clinical practice. Currently pursuing MD (Ayurveda) in Shalakya Tantra (ENT) with specialization in eye, ear, nose, and throat disorders.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold aged-text mb-3" style={{color: 'var(--accent-red)'}}>Specialized in:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Respiratory & Digestive Disorders</li>
                      <li>• Gynecological & Male Health Concerns</li>
                      <li>• Skin Diseases & Renal Disorders</li>
                      <li>• Liver Disorders & Metabolic Conditions</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-sm">
                    Expert in Panchakarma therapies including Nasya, Vamana, Basti, Netra Tarpana, Shirodhara, and specialized ENT procedures. Completed prestigious Certificate of Rashtriya Ayurveda Vidyapeeth (CRAV).
                  </p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/about" className="btn-aged px-6 py-2 text-sm">
                    Learn More
                  </Link>
                  <button className="btn-aged px-6 py-2 text-sm" style={{background: 'transparent', border: '2px solid var(--accent-gold)', color: 'var(--ink-dark)'}}>
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 scroll-container">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="aged-paper p-8 decorative-border">
            <h2 className="text-3xl md:text-4xl font-bold aged-text mb-4">
              Begin Your Wellness Journey
            </h2>
            <p className="aged-text mb-8">
              Ready to experience the transformative power of Ayurveda? 
              Contact us to schedule your consultation or learn more about our services.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold aged-text mb-4">Contact Information</h3>
                <div className="space-y-2 aged-text">
                  <p>📍 123 Wellness Street, City, State</p>
                  <p>📞 +1 (555) 123-4567</p>
                  <p>✉️ info@ayurvedawellness.com</p>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold aged-text mb-4">Business Hours</h3>
                <div className="space-y-2 aged-text">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-aged px-8 py-3 rounded-lg font-semibold">
                Schedule Consultation
              </button>
              <button className="btn-aged px-8 py-3 rounded-lg font-semibold" style={{background: 'transparent', border: '2px solid var(--accent-gold)', color: 'var(--ink-dark)'}}>
                Send Message
              </button>
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
                <li><a href="#home" className="hover:text-accent-gold transition-colors">Home</a></li>
                <li><a href="#shop" className="hover:text-accent-gold transition-colors">Shop Online</a></li>
                <li><a href="#services" className="hover:text-accent-gold transition-colors">Services</a></li>
                <li><a href="#partner" className="hover:text-accent-gold transition-colors">Partner with Us</a></li>
                <li><a href="/about" className="hover:text-accent-gold transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{color: 'var(--accent-gold)'}}>Services</h4>
              <ul className="space-y-2 text-parchment-light">
                <li><a href="#services" className="hover:text-accent-gold transition-colors">Dosha Analysis</a></li>
                <li><a href="#services" className="hover:text-accent-gold transition-colors">Therapeutic Massage</a></li>
                <li><a href="#services" className="hover:text-accent-gold transition-colors">Detox Programs</a></li>
                <li><a href="#services" className="hover:text-accent-gold transition-colors">Consultation</a></li>
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
