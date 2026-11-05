// ===============================
// 1. DỮ LIỆU CÁC CHƯƠNG HỌC
// ===============================

const chapters = [
    {
        title: "Chương 1: Giới thiệu Java",
        icon: "☕",
        body: `
            <h3>1. Java là gì?</h3>
            <p>Java là ngôn ngữ lập trình hướng đối tượng, có khả năng chạy trên nhiều hệ điều hành thông qua máy ảo JVM.</p>

            <h3>2. Môi trường phát triển</h3>
            <ul>
                <li>Cài đặt JDK (Java Development Kit).</li>
                <li>Sử dụng IntelliJ IDEA, Eclipse hoặc NetBeans.</li>
                <li>Biên dịch bằng javac và chạy bằng java.</li>
            </ul>

            <h3>3. Chương trình đầu tiên</h3>
            <pre class="code">public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java!");
    }
}</pre>

            <p><b>Giải thích:</b> main là điểm bắt đầu chương trình; println in nội dung ra màn hình.</p>
        `
    },
    {
        title: "Chương 2: Biến và kiểu dữ liệu",
        icon: "📦",
        body: `
            <h3>1. Khai báo biến</h3>
            <p>Biến dùng để lưu trữ dữ liệu. Mỗi biến có kiểu dữ liệu và tên.</p>

            <pre class="code">int tuoi = 20;
double diem = 8.5;
String ten = "An";
boolean dat = true;</pre>

            <h3>2. Một số kiểu cơ bản</h3>
            <ul>
                <li>int: số nguyên.</li>
                <li>double: số thực.</li>
                <li>char: một ký tự.</li>
                <li>boolean: true hoặc false.</li>
                <li>String: chuỗi ký tự.</li>
            </ul>
        `
    },
    {
        title: "Chương 3: Điều kiện và vòng lặp",
        icon: "🔁",
        body: `
            <h3>1. Câu lệnh if-else</h3>

            <pre class="code">int n = 7;

if (n % 2 == 0) {
    System.out.println("Chan");
} else {
    System.out.println("Le");
}</pre>

            <h3>2. Vòng lặp</h3>
            <p>for thường dùng khi biết số lần lặp; while lặp khi điều kiện còn đúng.</p>

            <pre class="code">for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}</pre>
        `
    },
    {
        title: "Chương 4: Mảng và chuỗi",
        icon: "🧮",
        body: `
            <h3>1. Mảng</h3>
            <p>Mảng lưu nhiều giá trị cùng kiểu dữ liệu.</p>

            <pre class="code">int[] a = {2, 4, 6};

for (int x : a) {
    System.out.println(x);
}</pre>

            <h3>2. Chuỗi</h3>
            <p>String cung cấp các phương thức như length(), charAt(), equals() và substring().</p>
        `
    },
    {
        title: "Chương 5: Phương thức",
        icon: "🧩",
        body: `
            <h3>Phương thức trong Java</h3>
            <p>Phương thức giúp chia chương trình thành các phần nhỏ, tái sử dụng và dễ kiểm thử.</p>

            <pre class="code">static int tong(int a, int b) {
    return a + b;
}

public static void main(String[] args) {
    System.out.println(tong(2, 3));
}</pre>
        `
    },
    {
        title: "Chương 6: Hướng đối tượng",
        icon: "🏗️",
        body: `
            <h3>Lớp và đối tượng</h3>
            <p>Lớp là bản thiết kế; đối tượng là một thể hiện của lớp. Lớp thường chứa thuộc tính và phương thức.</p>

            <pre class="code">class SinhVien {
    String hoTen;

    void gioiThieu() {
        System.out.println(hoTen);
    }
}</pre>
        `
    },
    {
        title: "Chương 7: Kế thừa và đa hình",
        icon: "🌳",
        body: `
            <h3>Kế thừa</h3>
            <p>Từ khóa extends cho phép lớp con kế thừa thuộc tính và phương thức từ lớp cha.</p>

            <pre class="code">class Animal {
    void keu() {}
}

class Dog extends Animal {
    @Override
    void keu() {
        System.out.println("Gau gau");
    }
}</pre>

            <p>Đa hình cho phép cùng một lời gọi phương thức có cách thực hiện khác nhau.</p>
        `
    },
    {
        title: "Chương 8: Ngoại lệ và tệp",
        icon: "📁",
        body: `
            <h3>Xử lý ngoại lệ</h3>
            <p>Dùng try-catch để xử lý lỗi có thể phát sinh khi chương trình chạy.</p>

            <pre class="code">try {
    int n = Integer.parseInt("123");
    System.out.println(n);
} catch (NumberFormatException e) {
    System.out.println("Du lieu khong hop le");
}</pre>

            <p>Đọc ghi tệp có thể sử dụng các lớp trong java.io hoặc java.nio.file.</p>
        `
    }
];

const chapterSupplement = [
`<h3>4. JDK, JRE và JVM</h3><p><b>JDK</b> gồm công cụ phát triển như trình biên dịch <code>javac</code>; <b>JRE</b> là môi trường cần thiết để chạy ứng dụng Java; <b>JVM</b> thực thi bytecode. Quy trình cơ bản: viết tệp Main.java → biên dịch bằng <code>javac Main.java</code> → chạy bằng <code>java Main</code>.</p><h3>5. Cấu trúc chương trình</h3><p>Tên tệp phải trùng tên lớp public. Hàm <code>main</code> là điểm bắt đầu: <code>public static void main(String[] args)</code>. Java phân biệt chữ hoa/chữ thường; câu lệnh thường kết thúc bằng dấu chấm phẩy.</p><h3>6. Chú thích và quy tắc đặt tên</h3><p>Dùng <code>//</code> cho chú thích một dòng, <code>/* ... */</code> cho nhiều dòng. Tên biến/lớp không bắt đầu bằng chữ số và không được trùng từ khóa. Quy ước: lớp dùng PascalCase, biến và phương thức dùng camelCase.</p>`,
`<h3>3. Khai báo và ép kiểu</h3><pre class="code">int tuoi = 20;
double diem = 8.5;
final double PI = 3.14159;
int n = (int) 3.9; // n = 3</pre><p>Ép kiểu tường minh có thể làm mất dữ liệu. Khi kết hợp số nguyên và số thực, Java thường chuyển phép tính sang kiểu rộng hơn.</p><h3>4. Toán tử</h3><p>Số học: <code>+ - * / %</code>; so sánh: <code>== != &gt; &lt; &gt;= &lt;=</code>; logic: <code>&amp;&amp; || !</code>; gán: <code>= += -=</code>. Chia hai số nguyên cho kết quả nguyên, ví dụ <code>7 / 2</code> bằng 3.</p><h3>5. Nhập dữ liệu</h3><pre class="code">import java.util.Scanner;
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
String ten = sc.next();</pre><p>Dùng <code>nextLine()</code> để đọc cả dòng; cần chú ý ký tự xuống dòng còn lại sau <code>nextInt()</code>.</p>`,
`<h3>3. Rẽ nhánh switch</h3><pre class="code">switch (thang) {
 case 1: System.out.println("Thang mot"); break;
 default: System.out.println("Khong hop le");
}</pre><p><code>break</code> ngăn chương trình chạy tiếp sang nhánh kế tiếp trong switch truyền thống.</p><h3>4. Các vòng lặp</h3><p><code>for</code> phù hợp khi biết số lần lặp; <code>while</code> kiểm tra điều kiện trước mỗi vòng; <code>do-while</code> luôn chạy ít nhất một lần. Dùng <code>break</code> để thoát vòng lặp và <code>continue</code> để bỏ qua phần còn lại của lượt hiện tại.</p><h3>5. Lỗi thường gặp</h3><p>Đảm bảo điều kiện vòng lặp cuối cùng trở thành sai để tránh lặp vô hạn. Dùng <code>==</code> để so sánh số nguyên; với chuỗi hãy dùng <code>equals()</code>.</p>`,
`<h3>3. Khai báo và duyệt mảng</h3><pre class="code">int[] a = new int[5];
int[] b = {3, 9, 2, 7};
for (int i = 0; i &lt; b.length; i++) {
 System.out.println(b[i]);
}</pre><p>Chỉ số mảng bắt đầu từ 0; phần tử cuối có chỉ số <code>length - 1</code>. Truy cập ngoài phạm vi gây <code>ArrayIndexOutOfBoundsException</code>.</p><h3>4. Tìm kiếm và xử lý mảng</h3><p>Để tìm max/min, khởi tạo bằng phần tử đầu rồi duyệt các phần tử còn lại. Tổng mảng dùng biến tích lũy. Cần kiểm tra mảng không rỗng trước khi truy cập phần tử đầu tiên.</p><h3>5. Xử lý String</h3><p><code>length()</code> trả về độ dài; <code>charAt(i)</code> lấy ký tự; <code>equals()</code> so sánh nội dung; <code>substring(a,b)</code> lấy đoạn từ a đến trước b. String là bất biến: các thao tác tạo ra chuỗi mới.</p>`,
`<h3>2. Cú pháp và tham số</h3><pre class="code">static int tong(int a, int b) {
 return a + b;
}</pre><p>Khai báo gồm kiểu trả về, tên phương thức và danh sách tham số. <code>void</code> dùng khi không trả về giá trị; <code>return</code> kết thúc phương thức và trả kết quả.</p><h3>3. Phạm vi biến</h3><p>Biến cục bộ chỉ dùng trong khối khai báo; tham số nhận dữ liệu khi gọi hàm. Biến cục bộ phải được gán giá trị trước khi sử dụng.</p><h3>4. Nạp chồng phương thức</h3><p>Có thể khai báo nhiều phương thức cùng tên nếu danh sách tham số khác nhau về số lượng, kiểu hoặc thứ tự. Chỉ đổi kiểu trả về thì không đủ để tạo nạp chồng.</p>`,
`<h3>2. Thuộc tính, phương thức và tạo đối tượng</h3><pre class="code">class SinhVien {
 String hoTen;
 SinhVien(String ten) { hoTen = ten; }
 void gioiThieu() { System.out.println(hoTen); }
}
SinhVien sv = new SinhVien("An");
sv.gioiThieu();</pre><p><code>new</code> tạo đối tượng; constructor có tên trùng lớp và không có kiểu trả về. Từ khóa <code>this</code> tham chiếu đối tượng hiện tại.</p><h3>3. Đóng gói</h3><p>Đặt thuộc tính ở mức <code>private</code> và cung cấp phương thức kiểm soát truy cập khi cần. Các mức truy cập gồm public, protected, mặc định (package-private) và private.</p><h3>4. Thành viên static</h3><p>Thành viên <code>static</code> thuộc về lớp, có thể gọi qua tên lớp. Thành viên thông thường thuộc từng đối tượng.</p>`,
`<h3>2. Ghi đè phương thức</h3><p>Lớp con có thể định nghĩa lại phương thức kế thừa với cùng chữ ký; dùng <code>@Override</code> để trình biên dịch kiểm tra. Không được giảm mức truy cập khi ghi đè.</p><h3>3. Đa hình</h3><pre class="code">Animal a = new Dog();
a.keu();</pre><p>Biến kiểu lớp cha có thể tham chiếu đối tượng lớp con. Phương thức instance được chọn theo kiểu thực tế của đối tượng lúc chạy.</p><h3>4. Lớp trừu tượng và interface</h3><p>Lớp <code>abstract</code> không thể tạo đối tượng trực tiếp và có thể chứa phương thức trừu tượng. Interface mô tả hợp đồng hành vi; một lớp có thể triển khai nhiều interface.</p>`,
`<h3>2. Phân loại ngoại lệ</h3><p>Checked exception phải được bắt hoặc khai báo bằng <code>throws</code>; unchecked exception thường là lỗi sử dụng chương trình như chia cho 0 nguyên hoặc truy cập mảng sai chỉ số.</p><h3>3. try-catch-finally</h3><pre class="code">try {
 int n = Integer.parseInt(text);
} catch (NumberFormatException e) {
 System.out.println("Du lieu khong hop le");
} finally {
 // thường dùng để dọn dẹp tài nguyên
}</pre><p>Chỉ bắt ngoại lệ mà chương trình có thể xử lý; tránh bắt chung <code>Exception</code> khi không cần thiết.</p><h3>4. Đọc và ghi tệp</h3><pre class="code">import java.nio.file.*;
String s = Files.readString(Path.of("data.txt"));
Files.writeString(Path.of("out.txt"), s);</pre><p>Các phương thức trên có từ Java 11. Có thể dùng try-with-resources với luồng I/O để tự đóng tài nguyên. Khi đọc tệp, cần xử lý <code>IOException</code> và đường dẫn không tồn tại.</p>`
];
chapters.forEach((chapter, i) => { chapter.body += chapterSupplement[i]; });


// ===============================
// 2. DỮ LIỆU BÀI TẬP & 5 BỘ TEST JSON CHUẨN
// ===============================

const defaultTests = {
  1: [
    { input: "Khong co", output: "Hello Java!" },
    { input: "Main", output: "Hello Java!" },
    { input: "Test 3", output: "Hello Java!" },
    { input: "Test 4", output: "Hello Java!" },
    { input: "Test 5", output: "Hello Java!" }
  ],
  2: [
    { input: "2 3", output: "5" },
    { input: "0 0", output: "0" },
    { input: "-2 7", output: "5" },
    { input: "10 15", output: "25" },
    { input: "-4 -6", output: "-10" }
  ],
  3: [
    { input: "7", output: "Le" },
    { input: "8", output: "Chan" },
    { input: "0", output: "Chan" },
    { input: "-3", output: "Le" },
    { input: "100", output: "Chan" }
  ],
  4: [
    { input: "0", output: "1" },
    { input: "1", output: "1" },
    { input: "3", output: "6" },
    { input: "5", output: "120" },
    { input: "6", output: "720" }
  ],
  5: [
    { input: "3 9 2 7", output: "9" },
    { input: "-1 -5 -2", output: "-1" },
    { input: "4 4 4", output: "4" },
    { input: "10 20 30", output: "30" },
    { input: "0 -2 8 1", output: "8" }
  ]
};

// 5 TIÊU CHÍ BẮT BUỘC TRONG CODE ĐỂ ĐẠT ĐIỂM
const exerciseKeywords = {
    1: ["class", "main", "system.out", "hello", "java"],
    2: ["scanner", "int", "+", "system.out", "nextint"],
    3: ["scanner", "%", "if", "chan", "le"],
    4: ["scanner", "for", "gt", "*", "system.out"],
    5: ["split", "max", "for", ">", "system.out"]
};

let exercises = [
    {
        id: 1,
        title: "In ra lời chào",
        level: "Dễ",
        desc: "Viết chương trình in ra dòng chữ Hello Java!",
        expected: "Hello Java!",
        chapter: 1
    },
    {
        id: 2,
        title: "Tính tổng hai số",
        level: "Dễ",
        desc: "Nhập hai số nguyên a, b. In ra tổng a + b.",
        expected: "5",
        chapter: 2
    },
    {
        id: 3,
        title: "Kiểm tra số chẵn lẻ",
        level: "Trung bình",
        desc: "Nhập một số nguyên n. In ra Chan nếu n chẵn, ngược lại in Le.",
        expected: "Le",
        chapter: 3
    },
    {
        id: 4,
        title: "Tính giai thừa",
        level: "Trung bình",
        desc: "Nhập số nguyên không âm n (n ≤ 12). In ra n!; quy ước 0! = 1.",
        expected: "120",
        chapter: 3
    },
    {
        id: 5,
        title: "Tìm số lớn nhất trong mảng",
        level: "Khó",
        desc: "Nhập các số nguyên của một mảng trên một dòng, cách nhau bởi dấu cách. In ra giá trị lớn nhất.",
        expected: "9",
        chapter: 4
    }
];

// Gán cố định 5 bộ test cho từng bài tập
exercises = exercises.map(ex => ({
    ...ex,
    tests: defaultTests[ex.id] || Array.from({length:5}, (_,i)=>({input:"Test "+(i+1), output: ex.expected || ""}))
}));

let exams = JSON.parse(localStorage.getItem("jl_exams") || "[]");
let selectedExercise = 1;
let practiceMode = "Kiểm tra";
let activeLevel = "Tất cả";
let results = JSON.parse(localStorage.getItem("jl_results") || "[]");
let loggedRole = "";
let currentChapter = 0;

// BIẾN TRẠNG THÁI KHÓA CHUYỂN TRANG
let isWorkingOnQuiz = false;


// ===============================
// 3. LƯU DỮ LIỆU LOCALSTORAGE
// ===============================

function saveExercises() {
    localStorage.setItem(
        "jl_exercises",
        JSON.stringify(exercises)
    );
}

const savedExercises = localStorage.getItem("jl_exercises");
if (savedExercises) {
    try {
        const loaded = JSON.parse(savedExercises);
        if (Array.isArray(loaded) && loaded.length > 0) {
            exercises = loaded.map(ex => ({
                ...ex,
                tests: ex.tests && ex.tests.length === 5 ? ex.tests : (defaultTests[ex.id] || ex.tests)
            }));
        }
    } catch (e) {
        console.log("Không thể đọc dữ liệu bài tập.");
    }
}


// ===============================
// 4. CHUYỂN TRANG
// ===============================

function showPage(id) {
    if (id === "results" && isWorkingOnQuiz) {
        alert("Bạn đang trong quá trình làm bài kiểm tra/thi! Vui lòng bấm 'Nộp bài và chấm điểm' trước khi xem kết quả.");
        return;
    }

    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

    const page = document.getElementById(id);
    if (page) {
        page.classList.remove("hidden");
    }

    document.querySelectorAll("#nav button").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.page === id
        );
    });

    if (id === "theory") renderTheory();
    if (id === "exercises") renderExercises();
    if (id === "practice") renderPractice();
    if (id === "teacher") {
        renderTeacherExercises();
        renderTeacherTests();
        renderTestEditor();
        renderExamBuilder();
    }
    if (id === "results") renderResults();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("#nav button").forEach(button => {
    button.addEventListener("click", () => {
        if (button.dataset.page !== "practice" && isWorkingOnQuiz) {
            if (!confirm("Bạn đang làm bài thi dở dang. Bạn có chắc muốn rời đi? (Bài làm chưa nộp sẽ không được lưu).")) {
                return;
            }
        }
        showPage(button.dataset.page);
    });
});


// ===============================
// 5. TRANG CHỦ
// ===============================

function renderHome() {
    document.getElementById("chapterCards").innerHTML =
        chapters.map((chapter, index) => `
            <div class="card">
                <div class="icon">${chapter.icon}</div>
                <h3>${chapter.title}</h3>
                <p>Học lý thuyết, xem ví dụ và luyện bài tập.</p>
                <button class="secondary" onclick="openChapter(${index})">
                    Học chương →
                </button>
            </div>
        `).join("");
}


// ===============================
// 6. TRANG LÝ THUYẾT
// ===============================

function renderTheory() {
    document.getElementById("chapterMenu").innerHTML =
        chapters.map((chapter, index) => `
            <button
                class="${index === currentChapter ? "active" : ""}"
                onclick="openChapter(${index})">
                ${chapter.icon} ${chapter.title}
            </button>
        `).join("");

    document.getElementById("lessonTitle").textContent =
        chapters[currentChapter].title;

    document.getElementById("lessonBody").innerHTML =
        chapters[currentChapter].body +
        `
            <hr>
            <h3>📌 Bài tập chương ${currentChapter + 1}</h3>
            <p>Hãy thực hành các bài tập liên quan để củng cố kiến thức vừa học.</p>
            <button class="primary" onclick="showPage('exercises')">
                Xem danh sách bài tập
            </button>
        `;
}

function openChapter(index) {
    currentChapter = index;
    showPage("theory");
}


// ===============================
// 7. DANH SÁCH BÀI TẬP THỰC HÀNH (ĐÃ ẨN MÔ TẢ ĐỀ BÀI)
// ===============================

function renderExercises() {
    const list = exercises.filter(exercise => {
        return activeLevel === "Tất cả" || exercise.level === activeLevel;
    });

    document.getElementById("exerciseList").innerHTML =
        list.map((exercise) => {
            const originalIndex = exercises.findIndex(e => e.id === exercise.id) + 1;
            return `
            <div class="card exercise">
                <div>
                    <span class="tag ${
                        exercise.level === "Dễ" ? "easy" : exercise.level === "Khó" ? "hard" : "medium"
                    }">
                        ${exercise.level}
                    </span>
                    <h3>Bài ${originalIndex}</h3>
                    <div style="margin-top:8px">
                        <span class="small">Chương ${exercise.chapter} · Tối đa 10 điểm</span>
                    </div>
                </div>
                <button class="primary" onclick="startExercise(${exercise.id})">
                    Làm bài →
                </button>
            </div>
        `;
        }).join("") || "<div class='card'>Chưa có bài tập ở mức này.</div>";
}

document.getElementById("levelTabs").addEventListener("click", event => {
    if (event.target.dataset.level) {
        activeLevel = event.target.dataset.level;
        document.querySelectorAll("#levelTabs button").forEach(button => {
            button.classList.toggle("active", button === event.target);
        });
        renderExercises();
    }
});


// ===============================
// 8. KIỂM TRA VÀ THI
// ===============================

function renderPractice() {
    document.getElementById("practiceTitle").textContent = practiceMode === "Thi" ? "Thi thực hành" : "Kiểm tra bài tập";
    document.getElementById("selectionHint").textContent = practiceMode === "Thi" ? "(chọn 2 đến 3 bài)" : "(chọn 1 bài)";

    // HIỂN THỊ BÀI 1, BÀI 2, BÀI 3... KÈM MỨC ĐỘ CHO PHẦN LỰA CHỌN THI/KIỂM TRA
    document.getElementById("practiceChoices").innerHTML =
        exercises.map((exercise, idx) => `
            <label class="card" style="display:flex;gap:10px;align-items:center;cursor:pointer">
                <input
                    style="width:auto"
                    type="${practiceMode === "Thi" ? "checkbox" : "radio"}"
                    name="chosenExercise"
                    value="${exercise.id}"
                    ${exercise.id === selectedExercise ? "checked" : ""}
                    onchange="validateQuizSelection()"
                >
                <span>
                    <b>Bài ${idx + 1}</b>
                    <span class="tag ${
                        exercise.level === "Dễ" ? "easy" : exercise.level === "Khó" ? "hard" : "medium"
                    }">
                        Mức độ: ${exercise.level}
                    </span>
                </span>
            </label>
        `).join("");

    let actionBtn = document.getElementById("startQuizActionBtn");
    if (!actionBtn) {
        actionBtn = document.createElement("div");
        actionBtn.id = "startQuizActionBtn";
        actionBtn.style.margin = "15px 0";
        const choices = document.getElementById("practiceChoices");
        choices.parentNode.insertBefore(actionBtn, choices.nextSibling);
    }
    
    actionBtn.innerHTML = `
        <button class="primary" onclick="startDoingQuiz()">🚀 Bắt đầu làm bài</button>
    `;

    document.getElementById("codingArea").classList.add("hidden");
    isWorkingOnQuiz = false;
}

function updatePracticeMode() {
    practiceMode = document.getElementById("practiceMode").value;
    isWorkingOnQuiz = false;
    renderPractice();
}

function setPracticeMode(mode) {
    practiceMode = mode;
    showPage("practice");
    const modeSelect = document.getElementById("practiceMode");
    if (modeSelect) modeSelect.value = mode;
    updatePracticeMode();
}

function validateQuizSelection() {
    if (practiceMode === "Thi") {
        const checked = [...document.querySelectorAll('input[name="chosenExercise"]:checked')];
        if (checked.length > 3) {
            alert("Bài thi chỉ chọn tối đa 3 bài.");
            event.target.checked = false;
        }
    }
}

// SINH VIÊN BẤM "BẮT ĐẦU LÀM BÀI" -> HIỆN CHI TIẾT ĐỀ BÀI VÀ KHÓA CHUYỂN TRANG
function startDoingQuiz() {
    const name = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();

    if (!name || !studentId) {
        alert("Vui lòng nhập đầy đủ Họ tên và Mã số sinh viên trước khi bắt đầu!");
        return;
    }

    let selectedIds = [];
    if (practiceMode === "Thi") {
        selectedIds = [...document.querySelectorAll('input[name="chosenExercise"]:checked')].map(x => Number(x.value));
        if (selectedIds.length < 2 || selectedIds.length > 3) {
            alert("Bài thi yêu cầu chọn từ 2 đến 3 bài tập.");
            return;
        }
    } else {
        const checked = document.querySelector('input[name="chosenExercise"]:checked');
        if (!checked) {
            alert("Vui lòng chọn 1 bài tập để kiểm tra.");
            return;
        }
        selectedExercise = Number(checked.value);
        selectedIds = [selectedExercise];
    }

    // HIỂN THỊ CHI TIẾT NỘI DUNG ĐỀ BÀI KHI ĐÃ BẤM BẮT ĐẦU
    if (practiceMode === "Kiểm tra") {
        const exercise = exercises.find(item => item.id === selectedExercise);
        const exIndex = exercises.findIndex(e => e.id === selectedExercise) + 1;
        document.getElementById("currentExerciseTitle").textContent = `Bài ${exIndex}: ${exercise.title}`;
        document.getElementById("currentExerciseDesc").textContent = exercise.desc;
    } else {
        const checkedExs = selectedIds.map(id => {
            const e = exercises.find(item => item.id === id);
            const idx = exercises.findIndex(item => item.id === id) + 1;
            return { ...e, idx };
        });
            
        document.getElementById("currentExerciseTitle").textContent = "Đề thi tổng hợp (" + checkedExs.length + " bài)";
        document.getElementById("currentExerciseDesc").innerHTML = checkedExs.map(e => `<b>Bài ${e.idx} (${e.title}):</b> ${e.desc}`).join("<br>");
    }

    // BẮT ĐẦU -> KHÓA CHUYỂN TRANG
    isWorkingOnQuiz = true;

    document.getElementById("answerCode").value = "";
    document.getElementById("gradeResult").innerHTML = "";
    document.getElementById("codingArea").classList.remove("hidden");

    window.scrollTo({ top: document.getElementById("codingArea").offsetTop, behavior: "smooth" });
}

function startExercise(id) {
    selectedExercise = id;
    practiceMode = "Kiểm tra";
    showPage("practice");
    const modeSelect = document.getElementById("practiceMode");
    if (modeSelect) modeSelect.value = "Kiểm tra";
    renderPractice();
    
    const targetInput = document.querySelector(`input[name="chosenExercise"][value="${id}"]`);
    if (targetInput) targetInput.checked = true;
}


// ===============================
// 9. NỘP BÀI VÀ CHẤM ĐIỂM
// ===============================

function submitAnswer() {
    const name = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const code = document.getElementById("answerCode").value;

    if (!name || !studentId) {
        alert("Vui lòng nhập họ tên và mã số sinh viên.");
        return;
    }

    let ids;
    if (practiceMode === "Thi") {
        ids = [...document.querySelectorAll('input[name="chosenExercise"]:checked')].map(input => Number(input.value));
        if (ids.length < 2 || ids.length > 3) {
            alert("Bài thi cần chọn từ 2 đến 3 bài tập.");
            return;
        }
    } else {
        ids = [selectedExercise];
    }

    const codeLower = code.toLowerCase();
    let total = 0;
    const details = [];

    ids.forEach(id => {
        const exercise = exercises.find(item => item.id === id);
        if (!exercise) return;

        const keywords = exerciseKeywords[id] || ["class", "main", "system.out", "return", "java"];
        
        let passedCount = 0;
        keywords.forEach(keyword => {
            if (codeLower.includes(keyword.toLowerCase())) {
                passedCount++;
            }
        });

        const score = passedCount * 2;
        total += score;
        details.push({ 
            title: exercise.title, 
            score: score, 
            passed: passedCount, 
            testCount: keywords.length 
        });
    });

    const max = ids.length * 10;

    const record = {
        name: name,
        sid: studentId,
        mode: practiceMode,
        details: details,
        total: total,
        max: max,
        time: new Date().toLocaleString("vi-VN")
    };

    results.unshift(record);
    localStorage.setItem("jl_results", JSON.stringify(results));

    // NỘP BÀI XONG -> MỞ KHÓA CHUYỂN TRANG
    isWorkingOnQuiz = false;

    document.getElementById("gradeResult").innerHTML = `
        <div class="result">
            Kết quả chấm điểm: ${total}/${max} điểm (Đạt ${total/2} / 5 tiêu chí bắt buộc).
            <br>
            <span class="small">
                Đã nộp bài thành công! Bây giờ bạn có thể chuyển sang mục Kết quả để xem lại.
            </span>
        </div>
    `;

    renderResults();
}


// ===============================
// 10. GIÁO VIÊN TẠO & QUẢN LÝ 5 BỘ TEST
// ===============================

function addExercise() {
    const title = document.getElementById("newTitle").value.trim();
    const desc = document.getElementById("newDesc").value.trim();
    const expected = document.getElementById("newExpected").value.trim();
    const level = document.getElementById("newLevel").value;

    if (!title || !desc || !expected) {
        alert("Vui lòng nhập đủ tên bài, đề bài và đáp án mẫu.");
        return;
    }

    const newEx = {
        id: Date.now(),
        title: title,
        level: level,
        desc: desc,
        expected: expected,
        chapter: 1,
        tests: Array.from({length:5}, (_,i)=>({input:"Input " + (i+1), output: expected}))
    };

    exercises.push(newEx);
    saveExercises();

    document.getElementById("newTitle").value = "";
    document.getElementById("newDesc").value = "";
    document.getElementById("newExpected").value = "";

    renderTeacherExercises();
    renderTeacherTests();
    renderTestEditor();
    renderExamBuilder();

    alert("Đã thêm bài tập mới kèm 5 bộ test mặc định.");
}

function renderTeacherExercises() {
    document.getElementById("teacherExerciseList").innerHTML =
        exercises.map((exercise, idx) => `
            <div class="card exercise">
                <div>
                    <b>Bài ${idx + 1}</b>
                    <p>${exercise.desc}</p>
                    <span class="tag ${
                        exercise.level === "Dễ" ? "easy" : exercise.level === "Khó" ? "hard" : "medium"
                    }">
                        ${exercise.level}
                    </span>
                </div>
                <button class="danger" onclick="deleteExercise(${exercise.id})">
                    Xóa
                </button>
            </div>
        `).join("");
}

function deleteExercise(id) {
    if (!confirm("Bạn có chắc muốn xóa bài tập này?")) return;
    exercises = exercises.filter(item => item.id !== id);
    saveExercises();
    renderTeacherExercises();
    renderTeacherTests();
    renderTestEditor();
    renderExamBuilder();
}

function renderTeacherTests() {
    document.getElementById("teacherTestPreview").innerHTML = exercises.map((exercise, idx) => `
      <details style="padding:9px 0;border-bottom:1px solid var(--line)">
        <summary><b>Bài ${idx + 1}</b> · Mức độ: ${escapeHtml(exercise.level)} · ${(exercise.tests || []).length} bộ test</summary>
        <ol style="margin:5px 0;padding-left:20px">${(exercise.tests || []).map((t,i)=>`<li>Đầu vào: <code>${escapeHtml(t.input)}</code> → Đầu ra: <code>${escapeHtml(t.output)}</code> (2 điểm)</li>`).join("")}</ol>
      </details>`).join("");
}

function saveTestsForExercise() {
    const id = Number(document.getElementById("testExerciseSelect").value);
    const raw = document.getElementById("testJson").value.trim();
    const exercise = exercises.find(e => e.id === id);
    if (!exercise) return alert("Hãy chọn bài tập.");

    try {
        const tests = JSON.parse(raw);
        if (!Array.isArray(tests) || tests.length !== 5 || tests.some(t => !("input" in t) || !("output" in t))) {
            return alert('Cần đúng 5 test dạng [{"input":"...","output":"..."}, ...].');
        }
        exercise.tests = tests.map(t => ({input:String(t.input), output:String(t.output)}));
        saveExercises(); 
        renderTeacherTests();
        alert("Đã lưu thành công 5 bộ test!");
    } catch (e) { 
        alert("JSON chưa hợp lệ. Kiểm tra dấu ngoặc và dấu phẩy."); 
    }
}

function renderTestEditor() {
    const select = document.getElementById("testExerciseSelect");
    if (!select) return;
    select.innerHTML = exercises.map((e, idx) => `<option value="${e.id}">Bài ${idx + 1} (${escapeHtml(e.level)})</option>`).join("");
    loadTestJson();
}

function loadTestJson() {
    const id = Number(document.getElementById("testExerciseSelect").value);
    const ex = exercises.find(e => e.id === id);
    document.getElementById("testJson").value = JSON.stringify(ex?.tests || [], null, 2);
}

function createExam() {
    const title = document.getElementById("examTitle").value.trim();
    const ids = [...document.querySelectorAll("input[name='examExercise']:checked")].map(x=>Number(x.value));
    if (!title || !ids.length) return alert("Nhập tên đề và chọn ít nhất một bài tập.");
    
    exams.unshift({id:Date.now(), title, ids, createdAt:new Date().toLocaleString("vi-VN")});
    localStorage.setItem("jl_exams", JSON.stringify(exams));
    document.getElementById("examTitle").value = "";
    renderExamList(); 
    alert("Đã lưu đề thi trên trình duyệt này.");
}

function renderExamBuilder() {
    const target = document.getElementById("examExerciseChoices");
    if (!target) return;
    target.innerHTML = exercises.map((e, idx) => `<label class="card" style="display:block;margin:6px 0"><input type="checkbox" name="examExercise" value="${e.id}" style="width:auto"> Bài ${idx + 1} <span class="small">(${escapeHtml(e.level)})</span></label>`).join("");
    renderExamList();
}

function renderExamList() {
    const target = document.getElementById("examList"); if (!target) return;
    target.innerHTML = exams.map(ex=>`<div class="card"><b>${escapeHtml(ex.title)}</b><p>${ex.ids.map(id => {
        const idx = exercises.findIndex(e => e.id === id) + 1;
        return idx > 0 ? `Bài ${idx}` : "Bài đã xóa";
    }).join(", ")}</p><span class="small">${escapeHtml(ex.createdAt)}</span><button class="primary" onclick="assignExam(${ex.id})">Giao đề cho sinh viên</button><button class="danger" onclick="deleteExam(${ex.id})">Xóa đề</button></div>`).join("") || '<p class="small">Chưa có đề thi.</p>';
}

function assignExam(id) {
    const ex = exams.find(e=>e.id===id); if (!ex) return;
    practiceMode = "Thi"; 
    showPage("practice");
    const modeSelect = document.getElementById("practiceMode");
    if (modeSelect) modeSelect.value = "Thi";
    renderPractice();
    setTimeout(() => {
        document.querySelectorAll("input[name='chosenExercise']").forEach(x => {
            if (ex.ids.includes(Number(x.value))) x.checked = true;
        });
    }, 50);
    alert("Đã nạp đề thi. Hãy bấm 'Bắt đầu làm bài' để vào phòng thi.");
}

function deleteExam(id) { 
    exams = exams.filter(e=>e.id!==id); 
    localStorage.setItem("jl_exams", JSON.stringify(exams)); 
    renderExamList(); 
}


// ===============================
// 11. HIỂN THỊ KẾT QUẢ
// ===============================

function renderResults() {
    document.getElementById("resultRows").innerHTML =
        results.map(record => `
            <tr>
                <td>${escapeHtml(record.name)}</td>
                <td>${escapeHtml(record.sid)}</td>
                <td>
                    ${(record.details || [])
                        .map(item => {
                            const idx = exercises.findIndex(e => e.title === item.title) + 1;
                            return idx > 0 ? `Bài ${idx}` : escapeHtml(item.title);
                        })
                        .join(", ")}
                </td>
                <td>${record.mode}</td>
                <td><b>${record.total}/${record.max}</b></td>
                <td>${record.time}</td>
            </tr>
        `).join("");

    document.getElementById("emptyResults").classList.toggle("hidden", results.length > 0);
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}


// ===============================
// 12. ĐĂNG NHẬP DEMO
// ===============================

function login() {
    const role = document.getElementById("loginRole").value;
    const name = document.getElementById("loginName").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    if (!name || !pass) {
        document.getElementById("loginMessage").textContent = "Vui lòng nhập đủ thông tin.";
        return;
    }

    loggedRole = role;
    document.getElementById("loginMessage").textContent = "Xin chào " + name + "! Đã vào vai trò " + role + ".";

    if (role === "Giáo viên") {
        showPage("teacher");
    } else {
        document.getElementById("studentName").value = name;
        document.getElementById("studentId").value = pass;
        showPage("practice");
    }
}


// ===============================
// 13. CẬP NHẬT THÔNG TIN SINH VIÊN
// ===============================

function editProfile() {
    const name = prompt("Nhập họ tên của bạn:", localStorage.getItem("jl_profile_name") || "");
    if (name === null) return;

    const studentId = prompt("Nhập mã số sinh viên:", localStorage.getItem("jl_profile_id") || "");
    if (studentId === null) return;

    localStorage.setItem("jl_profile_name", name);
    localStorage.setItem("jl_profile_id", studentId);
    loadProfile();
}

function loadProfile() {
    const name = localStorage.getItem("jl_profile_name") || "Trần Chấn Lâm";
    const studentId = localStorage.getItem("jl_profile_id") || "231A011175";
    const avatar = localStorage.getItem("jl_profile_avatar") || "./img/avatar.jpg";

    const profileName = document.getElementById("profileName");
    const profileId = document.getElementById("profileId");
    const heroName = document.getElementById("heroName");
    const heroStudentId = document.getElementById("heroStudentId");
    const heroAvatar = document.getElementById("heroAvatar");

    if (profileName) profileName.textContent = name;
    if (profileId) profileId.textContent = studentId;
    if (heroName) heroName.textContent = name;
    if (heroStudentId) heroStudentId.textContent = studentId;

    if (heroAvatar) {
        heroAvatar.src = avatar;
        heroAvatar.onerror = function () {
            this.onerror = null;
            this.src = "./img/avatar.jpg";
        };
    }
}

// ===============================
// 14. KHỞI ĐỘNG WEBSITE
// ===============================

renderHome();
renderTheory();
renderExercises();
renderPractice();
renderTeacherExercises();
renderTeacherTests();
renderTestEditor();
renderExamBuilder();
renderResults();
loadProfile();