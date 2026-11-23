document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector('#masonry-grid');
    let msnry;

    // Inisialisasi Masonry setelah semua gambar dimuat
    imagesLoaded(grid, function () {
        msnry = new Masonry(grid, {
            itemSelector: '.masonry-item',
            percentPosition: true
        });
    });

    // Fitur Filter Kategori Card
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.masonry-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Atur tombol aktif
            filterButtons.forEach(btn => btn.classList.remove('active', 'btn-idi-primary'));
            filterButtons.forEach(btn => btn.classList.add('btn-outline-secondary'));
            this.classList.remove('btn-outline-secondary');
            this.classList.add('active', 'btn-idi-primary');

            const filterValue = this.getAttribute('data-filter');

            items.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                }
            });

            // Susun ulang tata letak Masonry
            if (msnry) {
                msnry.layout();
            }
        });
    });
});
