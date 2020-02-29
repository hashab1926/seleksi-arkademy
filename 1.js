function BiodataAsli(nama, umur) {
    // kalau umur tidak di isi dengan angka
    if (isNaN(umur) === true) return false;

    // inisialisasi biodata pribadi
    let InitMyBiodata =
        [{
            name: nama,
            age: umur,
            address: "Jl.Saluyu Indah 10 No.9H Kec.Rancasari Kel.Derwati RT 05 RW 10, Kota Bandung",
            hobbies: ['Futsal', 'Coding'],
            is_married: false,
            list_school: [
                {
                    // STMIK BANDUNG
                    year_in: 2016,
                    year_out: 2020,
                    major: 'Sistem Informasi - Strata Satu',
                },
                {
                    // SMK IGASAR PINDAD 
                    year_in: 2013,
                    year_out: 2016,
                    major: 'Rekayasa Perangkat Lunak (RPL)',
                },
                {
                    // SMPN 51 BANDUNG
                    year_in: 2011,
                    year_out: 2013,
                    major: null
                }
            ],
            skills: [
                // Web 
                {
                    skill_name: 'PHP Native',
                    level: 'Advanced',
                },
                {
                    skill_name: 'Framework Codeigniter',
                    level: 'Advanced',
                },
                {
                    skill_name: 'Framework Laravel',
                    level: 'Advanced',
                },
                {
                    skill_name: 'Css, Framework (Bootstrap,Semantic UI,Materialze)',
                    level: 'Beginner',
                },
                {
                    skill_name: 'Javascript, Framework / Libraries (Vue, React)',
                    level: 'Beginner',
                },
                // Mobile
                {
                    skill_name: 'Framework Flutter',
                    level: 'Beginner',
                }
            ],
            interest_in_coding: true
        }];

    //    document.getElementById('app').innerHTML = JSON.stringify(InitMyBiodata);
    return JSON.stringify(InitMyBiodata);
}
// JSON (Javascript Object Notation)
// Merupakan sebuah format data untuk saling berkomunikasi antar aplikasi, server, dll dan penyimpanan data
// kegunaan JSON pada REST API salah satunya, mudah dimengerti, mudah diurai,dan tidak ribet seperti XML tentunya 