import React, { useEffect } from 'react'
import { Navbar, Button, Table } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { logoMoniqq, imageThroughput, imageDelayBad, imageDelayGood, imageJitterGood, imageJitterBad } from '../../assets'
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import { Chart, Filler, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js'
Chart.register(ArcElement, Tooltip, Legend, Filler, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const BelajarJitter = () => {
    useEffect(() => {
        document.title = "Belajar Jitter - MONIQQ";
    }, []);
    const labels = ['Person1', 'person2', 'person3'];
    const databarmulti = {
        labels,
        datasets: [
            {
                label: 'Maximal',
                data: [18, 23, 25,],
                backgroundColor: 'rgba(53, 90, 232, 0.5)',
            },
            {
                label: 'Minimal',
                data: [15, 12, 12],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Rata-Rata',
                data: [17, 18, 18],
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
                <h4 className='text-3xl font-bold my-10'>Memahami <i>Jitter</i></h4>
            </div>

            <div className='container w-full flex flex-wrap justify-around '>
                <div className='w-full md:w-3/4 flex flex-col '>

                    <h5 id='apa-itu-jitter' className='text-xl font-bold mb-5'>
                        Apa itu
                        <span className='italic'> Jitter</span>
                        ?
                    </h5>
                    <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>
                        <span className='font-semibold italic'>Jitter </span>
                        adalah varians atau
                        <span className='font-semibold'> variasi </span>
                        dari nilai
                        <span className='font-semibold italic'> Delay</span>
                        .
                        <span className='italic'> Jitter </span>
                        juga dinyatakan dengan milliseconds (ms).

                    </p>
                    <p className='text-base font-regular mb-5 leading-relaxed text-gray-700'>

                        Jaringan yang andal, memiliki nilai
                        <span className='italic'> Delay </span>
                        yang konsisten.
                        Jika
                        <span className='italic'> Delay </span>
                        setiap paket data yang dikirim nilainya stabil, maka nilai
                        <span className='italic'> Jitter </span>
                        akan minimal.
                        Namun, jika terjadi lonjakan nilai
                        <span className='italic'> Delay </span>
                        pada saat tertentu, maka nilai
                        <span className='italic'> Jitter </span>
                        akan membesar.
                    </p>


                    <h5 id='illustrasi-jitter' className='text-xl font-bold mb-5'>
                        Illustrasi
                        <span className='italic'> Jitter</span>
                    </h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Ilustrasi untuk memahami
                        <span className='font-semibold italic'> Jitter </span>
                        adalah sebagai berikut.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Terdapat 5 paket data yang akan dikirimkan menuju tujuan masing-masing dalam Jaringan A dan Jaringan B.
                        Nilai dari
                        <span className='italic'> Delay </span>
                        tiap-tiap paket adalah sebagai berikut.
                    </p>
                    <div className='flex mt-2 mb-10 justify-center'>
                        <Table hoverable={true}>
                            <Table.Head>
                                <Table.HeadCell>
                                    Jaringan A
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Jaringan B
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        3ms
                                    </Table.Cell>
                                    <Table.Cell>
                                        4ms
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        3ms
                                    </Table.Cell>
                                    <Table.Cell>
                                        52ms
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        4ms
                                    </Table.Cell>
                                    <Table.Cell>
                                        3ms
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        4ms
                                    </Table.Cell>
                                    <Table.Cell>
                                        70ms
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        3ms
                                    </Table.Cell>
                                    <Table.Cell>
                                        4ms
                                    </Table.Cell>
                                </Table.Row>


                            </Table.Body>
                        </Table>
                    </div>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Berdasarkan tabel di atas, Pada Jaringan A, nilai dari
                        <span className='italic'> Delay </span>
                        sangat konsisten.
                        Namun, pada Jaringan B, dua dari lima paket memiliki
                        <span className='italic'> Delay </span>
                        jauh di atas normal.
                        Oleh karena itu, Jaringan A
                        <span className='italic'> Jitter </span>
                        berinilai minimal, sedangkan pada jaringan B
                        <span className='italic'> Jitter </span>
                        bernilai besar.
                    </p>
                    <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-1 mb-7 leading-relaxed italic rounded">
                        <p className='text-base font-regular leading-relaxed text-gray-700'>
                            Jadi, <span className='font-semibold italic'> Jitter </span>
                            merupakan
                            <span className='font-semibold italic'> variasi waktu </span>
                            saat transmisi data.
                        </p>
                    </div>


                    <h5 id='standar-nilai-jitter' className='text-xl font-bold mb-5'>Standar Nilai <i>Jitter</i></h5>
                    <div className="border-l-4 border-blue-500 pl-4 text-base font-regular mt-3 mb-6 leading-relaxed italic rounded">
                        <span className='font-semibold '> Semakin kecil </span>
                        nilai Jitter, maka
                        <span className='font-semibold '> semakin baik</span>
                        .
                    </div>
                    <div>
                        <img
                            src={imageJitterGood}
                            className="h-full w-full "
                            alt="imageJitterGood"
                        />
                    </div>
                    <div>
                        <img
                            src={imageJitterBad}
                            className="h-full w-full "
                            alt="imageJitterBad"
                        />
                    </div>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Berdasarkan penelitian Mister X et.al standar nilai
                        <span className='italic'> Jitter </span>
                        adalah sebagai berikut.
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
                                        0ms
                                    </Table.Cell>
                                    <Table.Cell>
                                        4
                                    </Table.Cell>
                                    <Table.Cell>
                                        Sangat Bagus
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        0ms &#60; x &le; 75ms
                                    </Table.Cell>
                                    <Table.Cell>
                                        3
                                    </Table.Cell>
                                    <Table.Cell>
                                        Bagus
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        75ms &#60; x &le; 125ms
                                    </Table.Cell>
                                    <Table.Cell>
                                        2
                                    </Table.Cell>
                                    <Table.Cell>
                                        Sedang
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        125ms &#60; x &le; 225ms
                                    </Table.Cell>
                                    {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            &#60;25%&#62; &ge; &le;
                                        </Table.Cell> */}
                                    <Table.Cell>
                                        1
                                    </Table.Cell>
                                    <Table.Cell>
                                        Jelek
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>

                    <h5 id='pengaruh-jitter' className='text-xl font-bold mb-5'>Pengaruh <i>Jitter</i></h5>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Nilai Jitter memiliki pengaruh terhadap seluruh aktivitas Anda di Internet, seperti browsing, streaming, dan gaming.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Setiap aktivitas di Internet memiliki ketahanan masing-masing terhadap Jitter.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Nilai Jitter akan sangat berpengaruh terhadap aktivitas yang sifatnya sinkron dan butuh respon yang cepat, seperti panggilan dan game.
                    </p>
                    <p className='text-base font-regular mb-4 leading-relaxed text-gray-700'>
                        Jika nilai Jitter tinggi, maka Anda akan meraskan Gejala-gejala sebagai berikut.
                    </p>
                    <ul className="list-disc mx-7 mb-6 text-gray-700">
                        <li className='mb-2'>
                            Visual Stuttering (glitch)
                        </li>
                        <li className='mb-2'>
                            Suara atau video yang tidak jelas saat melakukan panggilan online.
                        </li>
                        <li className='mb-2'>
                            Reconnecting atau bahkan terputus dari game.
                        </li>
                    </ul>


                    <h5 id='pengukuran-jitter' className='text-xl font-bold mb-5'>Pengukuran <i>Jitter</i></h5>
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
                                        <option>PT_L</option>
                                        <option>PT_I</option>
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
                                        2ms
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
                                        2ms
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-2 mb-1 md:mb-0 ">
                                <div className='border rounded-lg p-3 w-full flex flex-col justify-center items-center'>
                                    <div className='flex text-base'>
                                        Maximal
                                    </div>
                                    <div className='flex text-lg font-bold'>
                                        2ms
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
                            <a href='/belajarqos/jitter/#apa-itu-jitter'
                                className=' mb-2 flex text-sm
                                         hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                         focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                            '
                            > Apa itu Jitter?
                            </a>
                            <a href='/belajarqos/jitter/#illustrasi-jitter'
                                className=' mb-2 flex text-sm
                                         hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                         focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                            '
                            > Illustrasi
                            </a>

                            <a href='/belajarqos/jitter/#standar-nilai-jitter'
                                className=' mb-2 flex text-sm
                                         hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                         focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                            '
                            >Standar Jitter
                            </a>
                            <div>
                                <a href='/belajarqos/jitter/#standar-nilai-jitter'
                                    className=' ml-4 mb-2 flex text-sm
                                         hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                         focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                            '
                                > Jitter Bagus
                                </a>
                                <a href='/belajarqos/jitter/#standar-nilai-jitter'
                                    className=' ml-4 mb-2 flex text-sm
                                         hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                         focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                            '
                                > Jitter Buruk
                                </a>
                            </div>
                            <a href='/belajarqos/jitter/#pengaruh-jitter'
                                className=' mb-2 flex text-sm
                                         hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                         focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                            '
                            > Pengaruh Jitter
                            </a>

                            <a href='/belajarqos/jitter/#pengukuran-jitter'
                                className=' mb-2 flex text-sm
                                         hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                         focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                            '
                            > Pengukuran Jitter
                            </a>
                            <h6 className='mt-5 mb-3 text-gray-900 dark:text-gray-100 font-semibold text-base'>Parameter Lain</h6>
                            <Link to='/belajarqos/throughput'>
                                <div
                                    className=' mb-2 flex text-sm
                                         hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                         focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                            '
                                > Throughput
                                </div>
                            </Link>
                            <Link to='/belajarqos/delay'>
                                <div
                                    className=' mb-2 flex text-sm
                                         hover:text-gray-700 focus:outline-none dark:hover:text-gray-200
                                         focus-visible:text-gray-700 dark:focus-visible:text-gray-200 text-gray-400 dark:text-gray-500
                            '
                                > Delay/Latency
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

export default BelajarJitter