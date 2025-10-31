"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, CheckCircle, Clock, DollarSign, Globe, HelpCircle, Linkedin, Mail, MessageCircle, Package, Phone, Quote, Star, Train, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="CargoTrans"
          logoSrc="https://images.pexels.com/photos/34493897/pexels-photo-34493897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="CargoTrans Logo"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Global Cargo Train Export Solutions"
          description="Reliable, efficient, and cost-effective freight transportation services across international borders. Your trusted partner for heavy cargo logistics."
          tag="Industry Leader"
          tagIcon={Train}
          buttons={[
            {
              text: "Get Quote",
              href: "contact"
            },
            {
              text: "Our Services",
              href: "product"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/358167/pexels-photo-358167.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern cargo freight train carrying containers"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Excellence in Cargo Transportation"
          description={[
            "With over two decades of experience in international freight transport, we've established ourselves as a premier cargo train export company serving global markets.",
            "Our comprehensive network spans multiple continents, ensuring your cargo reaches its destination safely, efficiently, and on schedule."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Why Choose Our Services"
          description="Comprehensive cargo transportation solutions designed to meet your international shipping needs"
          tag="Our Advantages"
          tagIcon={CheckCircle}
          features={[
            {
              title: "Global Network",
              description: "Extensive railway connections across 50+ countries with strategic partnerships for seamless international transport",
              icon: Globe,
              button: {
                text: "View Network",
                href: "contact"
              }
            },
            {
              title: "Reliable Schedule",
              description: "99.2% on-time delivery rate with real-time tracking and automated notifications for complete transparency",
              icon: Clock,
              button: {
                text: "Track Shipment",
                href: "contact"
              }
            },
            {
              title: "Modern Fleet",
              description: "State-of-the-art cargo trains equipped with advanced safety systems and specialized containers for various cargo types",
              icon: Train,
              button: {
                text: "See Fleet",
                href: "product"
              }
            },
            {
              title: "Cost Effective",
              description: "Competitive pricing with flexible payment terms and volume discounts for regular shipments and bulk cargo",
              icon: DollarSign,
              button: {
                text: "Get Pricing",
                href: "pricing"
              }
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Cargo Services"
          description="Specialized freight transportation solutions for various industries and cargo types"
          tag="Services"
          tagIcon={Package}
          products={[
            {
              id: "1",
              brand: "CargoTrans",
              name: "Bulk Cargo Transport",
              price: "From $2,500/TEU",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/9716363/pexels-photo-9716363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Bulk cargo freight train"
            },
            {
              id: "2",
              brand: "CargoTrans",
              name: "Container Freight Service",
              price: "From $1,800/TEU",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/2422467/pexels-photo-2422467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Container freight train"
            },
            {
              id: "3",
              brand: "CargoTrans",
              name: "Specialized Heavy Transport",
              price: "Custom Quote",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://images.pexels.com/photos/3145551/pexels-photo-3145551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Heavy cargo specialized transport"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Flexible Shipping Plans"
          description="Choose the perfect cargo transportation solution for your business needs"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "standard",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$1,800/TEU",
              subtitle: "Perfect for regular shipments",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "Standard delivery (15-20 days)",
                "Basic cargo insurance",
                "Online tracking",
                "Customer support",
                "Documentation assistance"
              ]
            },
            {
              id: "express",
              badge: "Express Service",
              badgeIcon: Zap,
              price: "$2,200/TEU",
              subtitle: "For time-sensitive cargo",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "Express delivery (10-12 days)",
                "Premium cargo insurance",
                "Real-time GPS tracking",
                "Priority customer support",
                "Complete documentation",
                "Dedicated account manager"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Our Expert Team"
          description="Experienced professionals dedicated to ensuring your cargo reaches its destination safely"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Michael Chen",
              role: "Operations Director",
              description: "15+ years in international logistics with expertise in railway freight coordination and customs regulations.",
              imageSrc: "https://images.pexels.com/photos/1543924/pexels-photo-1543924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen, Operations Director",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Mail,
                  url: "mailto:michael@cargotrans.com"
                }
              ]
            },
            {
              id: "2",
              name: "Sarah Rodriguez",
              role: "Logistics Manager",
              description: "Strategic planning specialist focused on optimizing cargo routes and ensuring efficient international transport operations.",
              imageSrc: "https://images.pexels.com/photos/11745675/pexels-photo-11745675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Rodriguez, Logistics Manager",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Phone,
                  url: "tel:+1234567890"
                }
              ]
            },
            {
              id: "3",
              name: "David Kim",
              role: "Customer Relations",
              description: "Dedicated to providing exceptional service and maintaining strong relationships with our international clients.",
              imageSrc: "https://images.pexels.com/photos/7006142/pexels-photo-7006142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim, Customer Relations",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: MessageCircle,
                  url: "https://cargotrans.com/chat"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Trusted by companies worldwide for reliable cargo transportation services"
          tag="Reviews"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "James Wilson",
              role: "Supply Chain Director, Global Manufacturing Inc.",
              testimonial: "CargoTrans has been our primary freight partner for over 5 years. Their reliability and competitive pricing have significantly improved our international logistics operations.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wilson testimonial"
            },
            {
              id: "2",
              name: "Maria Santos",
              role: "Logistics Coordinator, Export Solutions Ltd",
              testimonial: "The real-time tracking and excellent customer service make CargoTrans our go-to choice for international cargo transportation. Highly recommended for businesses of all sizes.",
              imageSrc: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maria Santos testimonial"
            },
            {
              id: "3",
              name: "Robert Zhang",
              role: "Operations Manager, Industrial Exports Co",
              testimonial: "Outstanding service quality and on-time delivery record. CargoTrans understands our business needs and consistently exceeds our expectations for cargo transportation.",
              imageSrc: "https://images.pexels.com/photos/11745675/pexels-photo-11745675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Zhang testimonial"
            },
            {
              id: "4",
              name: "Emily Turner",
              role: "Procurement Director, Heavy Industries Corp",
              testimonial: "Professional team, competitive rates, and reliable service. CargoTrans has become an integral part of our global supply chain strategy.",
              imageSrc: "https://images.pexels.com/photos/3839149/pexels-photo-3839149.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Turner testimonial"
            },
            {
              id: "5",
              name: "Ahmad Hassan",
              role: "Freight Manager, Middle East Trading",
              testimonial: "Exceptional cargo handling and transparent communication throughout the shipping process. CargoTrans sets the standard for international freight services.",
              imageSrc: "https://images.pexels.com/photos/4481260/pexels-photo-4481260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ahmad Hassan testimonial"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of companies that rely on our cargo transportation services"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/10602085/pexels-photo-10602085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6867964/pexels-photo-6867964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6867964/pexels-photo-6867964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/15218464/pexels-photo-15218464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11002072/pexels-photo-11002072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/33697475/pexels-photo-33697475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/5636690/pexels-photo-5636690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11002072/pexels-photo-11002072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our cargo train export services"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What types of cargo do you transport?",
              content: "We handle various types of cargo including containers, bulk materials, automotive, machinery, chemicals, and specialized heavy equipment. Our trains are equipped to handle both standard and oversized cargo with proper securing systems."
            },
            {
              id: "2",
              title: "How long does international shipping take?",
              content: "Standard delivery typically takes 15-20 days depending on the destination and route. Express services can reduce this to 10-12 days. Transit times may vary based on customs clearance and weather conditions."
            },
            {
              id: "3",
              title: "Do you provide cargo insurance?",
              content: "Yes, we offer comprehensive cargo insurance options. Basic coverage is included in standard pricing, and premium insurance with full replacement value is available for high-value shipments."
            },
            {
              id: "4",
              title: "Can I track my shipment in real-time?",
              content: "Absolutely. All our shipments include online tracking capabilities. Premium services include real-time GPS tracking with automatic notifications for departure, transit updates, and arrival confirmations."
            },
            {
              id: "5",
              title: "What documentation is required for international shipping?",
              content: "Required documents typically include commercial invoice, packing list, bill of lading, certificate of origin, and any specific permits for regulated goods. Our team assists with all documentation requirements."
            },
            {
              id: "6",
              title: "Do you handle customs clearance?",
              content: "Yes, we provide complete customs clearance services including documentation preparation, duty calculation, and coordination with customs authorities at both origin and destination points."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Your Cargo Quote Today"
          description="Ready to ship your cargo internationally? Contact us for a customized quote and expert consultation on your freight transportation needs."
          inputs={[
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: true
            },
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "cargoType",
              type: "text",
              placeholder: "Type of Cargo",
              required: true
            },
            {
              name: "destination",
              type: "text",
              placeholder: "Destination Country",
              required: true
            }
          ]}
          textarea={{
            name: "details",
            placeholder: "Additional details about your cargo requirements, timeline, and any special handling needs...",
            rows: 5,
            required: false
          }}
          buttonText="Get Quote"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Bulk Cargo",
                  href: "product"
                },
                {
                  label: "Container Freight",
                  href: "product"
                },
                {
                  label: "Heavy Transport",
                  href: "product"
                },
                {
                  label: "Express Shipping",
                  href: "pricing"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Testimonials",
                  href: "testimonial"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Track Shipment",
                  href: "contact"
                },
                {
                  label: "Documentation",
                  href: "contact"
                },
                {
                  label: "Customer Service",
                  href: "contact"
                }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/34493897/pexels-photo-34493897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 | CargoTrans - International Freight Solutions"
        />
      </div>
    </ThemeProvider>
  );
}