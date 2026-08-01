import { Project } from '../../interfaces/projects.interface';

export const PROJECTS: Project[] = [
  // ===================== 1. Smart Hydroloop =====================
  {
    id: 1,
    title: 'Smart Hydroloop Sys – Closed-Loop Water Recycling + Rainwater Harvesting',
    category: 'Water Conservation and Management',
    subjects: ['Science', 'Environmental Studies', 'Computer Science', 'IoT'],
    year: '2026',
    classLevel: 'Class XI',
    overview: 'Smart Hydroloop Sys is an intelligent closed-loop water management system that recycles grey water from the home, harvests rainwater, automatically irrigates plants, and controls street lighting — all powered by an ESP32. The system creates a continuous water cycle so that water is never wasted. Every drop is filtered, stored, reused, or returned to the home tank.',
    howItWorks: `The system works through four integrated loops:

1. Rainwater Harvesting Loop
Rainwater is collected and passes through multi-stage filters (Gravel → Charcoal → Cotton). Clean water is stored in the Rain Water Tank. When the tank is full, the ultrasonic sensor triggers the Rain Pump and transfers water to the upper storage tank.

2. Grey Water Recycling Loop (Home Tank)
Waste water from the home (basin, utensils, RO reject water, AC drain water and other grey water sources) is collected in the Filtered Water Tank. When the home water tank level becomes low, the ultrasonic sensor automatically turns on the Filtered Pump and refills the home tank.

3. Smart Irrigation
The Filtered Water Tank is connected to a soil moisture sensor. When the soil becomes dry, the system automatically activates the Irrigation Pump.

4. Street Lighting
An LDR continuously monitors ambient light. When it detects darkness, the Street Light turns on automatically.

All sensor data is sent in real-time via WebSocket to NestJS backend running on Raspberry Pi.`,
    hardware: [
      'ESP32 DevKit',
      'Ultrasonic Sensors (x2) – Filtered Tank + Rain Tank',
      'Soil Moisture Sensor',
      'LDR (Light Dependent Resistor)',
      'DC Pumps (x3) – Filtered • Rain • Irrigation',
      'Street Light',
      'Multi-stage Filter (Gravel → Charcoal → Cotton)',
      'Lead-Acid Battery (Solar ready)'
    ],
    techStack: [
      'ESP32 Firmware',
      'NestJS + MongoDB + Socket.IO',
      'Raspberry Pi 3B+ (DietPi OS)',
      'Cloudflared Tunnel',
      'Ionic Angular',
      'WebSocket Real-time'
    ],
    badges: [
      '🏆 Cluster Level 1st',
      '💧 Water Conservation',
      '⚡ Real-time IoT',
      '🌱 Closed-Loop'
    ],
    students: [
      {
        name: 'Adarsh Kumar',
        role: 'Student • Firmware | ESP32 • Sensor Logic | Circuitry',
        photo: 'adarsh.jpeg',
        classLevel: 'XI'
      }
    ],
    mentors: [
      {
        name: 'Ankur Hazarika',
        role: 'Project Mentor | NestJS • WebSocket | Raspberry Pi',
        photo: 'ankur.jpg'
      },
      {
        name: 'Raju Kumar',
        role: 'Project Mentor | Structural Design • Fabrication',
        photo: 'raju.jpeg'
      }
    ],
    url: 'https://hydroloop.jnvkokrajharprojects.in'
  },

  // ===================== 2. Health and Hygiene =====================
  {
    id: 2,
    title: 'Integrated Approaches to Improve Health and Hygiene',
    category: 'Health and Hygiene',
    subjects: ['Science', 'Biology', 'Environmental Studies'],
    year: '2026',
    classLevel: 'Class IX',
    overview: 'This project presents an integrated approach to improve health and hygiene by combining balanced diet, yoga, meditation, exercise, safe drinking water, proper waste segregation, and environmental cleanliness. It demonstrates how individual habits and community practices together can significantly reduce disease and promote overall well-being.',
    howItWorks: `The model is divided into four key areas:

1. Awareness Zone – Experts educate people about balanced diet, safe drinking water, yoga, meditation and exercise near a park area.
2. Home Zone – Use of separate dustbins for biodegradable and non-biodegradable waste. Sanitary pads made from banana fibre are shown as an eco-friendly alternative.
3. Industry Zone – Proper industrial waste disposal methods are highlighted along with the impact of deforestation on health.
4. Hospital Zone – Biomedical waste is shown being disposed through incineration and colour-coded dustbins (five different colours) for safe segregation.

The project also explains the Epidemiological Triad, One Health framework, and the importance of behavioural change in maintaining hygiene.`,
    hardware: [],
    techStack: [],
    badges: [
      '🏆 Cluster Level 1st',
      '🩺 Health & Hygiene',
      '🌱 Eco-Friendly',
      '🧘 Holistic Approach'
    ],
    students: [
      {
        name: 'Sapient Brahma',
        role: 'Team Leader • Class IX',
        photo: '',
        classLevel: 'IX'
      },
      {
        name: 'Sumaiya Afrin',
        role: 'Team Member • Class IX',
        photo: '',
        classLevel: 'IX'
      },
      {
        name: 'Sadia Afroz',
        role: 'Team Member • Class IX',
        photo: '',
        classLevel: 'IX'
      }
    ],
    mentors: [
      {
        name: 'Vinod Kumar',
        role: 'Guide Teacher • PGT Biology',
        photo: ''
      }
    ],
    url: ''
  },

  // ===================== 3. Waste Management =====================
  {
    id: 3,
    title: 'Waste Management and Alternatives to Plastics',
    category: 'Waste Management',
    subjects: ['Science', 'Chemistry', 'Environmental Studies'],
    year: '2026',
    classLevel: 'Class XI',
    overview: 'This project demonstrates an integrated waste management system for a community (residential house, factory and hospital) and presents sustainable alternatives to single-use plastics such as handmade paper from fallen leaves, bioplastic from corn starch, and edible cutlery.',
    howItWorks: `Waste from house, factory and hospital is collected at a common centre and segregated into three categories:

1. Biodegradable Waste → Composting, Vermicomposting & Biogas
2. Recyclable Waste → Sent to recycling industries
3. Non-Recyclable Waste → Scientific landfill / Waste-to-energy / Controlled incineration

Alternatives demonstrated:
• Handmade Paper – prepared from fallen leaves using NaOH treatment
• Bioplastic – made from corn starch, glycerine, vinegar and water
• Edible Cutlery – prepared from flour-based dough

The project also highlights global plastic pollution issues and India’s progress under Swachh Bharat Mission and EPR policy.`,
    hardware: [],
    techStack: [],
    badges: [
      '🏆 Cluster Level 3rd',
      '♻️ Waste Management',
      '🌿 Bio-Alternatives',
      '🌍 Plastic Free'
    ],
    students: [
      {
        name: 'Arghyadeep Das',
        role: 'Student • Class XI Science',
        photo: '',
        classLevel: 'XI'
      }
    ],
    mentors: [
      {
        name: 'Sumita Basumatary',
        role: 'Guide Teacher • PGT Chemistry',
        photo: ''
      }
    ],
    url: ''
  },

  // ===================== 4. Sustainable Agriculture =====================
  {
    id: 4,
    title: 'Use of Rainwater Harvesting to Prevent Drought in Agricultural Fields',
    category: 'Sustainable Agriculture',
    subjects: ['Science', 'Geography', 'Environmental Studies'],
    year: '2026',
    classLevel: 'Class VIII',
    overview: 'This project demonstrates how rainwater harvesting can collect and store rainwater during the rainy season and make it available for irrigation during dry periods. It helps conserve water, improve crop growth, recharge groundwater, and reduce the impact of drought on agricultural fields.',
    howItWorks: `Construction of the model:
• A base representing an agricultural field is prepared.
• A small house/shed with sloping roof is made.
• Roof is connected to a storage tank using pipe/straw.
• A farm pond is created beside the field.
• Crops, trees and irrigation channels are added.

Working:
• During rainfall, water from the roof is collected and stored in the tank.
• Excess water flows into the farm pond.
• Some water percolates into the ground and recharges groundwater.
• During dry seasons, stored water is used for irrigation.
• This ensures continuous water supply and prevents crop failure.`,
    hardware: [],
    techStack: [],
    badges: [
      '🏆 Cluster Level 3rd',
      '🌧️ Rainwater Harvesting',
      '🌾 Sustainable Agriculture',
      '💧 Water Conservation'
    ],
    students: [
      {
        name: 'Nandini Brahma',
        role: 'Student • Class VIII',
        photo: '',
        classLevel: 'VIII'
      }
    ],
    mentors: [
      {
        name: 'Pankaj Sharma',
        role: 'Guide Teacher • PGT Geography',
        photo: ''
      }
    ],
    url: ''
  }
];
