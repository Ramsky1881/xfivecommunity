document.addEventListener('DOMContentLoaded', function() {
            // === NEW FEATURES FUNCTIONALITY ===

            // AI Chat Assistant
            const chatBubble = document.getElementById('chatBubble');
            const chatModal = document.getElementById('chatModal');

            chatBubble.addEventListener('click', () => {
                chatModal.classList.toggle('open');
                chatBubble.querySelector('.notification').style.display = 'none';
            });

            // Close chat modal when clicking outside
            document.addEventListener('click', (e) => {
                if (!chatModal.contains(e.target) && !chatBubble.contains(e.target)) {
                    chatModal.classList.remove('open');
                }
            });

            // OPTIMIZED REAL-TIME NOTIFICATIONS
            const notificationQueue = [];
            const reusableNotification = document.getElementById('reusableNotification');
            const notificationTitle = document.getElementById('notificationTitle');
            const notificationMessage = document.getElementById('notificationMessage');
            let isNotifying = false;

            function processNotificationQueue() {
                if (notificationQueue.length === 0 || isNotifying) {
                    return;
                }

                isNotifying = true;
                const notification = notificationQueue.shift();
                notificationTitle.textContent = notification.title;
                notificationMessage.textContent = notification.message;

                // Trigger the show animation
                reusableNotification.classList.add('show');
                reusableNotification.classList.remove('hide');

                setTimeout(() => {
                    // Start the hide animation after a delay
                    reusableNotification.classList.remove('show');
                    reusableNotification.classList.add('hide');

                    // After the hide animation completes, process the next in queue
                    setTimeout(() => {
                        isNotifying = false;
                        processNotificationQueue();
                    }, 300); // Wait for the hide transition to finish
                }, 5000); // 5-second display time
            }

            function showNotification(title, message) {
                notificationQueue.push({ title, message });
                processNotificationQueue();
            }

            // Random notifications for demo
            const notifications = [
                {title: 'Pembaruan Sistem', message: 'Server diperbarui untuk performa lebih baik'},
                {title: 'XFIVE', message: 'XcecutiveFiveID'},
                {title: 'Pemberitahuan', message: 'Jangan lupa isi biodata jika belum'},
                {title: 'Komunitas', message: 'Ada 5 member baru bergabung hari ini'}
            ];

            setInterval(() => {
                if (Math.random() > 0.7) {
                    const notif = notifications[Math.floor(Math.random() * notifications.length)];
                    showNotification(notif.title, notif.message);
                }
            }, 15000);

            // Create particles for cyberpunk effect
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');

                // Random position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;

                // Random size
                const size = Math.random() * 3 + 1;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;

                // Random animation duration
                particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
                particle.style.animationDelay = `${Math.random() * 5}s`;

                particlesContainer.appendChild(particle);
            }

            // --- All Element Selectors ---
            const mainMenu = document.getElementById('mainMenu');
            const formWrapper = document.getElementById('formWrapper');
            const formContainer = formWrapper.querySelector('.container');

            // Main Menu Buttons
            const isiBiodataBtn = document.getElementById('isiBiodataBtn');
            const changeNickBtn = document.getElementById('changeNickBtn');
            const websiteBtn = document.getElementById('websiteBtn');

            // Modals
            const notificationModalOverlay = document.getElementById('notificationModalOverlay');
            const changeNickModalOverlay = document.getElementById('changeNickModalOverlay');
            const comingSoonModalOverlay = document.getElementById('comingSoonModalOverlay');

            // --- Data ---
            const testerData = {
                "Ramsky": "6285693393707", "Fadel": "6282173876492",
                "Iqbal": "6282162155012", "Thomas": "6281374402822",
                "Joko": "6289514915776", "Citra": "6283825756494",
                "Dena": "6282165791404", "Vandhu": "6281371412119",
                "Wicaksono": "6285211516594",
                "Wale": "6282276260740", "Zarah": "6281342620907",
                "Vania": "6281776897588"
            };
            const googleAppsScriptURL = 'https://script.google.com/macros/s/AKfycbwEUL4YkEYBfaIl1-T2jYueJorhn5SyS2q1YLpse5bhlleULPXIy3TjnwkputvVm156gg/exec';

            // --- Define color constants to avoid syntax errors ---
            const NEON_BLUE = '#00FFFF';
            const NEON_PURPLE = '#8A2BE2';
            const ERROR_COLOR = '#FF69B4';

            // --- HTML Templates for Dynamic Content ---
            const formStepsHTML = `
                <button id="backToMenuBtn" class="mb-4 text-white font-semibold hover:underline flex items-center transition-colors">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                    Kembali ke Menu
                </button>
                <div id="rulesContainer">
                    <h2 class="text-3xl font-bold text-center mb-8 glitch-text">RULES XFIVE 2025</h2>
                    <div class="rules-section">
                        <h3>BAB I – KETENTUAN UMUM</h3>
                        <h4>Pasal 1 – Tujuan</h4>
                        <ol>
                            <li>Komunitas XFIVE dibentuk sebagai wadah kebersamaan, bermain, dan bersosialisasi antar pemain AyoDance.</li>
                            <li>Tujuan utama adalah menciptakan lingkungan bermain yang nyaman, aman, dan solid.</li>
                            <li>Komunitas XFIVE juga berperan sebagai wadah gathering (gath) berskala nasional se-Indonesia, yang mempererat persaudaraan antar anggota melalui kegiatan online maupun offline.</li>
                            <li>Semua anggota wajib membaca dan mematuhi aturan sebelum melakukan aktivitas di komunitas.</li>
                        </ol>

                        <h4>Pasal 2 – Keanggotaan</h4>
                        <ol>
                            <li>Anggota adalah setiap pemain AyoDance yang resmi bergabung dengan XFIVE.</li>
                            <li>Anggota wajib menjaga nama baik komunitas serta berpartisipasi aktif dalam kegiatan.</li>
                            <li>Khusus anggota divisi club, dilarang berpindah ke com tanpa izin pengurus.</li>
                            <li>Batas nickname com 3 (com X5 | com luar | com luar)</li>
                        </ol>

                        <h3>BAB II – IDENTITAS KOMUNITAS</h3>
                        <h4>Pasal 3 – Nama & Format Nick</h4>
                        <ol>
                            <li>Nama resmi komunitas adalah XFIVE (X5).</li>
                            <li>Anggota dianjurkan menggunakan title/nickname dengan identitas nickX5 sesuai ketentuan.</li>
                            <li>Dilarang melepas title "X5" tanpa persetujuan Leader/Staff.</li>
                        </ol>

                        <h3>BAB III – TATA TERTIB</h3>
                        <h4>Pasal 4 – Etika & Perilaku</h4>
                        <ol>
                            <li>Anggota wajib menjunjung tinggi etika, adab, dan sopan santun.</li>
                            <li>Dilarang melakukan diskriminasi atau berdiskusi mengenai SARA maupun politik.</li>
                            <li>Dilarang menggunakan bahasa kasar, menghina, atau memprovokasi sesama anggota.</li>
                            <li>Dilarang membawa masalah personal ke komunitas. Jika dilakukan akan diberi peringatan, dan bila terulang dapat dikeluarkan.</li>
                            <li>Hubungan/pacaran sesama anggota diperbolehkan, namun masalah hubungan tidak boleh dicampuradukkan ke komunitas.</li>
                            <li>Wajib menyapa sesama anggota dengan sapaan khas “X5!”</li>
                        </ol>

                        <h4>Pasal 5 – Konten & Media</h4>
                        <ol>
                            <li>Dilarang mengirim gambar, video, atau audio yang mengandung pornografi, narkoba, judi, atau kekerasan (jika perlu dibagikan untuk konteks, wajib blur).</li>
                            <li>Konten berupa edit, fanart, atau meme AyoDance diperbolehkan selama tidak melanggar etika.</li>
                            <li>Dilarang chatting secara pribadi dengan anggota lain jika menimbulkan rasa risih.</li>
                            <li>Dilarang memposting masalah internal club XFIVE di luar komunitas, baik di media sosial, forum, maupun grup lain.</li>
                            <li>Dilarang menyebarkan nomor WhatsApp, data pribadi, atau informasi internal komunitas XFIVE tanpa izin dari pemilik data dan Dewan Staff.</li>
                        </ol>

                        <h4>Pasal 6 – Aktivitas & Gathering</h4>
                        <ol>
                            <li>Setiap anggota wajib menghadiri Gathering (Gath) sesuai domisili masing-masing, kecuali ada alasan mendesak yang sudah dikonfirmasi ke staff.</li>
                            <li>Gathering diadakan secara rutin oleh pengurus/staff domisili.</li>
                            <li>Kehadiran gath menjadi tolak ukur loyalitas & partisipasi aktif anggota.</li>
                            <li>Anggota yang tidak hadir berulang kali tanpa alasan dapat dikenakan sanksi.</li>
                        </ol>

                        <h4>Pasal 7 – Game Play & Club Battle</h4>
                        <ol>
                            <li>Kepada seluruh anggota dan staff komunitas XFIVE, dengan ini ditegaskan bahwa DILARANG KERAS menggunakan program ilegal/cheat dalam bentuk apa pun saat club battle maupun aktivitas yang merugikan permainan lainnya.
                                ❌ Contoh program ilegal yang dimaksud antara lain:
                                <ul style="list-style: none; margin-left: 20px; padding: 0;">
                                    <span style="color: cyan;">●</span> Taskey edit</li>
                            <ol>
                                    <span style="color: cyan;">●</span> Audition.exe edit</li>
                            <ol>
                                    <span style="color: cyan;">●</span> ACV edit</li>
                            <ol>
                                    <span style="color: cyan;">●</span> File tambahan lain yang mempermudah perfect atau memanipulasi hasil permainan</li>
                                </ul>
                            </li>
                            <li>Penggunaan program ilegal tidak hanya merugikan lawan, tetapi juga merusak sportivitas serta nama baik komunitas XFIVE.</li>
                            <li>Setiap anggota diwajibkan menjunjung tinggi kejujuran, sportivitas, dan fair play dalam setiap permainan.</li>
                            <li>Pelanggaran terhadap aturan ini akan dikenakan sanksi tegas berupa Blacklist Permanen tanpa SP.</li>
                            <li>Mari bersama menjaga komunitas XFIVE agar tetap solid, bersih, dan dihargai oleh komunitas lain.</li>
                        </ol>

                        <h3>BAB IV – PENYELESAIAN MASALAH</h3>
                        <h4>Pasal 8 – Konflik Internal</h4>
                        <ol>
                            <li>Jika ada masalah antar anggota, wajib diselesaikan dengan konfirmasi kepada V.Leader / Staff.</li>
                            <li>Anggota dilarang keluar sendiri tanpa klarifikasi, karena pengurus akan membantu mencari solusi terbaik.</li>
                        </ol>

                        <h3>BAB V – SANKSI</h3>
                        <h4>Pasal 9 – Jenis Sanksi</h4>
                        <ol>
                            <li>Teguran lisan atau tertulis diberikan untuk pelanggaran ringan.</li>
                            <li>Surat Peringatan (SP) maksimal 3 kali untuk pelanggaran yang masih dapat ditoleransi.</li>
                            <li>Banned sementara (1 minggu – 1 bulan) untuk pelanggaran sedang.</li>
                            <li>Khusus pelanggaran penggunaan program ilegal/cheat, segala jenis penipuan, anggota akan langsung dikenakan Blacklist Permanen tanpa SP.</li>
                            <li>Pelanggaran terkait penyebaran informasi internal atau data pribadi akan dikenakan teguran ringan hingga blacklist (6–12 bulan tidak dapat bergabung kembali)</li>
                            <li>Semua bentuk sanksi diputuskan oleh pengurus/owner komunitas dan bersifat final.</li>
                        </ol>

                        <h3>BAB VI – PENUTUP</h3>
                        <h4>Pasal 10 – Penegakan Aturan</h4>
                        <ol>
                            <li>Semua anggota wajib mematuhi aturan ini demi menjaga kenyamanan bersama.</li>
                            <li>Aturan dapat diperbarui sewaktu-waktu sesuai kebutuhan komunitas dan keputusan pengurus.</li>
                        </ol>
                    </div>
                    <div class="mt-8 flex justify-center">
                        <label for="agreeToRules" class="agreement-checkbox-group">
                            <input type="checkbox" id="agreeToRules">
                            <span>Saya menyetujui semua syarat, ketentuan, dan kebijakan privasi yang berlaku.</span>
                        </label>
                    </div>

                    <button type="button" id="continueButton" class="btn text-lg mt-8" disabled>Lanjutkan</button>
                </div>
                <div id="faceDetectionContainer" class="hidden" aria-hidden="true">
                    <h2 class="text-3xl font-bold text-center mb-4 glitch-text">LIVENESS CHECK INITIATED</h2>
                    <div class="relative w-full max-w-md mx-auto aspect-video overflow-hidden rounded-lg border-2 border-cyan-400 shadow-lg shadow-cyan-400/30 mb-4">
                        <video id="webcamVideo" autoplay muted playsinline class="absolute top-0 left-0 w-full h-full object-cover"></video>
                        <canvas id="faceOverlayCanvas" class="absolute top-0 left-0 w-full h-full"></canvas>
                        <div id="targetingReticle" class="absolute w-8 h-8 border-2 border-red-500 rounded-full transition-all duration-300 hidden" style="transform: translate(-50%, -50%);"></div>
                        <div id="accessGrantedOverlay" class="absolute inset-0 bg-green-500/80 flex items-center justify-center text-4xl font-bold text-white tracking-widest hidden opacity-0 transition-opacity">ACCESS GRANTED</div>
                        <div id="accessDeniedOverlay" class="absolute inset-0 bg-red-500/80 flex items-center justify-center text-3xl font-bold text-white tracking-widest hidden opacity-0 transition-opacity">VITAL SIGNS NEGATIVE</div>
                    </div>
                    <div id="challengeInstruction" class="text-center text-xl font-semibold text-cyan-300 mt-4 h-8">AWAITING SYSTEM COMMAND...</div>
                    <div class="w-full bg-gray-700/50 rounded-full h-4 mt-4 overflow-hidden border border-cyan-500/50">
                        <div id="bioSynchRateBar" class="bg-cyan-400 h-full rounded-full transition-all duration-500" style="width: 0%"></div>
                    </div>
                    <p class="text-center text-sm mt-1 text-cyan-400">BIOSYNCH RATE: <span id="bioSynchRateText">0%</span></p>
                    <div id="activityLog" class="mt-4 bg-black/50 p-3 rounded-md h-24 overflow-hidden text-xs text-green-400 font-mono">
                    </div>
                    <div class="mt-4 space-y-3">
                        <button type="button" id="startLivenessCheckButton" class="btn text-lg">INITIATE LIVENESS SCAN</button>
                        <button type="button" id="continueToFormButton" class="btn text-lg hidden" disabled>Lanjutkan</button>
                    </div>
                </div>
                <div id="scratchCardContainer" class="hidden" aria-hidden="true">
                    <h2 class="text-3xl font-bold text-center mb-2 glitch-text">VERIFIKASI FINAL!</h2>
                    <p class="mb-6 text-center">Password Singkatan dari XcecutiveFiveID</p>
                    <div id="scratchCardWrapper">
                        <canvas id="scratchCanvas"></canvas>
                        <div id="hiddenContent">
                            <label for="secretPassword" class="font-semibold mb-2">Kata Sandi:</label>
                            <input type="text" id="secretPassword" placeholder="...">
                            <button type="button" id="verifyPasswordButton" class="btn">Verifikasi</button>
                            <p id="passwordError" class="text-red-500 text-sm mt-1 hidden" role="status" aria-live="polite">Salah!</p>
                        </div>
                    </div>
                </div>
                <div id="memberFormContainer" class="hidden" aria-hidden="true">
                    <h1 class="text-3xl font-bold text-center mb-8 glitch-text">FORMULIR PENDATAAN MEMBER</h1>
                    <form id="memberForm" class="space-y-4">
                        <div class="form-group"><label for="namaPanggilan">Nama Panggilan:</label><input type="text" id="namaPanggilan" name="namaPanggilan" required></div>
                        <div class="form-group"><label for="nicknameAyodance">Nickname Ayodance:</label><input type="text" id="nicknameAyodance" name="nicknameAyodance" required></div>
                        <div class="form-group"><label for="tanggalLahir">Tanggal Lahir:</label><input type="date" id="tanggalLahir" name="tanggalLahir" required></div>
                        <div class="form-group"><label for="domisili">Domisili:</label><input type="text" id="domisili" name="domisili" required></div>
                        <div class="form-group">
                            <label>Punya Sosial Media?</label>
                            <div class="radio-group flex gap-x-4">
                                <label class="flex items-center"><input type="radio" name="hasSocialMedia" value="Ya" class="mr-2"> Ya</label>
                                <label class="flex items-center"><input type="radio" name="hasSocialMedia" value="Tidak" checked class="mr-2"> Tidak</label>
                            </div>
                            <div id="socialMediaInputContainer" class="mt-3 hidden">
                                <label for="sosialMediaName">Nama Sosial Media:</label>
                                <input type="text" id="sosialMediaName" name="sosialMediaName">
                            </div>
                        </div>
                        <div class="form-group"><label for="divisiCommunity">Divisi:</label><select id="divisiCommunity" name="divisiCommunity" required><option value="">Pilih</option><option value="Club">Club</option><option value="Com">Com</option></select></div>
                        <div class="form-group"><label for="tester">Pilih Tester:</label><select id="tester" name="tester" required><option value="">Pilih</option></select></div>
                        <div class="mt-8">
                            <button type="submit" id="submitButton" class="btn">
                                <span id="buttonText">Kirim Data</span>
                                <span id="loadingSpinner" class="loading-spinner hidden"></span>
                            </button>
                        </div>
                    </form>
                </div>
            `;

            // --- Functions ---
            function setAriaHidden(element, hidden) {
                if (element) {
                    element.setAttribute('aria-hidden', hidden ? 'true' : 'false');
                }
            }

            function showMainMenu() {
                formWrapper.classList.add('hidden');
                setAriaHidden(formWrapper, true);
                mainMenu.classList.remove('hidden');
                setAriaHidden(mainMenu, false);
            }

            function showForm() {
                mainMenu.classList.add('hidden');
                setAriaHidden(mainMenu, true);
                formWrapper.classList.remove('hidden');
                setAriaHidden(formWrapper, false);
                formContainer.innerHTML = formStepsHTML;
                formContainer.classList.add('fade-in');
                initializeFormLogic();
            }

            // Fungsi untuk membuat inisial avatar
            function getInitials(name) {
                const names = name.split(' ');
                let initials = names[0].substring(0, 1).toUpperCase();

                if (names.length > 1) {
                    initials += names[names.length - 1].substring(0, 1).toUpperCase();
                }

                return initials;
            }

            function initializeFormLogic() {
                const backToMenuBtn = document.getElementById('backToMenuBtn');
                const rulesContainer = document.getElementById('rulesContainer');
                const faceDetectionContainer = document.getElementById('faceDetectionContainer');
                const scratchCardContainer = document.getElementById('scratchCardContainer');
                const memberFormContainer = document.getElementById('memberFormContainer');
                const agreeToRulesCheckbox = document.getElementById('agreeToRules');
                const continueButton = document.getElementById('continueButton');
                const webcamVideo = document.getElementById('webcamVideo');
                const faceOverlayCanvas = document.getElementById('faceOverlayCanvas');
                const challengeInstruction = document.getElementById('challengeInstruction');
                const bioSynchRateBar = document.getElementById('bioSynchRateBar');
                const bioSynchRateText = document.getElementById('bioSynchRateText');
                const activityLog = document.getElementById('activityLog');
                const startLivenessCheckButton = document.getElementById('startLivenessCheckButton');
                const continueToFormButton = document.getElementById('continueToFormButton');
                const scratchCanvas = document.getElementById('scratchCanvas');
                const scratchCardWrapper = document.getElementById('scratchCardWrapper');
                const verifyPasswordButton = document.getElementById('verifyPasswordButton');
                const passwordInput = document.getElementById('secretPassword');
                const passwordError = document.getElementById('passwordError');
                const memberForm = document.getElementById('memberForm');
                const submitButton = document.getElementById('submitButton');
                const buttonText = document.getElementById('buttonText');
                const loadingSpinner = document.getElementById('loadingSpinner');
                const socialMediaYes = document.querySelector('input[name="hasSocialMedia"][value="Ya"]');
                const socialMediaNo = document.querySelector('input[name="hasSocialMedia"][value="Tidak"]');
                const socialMediaInputContainer = document.getElementById('socialMediaInputContainer');
                const testerSelect = document.getElementById('tester');
                const divisiCommunitySelect = document.getElementById('divisiCommunity');

                // --- Liveness Check State Management ---
                let livenessInterval = null;
                let mediaStream = null;
                let securityClearanceLevel = 0;
                let bioSynchRate = 0;
                let activeSecurityProtocol = null;
                let challengeTimeout;

                const requiredClearance = 3; // Number of successful challenges needed

                const livenessChallenges = [
                    { protocol: 'blink', instruction: 'INITIATE OCULAR REFLEX TEST' },
                    { protocol: 'smile', instruction: 'VERIFYING FACIAL ELASTICITY' },
                    { protocol: 'openMouth', instruction: 'CALIBRATING MANDIBLE SENSOR' },
                    { protocol: 'turnHeadLeft', instruction: 'CRANIAL ROTATION: LEFT' },
                    { protocol: 'turnHeadRight', instruction: 'CRANIAL ROTATION: RIGHT' },
                ];
                let availableChallenges = [...livenessChallenges];

                const notificationModal = {
                    overlay: notificationModalOverlay,
                    title: document.getElementById('modalTitle'),
                    message: document.getElementById('modalMessage'),
                    qrContainer: document.getElementById('modalQrCodeContainer'),
                    downloadBtn: document.getElementById('downloadQrButton'),
                    resetBtn: document.getElementById('modalResetFormButton')
                };

                Object.keys(testerData).forEach(name => {
                    const option = document.createElement('option');
                    option.value = name;
                    option.textContent = name;
                    testerSelect.appendChild(option);
                });

                function setSelectOptionColors(selectElement) {
                    if (selectElement) {
                        selectElement.style.color = 'white';
                        selectElement.style.backgroundColor = '#1a1a1a';
                    }
                }
                setSelectOptionColors(testerSelect);
                setSelectOptionColors(divisiCommunitySelect);

                function stopLivenessCheck() {
                    if (livenessInterval) {
                        clearInterval(livenessInterval);
                        livenessInterval = null;
                    }
                    if (challengeTimeout) {
                        clearTimeout(challengeTimeout);
                    }
                    if (mediaStream) {
                        mediaStream.getTracks().forEach(track => track.stop());
                        mediaStream = null;
                    }
                    if (webcamVideo) {
                        webcamVideo.srcObject = null;
                    }
                    // Reset UI
                    const ctx = faceOverlayCanvas.getContext('2d');
                    ctx.clearRect(0, 0, faceOverlayCanvas.width, faceOverlayCanvas.height);
                    challengeInstruction.textContent = 'AWAITING SYSTEM COMMAND...';
                }

                backToMenuBtn.addEventListener('click', () => {
                    stopLivenessCheck();
                    showMainMenu();
                });

                agreeToRulesCheckbox.addEventListener('change', () => {
                    continueButton.disabled = !agreeToRulesCheckbox.checked;
                });

                continueButton.addEventListener('click', () => {
                    rulesContainer.classList.add('hidden');
                    setAriaHidden(rulesContainer, true);
                    faceDetectionContainer.classList.remove('hidden');
                    setAriaHidden(faceDetectionContainer, false);
                    faceDetectionContainer.classList.add('fade-in');
                });

                startLivenessCheckButton.addEventListener('click', async () => {
                    startLivenessCheckButton.disabled = true;
                    addToLog('> BOOTING SECURITY SUBSYSTEM...');
                    try {
                        addToLog('> LOADING BIOMETRIC MODELS...');
                        const modelPath = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.13/model';
                        await Promise.all([
                            faceapi.nets.tinyFaceDetector.loadFromUri(modelPath),
                            faceapi.nets.faceLandmark68Net.loadFromUri(modelPath),
                            faceapi.nets.faceExpressionNet.loadFromUri(modelPath)
                        ]);
                        addToLog('> MODELS LOADED SUCCESSFULLY.');

                        addToLog('> REQUESTING CAMERA ACCESS...');
                        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
                        webcamVideo.srcObject = mediaStream;

                        webcamVideo.onplaying = () => {
                            addToLog('> CAMERA STREAM ESTABLISHED.');
                            addToLog('> STARTING REAL-TIME ANALYSIS...');

                            livenessInterval = setInterval(async () => {
                                if (!webcamVideo.srcObject || webcamVideo.paused || webcamVideo.ended) return;

                                const detections = await faceapi.detectAllFaces(webcamVideo, new faceapi.TinyFaceDetectorOptions())
                                    .withFaceLandmarks()
                                    .withFaceExpressions();

                                if (detections && detections.length > 0) {
                                    const resizedDetections = faceapi.resizeResults(detections, { width: faceOverlayCanvas.width, height: faceOverlayCanvas.height });
                                    const landmarks = resizedDetections[0].landmarks;
                                    const expressions = resizedDetections[0].expressions;
                                    const ctx = faceOverlayCanvas.getContext('2d');
                                    ctx.clearRect(0, 0, faceOverlayCanvas.width, faceOverlayCanvas.height);

                                    // Draw face mesh
                                    faceapi.draw.drawFaceLandmarks(faceOverlayCanvas, resizedDetections);

                                    // Handle targeting reticle
                                    const targetingReticle = document.getElementById('targetingReticle');
                                    if (activeSecurityProtocol === 'turnHeadLeft' || activeSecurityProtocol === 'turnHeadRight') {
                                        const nose = landmarks.getNose();
                                        const noseTip = nose[3];
                                        targetingReticle.style.left = `${noseTip.x}px`;
                                        targetingReticle.style.top = `${noseTip.y}px`;
                                        targetingReticle.classList.remove('hidden');

                                        const leftEyeCorner = landmarks.getLeftEye()[0];
                                        const rightEyeCorner = landmarks.getRightEye()[3];
                                        const headTurnRatio = (noseTip.x - leftEyeCorner.x) / (rightEyeCorner.x - leftEyeCorner.x);

                                        if ((activeSecurityProtocol === 'turnHeadLeft' && headTurnRatio < 0.3) || (activeSecurityProtocol === 'turnHeadRight' && headTurnRatio > 0.7)) {
                                            targetingReticle.classList.add('locked-on');
                                        } else {
                                            targetingReticle.classList.remove('locked-on');
                                        }
                                    } else {
                                        targetingReticle.classList.add('hidden');
                                    }


                                    if (activeSecurityProtocol) {
                                        let vitalSignDetected = false;
                                        switch (activeSecurityProtocol) {
                                            case 'blink':
                                                const leftEye = landmarks.getLeftEye();
                                                const rightEye = landmarks.getRightEye();
                                                const eyeAspectRatio = (getEyeAspectRatio(leftEye) + getEyeAspectRatio(rightEye)) / 2;
                                                if (eyeAspectRatio < 0.2) { // Threshold for blink
                                                    vitalSignDetected = true;
                                                }
                                                break;
                                            case 'smile':
                                                if (expressions.happy > 0.8) { // Threshold for smile
                                                    vitalSignDetected = true;
                                                }
                                                break;
                                            case 'openMouth':
                                                const mouth = landmarks.getMouth();
                                                const mouthAspectRatio = getMouthAspectRatio(mouth);
                                                if (mouthAspectRatio > 0.6) { // Threshold for open mouth
                                                    vitalSignDetected = true;
                                                }
                                                break;
                                            case 'turnHeadLeft':
                                            case 'turnHeadRight':
                                                // Simplified head turn detection based on nose position relative to eye corners
                                                const nose = landmarks.getNose()[3]; // Tip of the nose
                                                const leftEyeCorner = landmarks.getLeftEye()[0];
                                                const rightEyeCorner = landmarks.getRightEye()[3];
                                                const headTurnRatio = (nose.x - leftEyeCorner.x) / (rightEyeCorner.x - leftEyeCorner.x);
                                                
                                                if (activeSecurityProtocol === 'turnHeadLeft' && headTurnRatio < 0.3) {
                                                    vitalSignDetected = true;
                                                } else if (activeSecurityProtocol === 'turnHeadRight' && headTurnRatio > 0.7) {
                                                    vitalSignDetected = true;
                                                }
                                                break;
                                        }
                                        if (vitalSignDetected) {
                                            handleChallengeSuccess();
                                        }
                                    }
                                } else {
                                    // Handle case where face is not detected during a challenge
                                }
                            }, 200); // Analyze every 200ms

                            startNextChallenge();
                        };

                    } catch (err) {
                        console.error('Liveness check initialization failed:', err);
                        addToLog(`> ERROR: ${err.message}`, true);
                        challengeInstruction.textContent = 'SYSTEM ERROR: RETRY';
                        startLivenessCheckButton.disabled = false;
                    }
                });

                function updateProgressBar() {
                    bioSynchRate = (securityClearanceLevel / requiredClearance) * 100;
                    bioSynchRateBar.style.width = `${bioSynchRate}%`;
                    bioSynchRateText.textContent = `${Math.round(bioSynchRate)}%`;
                }

                function addToLog(message, isError = false) {
                    const logEntry = document.createElement('p');
                    logEntry.textContent = message;
                    if (isError) {
                        logEntry.style.color = 'var(--error-color)';
                    }
                    activityLog.appendChild(logEntry);
                    // Auto-scroll to the bottom
                    activityLog.scrollTop = activityLog.scrollHeight;
                }

                function startNextChallenge() {
                    if (securityClearanceLevel >= requiredClearance) {
                        handleLivenessSuccess();
                        return;
                    }

                    if (availableChallenges.length === 0) {
                        availableChallenges = [...livenessChallenges]; // Replenish if empty
                    }

                    const challengeIndex = Math.floor(Math.random() * availableChallenges.length);
                    const nextChallenge = availableChallenges.splice(challengeIndex, 1)[0];
                    activeSecurityProtocol = nextChallenge.protocol;

                    challengeInstruction.textContent = nextChallenge.instruction;
                    addToLog(`> PROTOCOL ACTIVATED: ${nextChallenge.instruction}`);

                    // Set a timeout for the user to complete the action
                    challengeTimeout = setTimeout(handleLivenessFailure, 7000); // 7 seconds to complete
                }

                function handleChallengeSuccess() {
                    clearTimeout(challengeTimeout);
                    securityClearanceLevel++;
                    updateProgressBar();
                    addToLog(`> VITAL SIGN DETECTED. CLEARANCE LEVEL: ${securityClearanceLevel}`);

                    // Visual and audio feedback
                    faceOverlayCanvas.classList.add('flash-success');
                    // In a real implementation, you'd play a sound here. e.g., new Audio('bip.mp3').play();
                    setTimeout(() => faceOverlayCanvas.classList.remove('flash-success'), 400);

                    activeSecurityProtocol = null; // Ready for the next challenge
                    setTimeout(startNextChallenge, 1500); // Wait 1.5s before next challenge
                }

                function handleLivenessFailure() {
                    clearTimeout(challengeTimeout);
                    addToLog('> BIOMETRIC SIGNATURE NOT DETECTED.', true);

                    // Show failure overlay and flash effect
                    const deniedOverlay = document.getElementById('accessDeniedOverlay');
                    deniedOverlay.classList.remove('hidden');
                    deniedOverlay.classList.add('show');
                    document.getElementById('faceDetectionContainer').classList.add('flash-fail');

                    setTimeout(() => {
                        deniedOverlay.classList.remove('show');
                        deniedOverlay.classList.add('hidden');
                        document.getElementById('faceDetectionContainer').classList.remove('flash-fail');
                        // Reset and try another challenge
                        activeSecurityProtocol = null;
                        startNextChallenge();
                    }, 2000);
                }

                function getEyeAspectRatio(eye) {
                    const [p1, p2, p3, p4, p5, p6] = eye;
                    const verticalDist1 = Math.hypot(p2.x - p6.x, p2.y - p6.y);
                    const verticalDist2 = Math.hypot(p3.x - p5.x, p3.y - p5.y);
                    const horizontalDist = Math.hypot(p1.x - p4.x, p1.y - p4.y);
                    return (verticalDist1 + verticalDist2) / (2.0 * horizontalDist);
                }

                function getMouthAspectRatio(mouth) {
                    const [p1, p2, p3, p4, p5, p6, p7, p8] = mouth.slice(12); // Use inner mouth landmarks
                    const verticalDist = Math.hypot(p2.x - p8.x, p2.y - p8.y) + Math.hypot(p3.x - p7.x, p3.y - p7.y) + Math.hypot(p4.x - p6.x, p4.y - p6.y);
                    const horizontalDist = Math.hypot(p1.x - p5.x, p1.y - p5.y);
                    return verticalDist / (2.0 * horizontalDist);
                }

                function handleLivenessSuccess() {
                    clearInterval(livenessInterval);
                    addToLog('> ALL SECURITY PROTOCOLS PASSED.');
                    addToLog('> ACCESS GRANTED.');
                    challengeInstruction.textContent = 'ACCESS GRANTED';

                    const grantedOverlay = document.getElementById('accessGrantedOverlay');
                    grantedOverlay.classList.remove('hidden');
                    grantedOverlay.classList.add('show');

                    // Freeze the last frame on the canvas
                    const ctx = faceOverlayCanvas.getContext('2d');
                    ctx.drawImage(webcamVideo, 0, 0, faceOverlayCanvas.width, faceOverlayCanvas.height);

                    stopLivenessCheck(); // Stop webcam etc. but keep canvas content

                    continueToFormButton.disabled = false;
                    startLivenessCheckButton.classList.add('hidden');
                    continueToFormButton.classList.remove('hidden');
                }


                continueToFormButton.addEventListener('click', () => {
                    stopLivenessCheck();
                    faceDetectionContainer.classList.add('hidden');
                    setAriaHidden(faceDetectionContainer, true);
                    scratchCardContainer.classList.remove('hidden');
                    setAriaHidden(scratchCardContainer, false);
                    scratchCardContainer.classList.add('fade-in');
                    // Ensure canvas is set up correctly after being displayed
                    setTimeout(() => {
                        const setupCanvasEvent = new Event('setupcanvas');
                        scratchCanvas.dispatchEvent(setupCanvasEvent);
                    }, 10);
                });

                if (scratchCanvas) {
                    const ctx = scratchCanvas.getContext('2d');
                    let isScratching = false;
                    const setupCanvas = () => {
                        scratchCanvas.width = scratchCardWrapper.clientWidth;
                        scratchCanvas.height = 200;
                        const gradient = ctx.createLinearGradient(0, 0, scratchCanvas.width, scratchCanvas.height);
                        gradient.addColorStop(0, NEON_BLUE);
                        gradient.addColorStop(1, NEON_PURPLE);
                        ctx.fillStyle = gradient;
                        ctx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
                        ctx.fillStyle = 'rgba(255,255,255,0.8)';
                        ctx.font = 'bold 24px "Orbitron"';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText('GOSOK DI SINI', scratchCanvas.width / 2, scratchCanvas.height / 2);
                        ctx.globalCompositeOperation = 'destination-out';
                    };
                    const getPos = (e) => ({
                        x: (e.clientX || e.touches[0].clientX) - scratchCanvas.getBoundingClientRect().left,
                        y: (e.clientY || e.touches[0].clientY) - scratchCanvas.getBoundingClientRect().top
                    });
                    const scratch = (e) => {
                        if (!isScratching) return;
                        e.preventDefault();
                        const pos = getPos(e);
                        ctx.beginPath();
                        ctx.arc(pos.x, pos.y, 30, 0, Math.PI * 2, false);
                        ctx.fill();
                    };
                    const start = (e) => {
                        isScratching = true;
                        scratch(e);
                    };
                    const end = () => {
                        isScratching = false;
                    };
                    window.addEventListener('resize', setupCanvas);
                    scratchCanvas.addEventListener('setupcanvas', setupCanvas);
                    scratchCanvas.addEventListener('mousedown', start);
                    scratchCanvas.addEventListener('mouseup', end);
                    scratchCanvas.addEventListener('mouseleave', end);
                    scratchCanvas.addEventListener('mousemove', scratch);
                    scratchCanvas.addEventListener('touchstart', start, { passive: false });
                    scratchCanvas.addEventListener('touchend', end);
                    scratchCanvas.addEventListener('touchmove', scratch, { passive: false });
                    setupCanvas();
                }

                verifyPasswordButton.addEventListener('click', () => {
                    if (passwordInput.value.trim().toUpperCase() === 'X5') {
                        passwordError.classList.add('hidden');
                        scratchCardContainer.classList.add('hidden');
                        setAriaHidden(scratchCardContainer, true);
                        memberFormContainer.classList.remove('hidden');
                        setAriaHidden(memberFormContainer, false);
                        memberFormContainer.classList.add('fade-in');
                    } else {
                        passwordError.classList.remove('hidden');
                    }
                });

                socialMediaYes.addEventListener('change', () => {
                    socialMediaInputContainer.classList.remove('hidden');
                    socialMediaInputContainer.querySelector('input').required = true;
                });
                socialMediaNo.addEventListener('change', () => {
                    socialMediaInputContainer.classList.add('hidden');
                    socialMediaInputContainer.querySelector('input').required = false;
                });

                memberForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    submitButton.disabled = true;
                    buttonText.textContent = 'Mengirim...';
                    loadingSpinner.classList.remove('hidden');
                    const formData = new FormData(memberForm);
                    const data = Object.fromEntries(formData.entries());
                    data.type = 'registration';
                    if (data.hasSocialMedia === 'Tidak') data.sosialMediaName = 'Tidak ada';

                    try {
                        await fetch(googleAppsScriptURL, {
                            method: 'POST',
                            mode: 'no-cors',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data)
                        });

                        // Isi data passport
                        document.getElementById('passportName').textContent = data.namaPanggilan;
                        document.getElementById('passportNickname').textContent = data.nicknameAyodance;
                        document.getElementById('passportBirth').textContent = data.tanggalLahir;
                        document.getElementById('passportDomisili').textContent = data.domisili;
                        document.getElementById('passportDivisi').textContent = data.divisiCommunity;
                        document.getElementById('passportTester').textContent = data.tester;

                        // Generate avatar initials
                        const initials = getInitials(data.namaPanggilan);
                        document.getElementById('avatarInitials').textContent = initials;

                        // Generate random ID
                        const idNumber = 'XF-' + Math.random().toString(36).substr(2, 6).toUpperCase();
                        document.getElementById('passportId').textContent = idNumber;

                        notificationModalOverlay.classList.add('show');
                        setAriaHidden(notificationModalOverlay, false);
                        memberFormContainer.classList.add('hidden');
                        setAriaHidden(memberFormContainer, true);

                        // Show notification
                        showNotification('Pendaftaran Sukses', 'Data Anda berhasil dikirim!');
                    } catch (error) {
                        console.error('Error submitting form:', error);
                        showNotification('Kesalahan Sistem', 'Gagal mengirim data. Silakan coba lagi.');
                    } finally {
                        submitButton.disabled = false;
                        buttonText.textContent = 'Kirim Data';
                        loadingSpinner.classList.add('hidden');
                    }
                });

                // Event listener untuk download passport
                document.getElementById('downloadPassportButton').addEventListener('click', function() {
                    const passport = document.getElementById('passportContainer');

                    html2canvas(passport).then(canvas => {
                        const image = canvas.toDataURL('image/png');
                        const link = document.createElement('a');
                        link.href = image;
                        link.download = `passport-${document.getElementById('passportName').textContent}.png`;
                        link.click();
                    });
                });

                // Mengubah fungsionalitas tombol "Hubungi Tester" untuk mengarah ke WA Tester
                notificationModal.resetBtn.addEventListener('click', () => {
                    const testerName = document.getElementById('passportTester').textContent;
                    const phone = testerData[testerName];
                    const message = encodeURIComponent(`Halo ${testerName}, saya sudah mengisi formulir dan mendapatkan Digital ID. Mohon bantuannya untuk proses selanjutnya.`);
                    const waLink = `https://wa.me/${phone}?text=${message}`;
                    window.open(waLink, '_blank');

                    // Menutup modal setelah mengklik
                    notificationModal.overlay.classList.remove('show');
                    setAriaHidden(notificationModal.overlay, true);
                    showMainMenu();
                });
            }

            // --- Main Menu Event Listeners ---
            isiBiodataBtn.addEventListener('click', showForm);

            const showComingSoonModal = () => {
                comingSoonModalOverlay.classList.add('show');
                setAriaHidden(comingSoonModalOverlay, false);
            };

            websiteBtn.addEventListener('click', showComingSoonModal);

            const testerSelectChangeNick = document.getElementById('testerSelectChangeNick');
            const changeNickQrSection = document.getElementById('changeNickQrSection');
            const changeNickQrContainer = document.getElementById('changeNickQrContainer');
            const downloadChangeNickQrBtn = document.getElementById('downloadChangeNickQrBtn');

            Object.keys(testerData).forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                testerSelectChangeNick.appendChild(option);
            });

            changeNickBtn.addEventListener('click', () => {
                testerSelectChangeNick.value = '';
                changeNickQrSection.classList.add('hidden');
                changeNickModalOverlay.classList.add('show');
                setAriaHidden(changeNickModalOverlay, false);
            });

            testerSelectChangeNick.addEventListener('change', function() {
                const testerName = this.value;
                if (!testerName) {
                    changeNickQrSection.classList.add('hidden');
                    return;
                }
                const phone = testerData[testerName];
                const message = encodeURIComponent("halo saya ingin meganti nickname.\n\nNick Awal :\nNick Ganti :\n\nTerimakasih");
                const qrValue = `https://wa.me/${phone}?text=${message}`;

                changeNickQrContainer.innerHTML = '';
                const qrCanvas = document.createElement('canvas');
                changeNickQrContainer.appendChild(qrCanvas);
                new QRious({ element: qrCanvas, value: qrValue, size: 160 });

                downloadChangeNickQrBtn.href = qrCanvas.toDataURL('image/png');
                downloadChangeNickQrBtn.download = `qr-ganti-nick-${testerName}.png`;

                changeNickQrSection.classList.remove('hidden');

                // Show notification
                showNotification('Tester Dipilih', `QR untuk ${testerName} berhasil dibuat`);
            });

            document.querySelectorAll('.modal-overlay').forEach(overlay => {
                overlay.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.classList.remove('show');
                        setAriaHidden(this, true);
                    }
                });
                const closeBtn = overlay.querySelector('.modal-close-btn');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        overlay.classList.remove('show');
                        setAriaHidden(overlay, true);
                    });
                }
            });

    const video = document.getElementById("video"); 
 
    // Fungsi untuk membuat video fullscreen 
    function goFullscreen(element) { 
        if (element.requestFullscreen) { 
            element.requestFullscreen(); 
        } else if (element.mozRequestFullScreen) { 
            element.mozRequestFullScreen(); 
        } else if (element.webkitRequestFullscreen) { 
            element.webkitRequestFullscreen(); 
        } else if (element.msRequestFullscreen) { 
            element.msRequestFullscreen(); 
        } 
    } 
 
    // Fungsi untuk memulai video 
    function startVideo() { 
        video.style.display = "block"; // Menampilkan video 
        video.muted = false; // Menghidupkan suara 
        video.play().then(() => { 
            goFullscreen(video); // Masuk mode fullscreen 
        }).catch(error => { 
            console.error("Autoplay diblokir, menunggu interaksi user:", error); 
        }); 
    } 
 
    // Event Listener untuk tombol Keyboard 
    document.addEventListener("keydown", function (event) { 
        // Cek jika Ctrl + U ditekan 
        if (event.ctrlKey && event.key.toLowerCase() === "u") { 
            event.preventDefault(); // Mencegah View Source 
            startVideo(); // Putar Video sebagai gantinya 
        } 
          
        // Kode ini juga memblokir Ctrl + Shift + I (Inspect Element) 
        if (event.ctrlKey && event.shiftKey && event.key === "I") { 
            event.preventDefault(); 
        } 
          
        // Kode ini juga memblokir F12 (Developer Tools) 
        if (event.key === "F12") { 
            event.preventDefault(); 
        } 
    }); 
 
    // Kode ini memblokir Klik Kanan (Context Menu) 
    document.addEventListener("contextmenu", function (event) { 
        event.preventDefault(); 
        // ... logika tambahan ... 
    }); 
        });
