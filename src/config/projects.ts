import type { Category } from './colors';

export interface OverviewSection {
  description: string;
  image?: string;
  imagePosition?: 'left' | 'right';
}

export interface Project {
  title: string;
  description: string; // Short description for card
  image: string;
  category: Category[];
  skills: { name: string; category: Exclude<Category, 'all'> }[];
  year: number | string;
  inProgress?: boolean;
  video?: string;
  slug: string;
  overview?: OverviewSection[]; // Detailed overview sections for project page
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const BASE_URL = import.meta.env.BASE_URL;

// Helper function to handle public paths in both dev and production
export function publicPath(path: string): string {
  // In production, remove /public/ prefix since files are copied to root
  // In dev, keep /public/ prefix
  const isDev = import.meta.env.DEV;
  if (isDev) {
    return `${BASE_URL}/public/${path}`;
  }
  return `${BASE_URL}/${path}`;
}

export const projects: Project[] = [
  {
    title: 'Omniframe',
    slug: createSlug('Omniframe'),
    description: 'Open-source e-ink IoT art frame with a novel solar charging system for up to infinite battery life. ',
    image: publicPath('Omniframe/placeholder.webp'),
    video: publicPath('Omniframe/omniframe.webm'),
    category: ['hardware', 'software', 'mechanical'],
    skills: [
      { name: 'Embedded Systems', category: 'hardware' },
      { name: 'PCB Design', category: 'hardware' },
      { name: 'ESP32-S3', category: 'hardware' },
      { name: 'E-Ink', category: 'hardware' },
      { name: 'Solar Cell Design', category: 'hardware' },
      { name: 'Power Delivery Design', category: 'hardware' },
      { name: 'IoT', category: 'hardware' },
      { name: 'Altium Designer', category: 'hardware' },
      { name: 'KiCad', category: 'hardware' },
      { name: 'Fusion 360', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'DFM', category: 'mechanical' },
      { name: 'DFA', category: 'mechanical' },
      { name: 'Injection Molding', category: 'mechanical' },
      { name: 'Resin Printing', category: 'mechanical' },
      { name: 'CNC', category: 'mechanical' },
      { name: 'Embedded C', category: 'software' },
      { name: 'ESP Wifi & BLE', category: 'software' },
      { name: 'Display Driver Development', category: 'software' },
      { name: 'Waveform Development', category: 'software' },
      { name: 'Image Processing', category: 'software' },
      { name: 'Pillow', category: 'software' },
      { name: 'AWS', category: 'software' },
      { name: 'Full Stack Development', category: 'software' }
    ],
    year: '2023 - 2025',
    overview: [
      {
        description: 'I started building this e-ink frame back when there were almost no such products in the market and no open-source designs available. E-ink uses very little power so I wanted to challenge myself by developing a solar charging system into the frame in a way that is invisible to the user. The power architecture is the most advanced one in the whole field, and it makes this one of the few energy-independent consumer electronics devices in the world. ',
        image: publicPath('Omniframe/overview.jpg'),
        imagePosition: 'left',
      },
    ],
  },
  {
    title: 'RoboChess',
    slug: createSlug('RoboChess'),
    description: 'Voice-controlled chess board with robotic piece movement. A magnet moving inside the board make the pieces slide on the surface. \n\n Winner of RAD engineering showcase at NYU.',
    image: publicPath('RoboChess/RoboChess Render.webp'),
    category: ['hardware', 'software', 'mechanical'],
    skills: [
      { name: 'Embedded Systems', category: 'hardware' },
      { name: 'Arduino Mega 2560', category: 'hardware' },
      { name: 'Sensor Matrix', category: 'hardware' },
      { name: 'Motor Controller', category: 'hardware' },
      { name: 'Stepper Motor', category: 'hardware' },
      { name: 'Bluetooth LE', category: 'software' },
      { name: 'Motion Control', category: 'software' },
      { name: 'C++', category: 'software' },
      { name: 'Gantry Design', category: 'mechanical' },
      { name: 'Robotics', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Laser Cutting', category: 'mechanical' },
      { name: '3D Printing', category: 'mechanical' },
    ],
    year: 2022,
    overview: [
      {
        description: 'This was my first project at NYU and my first big electromechanic project. I had never worked with stepper motors, sensors, bluetooth or voice-recognition technology before. It took plenty of learning about all these technologies and long days of work to get it running before the demo showcase.',
        image: publicPath('RoboChess/overview.jpg'),
        imagePosition: 'left',
      },
    ],
  },
  {
    title: 'Memory Player',
    slug: createSlug('Pocket Veila'),
    description: 'Anniversary gift for my girlfriend: a tiny e-ink device that each day displays a new memory from the past year.',
    image: publicPath('Pocket Veila/cover.webp'),
    category: ['hardware', 'software', 'mechanical'],
    skills: [
      { name: 'Embedded Systems', category: 'hardware' },
      { name: 'RP2040', category: 'hardware' },
      { name: 'E-Ink', category: 'hardware' },
      { name: 'CircuitPython', category: 'software' },
      { name: 'Image Processing', category: 'software' },
      { name: 'Pillow', category: 'software' },
      { name: 'Font Processing', category: 'software' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Fusion 360', category: 'mechanical' },
      { name: 'CNC', category: 'mechanical' },
      { name: 'Resin Printing', category: 'mechanical' },
    ],
    year: 2025,
  },
  {
    title: 'Vitrail',
    slug: createSlug('Vitrail'),
    description: 'My first audio engineering project: a battery-powered 60W bluetooth speaker with a walnut enclosure and magnetically attached front grill with an abstract design.',
    image: publicPath('Vitrail/cover.webp'),
    category: ['hardware', 'mechanical'],
    skills: [
      { name: 'System Integration', category: 'hardware' },
      { name: 'Power Management', category: 'hardware' },
      { name: 'USB PD', category: 'hardware' },
      { name: 'Audio System Design', category: 'hardware' },
      { name: 'Class-D Amplifier', category: 'hardware' },
      { name: 'Acoustics Engineering', category: 'mechanical' },
      { name: 'Industrial Design', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Fusion 360', category: 'mechanical' },
      { name: 'CNC', category: 'mechanical' },
      { name: 'DFM', category: 'mechanical' },
    ],
    year: 2025,
  },
  {
    title: 'Lampiron',
    slug: createSlug('Lampiron'),
    description: 'Arguably the most over-engineered table lamp ever. It dims by changing the number of windows that are lit up.',
    image: publicPath('Lampiron/placeholder.webp'),
    category: ['hardware', 'mechanical', 'software'],
    skills: [
      { name: 'Embedded Systems', category: 'hardware' },
      { name: 'PCB Design', category: 'hardware' },
      { name: 'ESP32-S2', category: 'hardware' },
      { name: 'SK6812', category: 'hardware' },
      { name: 'USB PD', category: 'hardware' },
      { name: 'Hall-Effect Sensor', category: 'hardware' },
      { name: 'Multi-PCB System', category: 'hardware' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Resin Printing', category: 'mechanical' },
      { name: 'DFM', category: 'mechanical' },
      { name: 'DFA', category: 'mechanical' },
      { name: 'Surface Finishing', category: 'mechanical' },
      { name: 'LED Control', category: 'software' },
      { name: 'Lighting Animation', category: 'software' },
    ],
    year: 2025,
    inProgress: true,
    overview: [
      {
        description: 'I love the Flatiron Building and wanted to create a lamp in its shape. The shell is resin-printed and surface-finished to look realistic. To enhance the realism, each window features a diffuser and a small LED. A microcontroller drives over 500 LEDs individually to create a dimming effect where the number of windows lit up changes.',
        image: publicPath('Lampiron/overview.jpg'),
        imagePosition: 'left',
      },
    ],
  },
  {
    title: 'Hey Mac',
    slug: createSlug('Hey Mac'),
    description: "Miniature iMac G4 personal assistant and desk clock powered by an old iPhone Xs and Claude API.",
    image: publicPath('Hey Mac/placeholder.webp'),
    video: publicPath('Hey Mac/cover.webm'),
    category: ['software', 'hardware'],
    skills: [
      { name: 'IOS App Development', category: 'software' },
      { name: 'Swift', category: 'software' },
      { name: 'Python', category: 'software' },
      { name: 'LLM Agents', category: 'software' },
      { name: 'API Integration', category: 'software' },
      { name: 'Speech-to-Text', category: 'software' },
      { name: 'Text-to-Speech', category: 'software' },
      { name: 'SVG Animations', category: 'software' },
      { name: 'Wireless Charging', category: 'hardware' },
      { name: 'Solidworks', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Resin Printing', category: 'mechanical' },
      { name: 'Articulated Mount Design', category: 'mechanical' },
    ],
    year: 2025,
    inProgress: true,
  },
  {
    title: 'Sunwhisper',
    slug: createSlug('Sunwhisper'),
    description: 'A simulation platform for discovering non-silicon solar chemistries through multi-stage analysis of molecular databases. The system evaluates synthesizability and other metrics, runs particle simulations to predict performance, and tunes against experimental data.',
    image: publicPath('Sunwhisper/cover.png'),
    category: ['software'],
    skills: [
      { name: 'Python', category: 'software' },
      { name: 'NumPy', category: 'software' },
      { name: 'LLM Agents', category: 'software' },
      { name: 'Vector Database', category: 'software' },
      { name: 'Data Pipeline', category: 'software' },
      { name: 'AWS S3', category: 'software' },
      { name: 'AWS EC2', category: 'software' },
      { name: 'AWS Lambda', category: 'software' },
      { name: 'AWS Bedrock', category: 'software' },
      { name: 'PubChem API', category: 'software' },
      { name: 'Quantum Chemistry', category: 'software' },
      { name: 'Molecular Simulation', category: 'software' },
      { name: 'Data Visualization', category: 'software' },
      { name: 'PostgreSQL', category: 'software' },
    ],
    year: 2025,
    inProgress: true,
  },
  {
    title: 'Daylight',
    slug: createSlug('Daylight'),
    description: 'An experimental AR headset project exploring transparent waveguide optics for extended screen real estate.',
    image: publicPath('Daylight/Daylight Render.webp'),
    category: ['hardware', 'mechanical'],
    skills: [
      { name: 'Embedded Systems', category: 'hardware' },
      { name: 'PCB Design', category: 'hardware' },
      { name: 'Micro OLED Displays', category: 'hardware' },
      { name: 'KiCad', category: 'hardware' },
      { name: 'STM32', category: 'hardware' },
      { name: 'Display Driver IC', category: 'hardware' },
      { name: 'IMU', category: 'hardware' },
      { name: 'Capacitive Touch', category: 'hardware' },
      { name: 'Optics Design', category: 'mechanical' },
      { name: 'Waveguide Development', category: 'mechanical' },
      { name: 'Blender', category: 'mechanical' },
      { name: 'Onshape', category: 'mechanical' },
    ],
    year: 2023,
    overview: [
      {
        description: 'An experimental AR headset project exploring transparent waveguide optics for extended screen real estate. The system features custom-designed PCBs including a main logic board with STM32 microcontroller, display driver IC, and 9-axis IMU for head tracking, along with a power supply unit, connector board, and touchpad interface. While the electronics and mechanical design progressed well, the waveguide optics proved too complex to develop independently, highlighting the challenges of optical system design.',
        image: publicPath('Daylight/Daylight Render.webp'),
        imagePosition: 'left',
      },
    ],
  },
  {
    title: 'Go-Kart V2',
    slug: createSlug('Go-Kart V2'),
    description: 'Improved version of a simpler kart I made in 2016. Built on a new chassis, and had a custom suspension system and improved steering.',
    image: publicPath('Go-Kart V2/Go kart V2 nobg.webp'),
    category: ['mechanical'],
    skills: [
      { name: 'Mechanical Design', category: 'mechanical' },
      { name: 'Metalwork', category: 'mechanical' },
      { name: 'Vehicle Dynamics', category: 'mechanical' },
      { name: 'CAD', category: 'mechanical' },
    ],
    year: 2018,
    overview: [
      {
        description: 'Building on the experience from my first go-kart, I designed and fabricated a second iteration with significant improvements. This version featured suspension, improved steering geometry, and a more robust frame design. \n\n There are few options in Finland for affordable go-kart parts, so most of the parts were custom-made or sourced from used mopeds and ATVs.',
        image: publicPath('Go-Kart V2/20190707_134948.webp'),
        imagePosition: 'left',
      },
    ],
  },
];

