document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('country');
    const locationSelect = document.getElementById('location');
    const hotelSelect = document.getElementById('hotel_name');
    const remarkMessage = document.getElementById('remark_message');  // 用于显示备注信息
    // 获取备注数据
    const remarksData = [
        {
          "Hotel_Name": "巴厘岛阿优达度假酒店",
          "Remark": "该酒店官网只可预订至三月底。"
        },
        {
          "Hotel_Name": "温德姆度假会悉尼酒店",
          "Remark": "1. 针对在Club Wyndham Sydney提前超过9个月进行的预订的附加规则\r\n1.1 Blackout Dates（ 1 Jan - 4 Jan， 27 Feb - 8 Mar，5 Apr - 25 Apr，28 Jun - 18 Jul， 20 Sep - 10 Oct， 20 Dec - 31 Dec):在此期间至少需要连续7晚的住宿，但是可以拆分至不同度假村预订，但需遵守周末住宿限制。Blackout Dates的预订不能在线进行，必须通过致电业主服务进行。\r\n1.2 除了blackout dates以外的日期，必须有连续三晚的预定"
        },
        {
          "Hotel_Name": "温德姆度假会悉尼酒店",
          "Remark": "2.停车位是有限的，并且停车会产生额外的费用（该价格可能会波动）"
        },
        {
          "Hotel_Name": "温德姆度假会悉尼酒店",
          "Remark": "3. Studio  Upper Deluxe (Sleeps 2) 该房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会墨尔本酒店",
          "Remark": "1.停车位是有限的，并且停车会产生额外的费用（该价格可能会波动）"
        },
        {
          "Hotel_Name": "温德姆度假会墨尔本酒店",
          "Remark": "2.Studio Deluxe (Sleeps 2)该房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会瓦纳卡酒店",
          "Remark": "Studio（Sleeps 2）和1-Bedroom（Sleeps 4）房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆俱乐部托斯卡纳酒店",
          "Remark": "1.请注意，该物业由第三方管理，而非俱乐部或任何相关的温德姆实体。"
        },
        {
          "Hotel_Name": "温德姆度假会托尔坎度假酒店",
          "Remark": "2.Hotel Room - Limited Outlook (Sleeps 2）该房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会珀斯酒店",
          "Remark": "停车位是有限的，并且停车会产生额外的费用（该价格可能会波动）"
        },
        {
          "Hotel_Name": "普吉岛森马亚海滨度假酒店",
          "Remark": "该酒店官网只可预定至十月底"
        },
        {
          "Hotel_Name": "温德姆度假会凯恩斯酒店",
          "Remark": "1.请注意，该物业由第三方管理，而非俱乐部或任何相关的温德姆实体。"
        },
        {
          "Hotel_Name": "温德姆度假会凯恩斯酒店",
          "Remark": "2.俱乐部所属的公寓位于一个封闭式住宅小区内。"
        },
        {
          "Hotel_Name": "温德姆度假会凯恩斯酒店",
          "Remark": "3.本度假村为三层建筑，无电梯。如果您需要底层公寓，请务必预订位于底层的房型。"
        },
        {
          "Hotel_Name": "温德姆度假会冲浪者天堂酒店",
          "Remark": "1-Bedroom Low Floor (Sleeps 4)该房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会肖尔湾酒店",
          "Remark": "Studio（Sleeps 2）该房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会柏斯酒店",
          "Remark": "1.该酒店官网只可预定至三月底"
        },
        {
          "Hotel_Name": "温德姆度假会柏斯酒店",
          "Remark": "2.所有房型两晚起订"
        },
        {
          "Hotel_Name": "罗托鲁阿华美达度假酒店",
          "Remark": "1.所有公寓（无障碍专用房间除外）都设有室内和室外楼梯，行动不便者可能不太适用。"
        },
        {
          "Hotel_Name": "罗托鲁阿华美达度假酒店",
          "Remark": "2.3-Bedroom (Sleeps 8) 该房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会史蒂芬斯港酒店",
          "Remark": "1.请注意，此房产由第三方管理，而非俱乐部或任何相关的温德姆实体。"
        },
        {
          "Hotel_Name": "温德姆度假会史蒂芬斯港酒店",
          "Remark": "2.在您入住期间，部分度假村设施可能无法使用。请访问clubwyndhamsp.com/resorts/port - stephens/club - wyndham - port - stephens ，并点击 “出发前” 获取完整详情。"
        },
        {
          "Hotel_Name": "菲利普岛华美达酒店",
          "Remark": "1.所有公寓（无障碍专用房间除外）都设有室内和室外楼梯，行动不便者可能不太适用。"
        },
        {
          "Hotel_Name": "菲利普岛华美达酒店",
          "Remark": "2.3-Bedroom (Sleeps 6) 该房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会艾尔利海滩酒店",
          "Remark": "三卧总统套房：三晚起订"
        },
        {
          "Hotel_Name": "阿德莱德普尔特尼街爵怡温德姆酒店",
          "Remark": "该酒店官网只可预订至四月底。"
        },
        {
          "Hotel_Name": "温德姆度假会巴拉瑞特酒店",
          "Remark": "这个度假村是一栋两层楼的建筑，没有电梯。如果您需要底层公寓，请确保预订位于底层的房型。"
        },
        {
          "Hotel_Name": "温德姆度假会科夫斯港酒店",
          "Remark": "2-Bedroom (Sleeps 6)和2-Bedroom Deluxe (Sleeps 6)房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会科夫斯港露台酒店",
          "Remark": "1.请注意，此酒店由第三方管理，而非俱乐部或任何相关温德姆实体。"
        },
        {
          "Hotel_Name": "温德姆度假会科夫斯港露台酒店",
          "Remark": "2.预订时请注意，两卧室公寓包括一卧室公寓和一室公寓。这两个房间都可以有自己的入口或使用共享的外部入口。"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Remark": "1.两晚起订"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Remark": "2.该酒店官网只可预订至三月底。"
        },
        {
          "Hotel_Name": "温德姆度假会皇冠塔酒店",
          "Remark": "请注意，此酒店由第三方管理，而非俱乐部或任何相关温德姆实体。"
        },
        {
          "Hotel_Name": "温德姆度假会丁诺高原酒店",
          "Remark": "大多数公寓都有外部楼梯，许多公寓有内部楼梯，这可能不适合行动不便的人。请联系业主服务部了解详情。"
        },
        {
          "Hotel_Name": "温德姆度假会戴士柏酒店",
          "Remark": "1.Studio (Sleeps 2)房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会戴士柏酒店",
          "Remark": "2.这个度假村是一栋两层楼的建筑，没有电梯。如果您需要底层公寓，请确保预订位于底层的房型。"
        },
        {
          "Hotel_Name": "温德姆度假会斐济布雷瓦酒店",
          "Remark": "1-Bedroom (Sleeps 4)和1-Bedroom Deluxe (Sleeps 4)房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会弗林斯海滩酒店",
          "Remark": "Studio (Sleeps 2)和1-Bedroom (Sleeps 4)房型残疾人友好"
        },
        {
          "Hotel_Name": "黄金海滩温德姆华美达度假酒店",
          "Remark": "1-Bedroom (Sleeps 4)和2-Bedroom (Sleeps 6)房型残疾人友好"
        },
        {
          "Hotel_Name": "俱乐部温德姆巴伐利亚酒店",
          "Remark": "请注意，此酒店由第三方管理，而非俱乐部或任何相关温德姆实体。"
        },
        {
          "Hotel_Name": "温德姆度假会七英里海滩酒店",
          "Remark": "1.2-Bedroom (Sleeps 6)房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会七英里海滩酒店",
          "Remark": "2.标准三卧室公寓和两/三卧室豪华公寓都有内部楼梯，这可能不适合行动不便的人。请联系业主服务部了解详情。"
        },
        {
          "Hotel_Name": "巴厘岛温德姆塔曼萨里吉瓦度假酒店",
          "Remark": "该酒店官网只可预订至五月底。"
        },
        {
          "Hotel_Name": "温德姆度假会基拉海滩酒店",
          "Remark": "1-Bedroom (Sleeps 4)和2-Bedroom (Sleeps 6)房型残疾人友好"
        },
        {
          "Hotel_Name": "温德姆度假会莱克斯恩特伦斯酒店",
          "Remark": "请注意，此酒店由第三方管理，而非俱乐部或任何相关温德姆实体。"
        },
        {
          "Hotel_Name": "温德姆度假会曼利海滩酒店",
          "Remark": "所有房间都可以睡4个人，但为了舒适起见，强烈建议最多容纳2名成人。"
        },
        {
          "Hotel_Name": "俱乐部温德姆诺曼底酒店",
          "Remark": "请注意，此酒店由第三方管理，而非俱乐部或任何相关温德姆实体。"
        },
        {
          "Hotel_Name": "温德姆度假会麦奎利港酒店",
          "Remark": "请注意，此酒店由第三方管理，而非俱乐部或任何相关温德姆实体。"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Remark": "1.该酒店官网只可预订至三月底。"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Remark": "2.两晚起订"
        },
        {
          "Hotel_Name": "温德姆度假会珀科尔滨山丘酒店",
          "Remark": "1.请注意，此酒店由第三方管理，而非俱乐部或任何相关温德姆实体。"
        },
        {
          "Hotel_Name": "温德姆度假会珀科尔滨山丘酒店",
          "Remark": "2.请注意，两卧室公寓包括一卧室公寓和一室公寓。这两个房间可以各自使用自己的入口，也可以使用共享的外部入口。"
        },
        {
          "Hotel_Name": "世界马克重聚酒店",
          "Remark": "该酒店1/3-2/6、9/26-11/13、11/28-12/11不可预订。"
        },
        {
          "Hotel_Name": "巴厘岛梅鲁萨卡·努萨杜瓦度假酒店",
          "Remark": "该酒店4/1起开放预定。"
        },
        {
          "Hotel_Name": "普吉岛森马亚海滨度假酒店",
          "Remark": "该酒店只可预订至10月底。"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Remark": "该酒店只可预订至8月底。"
        },
        {
          "Hotel_Name": "世界马克科纳酒店",
          "Remark": "1.所有预订必须以7晚为单位进行，且入住和退房需在固定日期进行。需缴纳临时住宿税（TOT），并在离店时直接支付给度假村。该税由夏威夷州政府征收。"
        },
        {
          "Hotel_Name": "世界马克科纳酒店",
          "Remark": "2.入住日仅限周四、周五、周六或周日。"
        },
        {
          "Hotel_Name": "俱乐部温德姆卡‘艾欧凯酒店",
          "Remark": "1.所有预订必须以7晚为单位进行，且入住和退房需在固定日期进行。需缴纳临时住宿税（TOT），并在离店时直接支付给度假村。该税由夏威夷州政府征收。"
        },
        {
          "Hotel_Name": "俱乐部温德姆卡‘艾欧凯酒店",
          "Remark": "2.入住日仅限周四、周五、周六或周日。"
        },
        {
          "Hotel_Name": "世界马克日落酒店",
          "Remark": "单元包括双层床，最多可容纳两人。"
        }
      ];
      

    // 获取不可入住日期数据
    const blackoutDates =[
        {
          "Hotel_Name": "温德姆度假会苗场日之舞度假酒店",
          "Date": "2025-05-20"
        },
        {
          "Hotel_Name": "温德姆度假会苗场日之舞度假酒店",
          "Date": "2025-05-21"
        },
        {
          "Hotel_Name": "温德姆度假会苗场日之舞度假酒店",
          "Date": "2025-05-22"
        },
        {
          "Hotel_Name": "温德姆度假会御宿日之舞度假酒店",
          "Date": "2025-02-18"
        },
        {
          "Hotel_Name": "温德姆度假会御宿日之舞度假酒店",
          "Date": "2025-02-19"
        },
        {
          "Hotel_Name": "温德姆度假会御宿日之舞度假酒店",
          "Date": "2025-02-20"
        },
        {
          "Hotel_Name": "温德姆度假会湖景日之舞度假酒店",
          "Date": "2025-04-22"
        },
        {
          "Hotel_Name": "温德姆度假会湖景日之舞度假酒店",
          "Date": "2025-04-23"
        },
        {
          "Hotel_Name": "温德姆度假会湖景日之舞度假酒店",
          "Date": "2025-04-24"
        },
        {
          "Hotel_Name": "温德姆度假会轻井泽日之舞度假酒店",
          "Date": "2025-04-08"
        },
        {
          "Hotel_Name": "温德姆度假会轻井泽日之舞度假酒店",
          "Date": "2025-04-09"
        },
        {
          "Hotel_Name": "温德姆度假会轻井泽日之舞度假酒店",
          "Date": "2025-04-10"
        },
        {
          "Hotel_Name": "温德姆度假会立科日之舞度假酒店",
          "Date": "2025-06-10"
        },
        {
          "Hotel_Name": "温德姆度假会立科日之舞度假酒店",
          "Date": "2025-06-11"
        },
        {
          "Hotel_Name": "温德姆度假会立科日之舞度假酒店",
          "Date": "2025-06-12"
        },
        {
          "Hotel_Name": "温德姆度假会那须日之舞度假酒店",
          "Date": "2025-04-15"
        },
        {
          "Hotel_Name": "温德姆度假会那须日之舞度假酒店",
          "Date": "2025-04-16"
        },
        {
          "Hotel_Name": "温德姆度假会那须日之舞度假酒店",
          "Date": "2025-04-17"
        },
        {
          "Hotel_Name": "温德姆度假会河口湖日之舞度假酒店",
          "Date": "2025-05-27"
        },
        {
          "Hotel_Name": "温德姆度假会河口湖日之舞度假酒店",
          "Date": "2025-05-28"
        },
        {
          "Hotel_Name": "温德姆度假会河口湖日之舞度假酒店",
          "Date": "2025-05-29"
        },
        {
          "Hotel_Name": "温德姆度假会山中湖日之舞度假酒店",
          "Date": "2025-05-13"
        },
        {
          "Hotel_Name": "温德姆度假会山中湖日之舞度假酒店",
          "Date": "2025-05-14"
        },
        {
          "Hotel_Name": "温德姆度假会山中湖日之舞度假酒店",
          "Date": "2025-05-15"
        },
        {
          "Hotel_Name": "温德姆度假会安房鸭川日之舞度假酒店",
          "Date": "2025-03-11"
        },
        {
          "Hotel_Name": "温德姆度假会安房鸭川日之舞度假酒店",
          "Date": "2025-03-12"
        },
        {
          "Hotel_Name": "温德姆度假会安房鸭川日之舞度假酒店",
          "Date": "2025-03-13"
        },
        {
          "Hotel_Name": "温德姆度假会胜浦东日之舞度假酒店",
          "Date": "2025-03-04"
        },
        {
          "Hotel_Name": "温德姆度假会胜浦东日之舞度假酒店",
          "Date": "2025-03-05"
        },
        {
          "Hotel_Name": "温德姆度假会胜浦东日之舞度假酒店",
          "Date": "2025-03-06"
        },
        {
          "Hotel_Name": "温德姆度假会草津日之舞度假酒店",
          "Date": "2025-12-02"
        },
        {
          "Hotel_Name": "温德姆度假会草津日之舞度假酒店",
          "Date": "2025-12-03"
        },
        {
          "Hotel_Name": "温德姆度假会草津日之舞度假酒店",
          "Date": "2025-12-04"
        },
        {
          "Hotel_Name": "温德姆度假会箱根强罗日之舞度假酒店",
          "Date": "2025-07-01"
        },
        {
          "Hotel_Name": "温德姆度假会箱根强罗日之舞度假酒店",
          "Date": "2025-07-02"
        },
        {
          "Hotel_Name": "温德姆度假会箱根强罗日之舞度假酒店",
          "Date": "2025-07-03"
        },
        {
          "Hotel_Name": "温德姆度假会箱根宫城野日之舞度假酒店",
          "Date": "2025-06-24"
        },
        {
          "Hotel_Name": "温德姆度假会箱根宫城野日之舞度假酒店",
          "Date": "2025-06-25"
        },
        {
          "Hotel_Name": "温德姆度假会箱根宫城野日之舞度假酒店",
          "Date": "2025-06-26"
        },
        {
          "Hotel_Name": "温德姆度假会热海日之舞度假酒店",
          "Date": "2025-06-17"
        },
        {
          "Hotel_Name": "温德姆度假会热海日之舞度假酒店",
          "Date": "2025-06-18"
        },
        {
          "Hotel_Name": "温德姆度假会热海日之舞度假酒店",
          "Date": "2025-06-19"
        },
        {
          "Hotel_Name": "温德姆度假会伊豆高原日之舞度假酒店",
          "Date": "2025-11-11"
        },
        {
          "Hotel_Name": "温德姆度假会伊豆高原日之舞度假酒店",
          "Date": "2025-11-12"
        },
        {
          "Hotel_Name": "温德姆度假会伊豆高原日之舞度假酒店",
          "Date": "2025-11-13"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-01-17"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-01-18"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-01"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-02"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-03"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-04"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-05"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-06"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-01-29"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-01-30"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-01-31"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-01"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-02"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-03"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-04"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-05"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-06"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-07"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-08"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-09"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-10"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-11"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-12"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-13"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-14"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-15"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-16"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-17"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-18"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-19"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-20"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-21"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-22"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-23"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-24"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-25"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-26"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-27"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-28"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-29"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-30"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-07-31"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-01"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-02"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-03"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-04"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-05"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-06"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-07"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-08"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-09"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-10"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-11"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-12"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-13"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-14"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-15"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-16"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-17"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-18"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-19"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-20"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-21"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-22"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-23"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-24"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-25"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-26"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-27"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-28"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-29"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-30"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-08-31"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-10-01"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-10-02"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-10-03"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-10-04"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-10-05"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-10-06"
        },
        {
          "Hotel_Name": "西安豪享来温德姆至尊酒店",
          "Date": "2025-10-07"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-01-29"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-01-30"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-01-31"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-10-01"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-10-02"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-10-03"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-10-04"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-10-05"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-10-06"
        },
        {
          "Hotel_Name": "深圳温德姆至尊酒店",
          "Date": "2025-10-07"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-01"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-20"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-21"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-22"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-23"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-24"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-25"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-26"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-27"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-28"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-29"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-30"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-01-31"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-01"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-02"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-03"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-04"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-05"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-06"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-07"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-08"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-09"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-10"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-11"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-02-12"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-04-30"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-05-01"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-05-02"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-05-03"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-05-04"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-09-30"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-10-01"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-10-02"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-10-03"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-10-04"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-10-05"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-10-06"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-10-07"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-12-29"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-12-30"
        },
        {
          "Hotel_Name": "三亚丽禾温德姆酒店",
          "Date": "2025-12-31"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-01-17"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-01-18"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-01"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-02"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-03"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-04"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-05"
        },
        {
          "Hotel_Name": "国敦岛湾酒店及度假村",
          "Date": "2025-02-06"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-01"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-02"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-03"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-04"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-05"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-06"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-07"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-08"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-09"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-10"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-11"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-12"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-13"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-14"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-15"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-16"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-17"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-18"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-19"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-20"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-01-27"
        },
        {
          "Hotel_Name": "华美达诺提勒斯奥雷瓦酒店",
          "Date": "2025-02-06"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-01"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-02"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-03"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-04"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-05"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-06"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-07"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-08"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-09"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-10"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-11"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-12"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-13"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-14"
        },
        {
          "Hotel_Name": "札幌大通温德姆花园酒店",
          "Date": "2025-02-15"
        }
      ];
      

    countrySelect.addEventListener('change', function () {
        const selectedCountry = this.value;
        loadCountryData(selectedCountry); // 加载选定国家的数据
    });

    // 默认加载第一个国家的数据
    loadCountryData(countrySelect.value);

    function loadCountryData(country) {
        // 加载该国家的 JSON 数据
        fetch(`https://cooiip.github.io/HPC/assets/${country}.json`)
            .then(response => response.json())
            .then(data => {
                updateLocationOptions(data);
                updateHotelOptions(data); // 默认地区选择后刷新酒店
            })
            .catch(err => {
                console.error("加载数据失败:", err);
                alert("无法加载数据，请稍后再试。");
            });
    }

    function updateLocationOptions(data) {
        const locations = [...new Set(data.map(item => item.Location))];
        locationSelect.innerHTML = '';  // 清空现有选项
        const fragment = document.createDocumentFragment();
        locations.forEach(function(location) {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            fragment.appendChild(option);
        });
        locationSelect.appendChild(fragment);

        // 默认选择第一个地区并刷新酒店选择
        if (locations.length > 0) {
            locationSelect.value = locations[0];
            updateHotelOptions(data, locations[0]);
        }
    }

    function updateHotelOptions(data, location = locationSelect.value) {
        const hotels = [...new Set(data.filter(item => item.Location === location).map(item => item.Hotel_Name))];
        hotelSelect.innerHTML = '';  // 清空现有选项
        const fragment = document.createDocumentFragment();
        hotels.forEach(function(hotel) {
            const option = document.createElement('option');
            option.value = hotel;
            option.textContent = hotel;
            fragment.appendChild(option);
        });
        hotelSelect.appendChild(fragment);
    }

    // 监听地区选择变化并刷新酒店
    locationSelect.addEventListener('change', function () {
        const selectedLocation = this.value;
        fetch(`https://cooiip.github.io/HPC/assets/${countrySelect.value}.json`)
            .then(response => response.json())
            .then(data => {
                updateHotelOptions(data, selectedLocation); // 根据选定地区刷新酒店
            })
            .catch(err => {
                console.error("加载数据失败:", err);
                alert("无法加载数据，请稍后再试。");
            });
    });

    // 计算总价
    document.getElementById('calculate').addEventListener('click', function () {
        // 清空上一次输出的内容
        document.getElementById('error_message').style.display = "none";
        document.getElementById('price_table').innerHTML = ''; // 清空价格表
        remarkMessage.innerHTML = '';  // 清空备注信息

        const country = document.getElementById('country').value;
        const location = document.getElementById('location').value;
        const hotelName = document.getElementById('hotel_name').value;
        const checkinDate = document.getElementById('checkin_date').value;
        const checkoutDate = document.getElementById('checkout_date').value;

        // 日期验证
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);

        const days = Math.ceil((checkout - checkin) / (1000 * 3600 * 24));

        if (isNaN(days) || days <= 0) {
            document.getElementById('error_message').textContent = "请确保离店日期晚于入住日期。";
            document.getElementById('error_message').style.display = "block";
            return;
        } else {
            document.getElementById('error_message').style.display = "none";
        }

        // 检查是否有备注信息
      // 检查是否有备注信息
    const hotelRemarks = remarksData.filter(item => item.Hotel_Name === hotelName);
    if (hotelRemarks.length > 0) {
        // 显示所有备注信息
        const remarksList = hotelRemarks.map(item => `<li><strong>备注:</strong> ${item.Remark}</li>`).join('');
        remarkMessage.innerHTML = `<ul>${remarksList}</ul>`;
    }
        // 检查是否选择了不可入住日期
        const blackoutDate = blackoutDates.find(item => item.Hotel_Name === hotelName && item.Date >= checkinDate && item.Date < checkoutDate);
        if (blackoutDate) {
            document.getElementById('error_message').textContent = `选择的日期与酒店的不可入住日期冲突，请选择其他日期。`;
            document.getElementById('error_message').style.display = "block";
            return;
        }

        // 获取该国家的数据
        fetch(`https://cooiip.github.io/HPC/assets/${country}.json`)
            .then(response => response.json())
            .then(data => {
                const selectedHotelData = data.filter(item => item.Location === location && item.Hotel_Name === hotelName);
                const priceSummary = calculateTotalPrice(selectedHotelData, checkin, checkout, days);
                displayPriceTable(priceSummary);
            })
            .catch(err => {
                console.error("加载数据失败:", err);
                alert("无法加载数据，请稍后再试。");
            });
    });

    function calculateTotalPrice(hotelData, checkin, checkout, days) {
        const priceSummary = [];

        hotelData.forEach(function(item) {
            const roomType = item.Room_Type;

            if (priceSummary.some(function(entry) { return entry.Room_Type === roomType; })) return;

            let totalPrice = 0;

            for (let i = 0; i < days; i++) {
                const currentDate = new Date(checkin);
                currentDate.setDate(currentDate.getDate() + i);
                const currentDateString = currentDate.toISOString().split('T')[0];

                const dayData = hotelData.find(function(d) { return d.Date === currentDateString && d.Room_Type === roomType; });
                if (dayData) {
                    totalPrice += dayData.Cost;
                }
            }

            const unitPrice = (totalPrice / days).toFixed(1);
            const totalPriceFormatted = totalPrice.toFixed(0);

            priceSummary.push({
                Room_Type: roomType,
                Unit_Price: unitPrice,
                Number_of_Nights: days,
                Total_Price: totalPriceFormatted
            });
        });

        return priceSummary;
    }

    function displayPriceTable(priceSummary) {
        const priceTable = document.getElementById('price_table');
        priceTable.innerHTML = '';

        if (priceSummary.length === 0) {
            priceTable.innerHTML = '没有找到相关房型价格数据。';
            return;
        }

        const table = document.createElement('table');
        table.border = 1;
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = '<th>房型</th><th>单价</th><th>天数</th><th>总价</th>';
        table.appendChild(headerRow);

        priceSummary.forEach(function(row) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${row.Room_Type}</td><td>${row.Unit_Price}</td><td>${row.Number_of_Nights}</td><td>${row.Total_Price}</td>`;
            table.appendChild(tr);
        });

        priceTable.appendChild(table);
    }
});
