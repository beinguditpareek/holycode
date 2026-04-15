"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Mimic the slide element fade in from the original script
    const timer = setTimeout(() => {
      const slideElements = document.querySelectorAll('.slide-element');
      slideElements.forEach(el => {
        el.classList.remove('opacity-0', 'translate-y-8');
        el.classList.add('opacity-100', 'translate-y-0');
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#131318]/70 backdrop-blur-xl shadow-[0px_20px_40px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <div className="text-xl font-bold tracking-tighter text-white font-headline">
            HOLYCODE INDIA
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="hover:text-white transition-colors font-['Space_Grotesk'] tracking-tight text-white font-medium" href="#">Industries</a>
            <a className="hover:text-white transition-colors font-['Space_Grotesk'] tracking-tight text-white font-medium" href="#">Services</a>
            <a className="hover:text-white transition-colors font-['Space_Grotesk'] tracking-tight text-white font-medium" href="#">Case Studies</a>
            <a className="hover:text-white transition-colors font-['Space_Grotesk'] tracking-tight text-white font-medium" href="#">Contact Us</a>
          </div>
          <button className="border border-white text-white px-8 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 font-headline uppercase text-xs tracking-widest">
            BOOK A DEMO
          </button>
        </div>
      </nav>

      <main className="relative">
        {/* Grid Overlay */}
        <div className="fixed inset-0 grid-overlay pointer-events-none z-0"></div>

        {/* Hero Slider Section */}
        <section className="relative overflow-hidden h-[100vh]">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 opacity-100 transition-opacity duration-1000 z-10 slide">
              <div className="absolute inset-0 z-[-1]">
                <img alt="For a software-defined world" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uihhkP1Irj6F1OspQLkNsUx5BPyTP9cRoC9hm1ZV2jtJuWoOVjK5BmLPrJfb-mvMHDG-Uy6nIyQhKTfXMWhyE7LmFrilnFxe0q6_gY244OmME0Emn2CldUX6UXr963MMLvM6z9h7Wzq4TMKIb8l7p6wTe9O1YCiuBX6fZztqkqJq3wnhTyGQVsHTkN8zAfAlrKXMuyOUoccPZ_HxI0BadqGhQOaeraHvUwgXv8Njk2O9r_Ubxx_4DFybUtrlGBte2OWH2-CrqS28Q" />
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-surface via-black/20 to-black/40"></div>
              </div>
              <div className="container py-20 mx-auto px-8 h-full flex flex-col justify-center relative z-20">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-[1.1] tracking-tighter mb-8 transition-all duration-700 delay-300 slide-element opacity-0 translate-y-8">
                    For a software-defined<br />world
                  </h1>
                  <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-body leading-relaxed mb-12 transition-all duration-700 delay-500 slide-element opacity-0 translate-y-8">
                    We empower businesses with a sustainable digital advantage through cutting-edge engineering and strategic innovation.
                  </p>
                  <div className="flex flex-wrap gap-6 items-center transition-all duration-700 delay-700 slide-element opacity-0 translate-y-8">
                    <button className="border border-white text-white px-10 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">Learn More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-12 z-30">
              <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"><span className="material-symbols-outlined !text-xl">chevron_left</span></button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-12 z-30">
              <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"><span className="material-symbols-outlined !text-xl">chevron_right</span></button>
            </div>
            <div className="absolute bottom-16 left-0 w-full z-30 px-8">
              <div className="container mx-auto flex justify-center gap-4">
                <div className={`w-24 slider-progress-line ${mounted ? 'active-slide' : ''}`}>
                  <div className="slider-progress-fill" style={{ width: mounted ? '100%' : '45%' }}></div>
                </div>
                <div className="w-24 slider-progress-line">
                  <div className="slider-progress-fill"></div>
                </div>
                <div className="w-24 slider-progress-line">
                  <div className="slider-progress-fill"></div>
                </div>
                <div className="w-24 slider-progress-line">
                  <div className="slider-progress-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6 tracking-tight">Our Expertise</h2>
                <p className="text-on-surface-variant text-lg">Harness the power of modern engineering to rebuild your enterprise for the digital era.</p>
              </div>
              <div className="text-secondary font-label text-xs tracking-[0.3em] uppercase pb-2">Technical Capabilities // 2024</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-collapse">
              <div className="bg-surface-container-high p-12 border border-outline-variant/10 hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">cloud</span>
                <h3 className="text-2xl font-headline font-bold text-white mb-4">Cloud Solutions</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Scalable architecture and seamless migration strategies for cloud-native infrastructure.</p>
                <a className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform" href="#">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
              <div className="bg-surface-container-high p-12 border border-outline-variant/10 hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">analytics</span>
                <h3 className="text-2xl font-headline font-bold text-white mb-4">Data Analytics</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Extracting actionable intelligence through advanced data processing and visualization.</p>
                <a className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform" href="#">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
              <div className="bg-surface-container-high p-12 border border-outline-variant/10 hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">devices</span>
                <h3 className="text-2xl font-headline font-bold text-white mb-4">Front-end Development</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Crafting immersive digital experiences with high-performance modern web technologies.</p>
                <a className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform" href="#">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
              <div className="bg-surface-container-high p-12 border border-outline-variant/10 hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">smart_toy</span>
                <h3 className="text-2xl font-headline font-bold text-white mb-4">Intelligent Automation</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Streamlining complex workflows with AI-driven process optimization and robotics.</p>
                <a className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform" href="#">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
              <div className="bg-surface-container-high p-12 border border-outline-variant/10 hover:bg-surface-container-highest transition-all group">
                <span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">update</span>
                <h3 className="text-2xl font-headline font-bold text-white mb-4">Legacy Modernization</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Transforming outdated systems into modular, future-ready digital platforms.</p>
                <a className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform" href="#">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
              <div className="bg-primary/5 p-12 border border-primary/10 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-headline font-bold text-white mb-4 italic">Custom Solutions?</h3>
                <button className="text-on-primary-fixed bg-primary px-6 py-3 rounded-md font-bold text-sm">Inquire Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="mesh-background relative py-24 min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-4">
                <h2 className="text-5xl md:text-6xl font-headline font-bold text-white tracking-tight">Industry We Serve</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  <div className="border-t border-white/40 pt-6 group cursor-pointer">
                    <h3 className="text-xl font-headline font-bold text-white mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                      Data Analytics <span className="text-2xl font-light">&gt;</span>
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                      Benefit from our expertise in data analytics to address any business challenge with meaningful insights
                    </p>
                  </div>
                  <div className="border-t border-white/40 pt-6 group cursor-pointer">
                    <h3 className="text-xl font-headline font-bold text-white mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                      Design <span className="text-2xl font-light">&gt;</span>
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                      Create digital products that add business value and enhance customer experiences
                    </p>
                  </div>
                  <div className="border-t border-white/40 pt-6 group cursor-pointer">
                    <h3 className="text-xl font-headline font-bold text-white mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                      Software Engineering <span className="text-2xl font-light">&gt;</span>
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                      Leverage the best software engineering capabilities to build bespoke and secure solutions
                    </p>
                  </div>
                  <div className="border-t border-white/40 pt-6 group cursor-pointer">
                    <h3 className="text-xl font-headline font-bold text-white mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                      QA Automation <span className="text-2xl font-light">&gt;</span>
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                      Speed up your production cycle and make it more cost-efficient with advanced testing capabilities
                    </p>
                  </div>
                  <div className="border-t border-white/40 pt-6 group cursor-pointer">
                    <h3 className="text-xl font-headline font-bold text-white mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                      Legacy Modernization <span className="text-2xl font-light">&gt;</span>
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                      Be the game changer and establish a thriving business fully adapted to the software-defined environment
                    </p>
                  </div>
                  <div className="border-t border-white/40 pt-6 group cursor-pointer">
                    <h3 className="text-xl font-headline font-bold text-white mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                      Intelligent Automation <span className="text-2xl font-light">&gt;</span>
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                      Enhance operational efficiency and ensure measurable business outcomes with advanced automation services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <section className="py-24 bg-surface-container-low/30 relative overflow-hidden">
          <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6 tracking-tight">Project Showcase</h2>
                <p className="text-on-surface-variant text-lg">Exploring our most impactful digital transformations and technical breakthroughs.</p>
              </div>
              <div className="text-secondary font-label text-xs tracking-[0.3em] uppercase pb-2">Case Studies // 2024</div>
            </div>

            <div className="relative min-h-[500px] flex items-center">
              <div className="absolute inset-y-0 left-0 flex items-center z-30 pointer-events-none md:-left-12">
                <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 pointer-events-auto bg-surface/40 backdrop-blur-sm">
                  <span className="material-symbols-outlined !text-2xl">chevron_left</span>
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center z-30 pointer-events-none md:-right-12">
                <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 pointer-events-auto bg-surface/40 backdrop-blur-sm">
                  <span className="material-symbols-outlined !text-2xl">chevron_right</span>
                </button>
              </div>

              <div className="w-full">
                <div className="flex gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-20">
                  <div className="flex-none w-full md:w-[45%] lg:w-[31%] snap-start group relative overflow-hidden bg-surface-container border border-outline-variant/10 hover:border-primary/50 transition-all duration-500 rounded-xl">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img alt="FinStream Core" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKpPsOqzosExSXyaGExzSGDDf3aPdPEX3pz7O9IQjnmtQ9EoGSmACQH53o3UIL4d2BgKNVVVdq5HNty8A7RK7QUH2a5WivxblfSlpvMysFaQEHd8773SQy0O2Y2mIMfsfu13dZZwpCOZJSWhlI7nvKHtEEMbUSyqeR9-t-ctOFGuiC0j7omM1-7PMloZo26FLUzJTU4GYoKIs1apHKbA_PrIBZwjmx0j-B6ewzULrd203W-rKTK3oS2pG33Dc4TMJBwqvh0PVfcy1y" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-headline font-bold text-white mb-3 group-hover:text-primary transition-colors">FinStream Core</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Architecting a high-frequency trading engine with sub-millisecond latency for global markets.</p>
                      <a className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group/link" href="#">
                        View Project
                        <span className="material-symbols-outlined !text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex-none w-full md:w-[45%] lg:w-[31%] snap-start group relative overflow-hidden bg-surface-container border border-outline-variant/10 hover:border-primary/50 transition-all duration-500 rounded-xl">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img alt="LogiBrain AI" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQAdHmTe1fikUMyO9rCfqauqVrrry1U4wqlCklBOaPK4K0PRpPPu-DESO7ozjCZz9GG0HW_BK2skyN_lNvJUdLLhNXcwliLLagwuxJdOKFKiJYSGQ72Mh-ppi4CzKYNmQFGhoIEnK8Xx-4X9wtQ9rPUE50orZaPJYDo_Cz_zia4LcUqqgT_pbg3qLvLrmUmS6tKGMc8KmUVS0AcPwmNWZWgwRKHhXG4La3VWfBfEyt18rAfH_K-0Qy-s-zN4VeRxBYGkLmkkztGv6m" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-headline font-bold text-white mb-3 group-hover:text-primary transition-colors">LogiBrain AI</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Implementing AI-driven route optimization reducing carbon footprint for major logistics providers.</p>
                      <a className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group/link" href="#">
                        View Project
                        <span className="material-symbols-outlined !text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex-none w-full md:w-[45%] lg:w-[31%] snap-start group relative overflow-hidden bg-surface-container border border-outline-variant/10 hover:border-primary/50 transition-all duration-500 rounded-xl">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img alt="OmniCloud Retail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdKhGcqdOfOPL1K4g5UO0hhpDZSfPvePaX-poOv2QZNt0gWz8uLAE5vFlXRUK5tnyuiV8Ojpei2oYOqu2HHDvaWK6jFnF9Oz4wRGLZiEYBO1GkFuXqejuA4rWRX6ceiTsx3rAecD1SKoKsaA-U77-2XHUn7CR1Qy1EngI9eQYcpXvaw71DeIWxT0k5ZOGp6b8mvd1ReV-Zrf88_eWUTmsNZryHvsZklj9tZxfLFQvrS6aMWo9zztW7cfz0ceckAK50757waRBQxElh" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-headline font-bold text-white mb-3 group-hover:text-primary transition-colors">OmniCloud Retail</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Scaling global e-commerce infrastructure to handle 50M+ concurrent users during peak events.</p>
                      <a className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group/link" href="#">
                        View Project
                        <span className="material-symbols-outlined !text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-0 w-full z-30 flex justify-center gap-4">
                <div className={`w-16 slider-progress-line ${mounted ? 'active-slide' : ''}`}>
                  <div className="slider-progress-fill" style={{ width: mounted ? '100%' : '33%' }}></div>
                </div>
                <div className="w-16 slider-progress-line">
                  <div className="slider-progress-fill"></div>
                </div>
                <div className="w-16 slider-progress-line">
                  <div className="slider-progress-fill"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Feedback Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="fixed inset-0 grid-overlay pointer-events-none z-0"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-6 tracking-tight">What Our Clients Say</h2>
                <p className="text-on-surface-variant text-lg">Trust from industry leaders built through consistent excellence and technical precision.</p>
              </div>
              <div className="text-secondary font-label text-xs tracking-[0.3em] uppercase pb-2">Client Testimonials // 2024</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-high p-8 border border-outline-variant/10 hover:border-primary/40 transition-all group relative">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">format_quote</span>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed italic">
                  "Holycode transformed our legacy architecture into a modular powerhouse. Their engineering depth is truly unmatched in the Asian market."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">person</span>
                  </div>
                  <div>
                    <h4 className="text-white font-headline font-bold text-sm tracking-tight">Alexander Chen</h4>
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">CTO, NexGen FinTech</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 border border-outline-variant/10 hover:border-primary/40 transition-all group relative">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">format_quote</span>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed italic">
                  "The AI-driven supply chain solution they built for us reduced operational overhead by 40% within the first six months. Exceptional delivery."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">engineering</span>
                  </div>
                  <div>
                    <h4 className="text-white font-headline font-bold text-sm tracking-tight">Sarah Mitchell</h4>
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">VP Ops, Global Logistics Co.</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 border border-outline-variant/10 hover:border-primary/40 transition-all group relative">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">format_quote</span>
                <p className="text-on-surface-variant text-lg mb-10 leading-relaxed italic">
                  "From UI design to backend scalability, the Holycode team operates with a level of precision that we've rarely seen in external partners."
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-xl">design_services</span>
                  </div>
                  <div>
                    <h4 className="text-white font-headline font-bold text-sm tracking-tight">Vikram Malhotra</h4>
                    <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">Founder, RetailScale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 w-full font-body pt-20 pb-8 overflow-hidden footer-glow">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 mb-20">
            <div className="md:col-span-3 space-y-8">
              <div>
                <h2 className="text-xl font-bold tracking-tighter text-white font-headline mb-4 uppercase">Enable your digital<br />advantage with Holycode</h2>
                <button className="border border-white text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Connect with us</button>
              </div>
              <div className="flex gap-4">
                <a className="text-white/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined !text-xl">facebook</span></a>
                <a className="text-white/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined !text-xl">video_library</span></a>
                <a className="text-white/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined !text-xl">alternate_email</span></a>
                <a className="text-white/60 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined !text-xl">work</span></a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-8 font-headline">Holycode India</h4>
              <ul className="space-y-4">
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">About Us</a></li>
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Careers</a></li>
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Contact Us</a></li>
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Events</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-8 font-headline">Services</h4>
              <ul className="space-y-4">
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Cloud Solutions</a></li>
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Data Analytics</a></li>
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Design</a></li>
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Software Engineering</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-8 font-headline">Industries</h4>
              <ul className="space-y-4">
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Automotive</a></li>
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Banking</a></li>
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Consumer Goods</a></li>
                <li><a className="text-on-surface-variant/80 hover:text-white transition-colors text-xs font-medium" href="#">Healthcare</a></li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-6">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] font-headline">Newsletter</h4>
              <p className="text-on-surface-variant/70 text-xs">Stay up to date with the latest innovations.</p>
              <div className="flex bg-[#1b1b20] border-b border-white/20">
                <input className="bg-transparent text-xs text-white px-4 py-3 w-full focus:outline-none placeholder:text-white/20" placeholder="Email Address" type="email" />
                <button className="bg-primary px-4 py-3 text-on-primary-fixed hover:bg-primary/80 transition-colors">
                  <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 font-body text-[10px] uppercase tracking-widest">© 2024 HOLYCODE INDIA, A PARTNER TECHNOLOGY COMPANY. ALL RIGHTS RESERVED.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest" href="#">Privacy Policy</a>
              <a className="text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-widest" href="#">Terms of Use</a>
            </div>
          </div>
        </div>

        <div className="fixed bottom-6 right-6 z-50">
          <button className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center rounded-sm">
            <span className="material-symbols-outlined text-white/50">expand_less</span>
          </button>
        </div>
      </footer>
    </>
  );
}
