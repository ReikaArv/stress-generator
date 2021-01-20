function go_hina(){
    var korban = document.getElementById('korban').value;
    var kelebihan = document.getElementById('kelebihan').value;
    var nominasi = document.getElementById('nominasi').value;
    var jumlah = document.getElementById('jumlah').value;
    var jenis = document.getElementById('jenis').value;
    var alias = document.getElementById('alias').value;
    var nama = document.getElementById('nama').value;
    var fanbase = document.getElementById('fanbase').value;
    var output = document.getElementById('output');

    var hinaan = 'MAKSUD LO APA HINA2 BTS HAH!? GUE MESTI KASIH TAU YA BTS ITU RAJANYA MUSIK! OPPA GUA UDAH MENGUNJUNGI NOMINASI2 MUSIK TERATAS, DAN PUNYA LEBIH DARI 200 PENGHARGAAN! OPPA GUE UDAH TERLATIH DI BIDANG ANIME DAN BTS ITU GRUP TERBAIK DI SEGALA INDUSTRI ANIME. MUKA LU GAADA APA2NYA DIBANDING SAMA JUNGKOOK OPPA GUA. ARMY BAKAL NGINCAR LO SAMPE ELO GABAKAL ADA DI BUMI INI! CAMKAN KATA KATA ARMY!!!! LU PIKIR LU BISA SEENAK NYA NGATAIN OPPA GUE BEGITU AJA? PIKIR ULANG NJING! PAS GUA NGETIK INI GUA UDAH HUBUNGIN DAN MEMANGGIL SELURUH ARMY DI SEKUJUR DUNIA DAN MUKA LU UDAH GW LACAK BUAT UU ITE! ARMY ADA DIMANA-MANA KAPAN AJA DAN BISA BULLY ELU DENGAN SEGALA CARA, COBA AJA LO GAK NGEHINA OPPA GW ATAU LU BISA JAGA MULUT. LO NGGA BISA KAN? ARMY BAKAL HANCUR SAMA KAWAN2 LO YANG LAIN YANG HINA BTS, LU BAKAL MATI'

    var replace = hinaan.replace(/BTS/g, korban).replace(/RAJANYA MUSIK/g, kelebihan).replace(/MUSIK/g, nominasi).replace(200, jumlah).replace(/OPPA/g, alias).replace(/JUNGKOOK/g, nama).replace(/ARMY/g, fanbase).replace(/ANIME/g, jenis);

    output.innerHTML = replace;
}

function copyText(){
    var textCopy = document.getElementById("copy_text");
    textCopy.querySelector();
    document.execCommand('copy');
   }