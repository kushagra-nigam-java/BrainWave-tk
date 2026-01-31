import type { Lesson, Question } from "./types";

export const defaultLessons: Lesson[] = [
  {
    id: "math-1",
    title: "Introduction to Algebra",
    subject: "Mathematics",
    grade: "Class 8",
    duration: "15 min",
    content: `Algebra is a branch of mathematics that uses symbols and letters to represent numbers and quantities in formulas and equations.

**Key Concepts:**

1. **Variables**: Letters like x, y, z that represent unknown values
2. **Constants**: Fixed numerical values like 2, 5, -3
3. **Expressions**: Combinations of variables and constants (e.g., 2x + 5)
4. **Equations**: Statements showing two expressions are equal (e.g., 2x + 5 = 15)

**Example Problem:**
Solve for x: 2x + 6 = 14

Step 1: Subtract 6 from both sides: 2x = 8
Step 2: Divide both sides by 2: x = 4

**Practice Tip:** Always perform the same operation on both sides of an equation to maintain balance.`,
  },
  {
    id: "science-1",
    title: "The Water Cycle",
    subject: "Science",
    grade: "Class 6",
    duration: "12 min",
    content: `The water cycle, also known as the hydrological cycle, describes the continuous movement of water on, above, and below the surface of the Earth.

**Main Stages:**

1. **Evaporation**: Water from oceans, lakes, and rivers turns into water vapor due to heat from the sun

2. **Condensation**: Water vapor rises and cools, forming clouds made of tiny water droplets

3. **Precipitation**: Water falls back to Earth as rain, snow, sleet, or hail

4. **Collection**: Water collects in oceans, rivers, lakes, and underground aquifers

**Did You Know?**
- The same water has been cycling through Earth for billions of years
- About 97% of Earth's water is in the oceans
- Only 3% is freshwater, and most of that is frozen in glaciers

**Key Vocabulary:**
- Transpiration: Water vapor released by plants
- Groundwater: Water stored underground in rocks and soil`,
  },
  {
    id: "english-1",
    title: "Parts of Speech",
    subject: "English",
    grade: "Class 7",
    duration: "10 min",
    content: `Parts of speech are categories that describe the function of words in sentences. Understanding them helps you write better and understand grammar rules.

**The 8 Parts of Speech:**

1. **Noun**: Names a person, place, thing, or idea
   Example: *Raj*, *India*, *book*, *happiness*

2. **Pronoun**: Replaces a noun
   Example: he, she, it, they, we

3. **Verb**: Shows action or state of being
   Example: run, *is*, *think*, *become*

4. **Adjective**: Describes a noun
   Example: *beautiful*, *tall*, *three*, *Indian*

5. **Adverb**: Describes a verb, adjective, or another adverb
   Example: *quickly*, *very*, *always*, *well*

6. **Preposition**: Shows relationship between words
   Example: in, on, at, between, under

7. **Conjunction**: Connects words or sentences
   Example: and, but, or, because, although

8. **Interjection**: Expresses emotion
   Example: Wow! Oops! Hurray!

**Practice:** Identify the parts of speech in this sentence:
"The clever student quickly solved the difficult problem."`,
  },
  {
    id: "history-1",
    title: "The Maurya Empire",
    subject: "Social Studies",
    grade: "Class 6",
    duration: "14 min",
    content: `The Maurya Empire was one of the largest and most powerful empires in ancient India, lasting from 322 BCE to 185 BCE.

**Key Rulers:**

1. **Chandragupta Maurya** (322-298 BCE)
   - Founded the empire with help from Chanakya
   - United most of the Indian subcontinent
   - Defeated the Greek forces

2. **Bindusara** (298-272 BCE)
   - Expanded the empire southward
   - Known as "Amitraghata" (slayer of enemies)

3. **Ashoka the Great** (268-232 BCE)
   - Most famous Mauryan emperor
   - Converted to Buddhism after the Kalinga War
   - Spread messages of peace through rock edicts

**Contributions:**
- Established efficient administration
- Built roads connecting different parts of the empire
- Created a spy network for intelligence
- Arthashastra: Chanakya's famous text on statecraft

**Legacy:**
The Lion Capital of Ashoka at Sarnath became India's national emblem.`,
  },
  {
    id: "math-2",
    title: "Geometry Basics",
    subject: "Mathematics",
    grade: "Class 7",
    duration: "13 min",
    content: `Geometry is the study of shapes, sizes, positions, and properties of space. Let's explore the fundamental concepts.

**Basic Shapes:**

1. **Triangle**: 3 sides, 3 angles (sum = 180°)
   - Equilateral: All sides equal
   - Isosceles: Two sides equal
   - Scalene: No sides equal

2. **Quadrilaterals**: 4 sides (sum of angles = 360°)
   - Square: 4 equal sides, 4 right angles
   - Rectangle: Opposite sides equal, 4 right angles
   - Parallelogram: Opposite sides parallel and equal

3. **Circle**: All points equidistant from center
   - Radius: Distance from center to edge
   - Diameter: Distance across through center (2 × radius)
   - Circumference: Distance around = 2πr

**Key Formulas:**
- Area of rectangle = length × width
- Area of triangle = ½ × base × height
- Area of circle = πr²

**Remember:** π (pi) ≈ 3.14159 or 22/7`,
  },
];

export const defaultQuestions: Question[] = [
  // Algebra questions
  {
    id: "q-math-1-1",
    lessonId: "math-1",
    question: "What is a variable in algebra?",
    options: [
      "A fixed number",
      "A letter representing an unknown value",
      "A mathematical operation",
      "A type of equation",
    ],
    correctAnswer: 1,
  },
  {
    id: "q-math-1-2",
    lessonId: "math-1",
    question: "Solve for x: 3x = 15",
    options: ["x = 3", "x = 5", "x = 12", "x = 45"],
    correctAnswer: 1,
  },
  {
    id: "q-math-1-3",
    lessonId: "math-1",
    question: "Which of these is an algebraic expression?",
    options: ["5 + 3 = 8", "2x + 7", "Hello", "15"],
    correctAnswer: 1,
  },
  // Water cycle questions
  {
    id: "q-science-1-1",
    lessonId: "science-1",
    question: "What causes evaporation in the water cycle?",
    options: ["Wind", "Heat from the sun", "Gravity", "Plants"],
    correctAnswer: 1,
  },
  {
    id: "q-science-1-2",
    lessonId: "science-1",
    question: "What percentage of Earth's water is in the oceans?",
    options: ["50%", "75%", "97%", "30%"],
    correctAnswer: 2,
  },
  {
    id: "q-science-1-3",
    lessonId: "science-1",
    question: "What is transpiration?",
    options: [
      "Water falling as rain",
      "Water vapor released by plants",
      "Water turning to ice",
      "Ocean currents",
    ],
    correctAnswer: 1,
  },
  // English questions
  {
    id: "q-english-1-1",
    lessonId: "english-1",
    question: "Which part of speech is the word 'quickly'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    correctAnswer: 3,
  },
  {
    id: "q-english-1-2",
    lessonId: "english-1",
    question: "What does a pronoun do?",
    options: [
      "Describes a noun",
      "Replaces a noun",
      "Shows action",
      "Connects words",
    ],
    correctAnswer: 1,
  },
  {
    id: "q-english-1-3",
    lessonId: "english-1",
    question: "In 'beautiful garden', what is 'beautiful'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    correctAnswer: 2,
  },
  // History questions
  {
    id: "q-history-1-1",
    lessonId: "history-1",
    question: "Who founded the Maurya Empire?",
    options: ["Ashoka", "Chanakya", "Chandragupta Maurya", "Bindusara"],
    correctAnswer: 2,
  },
  {
    id: "q-history-1-2",
    lessonId: "history-1",
    question: "Which emperor converted to Buddhism after the Kalinga War?",
    options: ["Chandragupta", "Bindusara", "Ashoka", "Chanakya"],
    correctAnswer: 2,
  },
  {
    id: "q-history-1-3",
    lessonId: "history-1",
    question: "What is the Arthashastra?",
    options: [
      "A religious text",
      "A book on statecraft by Chanakya",
      "A poem about war",
      "A historical monument",
    ],
    correctAnswer: 1,
  },
  // Geometry questions
  {
    id: "q-math-2-1",
    lessonId: "math-2",
    question: "What is the sum of angles in a triangle?",
    options: ["90°", "180°", "360°", "270°"],
    correctAnswer: 1,
  },
  {
    id: "q-math-2-2",
    lessonId: "math-2",
    question: "What is the formula for the area of a rectangle?",
    options: [
      "side × side",
      "length × width",
      "2 × (length + width)",
      "πr²",
    ],
    correctAnswer: 1,
  },
  {
    id: "q-math-2-3",
    lessonId: "math-2",
    question: "The diameter of a circle is 10 cm. What is the radius?",
    options: ["5 cm", "10 cm", "20 cm", "15 cm"],
    correctAnswer: 0,
  },
];
