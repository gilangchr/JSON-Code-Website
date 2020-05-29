function semuaMenu() {
    $.getJSON('json/menu.json', function (data) {
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#resto-atha').append('<div class="col-md-4 mt-3"><div class="card"> <img src="img/' + data.gambar + '" class="card-img-top"> <div class="card-body"> <h5 class="card-title text-info">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p> <h5 class="card-title">RP. ' + data.harga + '</h5> <a href="#" class="btn btn-primary">Pesan Sekarang</a> </div>  </div> </div>');
        })
    })
}
semuaMenu();


$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');


    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        semuaMenu();
        return;
    }


    $.getJSON('json/menu.json', function (data) {
        let menu = data.menu;
        let action = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                action += '<div class="col-md-4 mt-3"><div class="card"> <img src="img/' + data.gambar + '" class="card-img-top"> <div class="card-body"> <h5 class="card-title text-info">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p> <h5 class="card-title">RP. ' + data.harga + '</h5> <a href="#" class="btn btn-primary">Pesan Sekarang</a> </div>  </div> </div>';
            }
        })
        $('#resto-atha').html(action);
    })
})

