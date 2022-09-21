import React, { useEffect } from 'react'
import { Navbar, Button, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq, imageThroughput, imageDelayBad } from '../../assets'
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);
const BelajarThroughput = () => {
    const labels = ['22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222', '22/02/2222'];
    const databarmulti = {
        labels,
        datasets: [
            {
                label: 'Person 1',
                data: [18, 12, 13, 14, 17, 11, 10],
                backgroundColor: 'rgba(53, 90, 232, 0.5)',
            },
            {
                label: 'Person 2',
                data: [15, 20, 19, 19.1, 12, 19, 18],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Person 3',
                data: [15, 10, 11, 11, 12, 12, 18],
                backgroundColor: 'rgba(53, 162, 200, 0.5)',
            },

        ],

    };
    return (
        <div className='flex flex-col div h-screen scroll-smooth  '>
            <header className="container p-0">
                <Navbar
                    fluid={true}
                    rounded={true}

                >
                    <div>
                        <Link to="/">
                            <img
                                src={logoMoniqq}
                                className="mr-3 h-5 w-24 "
                                alt="Flowbite Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex md:order-2">
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <ul
                            className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <Link to='/'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Home
                                    </div>
                                </li>
                            </Link>
                            <Link to='/belajarqos'>
                                <li>
                                    <div
                                        className="block py-2 pr-4 pl-3 text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >Belajar Internet
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>

            </header>
            <div className='container mt-12'>
                <h4 className='text-3xl font-bold my-10'>Memahami <i>Throughput</i> dan <i>Bandwidth</i></h4>

            </div>

            <div className='container w-full flex flex-wrap justify-around '>
                <div className='w-full md:w-3/4 flex flex-col '>

                    <h5 id='apa-itu-throughput' className='text-xl font-bold mb-5'>
                        Apa itu
                        <span className='italic'> Throughput</span>
                        ?
                    </h5>
                    <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                        Mungkin Anda
                        <span className='font-semibold'> kurang familiar </span>
                        dengan istilah
                        <span className='font-semibold italic'> Throughput</span>
                        .
                        Throughput mungkin masih menjadi istilah yang asing, khususnya bagi orang awam (di luar dunia IT).
                    </p>

                    <h5 id='apa-itu-bandwidth' className='text-xl font-bold mb-5'>
                        Bagaimana dengan istilah
                        <span className='italic'> Bandwidth</span>
                        ?
                    </h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Istilah
                        <span className='font-semibold italic'> Bandwidth </span>
                        mungkin lebih
                        <span className='font-semibold'> familiar </span>
                        bagi Anda.
                        Pasti Anda pernah mendengar kata Bandwidth saat hendak belangganan internet.
                    </p>

                    <h5 id='arti-throughput-bandwidth' className='text-xl font-bold mb-5'>Jadi, apa arti kedua istilah tersebut? Mari kita ulas bersama.</h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        <span className='italic'>Bandwidth </span>
                        dan
                        <span className='italic'> Throughput </span>
                        adalah
                        <span className='font-semibold'> parameter </span>
                        yang digunakan untuk mengukur performa
                        <span className='font-semibold'> laju </span>
                        dari jaringan internet.
                        Keduanya dapat dinyatakan dalam
                        <span className='font-semibold'> satuan bps </span>
                        (bit/second) atau
                        <span className='font-semibold'> Bps </span>
                        (byte/second).
                    </p>
                    <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                        <span className='font-semibold '> Throughput </span>
                        merupakan
                        <span className='font-semibold '> jumlah data </span>
                        yang ditransfer dari sumber ke tujuan dalam jangka
                        <span className='font-semibold '> waktu tertentu</span>,
                        sedangkan
                        <span className='font-semibold '> Bandwidth </span>
                        merupakan
                        <span className='font-semibold '> kapasitas </span>
                        transfer
                        <span className='font-semibold '> maksimal </span>
                        yang dapat dilakukan oleh jaringan.
                    </div>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        <span className='italic'>Bandwidth </span>
                        dan
                        <span className='italic'> Throughput </span>
                        adalah dua konsep yang
                        <span className='font-semibold'> berbeda</span>,
                        tetapi masih
                        <span className='font-semibold'> saling terkait</span>.
                    </p>
                    <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                        Dengan memahami kedua istilah tersebut, Anda akan dapat memahami kualitas koneksi Anda secara
                        <span className='font-semibold'> komprehensif</span>
                        .
                    </p>

                    <h5 id='kesalahpahaman' className='text-xl font-bold mb-5'>Salah Paham</h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Sering terjadi kesalahpahaman terkait dua istilah ini.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        <span className='italic font-semibold'>Bandwidth </span>
                        sering digunakan untuk
                        <span className='font-semibold'> mengukur laju </span>
                        suatu jaringan internet pada
                        <span className='font-semibold'> setiap saat</span>
                        .
                        <span className='font-semibold'> Padahal</span>
                        ,
                        <span className='italic'> Bandwidth </span>
                        merujuk pada kemampuan atau
                        <span className='font-semibold'> kapasitas maksimal </span>
                        suatu jaringan internet dalam mengirimkan atau transfer data.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Untuk mengukur jumlah data yang ditransfer dalam waktu tertentu,
                        <span className='font-semibold'> seharusnya </span>
                        menggunakan
                        <span className='italic font-semibold'> Throughput</span>
                        .
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Anda akan sering menjumpai
                        <span className='font-semibold'> Penyedia Jasa Internet </span>
                        (ISP)
                        <span className='font-semibold'> mempromosikan </span>
                        produk internetnya
                        <span className='font-semibold'> berdasarkan besaran</span>
                        <span className='italic font-semibold'> Bandwidth </span>
                        yang tersedia.
                        Hal tersebut merupakan teknik pemasaran atau
                        <span className='font-semibold italic'> gimmick marketing </span>
                        dari Penyedia Jasa Internet saja.
                    </p>
                    <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                        <span className='font-semibold'>Hal yang perlu diluruskan </span>
                        adalah nilai atau luaran transfer data
                        <span className='font-semibold'> tidak akan selalu sama </span>
                        pada setiap saat seperti yang ditawarkan ISP (Berdasarkan Bandwidth).
                    </p>
                    {/* <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Besaran nilai throughput akan selalu lebih kecil atau sama dengan besar bandwidth.
                    </p> */}

                    <h5 id='illustrasi-throughput-bandwidth' className='text-xl font-bold mb-5'>Illustrasi Throughput vs Bandwidth</h5>
                    <div>
                        <img
                            src={imageThroughput}
                            className="h-full w-full "
                            alt="Img Throughpt"
                        />
                    </div>

                    <h6 id='analogi-throughput-bandwidth' className='text-lg font-bold mb-5'>Analogi</h6>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Analogi yang dapat digunakan untuk menggambarkan
                        <span className='font-semibold'> hubungan </span>
                        antara keduanya adalah hubungan
                        <span className='font-semibold'> pipa </span>
                        dengan
                        <span className='font-semibold'> air</span>
                        .
                        <span className='italic'> Bandwidth </span>
                        sebagai pipa, sedangkan
                        <span className='italic'> Throughput </span>
                        sebagai air.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Jika pipa atau
                        <span className='italic'> Bandwidth </span>
                        <span className='font-semibold'>semakin besar</span>
                        , maka air atau
                        <span className='italic'> Throughput </span>
                        (data) yang dapat mengalir pada satu waktu juga
                        <span className='font-semibold'> semakin besar</span>
                        .
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Dengan kata lain, besar
                        <span className='font-semibold italic'> Bandwidth </span>
                        menentukan berapa banyak data yang dapat dikirim dan diterima perangkat pada satu waktu
                        (
                        <span className='font-semibold'>Batas Maksimal</span>
                        ),
                        sedangkan
                        <span className='font-semibold italic'> Throughput </span>
                        memberi tahu Anda jumlah data yang benar-benar
                        <span className='font-semibold'> ditransmisikan</span>.                        .
                    </p>
                    <h6 id='contoh-throughput-bandwidth' className='text-lg font-bold mb-5'>Contoh</h6>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Sebagai contoh, Anda saat ini sedang berlangganan sebuah produk internet dengan kapasitas
                        <span className='italic'> Bandwidth </span>
                        sebesar 10Mbps.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Lalu Anda ingin mengunduh sebuah
                        <span className='italic'> file </span>
                        di internet.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Ketika Anda mengunduh
                        <span className='italic'> file </span>
                        tersebut,
                        <span className='italic'> browser </span>
                        Anda menunjukkan kecepatan sebesar 9,2Mbps.
                        Nilai 9.2Mbps inilah yang dimaksud dengan nilai
                        <span className='italic'> Throughput</span>
                        .
                    </p>

                    <h5 id='standar-nilai-throughput' className='text-xl font-bold mb-5'>Standar Nilai <i>Throughput</i></h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Berdasarkan penelitian Mister X et.al. Nilai throughput yang. percuma jika nilai bandwidth besar tapi throughputnya tetap kecil.
                    </p>

                    <div className='flex mt-2 mb-10 justify-center'>
                        <Table hoverable={true}>
                            <Table.Head>
                                <Table.HeadCell>
                                    Nilai
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Index
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Category
                                </Table.HeadCell>

                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        &#60;0%&#62; &ge;asda &le;


                                    </Table.Cell>
                                    <Table.Cell>
                                        3
                                    </Table.Cell>
                                    <Table.Cell>
                                        Good
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        0%
                                    </Table.Cell>
                                    <Table.Cell>
                                        3
                                    </Table.Cell>
                                    <Table.Cell>
                                        Good
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        0%
                                    </Table.Cell>
                                    <Table.Cell>
                                        3
                                    </Table.Cell>
                                    <Table.Cell>
                                        Good
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        0%
                                    </Table.Cell>
                                    <Table.Cell>
                                        3
                                    </Table.Cell>
                                    <Table.Cell>
                                        Good
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>


                    <h5 id='pengaruh-throughput-bandwidth' className='text-xl font-bold mb-5'>Pengaruh <i>Throughput</i> dan <i>Bandwidth</i></h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Ketika Anda mengunduh file tersebut, browser anda menunjukkan kecepatan sebesar 9,2Mbps.
                        Nilai 9.2Mbps inilah yang dimaksud dengan nilai throughput.
                    </p>



                    <h5 id='pengukuran-throughput' className='text-xl font-bold mb-5'>Pengukuran <i>Throughput</i></h5>
                    {/* input filter */}
                    <div>
                        <form  >
                            <div className="flex flex-wrap mx-0 mb-2">
                                <div className="w-full md:w-1/4 p-3 mb-1 md:mb-0">
                                    <label
                                        htmlFor="isp"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >ISP</label
                                    >
                                    <select
                                        id="isp"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    >
                                        <option>LifeMedia</option>
                                        <option>IndiHome</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/4 p-3 mb-1 md:mb-0">
                                    <label
                                        htmlFor="jenisproduk"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >Jenis Produk</label
                                    >
                                    <select
                                        id="jenisproduk"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    >
                                        <option>Internet 20Mbps</option>
                                        <option>Internet 10Mbps</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/4 p-3 mb-1 md:mb-0 ">
                                    <label
                                        htmlFor="lokasi"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >Lokasi</label
                                    >
                                    <select
                                        id="lokasi"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    >
                                        <option>Sleman</option>
                                        <option>Yogyakarta</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-1/4 p-3 mb-6 sm:mt-7 ">
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Cari
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* chart */}
                    <div className=' p-3 border rounded-lg m-3'>
                        <div className="flex flex-wrap mx-0 mb-2">
                            <div className="w-full md:w-full p-3 mb-1 md:mb-0">
                                <div className='h-96'>
                                    <Bar data={databarmulti} options={{ maintainAspectRatio: false, }} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-0 mb-2">
                            <div className="w-full md:w-1/2 p-2 mb-1 md:mb-0 ">
                                <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                    <div className='flex text-base'>
                                        Rata-rata
                                    </div>
                                    <div className='flex text-lg font-bold'>
                                        16.9 Mbps
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-2 mb-1 md:mb-0 ">
                                <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                    <div className='flex text-base'>
                                        Standar
                                    </div>
                                    <div className='flex text-lg font-bold'>
                                        Good
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-0 mb-2">
                            <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                    <div className='flex text-base'>
                                        Varian
                                    </div>
                                    <div className='flex text-lg font-bold'>
                                        1.1
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                    <div className='flex text-base'>
                                        Minimal
                                    </div>
                                    <div className='flex text-lg font-bold'>
                                        12.2 Mbps
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                    <div className='flex text-base'>
                                        Maximal
                                    </div>
                                    <div className='flex text-lg font-bold'>
                                        19.8 Mbps
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-10'>
                    </div>


                </div>
                <aside className='w-1/4 flex flex-col'>
                    <div className='sticky top-14 px-5'>
                        <div className='px-4 flex-col hidden overflow-auto lg:block border-l-2 border-blue-50 '>
                            <h6 className='mb-3 text-gray-900 dark:text-gray-100 font-semibold text-lg'>Daftar Isi</h6>
                            <a href='/belajarqos/throughput/#apa-itu-throughput'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Apa itu Throughput?
                            </a>
                            <a href='/belajarqos/throughput/#apa-itu-bandwidth'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Apa itu Bandwidth?
                            </a>
                            <a href='/belajarqos/throughput/#arti-throughput-bandwidth'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Arti Bandwidth & Throughput
                            </a>
                            <a href='/belajarqos/throughput/#kesalahpahaman'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Kesalahpahaman
                            </a>
                            <a href='/belajarqos/throughput/#illustrasi-throughput-bandwidth'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Illustrasi
                            </a>
                            <div>
                                <a href='/belajarqos/throughput/#analogi-throughput-bandwidth'
                                    className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Analogi
                                </a>
                                <a href='/belajarqos/throughput/#contoh-throughput-bandwidth'
                                    className=' ml-4 mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Contoh
                                </a>
                            </div>
                            <a href='/belajarqos/throughput/#standar-nilai-throughput'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            >Standar Throughput
                            </a>
                            <a href='/belajarqos/throughput/#pengaruh-throughput-bandwidth'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Pengaruh Throughput & Bandwidth
                            </a>

                            <a href='/belajarqos/throughput/#pengukuran-throughput'
                                className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                            > Pengukuran Throughput
                            </a>
                            <h6 className='mt-5 mb-3 text-gray-900 dark:text-gray-100 font-semibold text-base'>Parameter Lain</h6>
                            <Link to='/belajarqos/delay'>
                                <div
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Delay/Latency
                                </div>
                            </Link>
                            <Link to='/belajarqos/jitter'>
                                <div
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Jitter
                                </div>
                            </Link>
                            <Link to='/belajarqos/packetloss'>
                                <div
                                    className=' mb-2 flex text-sm
                                             hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                             focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                                '
                                > Packet Loss
                                </div>
                            </Link>
                        </div>

                    </div>
                </aside>



            </div>

        </div >
    )
}

export default BelajarThroughput