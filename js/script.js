window.addEventListener('load', updateLanguage);
window.addEventListener('hashchange', updateLanguage);
function updateLanguage() {
    var langElement = document.getElementById('lang');
    var currentHash = window.location.hash || '#fr';
    if (currentHash === '#lang') {
        return;
    } else if (currentHash === '#fr') {
        document.getElementById('lang').innerHTML = '<a href="#lang"><img src="img/FR.png" alt=""><span>Français</span></a>';
        let activeTabId = document.querySelector('.active-tab').id;
        for (let i = 0; i <= 11; i++) {
            document.querySelectorAll('.tab-content').forEach(function(tab) { tab.classList.remove('active-tab');});
            document.querySelectorAll('.tab').forEach(function(tab) { tab.classList.remove('active-but');});
        }
        if (activeTabId === 'tab-5' || activeTabId === 'tab-9') {
            document.getElementById('tab-1').classList.add('active-tab');
            document.getElementById('but-1').classList.add('active-but');
        } else if (activeTabId === 'tab-6' || activeTabId === 'tab-10') {
            document.getElementById('tab-2').classList.add('active-tab');
            document.getElementById('but-2').classList.add('active-but');
        } else if (activeTabId === 'tab-7' || activeTabId === 'tab-11') {
            document.getElementById('tab-3').classList.add('active-tab');
            document.getElementById('but-3').classList.add('active-but');
        } else {
            document.getElementById('tab-0').classList.add('active-tab');
            document.getElementById('but-0').classList.add('active-but');
        }
        document.querySelectorAll('.lang').forEach(function(langElement) { langElement.classList.remove('active');});
        document.querySelectorAll('.lang.fr').forEach(function(langElement) { langElement.classList.add('active');});
    } else if (currentHash === '#en') {
        document.getElementById('lang').innerHTML = '<a href="#lang"><img src="img/UK.png" alt=""><span>English</span></a>';
        let activeTabId = document.querySelector('.active-tab').id;
        for (let i = 0; i <= 11; i++) {
            document.querySelectorAll('.tab-content').forEach(function(tab) { tab.classList.remove('active-tab');});
            document.querySelectorAll('.tab').forEach(function(tab) { tab.classList.remove('active-but');});
        }
        if (activeTabId === 'tab-1' || activeTabId === 'tab-9') {
            document.getElementById('tab-5').classList.add('active-tab');
            document.getElementById('but-5').classList.add('active-but');
        } else if (activeTabId === 'tab-2' || activeTabId === 'tab-10') {
            document.getElementById('tab-6').classList.add('active-tab');
            document.getElementById('but-6').classList.add('active-but');
        } else if (activeTabId === 'tab-3' || activeTabId === 'tab-11') {
            document.getElementById('tab-7').classList.add('active-tab');
            document.getElementById('but-7').classList.add('active-but');
        } else {
            document.getElementById('tab-4').classList.add('active-tab');
            document.getElementById('but-4').classList.add('active-but');
        }
        document.querySelectorAll('.lang').forEach(function(langElement) { langElement.classList.remove('active');});
        document.querySelectorAll('.lang.en').forEach(function(langElement) { langElement.classList.add('active');});
    } else if (currentHash === '#no') {
        document.getElementById('lang').innerHTML = '<a href="#lang"><img src="img/NO.png" alt=""><span>Norsk</span></a>';
        let activeTabId = document.querySelector('.active-tab').id;
        for (let i = 0; i <= 11; i++) {
            document.querySelectorAll('.tab-content').forEach(function(tab) { tab.classList.remove('active-tab');});
            document.querySelectorAll('.tab').forEach(function(tab) { tab.classList.remove('active-but');});
        }
        if (activeTabId === 'tab-1' || activeTabId === 'tab-5') {
            document.getElementById('tab-9').classList.add('active-tab');
            document.getElementById('but-9').classList.add('active-but');
        } else if (activeTabId === 'tab-2' || activeTabId === 'tab-6') {
            document.getElementById('tab-10').classList.add('active-tab');
            document.getElementById('but-10').classList.add('active-but');
        } else if (activeTabId === 'tab-3' || activeTabId === 'tab-7') {
            document.getElementById('tab-11').classList.add('active-tab');
            document.getElementById('but-11').classList.add('active-but');
        } else {
            document.getElementById('tab-8').classList.add('active-tab');
            document.getElementById('but-8').classList.add('active-but');
        }
        document.querySelectorAll('.lang').forEach(function(langElement) { langElement.classList.remove('active');});
        document.querySelectorAll('.lang.no').forEach(function(langElement) { langElement.classList.add('active');});
    }
}
function showTab(index) {
    const buts = document.querySelectorAll('.tab');
    const tabs = document.querySelectorAll('.tab-content');
    buts.forEach((but, i) => {
        if (i === index) {
            but.classList.add('active-but');
        } else {
            but.classList.remove('active-but');
        }
    });
    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active-tab');
        } else {
            tab.classList.remove('active-tab');
        }
    });
}