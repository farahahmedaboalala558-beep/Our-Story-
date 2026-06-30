// PASSWORD

const correctPassword = "6/12/2025";

const lockScreen = document.getElementById("lock-screen");
const website = document.getElementById("website");
const password = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

unlockBtn.onclick = function () {

    if (password.value.trim() === correctPassword) {

        lockScreen.style.display = "none";
        website.style.display = "block";

    } else {

        error.innerHTML = "🤍 التاريخ غير صحيح";

    }

};

// MUSIC

const playMusic = document.getElementById("playMusic");
const song = document.getElementById("song");

playMusic.onclick = function () {
    song.play();
};

// GALLERY

const gallery = document.querySelector(".gallery");

const messages = [

"أول مقابلة... وأول صورة... وأول ذكرى لينا. ومن هنا بدأت أحلى حكاية في حياتي. ♥️",

"أول شوكولاتة جبهالي... ولسه محتفظة بيها لحد دلوقتي. 🫣🤍",

"أول عيد ميلاد ليك سوا... ومن أقرب الأيام لقلبي. يارب العمر كله وأنت معايا. ♥️",

"في يوم من أجمل أيام العمر... أصبحت أنت قدري ونصيبي الجميل. ♥️",

"أول زيارة بعد قراية الفاتحة... ومن أكتر الصور اللي بحبها جدًا. ♥️",

"أول صورة في بيتنا... ومتأكدة إنه هيكون بيت مليان حب ومودة ورحمة. ♥️",

"اليوم ده كان مختلف... وأنا باختار دبلتي مع أكتر شخص حبيته في الدنيا. ♥️",

"أول مناسبة نحضرها سوا... وجودك جنبي خلاها جميلة. ♥️",

"أول عيد ميلاد ليا وإحنا سوا... عمري ما هنسى اليوم ده. ♥️",

"في اللحظة دي بدأت أجمل مرحلة في حياتي... عمر جديد مفيهوش غيرنا. ♥️",

"مش أول رمضان سوا... لكنه أول رمضان وإحنا سوا قدام العالم كله. ♥️",

"تاني عيد صغير وإحنا مع بعض. ♥️",

"اليوم ده بحبه... لأنك خرجتني عشان تفرحني. ♥️",

"الصورة دي مش حقيقية... بس بحبها أوي يا بامبينو. ♥️",

"بحب اليوم ده... لأنك جيت تعوضني وتفرحني. ♥️",

"أتمنى الصورة دي تبقى حقيقة... وأحكيلهم قد إيه أنا بحب أبوهم. ♥️"

];

for (let i = 1; i <= 16; i++) {

    gallery.innerHTML +=` 
    <div class="card">
        <img src="images/${i}.jpg">
        <p>${messages[i-1]}</p>
    </div>
    `;

}

// VIDEOS

const videoContainer = document.querySelector(".video-container");

const videoMessages = [

"يومها أمنيتك كانت إني أكون مراتك... والسنة دي بنحقق الأمنية يا نور عيني. ❤️",

"مهما أوصفلك كنت مبسوطة إزاي اليوم ده... عمري ما هيكفي. ❤️",

"بحبك... وبحب أحس إنك ابني العنيد، واللي دماغه ناشفة، بس مليش غيره في الدنيا. 🤍",

"أول تجهيزات بيتنا... اللي بالنسبة ليا الدنيا وما فيها. 🏡❤️",

"الفيديو ده كل ما أشوفه بحس إني عايزة أعيش اليوم ده تاني. ❤️"

];

for (let i = 1; i <= 5; i++) {

    videoContainer.innerHTML += `
        <div class="card">
            <video controls width="100%">
                <source src="videos/${i}.mp4" type="video/mp4">
            </video>

            <p>${videoMessages[i-1]}</p>

       </div>
`;
}
// LETTER

document.getElementById("letterText").innerHTML = `
لو رجع بيا الزمن ألف مرة...
هختارك أنت في كل مرة. ❤️
`;
// ANIMATION

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});
