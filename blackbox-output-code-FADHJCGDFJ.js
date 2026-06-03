/* ==========================================
   CYBERCODE ACADEMY - MAIN SCRIPT
   Created by Dr Games (Class 9 Bronze)
   ========================================== */

// --- 1. DATA STORE ---
const htmlLessons = [
    {
        id: 'html-1', title: 'Introduction to HTML',
        content: `<h3>What is HTML?</h3><p>HTML stands for HyperText Markup Language. It is the standard language for creating web pages.</p><div class="code-block"><pre>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello World&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre></div>`,
        quiz: { q: "What does HTML stand for?", o: ["Hyper Text Makeup Language", "HyperText Markup Language", "High Tech Modern Language"], a: 1 }
    },
    {
        id: 'html-2', title: 'HTML Elements & Tags',
        content: `<h3>Elements and Tags</h3><p>HTML elements tell the browser how to display content.</p><ul><li>&lt;h1&gt; - Heading</li><li>&lt;p&gt; - Paragraph</li><li>&lt;a&gt; - Link</li><li>&lt;img&gt; - Image</li></ul>`,
        quiz: { q: "Which tag is used for a paragraph?", o: ["<para>", "<p>", "<paragraph>"], a: 1 }
    },
    {
        id: 'html-3', title: 'Forms and Inputs',
        content: `<h3>Collecting Data</h3><p>Forms allow users to input data.</p><div class="code-block"><pre>&lt;form&gt;\n  Name: &lt;input type="text"&gt;\n  &lt;input type="submit"&gt;\n&lt;/form&gt;</pre></div>`,
        quiz: { q: "What input type is for text?", o: ["text", "string", "input"], a: 0 }
    },
    {
        id: 'html-4', title: 'Semantic HTML',
        content: `<h3>Semantic Elements</h3><p>Semantic elements describe their meaning.</p><p>Examples: &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;footer&gt;</p>`,
        quiz: { q: "Which is a semantic tag?", o: ["<div>", "<span>", "<article>"], a: 2 }
    },
    {
        id: 'html-5', title: 'Lists and Tables',
        content: `<h3>Organizing Data</h3><p>Use &lt;ul&gt; for unordered lists and &lt;table&gt; for tabular data.</p><div class="code-block"><pre>&lt;ul&gt;\n  &lt;li&gt;Item 1&lt;/li&gt;\n  &lt;li&gt;Item 2&lt;/li&gt;\n&lt;/ul&gt;</pre></div>`,
        quiz: { q: "Which tag creates a list item?", o: ["<list>", "<li>", "<item>"], a: 1 }
    }
];

const cssLessons = [
    {
        id: 'css-1', title: 'Introduction to CSS',
        content: `<h3>Styling the Web</h3><p>CSS (Cascading Style Sheets) controls the visual presentation of HTML elements.</p><div class="code-block"><pre>body {\n  background: black;\n  color: green;\n}</pre></div>`,
        quiz: { q: "What does CSS stand for?", o: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"], a: 1 }
    },
    {
        id: 'css-2', title: 'Colors and Fonts',
        content: `<h3>Visual Design</h3><p>You can set colors using hex, rgb, or named colors. Fonts are set using the font-family property.</p>`,
        quiz: { q: "Which property sets text color?", o: ["text-color", "color", "font-color"], a: 1 }
    },
    {
        id: 'css-3', title: 'Box Model',
        content: `<h3>Understanding Box Model</h3><p>Every element is a box with: Content, Padding, Border, and Margin.</p>`,
        quiz: { q: "What is inside the border?", o: ["Margin", "Content", "Padding"], a: 1 }
    },
    {
        id: 'css-4', title: 'Flexbox',
        content: `<h3>Flexible Layouts</h3><p>Flexbox provides an efficient way to lay out items.</p><div class="code-block"><pre>.container {\n  display: flex;\n  justify-content: center;\n}</pre></div>`,
        quiz: { q: "Which creates a flex container?", o: ["display: block", "display: flex", "display: inline"], a: 1 }
    },
    {
        id: 'css-5', title: 'CSS Grid',
        content: `<h3>Grid Layouts</h3><p>CSS Grid is a 2-dimensional layout system.</p><div class="code-block"><pre>.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}</pre></div>`,
        quiz: { q: "Which property defines grid columns?", o: ["columns", "grid-template-columns", "grid-columns"], a: 1 }
    },
    {
        id: 'css-6', title: 'Animations',
        content: `<h3>Bringing Life</h3><p>Use @keyframes to create animations.</p><div class="code-block"><pre>@keyframes pulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n}</pre></div>`,
        quiz: { q: "What is used to define animation steps?", o: ["@animation", "@keyframes", "@transition"], a: 1 }
    }
];

const jsLessons = [
    {
        id: 'js-1', title: 'Introduction to JavaScript',
        content: `<h3>The Language of the Web</h3><p>JavaScript adds interactivity to web pages.</p><div class="code-block"><pre>console.log("Hello Hacker");\n// This prints to console</pre></div>`,
        quiz: { q: "How do you print to console?", o: ["print()", "console.log()", "echo()"], a: 1 }
    },
    {
        id: 'js-2', title: 'Variables & Data Types',
        content: `<h3>Storing Data</h3><p>Use let, const, or var to declare variables.</p><div class="code-block"><pre>let age = 17;\nconst name = "Dr Games";\nvar isLearning = true;</pre></div>`,
        quiz: { q: "Which keyword creates a constant?", o: ["var", "let", "const"], a: 2 }
    },
    {
        id: 'js-3', title: 'Functions',
        content: `<h3>Reusable Code Blocks</h3><p>Functions perform specific tasks.</p><div class="code-block"><pre>function greet(name) {\n  return "Hello " + name;\n}</pre></div>`,
        quiz: { q: "How do you define a function?", o: ["function: myFunc()", "function myFunc()", "def myFunc()"], a: 1 }
    },
    {
        id: 'js-4', title: 'DOM Manipulation',
        content: `<h3>Interacting with HTML</h3><p>Select and modify HTML elements.</p><div class="code-block"><pre>document.getElementById("myDiv").innerHTML = "Hacked!";</pre></div>`,
        quiz: { q: "Which selects an element by ID?", o: ["getElementByClass", "getElementById", "querySelector"], a: 1 }
    },
    {
        id: 'js-5', title: 'Events',
        content: `<h3>Responding to Actions</h3><p>Events allow interactivity like clicks.</p><div class="code-block"><pre>button.addEventListener("click", () => {\n  alert("Clicked!");\n});</pre></div>`,
        quiz: { q: "What listens for clicks?", o: ["onclick", "addEventListener", "whenClicked"], a: 1 }
    },
    {
        id: 'js-6', title: 'Arrays',
        content: `<h3>Collections of Data</h3><p>Arrays store multiple values.</p><div class="code-block"><pre>let skills = ["HTML", "CSS", "JS"];\nconsole.log(skills[0]); // HTML</pre></div>`,
        quiz: { q: "How to access first array item?", o: ["arr[1]", "arr[0]", "arr.first"], a: 1 }
    },
    {
        id: 'js-7', title: 'Loops',
        content: `<h3>Repeating Actions</h3><p>Use loops to repeat code.</p><div class="code-block"><pre>for (let i = 0; i < 5; i++) {\n  console.log(i);\n}</pre></div>`,
        quiz: { q: "Which loop is best for arrays?", o: ["for loop", "while loop", "forEach loop"], a: 2 }
    },
    {
        id: 'js-8', title: 'Objects',
        content: `<h3>Complex Data Structures</h3><p>Objects store key-value pairs.</p><div class="code-block"><pre>let user = {\n  name: "Hacker",\n  level: 99\n};</pre></div>`,
        quiz: { q: "How to access object value?", o: ["user->name", "user.name", "user[name]"], a: 1 }
    }
];

const badges = [
    { id: 'b1', name: 'HTML Novice', condition: (p) => p.html >= 1 },
    { id: 'b2', name: 'CSS Wizard', condition: (p) => p.css >= 3 },
    { id: 'b3', name: 'JS Master', condition: (p) => p.js >= 4 },
    { id: 'b4', name: 'Quiz Pro', condition: (p) => p.quizzes >= 5 },
    { id: 'b5', name: 'Streak Champion', condition: (p) => p.streak >= 3 },
    { id: 'b6', name: 'Code Warrior', condition: (p) => (p.html + p.css + p.js) >= 10 }
];

// --- 2. STATE MANAGEMENT ---
let userProgress = JSON.parse(localStorage.getItem('cyberProgress')) || {
    html: 0, css: 0, js: 0,
    quizzes: 0, streak: 0, lastLogin: null,
    badges: [], scores: {}
};
let currentCourse = '';
let currentLessonIndex = 0;
let currentQuizScore = 0;

// --- 3. INITIALIZATION ---
window.onload = function() {
    initMatrixRain();
    initLoadingScreen();
    router('home');
};

// Loading Screen Logic
function initLoadingScreen() {
    const loader = document.getElementById('loader');
    const progressFill = document.getElementById('progress-fill');
    const percentText = document.getElementById('percent');
    let percent = 0;
    
    const interval = setInterval(() => {
        percent += Math.floor(Math.random() * 5) + 1;
        if (percent >= 100) {
            percent = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => { loader.style.display = 'none'; }, 500);
            }, 500);
        }
        percentText.innerText = percent + '%';
        progressFill.style.width = percent + '%';
    }, 100);
}

// Matrix Rain Animation
function initMatrixRain() {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    const chars = '0101010101ABCDEF'.split('');
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = '14px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 50);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// --- 4. ROUTER SYSTEM ---
function router(sectionId) {
    // Hide all sections
    document.querySelectorAll('main section').forEach(sec => {
        sec.classList.remove('active-section');
        sec.classList.add('hidden-section');
    });
    
    // Route specific
    if (sectionId === 'home') {
        showSection('home');
        updateDashboard();
    } else if (sectionId === 'html') {
        currentCourse = 'html';
        renderLessons('html', htmlLessons);
        showSection('html-course');
    } else if (sectionId === 'css') {
        currentCourse = 'css';
        renderLessons('css', cssLessons);
        showSection('css-course');
    } else if (sectionId === 'js') {
        currentCourse = 'js';
        renderLessons('js', jsLessons);
        showSection('js-course');
    } else if (sectionId === 'dashboard') {
        renderDashboard();
        showSection('dashboard');
    } else if (sectionId === 'resources') {
        showSection('resources');
    } else if (sectionId === 'certificate') {
        showSection('certificate-view');
    }
    
    window.scrollTo(0, 0);
}

function showSection(id) {
    const section = document.getElementById(id);
    section.classList.remove('hidden-section');
    section.classList.add('active-section');
}

// --- 5. LESSON RENDERING ---
function renderLessons(course, lessons) {
    const container = document.getElementById(course + '-content');
    const progressKey = course;
    
    let html = '';
    
    lessons.forEach((lesson, index) => {
        const isCompleted = userProgress[progressKey] > index;
        const statusClass = isCompleted ? 'completed' : '';
        
        html += `
        <div class="lesson-card glass-panel ${statusClass}">
            <div class="lesson-header">
                <h3>${index + 1}. ${lesson.title}</h3>
                <span class="status-badge">${isCompleted ? '✓ Completed' : '○ Locked'}</span>
            </div>
            <div class="lesson-content-scroll">${lesson.content}</div>
            <div class="lesson-actions">
                <button class="cyber-btn" onclick="startQuiz('${course}', ${index})">Take Quiz</button>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Update progress bar
    const percent = (userProgress[progressKey] / lessons.length) * 100;
    document.getElementById(course + '-progress-bar').style.width = percent + '%';
}

// --- 6. QUIZ SYSTEM ---
function startQuiz(course, lessonIndex) {
    const lessons = course === 'html' ? htmlLessons : course === 'css' ? cssLessons : jsLessons;
    const lesson = lessons[lessonIndex];
    
    if (!lesson.quiz) return;
    
    currentCourse = course;
    currentLessonIndex = lessonIndex;
    currentQuizScore = 0;
    
    const questionArea = document.getElementById('question-area');
    const optionsArea = document.getElementById('options-area');
    const nextBtn = document.getElementById('next-btn');
    const quizTitle = document.getElementById('quiz-title');
    
    quizTitle.innerText = `Quiz: ${lesson.title}`;
    questionArea.innerHTML = `<p>${lesson.quiz.q}</p>`;
    
    let optionsHtml = '';
    lesson.quiz.o.forEach((opt, idx) => {
        optionsHtml += `<button class="option-btn" onclick="checkAnswer(${idx}, ${lesson.quiz.a})">${opt}</button>`;
    });
    
    optionsArea.innerHTML = optionsHtml;
    nextBtn.classList.add('hidden');
    
    showSection('quiz-section');
}

function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correct) {
            btn.classList.add('correct');
        } else if (idx === selected && selected !== correct) {
            btn.classList.add('wrong');
        }
    });
    
    if (selected === correct) {
        currentQuizScore = 1;
    }
    
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    if (currentQuizScore === 1) {
        const key = currentCourse;
        const nextIdx =