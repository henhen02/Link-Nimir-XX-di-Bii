const dataBarang = [
    {
        barang: 'Rak Sepatu',
        linknya: 'https://shopee.co.id/IBANA-RAK-SEPATU-TINGKAT-SUSUN-SERBAGUNA-RAK-SENDAL-SEPATU-MULTIFUNGSI-IMPORT-SHOE-RACK-ORGANIZER-RAK-SUSUN-SERBAGUNA-i.254719709.21060027984?sp_atk=7f194eeb-62e9-49b3-b709-576ecb9738e8&xptdk=7f194eeb-62e9-49b3-b709-576ecb9738e8'
    },
    {
        barang: 'Gantungan Lemari',
        linknya: 'https://shopee.co.id/ESOK-Rak-Gantungan-Baju-Lemari-Jemuran-Stand-Hanger-Tempat-Sepatu-Gantungan-Gawang-Baju-Gantungan-Topi-Tas-i.572464478.23207106547?sp_atk=ef9a8f1d-dd1f-47f1-a5b5-0e0f360a59bc&xptdk=ef9a8f1d-dd1f-47f1-a5b5-0e0f360a59bc'
    },
    {
        barang: 'Sepatu anak kelap kelip',
        linknya: 'https://shopee.co.id/New-Arrival!!!-Sepatu-Anak-LED-Laki-laki-Perempuan-G-58-Sneakers-Anak-LED-Import-Unisex-i.27934391.12690049735?sp_atk=25b039d2-cee9-4239-b9ac-c47e0524f8d9&xptdk=25b039d2-cee9-4239-b9ac-c47e0524f8d9'
    },
    {
        barang: 'Tas Selempang',
        linknya: 'https://shopee.co.id/Tas-Selempang-Pria-Kasual-Polos-Hitam-Slempang-Cowok-Keren-Slingbag-Bahu-Pria-PG-8864-i.188316336.10445802018?sp_atk=16551154-0b5d-4c09-8d6e-cd75a602e7fe&xptdk=16551154-0b5d-4c09-8d6e-cd75a602e7fe'
    },
    {
        barang: 'Gantungan Kunci Logo Mobil',
        linknya: 'https://shopee.co.id/Gantungan-Kunci-Logam-Stainless-Logo-Honda-Jazz-Mobillio-Brio-CR-V-BR-V-Accord-dll-i.475288701.13312777516?sp_atk=c1963994-e0e2-47a9-b388-a5869eaab1f2&xptdk=c1963994-e0e2-47a9-b388-a5869eaab1f2'
    },
    {
        barang: 'Dekorasi Dinding Gundam',
        linknya: 'https://shopee.co.id/MEKANS-1-SET-Pajangan-Hiasan-dinding-GUNDAM-UNICORN-RX0-5pcs-Poster-Kayu-Wall-Decor-i.429231326.13280393721?sp_atk=0318b581-1d1e-4fd6-9c30-c1bbbb693ebe&xptdk=0318b581-1d1e-4fd6-9c30-c1bbbb693ebe'
    },
    {
        barang: 'Mouse Murah Keren',
        linknya: 'https://shopee.co.id/Mouse-bluetooth-DELUX-WIRELESS-136-HITAM-Mouse-wireless-Terlaris-Berkualitas-Bluetooth-High-quality-Grosir-Premium-H8I1-Murah-GRATIS-ONGKIR-BEST-SELLER-Terbaru-Trendy-Mos-tanpa-kabel-Kekinian-BISA-COD-Awet-Import-Keren-i.133460894.18859765057?sp_atk=d80b18c6-862f-4265-b84f-14dae7223c7e&xptdk=d80b18c6-862f-4265-b84f-14dae7223c7e'
    },
    {
        barang: 'Mangkuk Estetik',
        linknya: 'https://shopee.co.id/Mangkok-Soso-Ramen-Jepang-Asoka-(-M-)-i.175065002.13532751602?sp_atk=dd2e8658-0df4-4a0d-9c3f-d0d6979f6e38&xptdk=dd2e8658-0df4-4a0d-9c3f-d0d6979f6e38'
    },
    {
        barang: 'Stiker Mobil Keren',
        linknya: 'https://shopee.co.id/Custom-sticker-speedhunter-kanji-blok-kaca-mobil-jdm-style-all-mobil-Toodamnlow-i.185669647.13786311993?sp_atk=aa322deb-e2b2-49e3-961a-7e45305d6d46&xptdk=aa322deb-e2b2-49e3-961a-7e45305d6d46'
    },
    {
        barang: 'Semprotan Tanaman Mini',
        linknya: 'https://shopee.co.id/Botol-Sprayer-Kosongan-500Ml-Untuk-Semai-Atau-Untuk-Pengendalian-Hama-Botol-Saja-Semprotan-Tanaman-Air-Burung-Botol-Semprotan-Spray-500ml-1-Liter-Tanaman-Air-Spray-Kecil-Burung-Spay-Lucu-Disinfektan-i.10573741.21155969398?sp_atk=e37d25c1-13d2-4d94-b921-7c4c1dd30d6c&xptdk=e37d25c1-13d2-4d94-b921-7c4c1dd30d6c'
    },
    {
        barang: 'Helm Murah Keren',
        linknya: 'https://shopee.co.id/Helm-Bogo-Dewasa-H64-Unionjack-Motif-Keren-Retro-Classic-Vespa-New-Helem-Motor-Kekinian-i.618022308.10276705058?sp_atk=181b0b86-14da-4b26-8485-7aabe43ab2e0&xptdk=181b0b86-14da-4b26-8485-7aabe43ab2e0'
    },
    {
        barang: 'Kaus Kaki Keren',
        linknya: 'https://shopee.co.id/Kaos-Kaki-Sport-Murah-Motif-Keren-i.174272756.19663003376?sp_atk=2ee5979e-d648-4e7d-8b81-63b6b5477d06&xptdk=2ee5979e-d648-4e7d-8b81-63b6b5477d06'
    },
];

let main = document.querySelector('main');
for (let i = 0; i < dataBarang.length; i++){
    main.innerHTML += `<a href="${dataBarang[i]['linknya']}"><p>${i+1}. ${dataBarang[i]['barang']}</p></a>`;
    main.innerHTML += `<hr>`;
}
console.log(dataBarang);