// Step 1: Questions
export const questions = [
    {
        question: "Which of the following is a union type in TypeScript?",
        options: [
            "number & string",
            "number | string",
            "number[]",
            "string[]"
        ],
        correctAnswer: 1
    },
    {
        question: `How do you declare a variable that can hold
         only 'small', 'medium', or 'large' values?`,
        options: [
            "'small' & 'medium' & 'large'",
            "'small' | 'medium' | 'large'",
            "['small', 'medium', 'large']",
            "['small' | 'medium' | 'large']"
        ],
        correctAnswer: 1
    },
    {
        question: "Which type represents both null and undefined in TypeScript?",
        options: [
            "void",
            "unknown",
            "any",
            "null | undefined"
        ],
        correctAnswer: 3
    },
    {
        question: "How do you define a tuple type in TypeScript?",
        options: [
            "[string, number]",
            "{string, number}",
            "(string, number)",
            "<string, number>"
        ],
        correctAnswer: 0
    },
    {
        question: "What does type narrowing mean in TypeScript?",
        options: [
            "Reducing the number of possible types",
            "Increasing the number of possible types",
            "Converting types",
            "Removing types"
        ],
        correctAnswer: 0
    },
    {
        question: "How can you narrow down a union type using a type guard?",
        options: [
            "Using typeof",
            "Using instanceof",
            "Using in",
            "Using ==="
        ],
        correctAnswer: 0
    },
    {
        question: "What is a type guard in TypeScript?",
        options: [
            "A function that performs runtime checks to ensure a variable conforms to a type",
            "A function that casts types",
            "A function that removes types",
            "A function that adds types"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a built-in type guard in TypeScript?",
        options: [
            "typeof",
            "instanceof",
            "in",
            "==="
        ],
        correctAnswer: 1
    },
    {
        question: "How do you create a type alias in TypeScript?",
        options: [
            "alias Point = { x: number; y: number; }",
            "type Point = { x: number; y: number; }",
            "declare Point = { x: number; y: number; }",
            "let Point = { x: number; y: number; }"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following is a correct use of a type alias?",
        options: [
            "type ID = string & number",
            "type ID = string | number",
            "type ID = [string, number]",
            "type ID = { string | number }"
        ],
        correctAnswer: 1
    },
    {
        question: `Which of the following correctly combines type aliases and union types?`,
        options: [
            "type Status = 'success' & 'failure' & 'pending'",
            "type Status = 'success' | 'failure' | 'pending'",
            "type Status = ['success', 'failure', 'pending']",
            "type Status = { 'success' | 'failure' | 'pending' }"
        ],
        correctAnswer: 1
    },
    {
        question: `How can you define a type alias for a function type in TypeScript?`,
        options: [
            "type Greet = function(name: string): string",
            "type Greet = (name: string) => string",
            "type Greet = { name: string => string }",
            "type Greet = name: string -> string"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of type guards in TypeScript?",
        options: [
            "To perform static type checking",
            "To ensure type safety at runtime",
            "To enforce type constraints",
            "To remove type errors"
        ],
        correctAnswer: 1
    },
    {
        question: `How do you define a type guard function in TypeScript?`,
        options: [
            "function isString(value: unknown): boolean",
            "function isString(value: unknown): string",
            "function isString(value: unknown): value is string",
            "function isString(value: unknown): type string"
        ],
        correctAnswer: 2
    },
    {
        question: `Which of the following TypeScript features helps in creating more
         precise type checks in conditional statements?`,
        options: [
            "Type Guards",
            "Type Assertions",
            "Type Aliases",
            "Type Inference"
        ],
        correctAnswer: 0
    },
    {
        question: `How do you assert a type in TypeScript?`,
        options: [
            "(someValue as string).length",
            "(<string>someValue).length",
            "Both A and B",
            "None of the above"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of type assertions in TypeScript?",
        options: [
            "To tell the compiler to trust the developer about the type",
            "To dynamically change types",
            "To remove type safety",
            "To create new types"
        ],
        correctAnswer: 0
    },
    {
        question: `Which of the following correctly uses type narrowing with a type alias?`,
        options: [
            "typeof",
            "instanceof",
            "in",
            "==="
        ],
        correctAnswer: 0
    },
    {
        question: `How do you define a union type with type alias in TypeScript?`,
        options: [
            "type Result = 'success' & 'failure'",
            "type Result = 'success' | 'failure'",
            "type Result = ['success', 'failure']",
            "type Result = { 'success' | 'failure' }"
        ],
        correctAnswer: 1
    },
     // Strict Null Checking
     {
        question: `What does enabling strict null checks in TypeScript do?`,
        options: [
            "Allows null and undefined to be assigned to any type",
            "Prevents null and undefined from being assigned to any type unless explicitly specified",
            "Disables type checking for null and undefined",
            "Forces all variables to be initialized with null"
        ],
        correctAnswer: 1
    },
    {
        question: `Which of the following is true when strictNullChecks is enabled in TypeScript?`,
        options: [
            "null can be assigned to any type",
            "undefined can be assigned to any type",
            "null and undefined must be explicitly included in type unions",
            "All variables are nullable by default"
        ],
        correctAnswer: 2
    },
    
    // tsconfig.json
    {
        question: "What is the purpose of the tsconfig.json file in a TypeScript project?",
        options: [
            "To specify the compiler options and root files for the TypeScript compiler",
            "To configure the package manager for the project",
            "To define the project's dependencies",
            "To specify the runtime environment for the project"
        ],
        correctAnswer: 0
    },
    {
        question: "Why do we use tsconfig.json in a TypeScript project?",
        options: [
            "To compile JavaScript files",
            "To manage dependencies",
            "To configure TypeScript compiler options and project settings",
            "To set environment variables"
        ],
        correctAnswer: 2
    },
    // Implicit Casting
    {
        question: "What is implicit casting in TypeScript?",
        options: [
            "Automatically converting one type to another",
            "Manually converting one type to another",
            "Declaring types explicitly",
            "Infering types based on usage"
        ],
        correctAnswer: 0
    },
    {
        question: `Which of the following is an example of implicit casting?`,
        options: [
            "value as string",
            "value as number",
            "value = 42",
            "value as unknown as number"
        ],
        correctAnswer: 2
    },

    // Explicit Casting
    {
        question: "What is explicit casting in TypeScript?",
        options: [
            "Automatically converting one type to another",
            "Manually converting one type to another",
            "Declaring types implicitly",
            "Infering types based on usage"
        ],
        correctAnswer: 1
    },
    {
        question: `Which of the following is an example of explicit casting?`,
        options: [
            "let strLength: number = (<string>someValue).length",
            "let strLength: number = someValue.length",
            "let strLength: number = (someValue as string).length",
            "Both a and c"
        ],
        correctAnswer: 3
    },
    {
        question: `How do you explicitly cast a value to a type using angle-bracket syntax?`,
        options: [
            "(someValue as string).length",
            "(<string>someValue).length",
            "someValue.length",
            "someValue as string"
        ],
        correctAnswer: 1
    },

    // Type Annotation
    {
        question: "What is type annotation in TypeScript?",
        options: [
            "Automatically inferring the type of a variable",
            "Explicitly specifying the type of a variable",
            "Automatically converting one type to another",
            "Manually converting one type to another"
        ],
        correctAnswer: 1
    },
    {
        question: `Which of the following is a correct type annotation in TypeScript?`,
        options: [
            "let message = 'Hello, TypeScript!'",
            "let message: string = 'Hello, TypeScript!'",
            "let message: any = 'Hello, TypeScript!'",
            "let message: = 'Hello, TypeScript!'"
        ],
        correctAnswer: 1
    },
    {
        question: `Which of the following is NOT a correct way to annotate a function's return type?`,
        options: [
            "function getNumber(): number { return `${4*5}`; }",
            "function getNumber() -> number { return 42; }",
            "function getNumber(): string { return 'Hello'; }",
            "function getNumber(): boolean { return true; }"
        ],
        correctAnswer: 1
    },

    // Type Inference
    {
        question: "What is type inference in TypeScript?",
        options: [
            "Automatically inferring the type of a variable based on its value",
            "Explicitly specifying the type of a variable",
            "Automatically converting one type to another",
            "Manually converting one type to another"
        ],
        correctAnswer: 0
    },
    {
        question: `Which of the following is an example of type inference?`,
        options: [
            "let count: number = 10",
            "let count = 10",
            "let count: any = 10",
            "let count: number;"
        ],
        correctAnswer: 1
    },
    {
        question: "Which statement best describes type inference in TypeScript?",
        options: [
            "Types must always be declared explicitly",
            "The compiler infers types when they are not explicitly provided",
            "TypeScript does not support type inference",
            "Type inference is a runtime feature"
        ],
        correctAnswer: 1
    },
     // Object Types
     {
        question: "What are object types in TypeScript?",
        options: [
            "Types that represent objects in JavaScript",
            "Types that represent arrays in JavaScript",
            "Types that represent strings in JavaScript",
            "Types that represent numbers in JavaScript"
        ],
        correctAnswer: 0
    },
    {
        question: `Which of the following correctly defines an object type in TypeScript?`,
        options: [
            "let user = { name: 'John', age: 30 };",
            "let user: { name: string, age: number };",
            "let user: object = { name: 'John', age: 30 };",
            "let user = { name: 'John', age: '30' };"
        ],
        correctAnswer: 1
    },
     // Accessing Properties in Objects
     {
        question: `How do you access a property 'name' in an object 'person'?`,
        options: [
            "person.name",
            "person['name']",
            "person.getName()",
            "Both a and b"
        ],
        correctAnswer: 3
    },
    {
        question: `Which of the following statements correctly accesses a deeply
        nested property in an object?
        code: let data = {
                user: {
                    details: {
                        address: {
                            city: 'New York',
                            zipCode: 10001
                            }
                        }
                    }
                };`,
        options: [
            "data.user.details.address.city",
            "data['user']['details']['address']['city']",
            "data.user.details['address'].city",
            "All of the above"
        ],
        correctAnswer: 3
    },

    // Adding Properties to Objects
    {
        question: "Can you add a property 'email' to an existing object 'user'?",
        options: [
            "No, you cannot add properties to an object once it's defined",
            "Yes, you can add properties using dot notation",
            "Yes, you can add properties using bracket notation",
            "Yes, you can add properties using both dot and bracket notation"
        ],
        correctAnswer: 3
    },
    {
        question: `How do you add a property 'email' to an object 'user'?
        code: let user = { name: 'Alice' };`,
        options: [
            "user.email = 'alice@example.com';",
            "user['email'] = 'alice@example.com';",
            "Both A and B",
            "None of the above"
        ],
        correctAnswer: 2
    },
];

// Step 2: JavaScript Initialization
const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = 
document.querySelectorAll("#question, option_1, option_2, option_3, option_4 ");

const submitBtn = document.querySelector("#submit");
const viewAnswersBtn = document.querySelector("#view-answers");

let currentQuiz = 0;
let score = 0;
let userAnswers = [];

// Step 3: Load Quiz function
const loadQuiz = () => {
    const {question, options} = questions[currentQuiz];

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach((curOption, index) => (window[`option_${index + 1}`].innerText = curOption));
};

loadQuiz();

// Step 4: Get selected answer function on button click
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm)
    return answerElement.findIndex((curElement) => curElement.checked );
};

const deselectedAnswer = () => {
    answerElm.forEach((curElm) => (curElm.checked = false));
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    userAnswers.push(selectedOptionIndex);

    if (selectedOptionIndex === questions[currentQuiz].correctAnswer) {
        score++;
    }
    currentQuiz++; 
    deselectedAnswer();
    if (currentQuiz < questions.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<div class="result">
        <h2>🏆🥇 Your Score: ${score}/${questions.length} Correct Answers</h2>
        <P>🎊✨ Congratulations on completing the quiz!</p>
        <p>Don't lose hope and never give up! You can do it 💪🏻</p>
        <button class = "reload-button" onclick = "window.location.reload()">Restart</button>
        <button id="view-answers-btn">View Answers</button>
        </div>`;
        document.querySelector("#view-answers-btn").addEventListener("click", () => {
            displayAnswers();
        });
    }
});

const displayAnswers = () => {
    let answerHTML = `<div class="result view-answers"><h2>Correct Answers</h2>`;
    questions.forEach((question, index) => {
        answerHTML += `<p>Q${index + 1}: ${question.question}</p>`;
        answerHTML += `<p>Your answer: ${question.options[userAnswers[index]]}</p>`;
        answerHTML += `<p>Correct answer: ${question.options[question.correctAnswer]}</p><hr>`;
    });
    answerHTML += `<button class="reload-button" onclick="window.location.reload()">Restart</button></div>`;
    quiz.innerHTML = answerHTML;
};