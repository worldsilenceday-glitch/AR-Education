// constants.ts
// Fix: Added .ts extension to the import path.
import type { Subject, Language, GameType, Badge } from './types.ts';

export const SUBJECTS: Subject[] = [
  {
    name: "Mathematics",
    emoji: "🔢",
    description: "Master numbers, from algebra to calculus.",
    details: ["Algebraic Equations", "Geometry", "Trigonometry", "Calculus Basics"],
    imageUrl: "https://source.unsplash.com/400x300/?math,equations"
  },
  {
    name: "English Language",
    emoji: "📚",
    description: "Improve your grammar, vocabulary, and comprehension.",
    details: ["Grammar & Punctuation", "Comprehension Passages", "Literary Devices", "Essay Writing"],
    imageUrl: "https://source.unsplash.com/400x300/?books,library"
  },
  {
    name: "Biology",
    emoji: "🔬",
    description: "Explore the fascinating world of living organisms.",
    details: ["Cell Biology", "Genetics", "Ecology", "Human Anatomy"],
    imageUrl: "https://source.unsplash.com/400x300/?biology,microscope"
  },
  {
    name: "Chemistry",
    emoji: "⚗️",
    description: "Understand the building blocks of matter.",
    details: ["The Periodic Table", "Chemical Reactions", "Organic Chemistry", "Mole Concept"],
    imageUrl: "https://source.unsplash.com/400x300/?chemistry,beaker"
  },
  {
    name: "Physics",
    emoji: "💡",
    description: "Uncover the laws that govern the universe.",
    details: ["Mechanics & Motion", "Electricity & Magnetism", "Waves & Optics", "Thermodynamics"],
    imageUrl: "https://source.unsplash.com/400x300/?physics,galaxy"
  },
  {
    name: "Government",
    emoji: "🏛️",
    description: "Learn about the systems that govern societies.",
    details: ["Nigerian Constitution", "Forms of Government", "International Relations", "Civil Rights"],
    imageUrl: "https://source.unsplash.com/400x300/?government,building"
  },
  {
    name: "Economics",
    emoji: "💰",
    description: "Study how people manage resources and create wealth.",
    details: ["Supply and Demand", "Inflation", "International Trade", "Nigerian Economy"],
    imageUrl: "https://source.unsplash.com/400x300/?economics,money"
  },
  {
    name: "History",
    emoji: "📜",
    description: "Discover the stories and events that shaped our world.",
    details: ["Pre-colonial Nigeria", "The Colonial Era", "Nigerian Independence", "World Wars"],
    imageUrl: "https://source.unsplash.com/400x300/?history,scroll"
  },
];

export const LANGUAGES: Language[] = [
    { code: 'en', name: 'English', emoji: '🇬🇧' },
    { code: 'pcm', name: 'Pidgin', emoji: '🇳🇬' },
    { code: 'yo', name: 'Yoruba', emoji: '🇳🇬' },
    { code: 'ha', name: 'Hausa', emoji: '🇳🇬' },
    { code: 'ig', name: 'Igbo', emoji: '🇳🇬' },
];

export const BADGES: Omit<Badge, 'dateEarned'>[] = [
    { name: "First Steps", emoji: "👣", description: "Started your first lesson." },
    { name: "Curious Mind", emoji: "🤔", description: "Asked your first question." },
    { name: "Quiz Whiz", emoji: "🏆", description: "Completed your first quiz." },
    { name: "Perfect Score", emoji: "🎯", description: "Scored 100% on a quiz." },
    { name: "Subject Starter", emoji: "🌱", description: "Started a new subject." },
    { name: "Brainiac", emoji: "🧠", description: "Completed quizzes in 3 different subjects." },
    { name: "Tutor's Pet", emoji: "🍎", description: "Had a long conversation with the AI Tutor." },
];

export const CRITICAL_THINKING_GAMES: GameType[] = [
    {
        id: 'logic-puzzles',
        title: 'Logic Puzzles',
        description: 'Solve grid-based logic puzzles that challenge your deductive reasoning skills.',
        emoji: '🧩'
    },
    {
        id: 'sudoku',
        title: 'Sudoku',
        description: 'A classic number puzzle that tests your logic and pattern recognition.',
        emoji: '🔢'
    },
    {
        id: 'brain-teasers',
        title: 'Brain Teasers',
        description: 'A series of riddles and short problems to get your mental gears turning.',
        emoji: '💡'
    }
];

export const IQ_TESTS: GameType[] = [
    {
        id: 'pattern-recognition',
        title: 'Pattern Recognition',
        description: 'Identify the next shape or number in a complex sequence. A key component of IQ tests.',
        emoji: '🔄'
    },
    {
        id: 'verbal-reasoning',
        title: 'Verbal Reasoning',
        description: 'Test your ability to understand and reason with word-based problems and analogies.',
        emoji: '🗣️'
    }
];