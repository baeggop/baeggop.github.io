document.addEventListener("DOMContentLoaded", function () {
    // 모든 collapse 요소를 찾고 접힌 상태로 유지
    const collapses = document.querySelectorAll('.collapse');
    collapses.forEach(collapse => {
        collapse.classList.remove('show');  // collapse 상태로 만들기
    });

    const hash = window.location.hash;

    if (hash) {
        // URL의 해시를 사용해 해당 섹션 열기
        const targetElement = document.querySelector(hash);

        if (targetElement && targetElement.classList.contains('collapse')) {
            // 해당 섹션 열기
            targetElement.classList.add('show');
            
            // 해당 섹션으로 스크롤
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // 클릭 시 해당 섹션 열기
    const collapseLinks = document.querySelectorAll('.collapse-link');
    collapseLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement && targetElement.classList.contains('collapse')) {
                targetElement.classList.add('show');
            }
        });
    });
});