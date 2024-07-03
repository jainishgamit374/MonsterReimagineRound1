import React from 'react'
import Partner from './Partner'

const Partners = () => {

  const brands = [

    [
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/3/25/jhowmyruymkt9mglseic/oracle-red-bull-racing-honda",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/26/ynxvagfedbge8ashoqox/honda-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/30/aqcdzzg5c84mjkf3oeww/mobil-1-tech-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/4/28/mavrs7h69wkivw8i8gg7/sparco-oracle-red-bull-racing-technical-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/30/gf5veb8xstc2a3nueokj/esso-tech-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/1/5/szv5grofj3b6z0tlgduc/zoom-innovation-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/10/dvhupbrn5dhradr9kosb/siemens-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/2/18/ukoih0u5apgjdkiitpwh/arctic-wolf-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/10/g1juwo74v8qpuccz6asd/att-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/10/r5tvbja893emltwtpoxj/dmg-mori-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/23/j0zfyzqgdbkejq3ykz8q/hexagon-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/17/d4g7zhmyanfndnqaplix/ansys-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/7/2/n8lfzkywhmu22xq37biy/pwr-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/3/25/jhowmyruymkt9mglseic/oracle-red-bull-racing-honda",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/26/ynxvagfedbge8ashoqox/honda-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/30/aqcdzzg5c84mjkf3oeww/mobil-1-tech-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/4/28/mavrs7h69wkivw8i8gg7/sparco-oracle-red-bull-racing-technical-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/30/gf5veb8xstc2a3nueokj/esso-tech-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/1/5/szv5grofj3b6z0tlgduc/zoom-innovation-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/10/dvhupbrn5dhradr9kosb/siemens-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/2/18/ukoih0u5apgjdkiitpwh/arctic-wolf-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/10/g1juwo74v8qpuccz6asd/att-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/10/r5tvbja893emltwtpoxj/dmg-mori-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/23/j0zfyzqgdbkejq3ykz8q/hexagon-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/17/d4g7zhmyanfndnqaplix/ansys-technical-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/7/2/n8lfzkywhmu22xq37biy/pwr-technical-partner-logo",
    ],
    [
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/2/18/uai9thci3kwuanyfyqiz/bybit-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/6/6/kpzu9mwm1it3youpp3cf/sui-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/5/19/sjwacw12vcbikqfodgh5/hard-rock-international-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/10/gj3158rjworrodanf1gt/tag-heuer-team-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/2/15/c3kcovlgw6maaosq9oox/built-for-athletes-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2024/2/16/j3z3wacl0ryun6bvzf3w/visa-red-bull-racing-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/9/14/t99lm0m55eiqnnmns9u6/castore-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2024/3/1/qxtqrjzxc5gofktfvwwo/pepe-jeans-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/5/23/zulpitd7bfbcvr0o3ozv/patron-tequila",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/2/23/lmirqsizk3g6wcui1pjk/athletic-propulsion-labs-oracle-red-bull-racing-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/9/8/bep1aq3881vrhbjp1fzh/blenders-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/2/3/qzuuhc6usqa7oq1ni0ob/rokt-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/23/soovpcv3sdh1abmkm8ey/rauch-team-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/5/17/mjpos445wupbf7ph6kve/walmart-red-bull-racing",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/2/18/uai9thci3kwuanyfyqiz/bybit-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/6/6/kpzu9mwm1it3youpp3cf/sui-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/5/19/sjwacw12vcbikqfodgh5/hard-rock-international-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/10/gj3158rjworrodanf1gt/tag-heuer-team-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/2/15/c3kcovlgw6maaosq9oox/built-for-athletes-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2024/2/16/j3z3wacl0ryun6bvzf3w/visa-red-bull-racing-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/9/14/t99lm0m55eiqnnmns9u6/castore-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2024/3/1/qxtqrjzxc5gofktfvwwo/pepe-jeans-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/5/23/zulpitd7bfbcvr0o3ozv/patron-tequila",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/2/23/lmirqsizk3g6wcui1pjk/athletic-propulsion-labs-oracle-red-bull-racing-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2022/9/8/bep1aq3881vrhbjp1fzh/blenders-partner",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2023/2/3/qzuuhc6usqa7oq1ni0ob/rokt-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2020/6/23/soovpcv3sdh1abmkm8ey/rauch-team-partner-logo",
      "https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_309/q_auto,f_png/redbullcom/2021/5/17/mjpos445wupbf7ph6kve/walmart-red-bull-racing",

    ]
  ]

  return (
    <>
      <div className='relative py-4 md:py-28 mt-30 overflow-hidden bg-[#222]'>
        {brands.map((item, i) => <Partner direction={i % 2 === 0 ? "left" : "right"} key={i} url={item} />)}
        <div className='absolute top-1/2 -translate-y-1/2 left-0 h-2/3 w-full bg-gradient-to-r from-[#222] via-transparent to-[#222]'></div>
      </div>

    </>
  )
}

export default Partners