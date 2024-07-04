import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Event from './Event';
import { EffectFade, Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Events = () => {
  const events = [
    {
      image_background: "https://img.redbull.com/images/c_crop,x_251,y_0,h_1100,w_1100/c_fill,w_450,h_450/q_auto,f_auto/redbullcom/2024/4/12/xmtogwr7qf2fsf5zf98y/red-bull-four-2-score-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/2/npzoacysjmx68vlliwhd/red-bull-four-2-score",
      date: "18 May 2024",
      footer_heading: "FUTSALL",
      title: "Red Bull Four 2 Score 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_128,y_0,h_1100,w_1222/c_fill,w_450,h_409/q_auto,f_auto/redbullcom/2024/4/4/g7sgje7iqjmnjgmaeqxe/red-bull-half-court-2024-india",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2022/3/17/el30gr6wmeca1oziutnv/red-bull-half-court-india-2022",
      date: "14 April - 12 May 2024",
      footer_heading: "BASKETBALL",
      title: "Red Bull Half Court 2024 India",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_0,y_0,h_2408,w_2676/c_fill,w_450,h_409/q_auto,f_auto/redbullcom/2024/2/13/gnscd3ttyiw51fnzowwv/red-bull-can-you-make-it",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2023/12/12/bgy2eejella0996j8edc/red-bull-can-you-make-it-logo",
      date: "21 - 28 May 2024",
      footer_heading: "Urban Exploration",
      title: "Red Bull Can You Make It",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_425,y_0,h_2561,w_3415/c_fill,w_450,h_346/q_auto,f_auto/redbullcom/2024/1/4/jeamzwuurhkclhiga9xw/cliff-diving-italy-2024",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2021/5/4/n143zg0814yk2h4wgb1m/red-bull-cliff-diving-world-series",
      date: "30 June 2024",
      footer_heading: "CLIFF Diving",
      title: "Red Bull CLIFF Diving",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_961,y_0,h_2560,w_2845/c_fill,w_450,h_409/q_auto,f_auto/redbullcom/2024/4/16/zdov15z4peabupkopsu6/kate-courtney-uci-mtb-world-cup-2023-les-gets",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2023/6/5/jxqzlt0ytdhmdqzckxli/uci-mtb-world-series-logo",
      date: "4 - 4 July 2024",
      footer_heading: "MTB",
      title: "UCI Mountain Bike World Cup",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_160,y_0,h_2560,w_3414/c_fill,w_450,h_346/q_auto,f_auto/redbullcom/2024/6/26/gd2cmsucmkkba6t0m0xa/pedro-acosta-leading-the-race-in-assen-2019",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2023/3/27/yxaqdnjd8dz9tmzehopv/red-bull-rookies-cup-logo",
      date: "20 - 30 June 2024",
      footer_heading: "RED BULL ROOKIES",
      title: "ASSEN",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_177,y_0,h_2000,w_2667/c_fill,w_450,h_346/q_auto,f_auto/redbullcom/2024/2/22/c6t65eejxndhcgkwlh6z/premier-padel-point-celebration",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/2/14/tbhxckwrbbdxx1tm9zqy/premier-padel-logo",
      date: "5 - 7 July 2024",
      footer_heading: "PADEL",
      title: "Genova Premier Padel P2",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_267,y_0,h_2400,w_3200/c_fill,w_450,h_346/q_auto,f_auto/redbullcom/2024/4/16/wowmjgzxjlo3dokuhg7m/kalle-rovanpera-drift-masters-finland-2023",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/4/29/yoduig2ivtgnaso7ktto/drift-masters-logo-2024",
      date: "5 - 6 July 2024",
      footer_heading: "DRIFTING",
      title: "Drift Masters",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_0,y_0,h_2200,w_2444/c_fill,w_450,h_409/q_auto,f_auto/redbullcom/2024/6/22/j0rvd652onkq2tnqzzn8/red-bull-half-court-mv",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/6/22/utwd6atcbcttjydtuu1x/red-bull-half-court-mv",
      date: "29 June - 14 July 2024",
      footer_heading: "BASKETBALL",
      title: "Red Bull HAlf Court Maldives",
    },
    {
      image_background: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_409/q_auto,f_auto/redbullcom/2023/1/23/txelhsxf0hlfypgl18uf/the-best-of-british",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2020/2/12/br99wj9obbe1e7csht30/silverstone-circuit",
      date: "5 - 7 July 2024",
      footer_heading: "F1",
      title: "2024 British Grand Prix",
    },
    {
      image_background: "https://img.redbull.com/images/c_fill,g_auto,w_450,h_409/q_auto,f_auto/redbullcom/2023/1/23/e458bhjxn4ot64enmjc9/honey-were-home",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2020/2/12/j0jgmqqan7tnnxncff2v/red-bull-ring",
      date: "28 - 30 June 2024",
      footer_heading: "F1",
      title: "2024 Austrian Grand Prix",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_200,y_0,h_2560,w_3413/c_fill,w_450,h_321/q_auto,f_auto/redbullcom/2024/2/15/jnftyhm0we4ehdmbbt9d/venue-red-bull-batalla-2023",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2024/2/19/lzbbsuqgc7e7fsxqa9cf/logo-red-bull-batalla",
      date: "6 July 2024",
      footer_heading: "MC Battle",
      title: "Red Bull Four Batalla Final",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_355,y_0,h_2134,w_2845/c_fill,w_450,h_346/q_auto,f_auto/redbullcom/2023/3/20/cug34jffsh1a4f3aoupd/okk-bike-revolution-action",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2020/1/27/nvaim9gnhf8o1lovlgig/wrc-logo",
      date: "28 - 30 June 2024",
      footer_heading: "MTB",
      title: "OKK Bike Revolution",
    },
    {
      image_background: "https://img.redbull.com/images/c_crop,x_427,y_0,h_2560,w_3413/c_fill,w_450,h_346/q_auto,f_auto/redbullcom/2024/1/18/f5xyvuqnvuv56iflhyod/thierry-neuville-rally-poland-2017",
      image_upper: "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2023/3/20/ealkxctkibzfjoskklzc/okk-bike-revolution",
      date: "28 - 30 June 2024",
      footer_heading: "RALLY",
      title: "Orlen 80th Rally Poland",
    }
  ];
  return (
    <div className="min-h-screen w-full relative">
      <h1 className="monument text-5xl lg:text-7xl pt-20 text-center">Events</h1>
      <p className="monument text-xs pb-20 text-center">
        Discover worldwide Red Bull events.
      </p>
      <Swiper
        modules={[EffectFade, Autoplay, FreeMode, Navigation]}
        autoplay={{ delay: 3000 }}
        freeMode={true}
        spaceBetween={0}
        slidesPerView={4}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-[70vh] w-[350vw]  md:w-full flex flex-wrap gap-10 pb-10 px-12"
      >
        {
          events.map((item, index) => (
            <SwiperSlide key={index}>
              <Event data={item} key={index}></Event>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="buttons absolute top-[55%] z-20 h-[10vh] w-full flex justify-between items-center px-2">
        <div className='left cursor-pointer swiper-button-prev'>
          <FaAngleLeft className='text-6xl drop-shadow-2xl font-light p-5 text-white bg-zinc-900 rounded-full' />
        </div>
        <div className='right cursor-pointer swiper-button-next'>
          <FaAngleRight className='text-6xl drop-shadow-2xl font-light p-5 text-white bg-zinc-900 rounded-full' />
        </div>
      </div>
    </div>
  );
};

export default Events;