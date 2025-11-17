"use client"

import { Sparkles, Palette, Heart } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroBillboardCorners from "@/components/sections/hero/HeroBillboardCorners";
import TagAbout from "@/components/sections/about/TagAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="animatedAurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398386699-t07l273j.jpg"
          logoAlt="Louvre Art Gallery"
          brandName="Louvre Gallery"
          button={{
            text: "Visit",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Where Art Meets Eternity"
          description="Experience the world's finest collection of masterpieces in the heart of Paris. From the enigmatic smile of Mona Lisa to the grace of Venus de Milo, discover treasures that have inspired humanity for centuries."
          tag="Louvre Gallery"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Explore Collection",
              href: "artworks"
            },
            {
              text: "Plan Your Visit",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398388227-dthu6edz.jpg",
              imageAlt: "Mona Lisa painting by Leonardo da Vinci"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398389100-84ibhzn8.jpg",
              imageAlt: "Venus de Milo sculpture"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398389871-34m3bf0y.jpg",
              imageAlt: "Winged Victory of Samothrace sculpture"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398390548-w60gsngy.jpg",
              imageAlt: "Liberty Leading the People painting by Delacroix"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Legacy"
          description="The Louvre stands as a testament to human creativity and artistic achievement, housing over 35,000 works of art spanning from ancient civilizations to the 19th century. Every piece tells a story, every gallery holds mysteries waiting to be discovered."
        />
      </div>

      <div id="artworks" data-section="artworks">
        <FeatureCardOne
          title="Masterpieces Collection"
          description="Discover iconic works that have shaped art history and continue to inspire millions of visitors from around the world."
          tag="Featured Works"
          tagIcon={Palette}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          features={[
            {
              title: "Mona Lisa",
              description: "Leonardo da Vinci's enigmatic masterpiece, the most famous painting in the world, captivating viewers with her mysterious smile since 1503.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398388227-dthu6edz.jpg",
              imageAlt: "Mona Lisa painting"
            },
            {
              title: "Venus de Milo",
              description: "This ancient Greek sculpture represents the goddess Aphrodite, showcasing the pinnacle of Hellenistic artistry and timeless beauty.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398389100-84ibhzn8.jpg",
              imageAlt: "Venus de Milo sculpture"
            },
            {
              title: "Winged Victory",
              description: "The Winged Victory of Samothrace stands as a monument to triumph, its flowing drapery frozen in marble for over two millennia.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398389871-34m3bf0y.jpg",
              imageAlt: "Winged Victory sculpture"
            },
            {
              title: "Liberty Leading the People",
              description: "Delacroix's powerful allegory of the July Revolution, where Liberty herself leads the charge for freedom and democracy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398390548-w60gsngy.jpg",
              imageAlt: "Liberty Leading the People painting"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Visitor Experiences"
          description="Hear from art lovers, scholars, and curious minds who have been moved by their journey through our galleries."
          tag="Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sophie Dubois",
              role: "Art Historian",
              company: "Sorbonne University",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398391846-ozmnb9yy.jpg",
              imageAlt: "Portrait of Sophie Dubois"
            },
            {
              id: "2",
              name: "James Morrison",
              role: "Private Collector",
              company: "Morrison Foundation",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398392597-bjo73ohk.jpg",
              imageAlt: "Portrait of James Morrison"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Art Student",
              company: "École des Beaux-Arts",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398393334-jpg1so1u.jpg",
              imageAlt: "Portrait of Elena Rodriguez"
            },
            {
              id: "4",
              name: "Henri Laurent",
              role: "Museum Director",
              company: "Musée d'Orsay",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398394119-iyvl0puv.jpg",
              imageAlt: "Portrait of Henri Laurent"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Visit"
          description="Ready to experience art history in person? Contact us to arrange your visit or inquire about our guided tours and special exhibitions."
          inputs={[
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
              name: "visitors",
              type: "number",
              placeholder: "Number of Visitors",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your interests or special requirements...",
            rows: 5,
            required: false
          }}
          buttonText="Send Inquiry"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398391086-f63319f5.jpg"
          imageAlt="Art gallery interior with elegant lighting"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763398386699-t07l273j.jpg"
          logoText="Louvre Gallery"
          copyrightText="© 2025 | Louvre Gallery"
          columns={[
            {
              title: "Visit",
              items: [
                {
                  label: "Plan Your Visit",
                  href: "contact"
                },
                {
                  label: "Opening Hours",
                  href: "hours"
                },
                {
                  label: "Tickets",
                  href: "tickets"
                }
              ]
            },
            {
              title: "Collections",
              items: [
                {
                  label: "Masterpieces",
                  href: "artworks"
                },
                {
                  label: "Exhibitions",
                  href: "exhibitions"
                },
                {
                  label: "Virtual Tours",
                  href: "virtual"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "History",
                  href: "history"
                },
                {
                  label: "Architecture",
                  href: "architecture"
                },
                {
                  label: "Support",
                  href: "support"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}