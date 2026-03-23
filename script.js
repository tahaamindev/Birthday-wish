
        // === CONFIGURATION ===
        const CONFIG = {
            password: 'ashi',
            slideTime: 6000,
            matrixChars: "ASIF1601010@#$%^&*",
            imgSrc: 'images/img2.png'
        };

        // === SLIDE DATA ===
        const slides = [
            { type: 'title', main: 'ASIF KASHMIRI', sub: 'SYSTEM OVERRIDE INITIATED' },
            { type: 'title', main: 'LEVEL', sub: 'UNLOCKED', accent: '16' },
            { type: 'msg', text: 'Thum aise pehle insaan ho jis ne mujhe ithni memories di [Thanks ASIF]..' },
            { type: 'impact', text: 'Best Friend' },
            { type: 'fun', title: 'BRAIN SCAN DETECTED', question: 'Tumhari Aqal Check Karne Do...', btnText: 'CHECK KARO', resultType: 'brain' },
            { type: 'scan', title: 'SCANNING SUBJECT...', lines: [
                'WAFA DARI: [100%] LOADED',
                'HIMMAT: [ELITE] CONFIRMED',
                'MAZAAQ: [999%] OVERLOAD',
                'PAGAL PAN: [99990%] EXTRA',
                'STATUS: LEGEND'
            ]},
            { type: 'msg', text: 'Kuch rishte sirf dil se samajh aate hain, jo sirf thum smjh sakhthe ho shaid ya shaid nhii😁😁...' },
            { 
                type: 'photo', 
                caption: 'MEMORY FRAGMENT FOUND', 
                msg: 'Wo lamhe jo kabhi delete nahi honge[InshAllah]...' 
            },
            { type: 'impact', text: 'BHAI' },
            { type: 'fun', title: 'LOVE METER ANALYSIS', question: 'Dekho tumhare liye kitna pyaar hai...', btnText: 'MEASURE LOVE', resultType: 'love' },
            { type: 'scan', title: 'LOADING MEMORIES...', lines: [
                'Wo lambi baatein... [OK]',
                'Bina wajah hasna... [OK]',
                'Saath rehna... [OK]',
                'Secrets share karna... [OK]',
                'Brotherhood... [LOCKED FOREVER]'
            ]},
            { type: 'glitch', text: '16' },
            { type: 'msg', text: 'Kuch nadaan kehte hain asli dost nahi milte...' },
            { type: 'msg', text: 'Lekin mujhe tujh mein ek bhai mila[Asif Kashmiri].' },
            { type: 'impact', text: 'LEGEND' },
            { type: 'title', main: 'GAME', sub: 'RECOGNIZED' },
            { type: 'msg', text: 'Har bar naraz hone par thum ne manaya..[Thanks].' },
            { type: 'scan', title: 'FINAL ANALYSIS...', lines: [
                'TRUST: INFINITE',
                'BOND: UNBREAKABLE',
                'FRIENDSHIP: ALSO UNBREAKABLE',
                'RESULT: HAPPY BIRTHDAY'
            ]},
            { type: 'final', 
                title: 'HAPPY BIRTHDAY ASIF', 
                content: 'Happy Birthday bhai. Meri yaadon me hamesha raho ge. Tu jantha nahi, tu mere liye kiya he. Hamesha khush reh, Allah kare thumhare Dreams reality bane😉. Ameen!',
                sign: 'TERA BRO,Taha Amin'
            },
           
        ];

        // === AUDIO CONTEXT ===
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioCtx();

        // === VIBRATION HELPER ===
        function triggerVibration(pattern) {
            if ('vibrate' in navigator) {
                navigator.vibrate(pattern);
            }
        }

        function playSound(type) {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);

            if (type === 'click') {
                triggerVibration(20);
                osc.frequency.setValueAtTime(600, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.05);
                gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
                osc.start(); osc.stop(audioCtx.currentTime + 0.1);
            } else if (type === 'unlock') {
                triggerVibration([30, 20, 50]);
                osc.type = 'square';
                osc.frequency.setValueAtTime(200, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.2);
                gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
                osc.start(); osc.stop(audioCtx.currentTime + 0.5);
            } else if (type === 'denied') {
                triggerVibration(200);
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(100, audioCtx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.2);
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
                osc.start(); osc.stop(audioCtx.currentTime + 0.3);
            } else if (type === 'hack') {
                triggerVibration([10, 20, 10, 20, 10]);
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(80, audioCtx.currentTime);
                gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
                osc.start(); osc.stop(audioCtx.currentTime + 0.1);
            } else if (type === 'alarm') {
                triggerVibration([100, 50, 100, 50, 100]);
                osc.type = 'square';
                osc.frequency.setValueAtTime(440, audioCtx.currentTime);
                osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1);
                osc.frequency.setValueAtTime(440, audioCtx.currentTime + 0.2);
                gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
                osc.start(); osc.stop(audioCtx.currentTime + 0.4);
            } else if (type === 'success') {
                triggerVibration([50, 30, 80]);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(400, audioCtx.currentTime);
                osc.frequency.setValueAtTime(600, audioCtx.currentTime + 0.1);
                osc.frequency.setValueAtTime(800, audioCtx.currentTime + 0.2);
                gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
                osc.start(); osc.stop(audioCtx.currentTime + 0.4);
            } else if (type === 'fun') {
                triggerVibration([20, 10, 20, 10, 50]);
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(300, audioCtx.currentTime);
                osc.frequency.setValueAtTime(500, audioCtx.currentTime + 0.1);
                osc.frequency.setValueAtTime(700, audioCtx.currentTime + 0.2);
                osc.frequency.setValueAtTime(900, audioCtx.currentTime + 0.3);
                gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
                osc.start(); osc.stop(audioCtx.currentTime + 0.5);
            } else if (type === 'ringtone') {
                triggerVibration([200, 100, 200, 100, 200]);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, audioCtx.currentTime);
                osc.frequency.setValueAtTime(600, audioCtx.currentTime + 0.15);
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
                osc.start(); osc.stop(audioCtx.currentTime + 0.3);
            } else if (type === 'destruct') {
                triggerVibration(50);
                osc.type = 'square';
                osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
                gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
                osc.start(); osc.stop(audioCtx.currentTime + 0.15);
            } else if (type === 'boom') {
                triggerVibration([500, 100, 500]);
                const noise = audioCtx.createBufferSource();
                const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.5, audioCtx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < buffer.length; i++) {
                    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / buffer.length, 2);
                }
                noise.buffer = buffer;
                const noiseGain = audioCtx.createGain();
                noise.connect(noiseGain);
                noiseGain.connect(audioCtx.destination);
                noiseGain.gain.setValueAtTime(0.5, audioCtx.currentTime);
                noiseGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
                noise.start();
            }
        }

        // === CONFETTI FUNCTION ===
        function createConfetti() {
            const colors = ['#00ff41', '#ff0033', '#ffff00', '#00ffff', '#ff00ff', '#ffffff'];
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                    confetti.style.width = (Math.random() * 10 + 5) + 'px';
                    confetti.style.height = confetti.style.width;
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 3000);
                }, i * 50);
            }
        }

        // === MATRIX RAIN ===
        const canvas = document.getElementById('matrixBg');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const fontSize = 16;
        let columns = Math.floor(canvas.width / fontSize);
        const drops = [];
        for(let x = 0; x < columns; x++) drops[x] = 1;

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px Share Tech Mono';

            for(let i = 0; i < drops.length; i++) {
                const text = CONFIG.matrixChars.charAt(Math.floor(Math.random() * CONFIG.matrixChars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975)
                    drops[i] = 0;
                
                drops[i]++;
            }
        }
        setInterval(drawMatrix, 33);

        // === CUSTOM CURSOR ===
        const cursor = document.getElementById('cursor');
        window.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        window.addEventListener('mousedown', () => cursor.classList.add('active'));
        window.addEventListener('mouseup', () => cursor.classList.remove('active'));

        // === SCREEN ELEMENTS ===
        const unlockScreen = document.getElementById('unlockScreen');
        const callScreen = document.getElementById('callScreen');
        const hackScreen = document.getElementById('hackScreen');
        const destructScreen = document.getElementById('destructScreen');
        const birthdayScreen = document.getElementById('birthdayScreen');
        const storyScreen = document.getElementById('storyScreen');
        const passInput = document.getElementById('passInput');
        const errorMsg = document.getElementById('errorMsg');
        const progressBar = document.getElementById('progressBar');
        const slideContainer = document.getElementById('slideContainer');
        const continueBtn = document.getElementById('continueBtn');
        const deleteBtn = document.getElementById('deleteBtn');
        const hackMessages = document.getElementById('hackMessages');
        const hackProgressFill = document.getElementById('hackProgressFill');
        const hackPercentage = document.getElementById('hackPercentage');
        const hackDataScroll = document.getElementById('hackDataScroll');
        const flashOverlay = document.getElementById('flashOverlay');
        const matrixCanvas = document.getElementById('matrixBg');
        const acceptCall = document.getElementById('acceptCall');
        const rejectCall = document.getElementById('rejectCall');
        const countdownEl = document.getElementById('countdown');
        const blackoutOverlay = document.getElementById('blackoutOverlay');

        let currentIndex = 0;
        let timer = null;
        let ringtoneInterval = null;

        // Create Progress Bars
        slides.forEach(() => {
            const seg = document.createElement('div');
            seg.className = 'segment';
            seg.innerHTML = '<div class="segment-fill"></div>';
            progressBar.appendChild(seg);
        });

        // Create Slides HTML
        slides.forEach((s, i) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            let html = '';

            if(s.type === 'title') {
                html = `<div class="content-box">
                    <div class="title-text">${s.main} ${s.accent ? `<span style="color:var(--accent)">${s.accent}</span>` : ''}</div>
                    <div style="color:var(--text-muted); margin-top:1rem; letter-spacing:2px;">${s.sub}</div>
                </div>`;
            }
            else if(s.type === 'msg') {
                html = `<div class="content-box"><div class="msg-text">${s.text}</div></div>`;
            }
            else if(s.type === 'impact') {
                html = `<div class="content-box"><div class="impact-text">${s.text}</div></div>`;
                slide.dataset.shake = 'true';
            }
            else if(s.type === 'glitch') {
                html = `<div class="content-box"><div class="glitch-style" data-text="${s.text}">${s.text}</div></div>`;
            }
            else if(s.type === 'scan') {
                html = `<div class="content-box" style="width:90%; max-width:500px;">
                    <div style="color:var(--accent); margin-bottom:1rem; text-align:left;">> ${s.title}</div>
                    <div class="scan-text">
                        ${s.lines.map(l => `<div class="scan-line">${l}</div>`).join('')}
                    </div>
                </div>`;
            }
            else if(s.type === 'photo') {
                html = `<div class="content-box">
                    <div class="msg-text">${s.msg}</div>
                    <div class="photo-container">
                        <img src="${CONFIG.imgSrc}" class="photo-img" alt="Memory" onerror="this.src='https://via.placeholder.com/300x350/000/00ff41?text=IMG+MISSING'">
                        <div class="photo-overlay">
                            > ${s.caption}<br>
                            > STATUS: DECRYPTED
                        </div>
                    </div>
                </div>`;
            }
            else if(s.type === 'fun') {
                html = `<div class="content-box">
                    <div class="fun-container">
                        <div class="fun-title">${s.title}</div>
                        <p style="margin-bottom:1rem; color:#fff;">${s.question}</p>
                        <button class="fun-btn" onclick="handleFunButton('${s.resultType}', this)">${s.btnText}</button>
                        <div class="fun-result" id="funResult${i}"></div>
                    </div>
                </div>`;
            }
            else if(s.type === 'final') {
                html = `<div class="content-box">
                    <div class="final-card">
                        <h2 class="final-title">${s.title}</h2>
                        <p class="final-text">${s.content}</p>
                        <div class="final-sign">${s.sign}</div>
                        <button class="secret-btn" onclick="showSecret()">CLICK HERE</button>
                    </div>
                </div>`;
                slide.dataset.final = 'true';
            }
            // NEW EXIT SLIDE LOGIC
            else if(s.type === 'exit') {
                html = `<div class="content-box">
                    <div class="msg-text">${s.text}</div>
                    <button class="exit-btn" onclick="closeWindow()">EXIT</button>
                </div>`;
                slide.dataset.final = 'true';
            }
            
            slide.innerHTML = html;
            slideContainer.appendChild(slide);
        });

        // === FAKE CALL HANDLERS ===
        acceptCall.addEventListener('click', () => {
            clearInterval(ringtoneInterval);
            playSound('success');
            triggerVibration(100);
            callScreen.classList.remove('active');
            startHackSequence();
        });

        rejectCall.addEventListener('click', () => {
            clearInterval(ringtoneInterval);
            playSound('denied');
            triggerVibration(200);
            callScreen.classList.remove('active');
            startHackSequence();
        });

        // === DELETE BUTTON HANDLER ===
        deleteBtn.addEventListener('click', function() {
            playSound('hack');
            triggerVibration([50, 30, 50, 30, 100]);
            
            const btn = this;
            btn.textContent = 'DELETING...';
            btn.style.background = '#fff';
            btn.style.color = '#000';
            
            setTimeout(() => {
                btn.textContent = 'NAKLI DARRAHA THA!';
                btn.style.background = 'var(--accent)';
                btn.style.animation = 'none';
                createConfetti();
                playSound('fun');
            }, 1500);
        });

        // === FUN BUTTON HANDLER ===
        window.handleFunButton = function(type, btn) {
            playSound('fun');
            triggerVibration([30, 20, 50]);
            
            const resultDiv = btn.nextElementSibling;
            btn.disabled = true;
            btn.textContent = 'PROCESSING...';
            
            setTimeout(() => {
                if (type === 'brain') {
                    const results = [
                        'RESULT: GENIUS DETECTED!',
                        'IQ LEVEL: OVER 9000!',
                        'BRAIN STATUS: LEGENDARY!',
                        'AQAL: TERA LEVEL PE KOI NAHI!'
                    ];
                    resultDiv.innerHTML = '<span style="color:var(--accent)">' + results[Math.floor(Math.random() * results.length)] + '</span>';
                    resultDiv.innerHTML += '<br><span style="color:var(--yellow)">Mazaak tha... tu smart hai bhai!</span>';
                } else if (type === 'love') {
                    resultDiv.innerHTML = '<span style="color:var(--red)">LOVE METER: 10000000%</span>';
                    resultDiv.innerHTML += '<br><span style="color:#fff">Bhai ke liye pyaar unlimited hai!</span>';
                    createConfetti();
                }
                
                btn.textContent = 'DONE!';
                btn.style.background = 'var(--accent)';
            }, 1500);
        };

        // === HACK SEQUENCE ===
        function startHackSequence() {
            playSound('unlock');
            unlockScreen.classList.remove('active');
            
            flashOverlay.classList.add('active');
            setTimeout(() => flashOverlay.classList.remove('active'), 500);
            
            matrixCanvas.classList.add('red-mode');
            cursor.classList.add('red');
            
            playSound('alarm');
            hackScreen.classList.add('active');
            
            for(let i = 0; i < 15; i++) {
                const span = document.createElement('span');
                span.textContent = Array(50).fill(0).map(() => 
                    '0123456789ABCDEF'[Math.floor(Math.random() * 16)]
                ).join('');
                span.style.left = Math.random() * 100 + '%';
                span.style.animationDelay = Math.random() * 2 + 's';
                hackDataScroll.appendChild(span);
            }
            
            const hackLines = [
                { text: 'INITIALIZING BREACH PROTOCOL...', type: '' },
                { text: 'BYPASSING SECURITY FIREWALL...', type: 'warning' },
                { text: 'ACCESSING DEVICE ROOT...', type: '' },
                { text: 'READING CONTACTS DATABASE...', type: 'error' },
                { text: 'EXTRACTING MESSAGES...', type: '' },
                { text: 'CRITICAL ERROR: SYSTEM OVERLOAD', type: 'error' },
                { text: 'DEVICE FAILURE IMMINENT...', type: 'warning' },
                { text: 'INITIATING SAFETY PROTOCOL...', type: '' }
            ];
            
            let lineIndex = 0;
            let progress = 0;
            
            const hackSoundInterval = setInterval(() => playSound('hack'), 150);
            
            const typeLine = () => {
                if (lineIndex < hackLines.length) {
                    const line = document.createElement('div');
                    line.className = 'hack-line ' + hackLines[lineIndex].type;
                    line.textContent = '> ' + hackLines[lineIndex].text;
                    line.style.animationDelay = '0s';
                    hackMessages.appendChild(line);
                    lineIndex++;
                    
                    progress = Math.min(100, (lineIndex / hackLines.length) * 100);
                    hackProgressFill.style.width = progress + '%';
                    hackPercentage.textContent = Math.floor(progress) + '%';
                    
                    if(lineIndex % 3 === 0) {
                        document.body.classList.add('shake-screen');
                        setTimeout(() => document.body.classList.remove('shake-screen'), 200);
                    }
                    
                    setTimeout(typeLine, 350);
                } else {
                    clearInterval(hackSoundInterval);
                    setTimeout(() => {
                        hackScreen.classList.remove('active');
                        startDestructSequence();
                    }, 1000);
                }
            };
            
            setTimeout(typeLine, 500);
        }

        // === SELF DESTRUCT SEQUENCE ===
        function startDestructSequence() {
            destructScreen.classList.add('active');
            let count = 5;
            
            const countInterval = setInterval(() => {
                playSound('destruct');
                countdownEl.textContent = count;
                document.body.classList.add('shake-screen');
                setTimeout(() => document.body.classList.remove('shake-screen'), 100);
                
                if (count <= 0) {
                    clearInterval(countInterval);
                    executeDestruct();
                }
                count--;
            }, 1000);
        }

        function executeDestruct() {
            blackoutOverlay.classList.add('active');
            playSound('boom');
            
            setTimeout(() => {
                blackoutOverlay.classList.add('show-text');
                playSound('success');
                
                setTimeout(() => {
                    blackoutOverlay.classList.remove('active', 'show-text');
                    destructScreen.classList.remove('active');
                    matrixCanvas.classList.remove('red-mode');
                    cursor.classList.remove('red');
                    birthdayScreen.classList.add('active');
                    createConfetti();
                }, 2000);
                
            }, 2000);
        }

        // === CLOSE WINDOW FUNCTION ===
        function closeWindow() {
            playSound('destruct');
            triggerVibration(200);
            
            // Try to close the window. 
            // Note: This only works if the script opened the window or in certain browser conditions.
            // If it fails, it will log a warning and the user must close it manually.
            window.close(); 
            
            // Fallback message if browser prevents closing
            setTimeout(() => {
                alert("Please close the tab manually to exit.");
            }, 500);
        }
        window.closeWindow = closeWindow;

        // === CORE NAVIGATION FUNCTIONS ===
        function showSlide(index) {
            const allSlides = document.querySelectorAll('.slide');
            const segs = document.querySelectorAll('.segment');

            allSlides.forEach(s => s.classList.remove('active'));
            segs.forEach(s => s.classList.remove('active', 'done'));

            allSlides[index].classList.add('active');
            
            segs.forEach((s, i) => {
                if(i < index) s.classList.add('done');
                if(i === index) s.classList.add('active');
            });

            if(slides[index].type === 'scan') {
                const lines = allSlides[index].querySelectorAll('.scan-line');
                lines.forEach((l, i) => {
                    l.classList.remove('visible');
                    setTimeout(() => {
                        l.classList.add('visible');
                        playSound('click');
                    }, i * 400);
                });
            }

            if(allSlides[index].dataset.shake) {
                document.body.classList.add('shake-screen');
                setTimeout(() => document.body.classList.remove('shake-screen'), 500);
            }

            if(allSlides[index].dataset.final) {
                document.querySelector('.tap-area').style.opacity = '0';
            } else {
                document.querySelector('.tap-area').style.opacity = '1';
            }

            clearTimeout(timer);
            if(index < slides.length - 1) {
                timer = setTimeout(nextSlide, CONFIG.slideTime);
            }
        }

        function nextSlide() {
            if(currentIndex < slides.length - 1) {
                playSound('click');
                currentIndex++;
                showSlide(currentIndex);
            }
        }

        function prevSlide() {
            if(currentIndex > 0) {
                playSound('click');
                currentIndex--;
                showSlide(currentIndex);
            }
        }

        function startStory() {
            playSound('unlock');
            birthdayScreen.classList.remove('active');
            flashOverlay.classList.add('active');
            setTimeout(() => flashOverlay.classList.remove('active'), 500);
            setTimeout(() => {
                storyScreen.classList.add('active');
                progressBar.classList.add('show');
                showSlide(0);
            }, 300);
        }

        // === HACKER STYLE SECRET MESSAGE ===
        function showSecret() {
            playSound('unlock');
            triggerVibration([50, 20, 50, 20, 100]);
            const card = document.querySelector('.final-card');
            
            card.innerHTML = `
                <div class="hacker-terminal">
                    <div class="terminal-header">/// DECRYPTING CLASSIFIED DATA ///</div>
                    <div class="terminal-text" id="terminalOutput"></div>
                </div>
            `;
            
            const terminalOutput = document.getElementById('terminalOutput');
            
            const secretLines = [
                { prefix: '> STATUS: ', text: 'BROTHERHOOD CONFIRMED', delay: 0 },
                { prefix: '> MESSAGE: ', text: 'Tu secret unlock kar gaya bhai!', delay: 500 },
                { prefix: '> DATA: ', text: 'Life mein me thumhare ilawa kisi ke saath ithna khush nahi rha.', delay: 1000 },
                { prefix: '> TRUST: ', text: 'Main hamesha tere peeche hoon.', delay: 1500 },
                { prefix: '> BOND: ', text: 'UNBREAKABLE CONNECTION ESTABLISHED.', delay: 2000 },
                { prefix: '> RESULT: ', text: 'STAY LEGEND, ASIF. SYSTEM OVERLOADED WITH LOVE.', delay: 2500 },
                { prefix: '> END: ', text: 'KESA LAGA MERA HACKING PRANK ZROOR BTANA.', delay: 3000 }
            ];
            
            let charIndex = 0;
            let lineIndex = 0;
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
            
            function typeWithScramble() {
                if (lineIndex < secretLines.length) {
                    const line = secretLines[lineIndex];
                    const fullText = line.prefix + line.text;
                    
                    if (charIndex < fullText.length) {
                        let displayText = fullText.substring(0, charIndex);
                        
                        if (charIndex >= line.prefix.length) {
                            displayText += '<span class="scramble-char">' + chars[Math.floor(Math.random() * chars.length)] + '</span>';
                        } else {
                            displayText += '<span class="scramble-char">' + chars[Math.floor(Math.random() * chars.length)] + '</span>';
                        }
                        
                        terminalOutput.innerHTML = terminalOutput.innerHTML.replace(/<span class="scramble-char">.*<\/span>$/, '');
                        
                        if (lineIndex === 0 || terminalOutput.innerHTML === '') {
                            terminalOutput.innerHTML = displayText + '<span class="typing-cursor"></span>';
                        } else {
                            const prevLines = secretLines.slice(0, lineIndex).map(l => l.prefix + l.text).join('<br>');
                            terminalOutput.innerHTML = prevLines + '<br>' + displayText + '<span class="typing-cursor"></span>';
                        }
                        
                        charIndex++;
                        
                        if (charIndex < line.prefix.length) {
                            setTimeout(typeWithScramble, 20);
                        } else {
                            setTimeout(typeWithScramble, 40);
                        }
                        
                        triggerVibration(5);
                    } else {
                        const prevLines = secretLines.slice(0, lineIndex + 1).map(l => l.prefix + l.text).join('<br>');
                        terminalOutput.innerHTML = prevLines + '<span class="typing-cursor"></span>';
                        
                        charIndex = 0;
                        lineIndex++;
                        setTimeout(typeWithScramble, 300);
                    }
                } else {
                    terminalOutput.innerHTML = secretLines.map(l => l.prefix + l.text).join('<br>') + '<span class="typing-cursor"></span>';
                    playSound('success');
                    triggerVibration([50, 30, 80]);
                }
            }
            
            setTimeout(typeWithScramble, secretLines[0].delay);
        }
        window.showSecret = showSecret;

        // === EVENT LISTENERS ===
        passInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                if(passInput.value.toLowerCase() === CONFIG.password) {
                    const docEl = document.documentElement;
                    if (docEl.requestFullscreen) {
                        docEl.requestFullscreen().catch(err => console.log("Fullscreen error"));
                    } else if (docEl.webkitRequestFullscreen) {
                        docEl.webkitRequestFullscreen();
                    } else if (docEl.msRequestFullscreen) {
                        docEl.msRequestFullscreen();
                    }

                    playSound('unlock');
                    unlockScreen.classList.remove('active');
                    callScreen.classList.add('active');
                    
                    playSound('ringtone');
                    ringtoneInterval = setInterval(() => playSound('ringtone'), 1000);
                } else {
                    playSound('denied');
                    errorMsg.classList.add('show');
                    passInput.classList.add('shake-screen'); 
                    setTimeout(() => {
                        errorMsg.classList.remove('show');
                        passInput.classList.remove('shake-screen');
                        passInput.value = '';
                    }, 1500);
                }
            }
        });

        continueBtn.addEventListener('click', () => {
            startStory();
        });

        let touchInteraction = false;

        storyScreen.addEventListener('click', (e) => {
            if (touchInteraction) {
                touchInteraction = false;
                return;
            }
            if(e.target.closest('.secret-btn')) return;
            if(e.target.closest('.continue-btn')) return;
            if(e.target.closest('.fun-btn')) return;
            if(e.target.closest('.exit-btn')) return; // Ignore taps on exit button

            const width = window.innerWidth;
            const clickX = e.clientX;

            clearTimeout(timer);

            if (clickX > width / 2) {
                nextSlide();
            } else {
                prevSlide();
            }
        });

        let touchStartX = 0;
        let touchStartTime = 0;
        let isHolding = false;

        storyScreen.addEventListener('touchstart', (e) => {
            if(e.target.closest('.secret-btn')) return;
            if(e.target.closest('.continue-btn')) return;
            if(e.target.closest('.fun-btn')) return;
            if(e.target.closest('.exit-btn')) return;

            touchStartX = e.touches[0].clientX;
            touchStartTime = Date.now();
            isHolding = true;
            touchInteraction = true;

            clearTimeout(timer);
        }, {passive: true});

        storyScreen.addEventListener('touchend', (e) => {
            if (!isHolding) return;
            isHolding = false;

            const touchEndX = e.changedTouches[0].clientX;
            const touchEndTime = Date.now();
            const touchDuration = touchEndTime - touchStartTime;
            const width = window.innerWidth;

            const movement = Math.abs(touchStartX - touchEndX);
            
            if (movement < 30) {
                if (touchDuration < 200) {
                    if (touchStartX > width / 2) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                } else {
                    if(currentIndex < slides.length - 1) {
                        timer = setTimeout(nextSlide, CONFIG.slideTime);
                    }
                }
            } else {
                 if(currentIndex < slides.length - 1) {
                    timer = setTimeout(nextSlide, CONFIG.slideTime);
                }
            }
        }, {passive: true});
    